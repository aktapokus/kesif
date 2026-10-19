# aktapokus-kesif — mimari ve çalışma kuralları

Bu belge, projeye dokunacak herkes (insan ya da yapay zekâ) için tek başvuru noktasıdır. Değişiklikten önce oku.

## 1. Genel yapı

Sunucusuz, derleme adımı olmayan statik bir web uygulaması (GitHub Pages: `aktapokus.github.io/kesif`).

```
index.html          kabuk + tüm <script> etiketleri (sıra önemli) + CSP
app.js              tüm arayüz: yönlendirme, sayfalar, laboratuvarlar, soru bileşenleri, deneme modu
sync.js             isteğe bağlı hesap (Supabase e-posta bağlantısı) + ilerleme eşitleme ve birleştirme
style.css           tema değişkenleri (--accent, --cyan…), paletler (data-pal), bileşen stilleri
data/plan.js        dersler (KESIF.subjects), haftalık ritim, ağırlıklar   ← İLK yüklenir
data/mufredat.js    11. sınıf konu sırası (MEB kitabı) + MAT.11 kodları + KESIF.tracks (ders → sekme)
data/mufredat-yks.js TYT/AYT matematik konu kodları, ÖSYM bağlantıları, soru etiketleri (KESIF.meta)
data/yks-kazanim.js 12 dersin resmî kazanım listesi (KESIF.kz) — betikle üretildi, elle düzenleme
data/okul-sinavi.js MEB ODSGM 1. dönem konu-soru dağılım senaryoları (KESIF.okul)
data/<ders>-<konu>.js keşif dersleri (KESIF.lessons[id])
data/gunluk.js, banka-*.js  soru bankası (KESIF.daily'ye eklenir) + etiketleri (KESIF.meta)
data/yardim.js      eski sorular için ipucu + konu bağlantısı (KESIF.help)
tools/validate.js   yapısal doğrulama — her yayından önce
tools/bump.js       önbellek sürüm parametresini yeniler — her yayından önce
tools/dump.js       tüm soruları okunabilir döker (içerik denetimi için)
```

Durum (`S`) tek bir nesnedir, `localStorage["kesif.v1"]`'de durur; giriş yapılmışsa `sync.js` tüm `S`'yi Supabase `kesif_progress` tablosuna (RLS: yalnız sahibi) yazar. İki cihaz birleşirken `sync.js > mergeState` kuralları geçerlidir (ilerleme kaybolmaz; çakışmada bu cihaz kazanır). **`S`'ye yeni alan eklersen hem `app.js > blank()` hem `sync.js > mergeState`'i güncelle.**

## 2. Veri modeli

**Soru (çoktan seçmeli)**
```js
{ id: "md16", subject: "mat", q: "…", opts: [{ t: "10", ok: true, why: "…" }, { t: "7", why: "hangi yanlış düşünce" }, …],
  hint: "cevabı vermeyen ipucu", think: "nasıl düşünmeliyiz (strateji)", solution: ["adım 1", "adım 2"], explain: "tek cümle ders" }
```
**Soru (açık uçlu)**: `type: "open"`, `answers: [{ label, v, accept: [...] }]`, `rubric: [[puan, "ölçüt"], …]`, `solution`, `think`.
**Etiket**: `KESIF.meta[id] = { s11: "2.4", yks: "11.1.2" | "fiz:9.3.1.4", sinav: ["s11","tyt","ayt"], zor: 1–3, kaynak: "özgün" }`.
Bir sorunun "konu anahtarı" `yks` varsa `y:<kod>`, yoksa `s:<s11>`, yoksa `d:<ders>`'tir (soru bankası ve deneme modu buna göre gruplar).

**Ders (keşif)**: `KESIF.lessons[id] = { id, subject, title, minutes, grade, hook, steps: [...] }`.
Adım türleri: `text`, `mcq`, `tap`, `reflect` + etkileşimli laboratuvarlar: `explorer` (limit), `circle` (birim çember), `expo` (üstel/log), `scatter` (saçılım), `bar` (eksen kesme), `polygon` (çokgen), `sim` (genel kaydırıcı + SVG).
**Yeni laboratuvar türü yalnızca `app.js > LABS` kaydına eklenir**; ders akışı ve "konu anlatımı" panelleri oradan okur. `tools/validate.js` kayıtta olup fonksiyonu silinmiş türü yakalar.

## 3. Yeni içerik ekleme

1. Soru: ilgili `data/banka-*.js` dosyasında yardımcı `Q(...)`/`A(...)` ile ekle. Kimlik benzersiz olsun. Her yanlış seçeneğin `why`'ı **belirli bir yanlış düşünceyi** adlandırmalı.
2. Ders: `data/<ders>-<konu>.js` oluştur, `index.html`'e `<script>` ekle, `data/mufredat.js > KESIF.tracks`'e sekmesini yaz; 11. sınıf matematikse `KESIF.s11` konusuna `lesson:` bağla.
3. `node tools/validate.js` → hata yoksa `node tools/bump.js` → commit → push.

## 4. İçerik ilkeleri (pazarlıksız)

- **Amaç düşünmeyi öğretmek**: her soru "nasıl düşünürüm?" sorusuna hizmet eder (`think`, ipucu, yanlış düşünce açıklaması, hata türü notu). Hız vaadi yok.
- **Doğruluk**: her matematik adımı kontrol edilir; emin olunmayan bilgi yazılmaz, yazıldıysa "doğrulanacak" diye işaretlenir. Yayından önce öğretmen gözü (bkz. `../YAYIN_KONTROL_LISTESI.md`).
- **Simgeler**: `docs/SEMBOLLER.md` (t, Δt, v, x, s birimi…).
- **Telif**: ÖSYM soru metni kopyalanmaz (yalnız bağlantı/künye). MEB belgelerinden yalnız konu/kazanım başlıkları alınır. Tüm sorular özgündür.
- **Kaynak gösterme**: resmî veriler dosya başında kaynağı ve tarihiyle yazılır.
- **Tekil anlatım**: metinlerde "biz" yok.

## 5. Bilinen sınırlar / sıradaki işler

- `app.js` tek dosya (~1000 satır). Büyürse sayfa başına modüllere bölünmeli (ES modules, derleme yok).
- Tüm veri dosyaları açılışta yüklenir (~350 KB). Ders sayısı artınca dersler isteğe bağlı (lazy) yüklenmeli.
- Çevrimdışı çalışma (PWA/service worker) yok.
- Eşitleme bütün durumu yazar; eşzamanlı iki cihazda not çakışmasında son yazan kazanır.
- 11. sınıf dışındaki sınıflar ve matematik dışı dersler için içerik ince.

## Doğrulama (ikinci göz)
Yeni soru/ders yazıldıktan sonra Opus ile doğrulanır; yazan model kendi içeriğini onaylamış sayılmaz.
1. `node tools/dogrula.js dis --ders tur --max 60` (ya da `--dersler`) → `docs/dogrulama/bekleyen-*.md` üretir; dosya Opus'a verilir.
2. Opus'un JSON sonucu kaydedilir; `node tools/dogrula.js uygula sonuc.json` → onaylananlara `data/dogrulama.js` damgası, düzeltilecekler `docs/dogrulama/duzeltilecek.md`.
3. İçerik sonradan değişirse damga düşer (içerik özeti kontrol edilir). Durum: `node tools/dogrula.js durum`.
Ders anlatımı ilkesi: merak uyandıran kanca, basit dil, "hiç ilgim yok" diyen çocuğun da bir şey bulabileceği somut örnek; önce tahmin, sonra kural.
