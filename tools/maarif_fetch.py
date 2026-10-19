"""MEB Türkiye Yüzyılı Maarif Modeli öğretim programlarından (tymm.meb.gov.tr) ortaöğretim ünite/tema listelerini ve
öğrenme çıktılarını (kod + metin) çeker; data/maarif.js dosyasını üretir.
Kullanım:  python tools/maarif_fetch.py <çıktı_klasörü_önbellek> <data/maarif.js>
Yalnızca kamuya açık program sayfalarını okur (başlık, ders saati, konu, öğrenme çıktısı). Yeniden çalıştırılabilir; sayfalar önbelleğe alınır."""
import re, sys, json, html, os, time, urllib.request
CACHE = sys.argv[1]; OUT = sys.argv[2]
os.makedirs(CACHE, exist_ok=True)
SUBJ = [("mat", "matematik-dersi", "Matematik"), ("edeb", "turk-dili-ve-edebiyati-dersi", "Türk Dili ve Edebiyatı"), ("tar", "tarih-dersi", "Tarih"), ("cog", "cografya-dersi", "Coğrafya"),
        ("fiz", "fizik-dersi", "Fizik"), ("kim", "kimya-dersi", "Kimya"), ("biy", "biyoloji-dersi", "Biyoloji"), ("fel", "felsefe-dersi", "Felsefe"), ("din", "din-kulturu-ve-ahlak-bilgisi-dersi", "Din Kültürü ve Ahlak Bilgisi")]
GRADES = {"9": 11, "10": 12, "11": 13, "12": 14}   # program sayfası sınıf numaraları (11. sınıf = 13 doğrulandı; diğerleri denenir)
def get(url, name):
    f = os.path.join(CACHE, name)
    if os.path.exists(f) and os.path.getsize(f) > 2000: return open(f, encoding='utf-8', errors='replace').read()
    for _ in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            h = urllib.request.urlopen(req, timeout=40).read().decode('utf-8', 'replace')
            if len(h) > 2000: open(f, 'w', encoding='utf-8').write(h); return h
        except Exception as e: time.sleep(2)
    return ""
def text(h):
    t = re.sub(r'<script.*?</script>|<style.*?</style>', '', h, flags=re.S)
    t = re.sub(r'<(br|/p|/li|/h\d|/div|/tr|/td|/th)[^>]*>', '\n', t); t = re.sub(r'<[^>]+>', '', t); t = html.unescape(t)
    return [l.strip() for l in t.split('\n') if l.strip()]
out = {}
for key, slug, name in SUBJ:
    out[key] = {"name": name, "grades": {}}
    for g, gid in GRADES.items():
        page = get(f"https://tymm.meb.gov.tr/ogretim-programlari/{slug}/{gid}", f"{slug}_{gid}.html")
        # sınıf doğrulaması: sayfa başlığında "<g>.Sınıf" geçmeli
        if not page or f"{g}.Sınıf" not in html.unescape(page): continue
        units = []
        for m in re.finditer(r'href="(/%s/unite/(\d+))"[^>]*>(.*?)</a>' % slug, page, flags=re.S):
            title = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', m.group(3)))).strip()
            if (m.group(2), title) not in [(u["id"], u["title"]) for u in units]: units.append({"id": m.group(2), "title": title})
        for u in units:
            ph = get(f"https://tymm.meb.gov.tr/{slug}/unite/{u['id']}", f"{slug}_u{u['id']}.html")
            L = text(ph)
            u["hours"] = ""; u["konu"] = []; u["lo"] = []
            for i, l in enumerate(L):
                if l == "Ders Saati" and i + 1 < len(L): u["hours"] = L[i + 1]
            # konu başlıkları: "İçerik Çerçevesi" başlığından (menüdeki değil, sayfa gövdesindeki) "Anahtar Kavramlar"a kadar
            for i, l in enumerate(L):
                if l == "İçerik Çerçevesi" and i > 20 and "Anahtar Kavramlar" in L[i + 1:i + 40]:
                    j = i + 1
                    while j < len(L) and L[j] != "Anahtar Kavramlar" and len(u["konu"]) < 40: u["konu"].append(L[j]); j += 1
                    if j + 1 < len(L): u["kav"] = L[j + 1][:400]
                    break
            for l in L:
                m = re.match(r'^((?:[A-ZÇĞİÖŞÜ]{2,5})\.\d{1,2}\.\d{1,2}(?:\.\d{1,2})*\.?)\s*[:\-]?\s*(.{8,})$', l)
                if m and not any(x["c"] == m.group(1) for x in u["lo"]): u["lo"].append({"c": m.group(1).rstrip('.'), "t": m.group(2).strip().strip('"“”')[:260]})
            print(key, g, u["title"][:40], u["hours"], len(u["konu"]), len(u["lo"]))
        if units: out[key]["grades"][g] = units
js = ('/* MEB Türkiye Yüzyılı Maarif Modeli öğretim programları (okul müfredatı), ortaöğretim ünite/tema listesi.\n   KAYNAK: tymm.meb.gov.tr/ogretim-programlari/<ders>/<sınıf> ve ünite sayfaları (tools/maarif_fetch.py ile üretildi, elle düzenleme).\n   Alanlar: ünite başlığı, ders saati, konu başlıkları, öğrenme çıktıları (kod + metin; metinler MEB programından alıntıdır). */\n'
      'window.KESIF = window.KESIF || { lessons: {}, daily: [] };\nKESIF.maarif = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
open(OUT, 'w', encoding='utf-8').write(js)
print("yazıldı", OUT, len(js))
