# Ders anlatımı standardı ("hayatında ilk kez ders çalışacak biri bile anlasın")

Her konu anlatımı şu iskeleti taşır. Örnek uygulama: `data/fiz-newton.js`.

1. **Kanca (1 adım):** Günlük hayattan, çocuğun bildiği bir sahne ve bir tahmin sorusu. Formül yok.
2. **Sıfırdan sözlük (her yeni kavram için ayrı kısa adım):** "X nedir?" → günlük dilde tanım → bildiğin bir şeyle karşılaştırma → birim/sembol ve **sayıyla somut karşılığı** (ör. 1 N ≈ 100 g'lık nesnenin ağırlığı).
3. **Birleştirme:** Kavramlar tek bağıntıda/kuralda bir araya gelir. Kuralı önce çocuk bulur (sezgi → kural), sonra yazılır.
4. **Basamaklı örnekler:** Kolay → orta → sınav tipi. Her adımda "önce neye bakıyorum?" cümlesi.
5. **Yaygın hatalar:** 2–3 tuzak, "neden akla geliyor?" açıklamasıyla.
6. **Peki ya neden?:** Mantığını sorgulatan yansıtma.
7. **Özet + sınavda ne işe yarar:** Üç madde + bir cümle "sınavda böyle görürsün".

Kurallar
- Cümleler kısa; bir cümlede tek fikir. Terim ilk geçtiği yerde açıklanır.
- Ezber verilmez; her kural "neden böyle?" sorusuyla gelir.
- Hesaplı konularda birimi ve sonucun makul olup olmadığını kontrol ettir.
- Ton: yargılamayan, meraklı. "Bunu bilmiyorsan sorun yok, buradan başlıyoruz."
- Her ders `node tools/dogrula.js dis --dersler` ile Opus'a doğrulatılır.

## Geri bildirim kuralı (kullanıcı geri bildirimi, 2026-10-20)
- Övgü, motivasyon cümlesi ve sistem bilgisi yok ("harika", "doğru tahmin ettin", "tekrar kutusuna eklendi" gibi).
- Her cevabın (doğru de yanlış da) altında **neden** açıklaması olur: doğru cevap neden doğru, hangi bilgi/kural bunu belirler; yanlış seçenek hangi düşünce hatasından geliyor.
- `explain` alanı bir kuralı ya da bir sonraki adıma geçişi söyler, öğrenciyi alkışlamaz.

### Ton: öğrenciyi iyi hissettiren, boş övgü içermeyen geri bildirim (kullanıcı notu, 2026-10-20)
Bu yaştaki çocuklar kendilerini eleştirmeye yatkındır; geri bildirim onları suçlamamalı, yılgınlaştırmamalı.
- Yanlış cevap "yanlış yaptın" değil, "birçok kişi buraya gelir; şu yüzden olmuyor" diye açıklanır (hata = yaygın bir düşünce yolu, kişi değil).
- Övgü kişiye değil, **yapılan düşünme adımına** ve somut ilerlemeye yönelir ("bağlacı fark etmen işe yaradı"). "Harika, süpersin" gibi boş övgü yok.
- Her açıklama önce neden doğru olduğunu söyler; sonra gerekiyorsa küçük, yapılabilir bir sonraki adım verir.
- Ceza ya da puan kaybı dili yok.
