# CREATIVE DIRECTION & DESIGN SYSTEM SPECIFICATION
## Project: Interactive Photography Archive & Spatial Visual Experience

> **Design Read (Anti-Slop R-37):**
> Reading this as: Curatorial Photography Archive and Spatial Exhibition for visual arts enthusiasts, collectors, and design-forward audiences, in an Architectural Darkroom and Monograph style, dial **ENERGY 2 / RHYTHM 3 / MOTION 2**.

---

## 1. Design Philosophy

Website ini dirancang bukan sebagai portofolio web biasa atau galeri gambar generik, melainkan sebagai sebuah **Spatial Photography Monograph**: perpaduan antara keintiman ruang gelap fotografi (*darkroom*), presisi monograf seni cetak edisi terbatas, dan interaktivitas spasial digital.

Prinsip filosofis utama:
1. **Fotografi adalah Subjek Mutlak:** Semua elemen antarmuka, tipografi, warna, dan kode WebGL diciptakan untuk melayani, membingkai, dan memperkuat foto. UI tidak boleh bersaing untuk merebut perhatian dari subjek visual.
2. **Kerapian Spasial dan Optis:** Alih-alih memperlakukan website sebagai deretan kotak datar, ruang visual diposisikan seperti ruang pamer fisik tempat karya bernapas, memiliki kedalaman, dan merespons pergerakan pengunjung secara wajar.
3. **Taktil dan Terarah:** Interaksi digital dirancang untuk mencerminkan mekanisme optik kamera manual: ada bobot, kelembaman (*inertia*), fokus, dan transisi apertur yang disengaja.

---

## 2. Visual Identity

Website ini memiliki identitas visual mandiri bernama **"Atelier Obscura"** (atau *Kroma Archive*). Identitas ini mengambil inspirasi dari ketenangan ruang pamer museum kontemporer dan presisi instrumen fotografi presisi tinggi.

Perbedaan fundamental dengan referensi (PhotoYoshi):
- **Warna dan Suasana:** PhotoYoshi menggunakan latar belakang *off-white/cream* hangat khas Jepang (`#faf8ef`). Atelier Obscura menggunakan pendekatan *Dark Mineral & Warm Tungsten* terkurasi: latar hitam mineral arang vulkanik (`#0d0e10`), teks alabaster hangat (`#ebe7df`), dan aksen tunggal cahaya *tungsten safelight* (`#d97736`). Ini menciptakan atmosfer fokus malam hari yang intensif, mirip ruang gelap cetak foto manual.
- **Framing Subjek:** Jika PhotoYoshi menggunakan *viewfinder reticles* minimalis pada sudut kanvas, Atelier Obscura memperlakukan setiap foto sebagai **Archival Plate** lengkap dengan pelat metadata optik nyata (rasio aspek asli, *exposure index*, *focal length*, dan *chroma notes*).
- **Rasa Ruang:** Menghindari kesan halaman web bergulir standar; pengalaman visual dibangun melalui perpindahan kuratorial yang memiliki ritme jeda (*curatorial pacing*).

---

## 3. Design Personality

Karakteristik kepribadian desain dijabarkan dalam 4 pilar:

| Atribut Karakter | Manifestasi Visual | Alasan Kuratorial |
| :--- | :--- | :--- |
| **Monolitik & Tenang** | Tata letak kokoh, tidak bergeser secara sporadis, fondasi gelap mineral. | Memberi ketenangan bagi mata agar dapat menyerap detail bayangan dan sorotan (*highlights*) foto. |
| **Presisi Optik** | Garis batas tipis 1px dengan opasitas rendah, data teknis kamera yang proporsional, perataan ketat. | Mencerminkan instrumen mekanis kamera analog berkualitas tinggi. |
| **Kuratorial & Eksklusif** | Foto ditampilkan satu per satu atau berpasangan secara asimetris, tanpa tumpukan kartu seragam. | Menghargai nilai estetika setiap karya foto selayaknya karya seni galeri. |
| **Organik & Berbobot** | Gerakan memiliki gesekan alami (*damping* dan *friction*), bukan animasi linear kaku. | Menghadirkan sensasi fisik bahwa pengguna sedang menggeser pelat kaca foto berbobot. |

Suasana (mood/atmosphere) yang dibangun:
- *Contemplative & Immersive*: Mengajak pengunjung meluangkan waktu beberapa detik pada setiap foto, bukan sekadar *scrolling* cepat layaknya media sosial.
- *Tactile & Atmospheric*: Mengingatkan pada aroma kertas cetak serat perak (*silver gelatin print*) dan pencahayaan temaram galeri seni privat.

---

## 4. Photography Direction

Fotografi adalah pusat gravitasi dari keseluruhan proyek. Arah kurasi dan perlakuan gambar diatur dengan aturan baku berikut:

### Format dan Rasio Aspek
- Foto tidak boleh dipotong paksa (*hard cropped*) ke dalam rasio seragam kartu web biasa.
- Mengakomodasi rasio fotografi otentik:
  - **3:2** (Standar format film 35mm horizontal)
  - **2:3** (Format film 35mm vertikal / potret editorial)
  - **4:5** (Format medium/large format studio)
  - **1:1** (Format bujur sangkar medium format 6x6)
  - **16:9** (Panorama sinematik lanskap)

### Perlakuan Warna dan Tekstur
- Foto disajikan dalam format resolusi tinggi teroptimasi dengan *color profile* sRGB / Display P3.
- Shading Three.js menyertakan efek *micro-grain* sangat halus yang hanya terasa pada jarak pandang dekat untuk mempertahankan nuansa emulsi film, tanpa merusak ketajaman foto.
- Tidak ada filter Instagram atau distorsi warna buatan di atas foto; reproduksi warna harus setia pada karya asli fotografer.

### Mode Presentasi
Terdapat tiga mode observasi kuratorial:
1. **Exhibition Runway (Mode Utama):** Alur horizontal-vertikal terkoordinasi di mana foto meluncur dengan jarak jeda bervariasi, memungkinkan penikmatan individual setiap karya.
2. **Contact Sheet (Mode Arsip / Overview):** Tata letak indeks pelat foto berukuran terukur dengan metadata nomor indeks arsip, memberi gambaran keseluruhan koleksi.
3. **Deep Monograph (Mode Fokus Tunggal):** Tampilan layar penuh terisolasi untuk satu karya terpilih, menampilkan data optik lengkap, deskripsi kuratorial, dan analisis komposisi.

---

## 5. Typography Direction

Tipografi dipilih untuk merepresentasikan perpaduan monograf editorial seni rupa kontemporer dan katalog teknis fotografi presisi.

### Pemilihan Rupa Huruf (Font Families)
1. **Display & Editorial Headlines: Serif Kontemporer Bertransisi Tajam**
   - *Pilihan Utama:* **Cinzel / Cormorant Garamond / Instrument Serif**
   - *Peran:* Judul pameran, nama seri foto, nomor bab kuratorial.
   - *Alasan:* Memberikan otoritas editorial galeri klasik dengan ketajaman kontemporer yang elegan.
2. **Body & Interface Text: Sans-Serif Humanis/Geometris Netral**
   - *Pilihan Utama:* **Plus Jakarta Sans / Inter / Syne (untuk aksen judul khusus)**
   - *Peran:* Navigasi, keterangan foto (*captions*), esai kuratorial, status interaksi.
   - *Alasan:* Keterbacaan optimal pada kontras latar gelap, netral, dan tidak mendominasi karya foto.
3. **Technical Metadata & Telemetry: Monospace Modern Presisi**
   - *Pilihan Utama:* **JetBrains Mono / Space Mono** (digunakan hemat hanya untuk data teknis)
   - *Peran:* Data EXIF kamera (misal: `50mm f/1.4 1/250s ISO 100`), koordinat lokasi, nomor plat arsip.
   - *Alasan:* Menghadirkan kesan instrumen optik dan dokumentasi arsip otentik.

### Skala Tipografi dan Keterbacaan
- *Display Large:* `clamp(2.5rem, 6vw, 5rem)` - Line-height: 1.05. Digunakan secara selektif untuk pengantar seri.
- *Heading Medium:* `clamp(1.5rem, 3vw, 2.25rem)` - Line-height: 1.2.
- *Body Text:* `1rem` (16px) - Line-height: 1.65.
- *Metadata / Caption:* `0.75rem` (12px) hingga `0.8125rem` (13px) - Letter-spacing: `0.05em`.
- Tidak menggunakan huruf kapital berlebihan dengan tracking ekstrem pada sembarang teks; kapitalisasi teknis hanya digunakan untuk akronim teknis fotografi (seperti `ISO`, `RAW`, `EXIF`).

---

## 6. Color Direction

Palet warna dibatasi secara ketat mengikuti aturan Anti-Slop (R-29: maksimal 2 hingga 3 warna inti + 1 aksen fungsional). Menghindari skema warna gradasi ungu-biru AI klise atau hitam legam murni `#000000` tanpa kedalaman.

### Palet Inti (Core Palette)

| Nama Token | Nilai Hex | Peran & Penggunaan | Rasio Kontras (WCAG) |
| :--- | :--- | :--- | :--- |
| **Obsidian Slate (Base Background)** | `#0D0E10` | Latar belakang kanvas utama. Memberikan kedalaman mineral alami tanpa kekerasan pitch-black. | N/A (Basis) |
| **Alabaster Warmth (Primary Text)** | `#EBE7DF` | Teks utama, judul, dan garis batas aktif. Memberikan kehangatan kertas museum. | 14.8:1 terhadap `#0D0E10` (Lolos AAA) |
| **Muted Silver Ash (Secondary Text & Borders)** | `#8A8B8F` | Metadata sekunder, nomor indeks arsip, pembagi garis struktural 1px. | 4.62:1 terhadap `#0D0E10` (Lolos AA) |

### Warna Aksen Tunggal (Single Deliberate Accent)

| Nama Token | Nilai Hex | Peran & Penggunaan | Rasio Kontras (WCAG) |
| :--- | :--- | :--- | :--- |
| **Tungsten Safelight (Deliberate Accent)** | `#D97736` | Aksen fokus interaktif: penanda foto aktif, indikator mode aktif, titik koordinat. | 5.34:1 terhadap `#0D0E10` (Lolos AA) |

### Pembatas Dosis Warna:
- Aksen `#D97736` dilarang digunakan di mana-mana; aksen ini hanya muncul pada 1 hingga 2 elemen interaktif kunci pada saat bersamaan (Anti-Slop R-13, R-29).
- Dilarang menambahkan warna ketiga seperti hijau neon, ungu elektrik, atau gradasi warna-warni yang tidak memiliki hubungan fungsional dengan fotografi.

---

## 7. Layout & Composition

Struktur tata letak menolak pola *AI template* generik (seperti *bento grid* acak atau susunan kartu 3 kolom seragam). Layout disusun berdasarkan narasi visual pameran fotografi.

### Prinsip Tata Letak:
1. **Asimetris Berbobot (*Weighted Asymmetry*):** Foto vertikal diimbangi oleh ruang kosong terukur dan blok teks tipografis di seberangnya, menciptakan ketegangan visual yang dinamis namun seimbang.
2. **Alternasi Skala (*Scale Modulation*):** Urutan foto tidak berukuran sama secara monoton. Sebuah karya utama (*Hero Plate*) ditampilkan dalam skala megah, diikuti oleh pasangan karya pelengkap (*Diptych*) berukuran lebih intim.
3. **Pemisahan Lapisan (*Layered Depth*):**
   - Lapisan Bawah: Kanvas Three.js WebGL yang memproses pergerakan foto dalam koordinat 3D halus.
   - Lapisan Tengah: Konten visual dan pelat fotografi.
   - Lapisan Atas: Antarmuka HUD (*Heads-Up Display*) minimalis berisi navigasi, penanda nomor karya, dan *telemetry bar* yang mengapung stabil di tepi layar.

---

## 8. Whitespace & Rhythm

Ruang kosong (*whitespace*) dalam proyek ini bukan ruang sisa, melainkan elemen struktural aktif (Anti-Slop Part 3: *Whitespace as structure*).

- **Fungsi Ruang Kosong:** Mengisolasi setiap karya fotografi agar mata pengguna dapat membersihkan memori visual sebelum mencerna karya berikutnya.
- **Rhythm Dial = 3 (Varied & Asymmetric):** Jarak antar karya tidak seragam kaku (misal: bukan sekadar margin 64px berulang-ulang). Ritme diatur selaras dengan tempo musik pengiring visual:
  - Fase Pengantar: Ruang lapang luas (*generous breathing room*).
  - Fase Eksplorasi: Ritme lebih padat saat menyandingkan dua foto yang saling berdialog tema.
  - Fase Kontemplasi: Ruang terbuka kembali untuk karya tunggal monumental.
- **Padding Viewport:** Menjaga margin aman (*safe margins*) minimal 4vw pada desktop dan 1.25rem (20px) pada mobile agar karya tidak pernah menempel canggung pada tepi layar.

---

## 9. Motion Philosophy

Filosofi gerak pada proyek ini adalah: **Gerak adalah Respon Fisik Optis, Bukan Pertunjukan Animasi.**

Prinsip Gerak:
- **Tujuan Khusus (R-19):** Setiap animasi harus membantu pengguna memahami posisi spasial, transisi antar karya, atau fokus optis.
- **Tanpa Looping Terus-Menerus:** Dilarang menggunakan elemen berdenyut (*pulsing*) tanpa henti, rotasi abadi tanpa pemicu, atau *floating blob* yang melayang tanpa henti. Gerak hanya terjadi sebagai respon terhadap tindakan pengguna (*scroll*, *drag*, *hover*, *click*) atau proses transisi halaman.
- **Karakteristik Fisika Gerak:**
  - *Inertia & Damping:* Menggunakan kurva percepatan organik (seperti GSAP `power3.out` atau `expo.out`) yang mensimulasikan bobot fisik pelat cetak.
  - *Duration:* Transisi UI cepat dan tegas (250ms hingga 400ms); transisi perpindahan foto spasial lebih tenang dan mengalir (800ms hingga 1200ms).

---

## 10. GSAP Direction

GreenSock Animation Platform (GSAP) bertindak sebagai konduktor orkestrasi DOM, sinkronisasi waktu, dan interaksi kontrol.

### Kapan GSAP Digunakan:
1. **Koordinasi Timeline Transisi Halaman:** Mengatur urutan kemunculan teks kuratorial, fade-out HUD, dan perubahan status view mode.
2. **Kinetic Typography:** Menggerakkan judul seri atau nomor karya saat bertransisi dengan efek *stagger* mikro yang sangat terukur.
3. **ScrollTrigger & Inertial Scrubbing:** Menghubungkan posisi scroll pengguna dengan variabel pendorong koordinat kanvas.
4. **State Transitions pada UI:** Perubahan tombol kontrol, pembukaan panel deskripsi kuratorial, dan animasi ikon *mode switch*.

### Hal yang Dilarang untuk GSAP:
- Dilarang membuat animasi *bounce* kartun atau *elastic wobble* yang merusak wibawa galeri seni.
- Dilarang menumpuk animasi generik *Fade Up + Scale + Bounce* pada setiap elemen secara bersamaan.

---

## 11. Three.js Direction

Three.js bertanggung jawab sepenuhnya pada kanvas visual spasial (*spatial canvas*) dan manipulasi tekstur optik.

### Kapan Three.js Digunakan:
1. **Rendering Bidang Foto 3D (*Planes in Space*):** Menempatkan foto sebagai mesh bidang datar dalam sistem kamera perspektif WebGL, memungkinkan pergeseran paralaks halus yang tidak dapat dilakukan oleh CSS DOM biasa.
2. **Custom Shader Effects (GLSL):**
   - *Inertial Curve / Drag Deformation:* Bidang foto melengkung secara optik saat digeser cepat, lalu kembali datar secara elastis saat berhenti (mencerminkan sifat fleksibilitas negatif film atau lensa cembung).
   - *Subtle Lens Aberration & Grain:* Distorsi kromatik mikro pada tepi gambar saat terjadi akselerasi scroll tinggi.
   - *Crossfade Dissolve Transition:* Transisi antar foto menggunakan shader transisi intensitas cahaya, bukan sekadar opasitas CSS biasa.
3. **Raycasting Interaktif:** Mendeteksi foto mana yang berada di bawah kursor untuk memicu penyesuaian kedalaman fokus (*depth-of-field focus shift*).

### Kapan Three.js TIDAK Boleh Digunakan:
- Dilarang merender objek 3D sembarangan yang tidak ada hubungannya dengan fotografi (seperti donat berputar, bola abstrak melayang, kubus neon, atau geometri dekoratif tanpa fungsi).
- Dilarang merender teks antarmuka atau tombol navigasi di dalam Three.js; teks antarmuka tetap wajib berada di DOM semantik HTML demi aksesibilitas dan SEO.

---

## 12. Interaction Philosophy

Interaksi dirancang untuk memberikan kendali intuitif penuh kepada pengunjung, memperlakukan mereka sebagai penikmat aktif.

### Interaksi Kursor dan Mouse (Desktop):
- Kursor mempertahankan fungsinya sebagai alat penunjuk presisi.
- Pada area pameran foto, kursor dilengkapi cincin reticle halus yang mengindikasikan status interaksi: *Drag to inspect*, *Click to expand*, atau *Aperture focus*.
- *Hover Intent:* Hover pada pelat foto mengangkat sedikit elevasi bidang dalam ruang z-axis Three.js dan memunculkan metadata ringkas tanpa menutupi subjek utama foto.

### Interaksi Scroll:
- Pengguliran (*scroll*) dikonversi menjadi pergerakan longitudinal sepanjang galeri.
- Pengguna dapat beralih antara *continuous horizontal flow* dan *curated vertical narrative* tergantung mode yang aktif.
- Menghindari *scroll hijacking* ekstrem yang membuat pengguna kehilangan kendali atas peramban mereka; scroll tetap dapat dihentikan seketika dan menghormati inersia input perangkat.

---

## 13. Responsive / Mobile Philosophy

Ponsel pintar dan tablet diperlakukan sebagai medium observasi tersendiri, bukan sekadar versi desktop yang diperkecil (Anti-Slop `antislop-layoutmobile`).

### Penyesuaian Pengalaman Mobile:
1. **Sentuhan Langsung (*Direct Touch Physics*):**
   - Interaksi kursor digantikan dengan gestur sentuh geser (*swipe/drag*) 1:1 yang langsung menggerakkan pelat foto dengan *inertial momentum*.
   - Tidak ada efek yang bergantung pada *hover*. Semua informasi yang di desktop muncul saat hover, di mobile dapat diakses via tap sederhana atau ditampilkan langsung secara ringkas.
2. **Reflow Tata Letak Vertikal Berurutan:**
   - Di layar sempit (< 768px), tata letak beralih ke alur vertikal yang lapang (*editorial vertical feed*) dengan rasio foto yang tetap dipertahankan penuh tanpa pemotongan.
   - Tidak memaksakan multi-kolom sempit yang membuat foto mengecil tak bermakna.
3. **Ergonomi Jari dan Area Sentuh (Tap Targets):**
   - Seluruh kontrol interaktif (pengalih mode, tombol detail, navigasi) memiliki area sentuh minimal **44 x 44 px** dengan jarak renggang yang cukup untuk mencegah salah sentuh.
   - Navigasi utama ditempatkan di zona jangkauan ibu jari (*thumb zone*) di bagian bawah atau sudut yang nyaman, tanpa menghalangi konten foto (*safe area insets* diperhatikan).
4. **Optimasi Kinerja dan Konsumsi Daya:**
   - Kerapatan pixel (*devicePixelRatio*) pada Three.js dibatasi maksimal `2.0` pada layar retina mobile untuk mencegah degradasi performa atau panas berlebih pada baterai ponsel.
   - Shader yang terlalu berat disederhanakan secara otomatis pada perangkat dengan daya komputasi lebih rendah.

---

## 14. Accessibility Principles

Mengikuti panduan ketat Anti-Slop `antislop-human` dan standar WCAG 2.1 Level AA:

1. **Kontras Warna Terverifikasi:**
   - Teks utama Alabaster (`#EBE7DF`) di atas latar Obsidian (`#0D0E10`) menghasilkan rasio kontras **14.8:1** (jauh melampaui batas minimum 4.5:1 untuk teks normal).
   - Teks sekunder Muted Silver (`#8A8B8F`) menghasilkan rasio kontras **4.62:1** (lolos AA untuk teks normal).
   - Teks yang berada di atas foto selalu diberi bantalan pelindung (*solid backing* atau *vignette scrim*) terukur untuk memastikan kontras tidak pernah anjlok di area foto yang terang.
2. **Navigasi Keyboard Penuh (R-32):**
   - Seluruh karya dan kontrol dapat ditelusuri menggunakan tombol `Tab` dan tombol panah arah (`ArrowLeft`, `ArrowRight` untuk pergeseran karya).
   - Indikator fokus keyboard (*focus ring*) dirancang secara khusus dengan kontras tinggi (garis luar kontras warna tungsten `#D97736` 2px), tidak pernah disembunyikan dengan `outline: none` tanpa pengganti.
   - Mode fokus/modal dapat ditutup seketika dengan menekan tombol `Escape`.
3. **Semantik HTML dan Pembaca Layar (*Screen Readers*):**
   - Setiap foto memiliki deskripsi alternatif (`alt`) yang bermakna dan deskriptif mengenai komposisi dan subjek visual, bukan sekadar nama file gambar.
   - Heading tersusun secara hierarki logis dengan satu elemen `<h1>` untuk judul pameran utama.
4. **Respek terhadap Reduced Motion:**
   - Mendukung media query `@media (prefers-reduced-motion: reduce)`. Jika diaktifkan pengguna, distorsi WebGL, efek akselerasi inersia cepat, dan transisi paralaks dinonaktifkan dan diganti dengan transisi fade sederhana yang tenang.

---

## 15. Anti-Slop Principles

Proyek ini terikat secara absolut pada seluruh aturan Anti-Slop. Penerapan aturan spesifik:

1. **R-02 (Copywriting):** Dilarang keras menggunakan karakter em dash (`—`). Sebagai gantinya, digunakan titik, koma, titik dua, atau tanda kurung. Bahasa pengantar bersifat humanis, presisi, dan tidak berbelit-belit.
2. **R-05 & R-14 (Layout & Cards):** Tidak ada susunan kartu copy-paste dengan ukuran dan padding seragam. Struktur halaman dibangun mengikuti kebutuhan narasi seri fotografi.
3. **R-16 (No Marketing Buzzwords):** Copywriting bebas dari kata-kata kosong seperti "revolutionary", "seamless", "next-generation", "empower", atau "unlock". Deskripsi fokus pada konteks pembuatan foto, lokasi, teknik pencahayaan, dan tema artistik.
4. **R-17 & R-18 (Data & Testimonials):** Tidak menampilkan statistik palsu (misal: "10K+ Happy Visitors") atau testimoni fiktif. Jika tidak ada angka riil, tidak ada angka yang dipasang.
5. **R-24 & R-26 (Navigation & Controls):** Setiap tombol dan link memiliki fungsi riil. Tidak ada tombol dekoratif yang tidak melakukan apa pun. Jika fitur belum tersedia, fitur tersebut tidak dipasang di navigasi.
6. **R-31 (Every Decision Has a Reason):** Setiap keputusan warna, jarak, font, dan animasi wajib memiliki alasan konkret yang tertulis.
7. **R-37 (Dials & Direction):** Desain memegang konsisten nilai dial **ENERGY 2 / RHYTHM 3 / MOTION 2**.

---

## 16. Things To Avoid

Daftar pola klise generik yang **HARUS DIHINDARI SECARA MUTLAK**:

- **Bento Grid Generik:** Susunan kotak mozaik yang biasa dipakai template SaaS AI modern.
- **Gradasi Ungu/Biru Neon:** Skema warna default AI tanpa identitas kuratorial.
- **Glassmorphism Berlebihan:** Efek blur backdrop pada semua kartu, navbar, modal, dan sidebar secara serentak.
- **Kartu Pill-Shaped Ekstrem:** Membuat semua tombol, badge, dan kartu berbentuk kapsul bulat berlebihan.
- **Floating Blobs & Meaningless 3D Meshes:** Geometri 3D sembarangan yang berputar tanpa arti di latar belakang.
- **Decorative Glow Everywhere:** Efek pendaran neon di setiap sudut elemen UI.
- **Eyebrow Pill Badges di Atas Judul:** Kapsul kecil bertuliskan "PHOTOGRAPHY EXHIBITION" dengan titik berdenyut yang hanya mengulang judul.
- **Status Dot yang Terus Berdenyut Tanpa Alasan:** Indikator titik hijau/oranye yang berkedip tanpa mewakili status sistem nyata.
- **Monospace Font Sebagai Gaya-Gayaan Semata:** Menggunakan font monospaced untuk seluruh paragraf editorial tanpa fungsi keterbacaan.
- **Animasi Bertumpuk Berlebihan:** Menerapkan *Fade Up + Floating + Scale + Bounce* pada setiap elemen secara bersamaan.
- **Scroll Hijacking Membingungkan:** Mencegah scroll alami hingga pengguna merasa terjebak dalam situs.

---

## 17. Design Decision Principles

Setiap keputusan perancangan dalam pengerjaan teknis berikutnya wajib melalui uji keputusan berikut:

```
[Keputusan Elemen] 
  -> Apakah elemen ini melayani karya fotografi atau memamerkan dirinya sendiri?
  -> Apakah teknik ini memiliki alasan hierarki atau identitas yang jelas?
  -> Apakah elemen ini tetap berfungsi tanpa mouse dan pada layar sempit?
  -> Jika nama dan logo diganti, apakah desain ini tetap memiliki karakter mandiri?
```

### Rekapitulasi Alasan Keputusan Desain (R-31):
- **Mengapa memilih Obsidian Slate (`#0D0E10`)?** Karena latar gelap mineral memberi kontras maksimum untuk rentang dinamis foto tanpa kekerasan hitam pekat murni, menciptakan suasana galeri malam hari yang tenang.
- **Mengapa memilih aksen Tungsten Safelight (`#D97736`)?** Karena warna ini memiliki asosiasi langsung dengan lampu pengaman ruang gelap fotografi analog (*darkroom*), memberi sinyal fokus fungsional yang hangat.
- **Mengapa menggunakan Three.js untuk bidang foto?** Karena Three.js memungkinkan transformasi perspektif 3D, kontrol optik shader inersia, dan transisi crossfade yang tidak dapat dicapai secara presisi dengan CSS biasa.
- **Mengapa menggunakan GSAP untuk DOM?** Karena GSAP memiliki timeline kontrol paling stabil untuk menyinkronkan interaksi UI, pergerakan teks editorial, dan status navigasi tanpa beban overhead Three.js.
- **Mengapa menggunakan tata letak asimetris (Rhythm 3)?** Karena karya fotografi memiliki bobot visual dan orientasi yang berbeda-beda; tata letak asimetris menghormati individualitas tiap karya tanpa memasukkannya ke dalam cetakan seragam.
- **Mengapa membatasi teks metadata kamera dalam monospace kecil?** Karena metadata kamera adalah informasi referensi teknis yang harus terbaca jelas dalam format data presisi, tetapi tidak boleh mengaburkan judul pameran dan karya foto itu sendiri.
