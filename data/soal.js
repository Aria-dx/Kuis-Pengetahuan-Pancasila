/* =====================================================
   BANK SOAL: 5 bab x 5 soal (1 soal = 1 stage)
   Soal di bawah hanyalah CONTOH. Ganti dengan soal Anda.
   - "jawaban" = nomor pilihan yang benar, dimulai dari 0
     (0 = pilihan pertama).
   - Urutan pilihan diacak otomatis saat soal tampil.
   - Urutan bab di sini harus sama dengan urutan di materi.js.
   ===================================================== */

const SOAL = [
  // ---------- Bab 1: Ketuhanan Yang Maha Esa ----------
  [
    { tanya: 'Bunyi sila pertama Pancasila adalah...',
      pilihan: ['Ketuhanan Yang Maha Esa', 'Persatuan Indonesia', 'Kemanusiaan yang Adil dan Beradab', 'Keadilan Sosial bagi Seluruh Rakyat Indonesia'], jawaban: 0 },
    { tanya: 'Lambang sila pertama Pancasila adalah...',
      pilihan: ['Bintang', 'Rantai', 'Pohon beringin', 'Padi dan kapas'], jawaban: 0 },
    { tanya: 'Sikap yang sesuai dengan sila pertama adalah...',
      pilihan: ['Beribadah sesuai agama dan kepercayaan masing-masing', 'Mengejek teman yang berbeda agama', 'Melarang teman beribadah', 'Memaksa teman mengikuti agama kita'], jawaban: 0 },
    { tanya: 'Teman kita sedang merayakan hari besar agamanya yang berbeda. Kita sebaiknya...',
      pilihan: ['Menghormati dan tidak mengganggu', 'Menertawakannya', 'Mengganggu perayaannya', 'Menjauhinya'], jawaban: 0 },
    { tanya: 'Indonesia memiliki banyak agama. Karena itu kita harus...',
      pilihan: ['Saling menghormati', 'Saling bertengkar', 'Saling menjauh', 'Memaksakan pendapat'], jawaban: 0 }
  ],
  // ---------- Bab 2: Kemanusiaan yang Adil dan Beradab ----------
  [
    { tanya: 'Bunyi sila kedua Pancasila adalah...',
      pilihan: ['Kemanusiaan yang Adil dan Beradab', 'Ketuhanan Yang Maha Esa', 'Persatuan Indonesia', 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan'], jawaban: 0 },
    { tanya: 'Lambang sila kedua Pancasila adalah...',
      pilihan: ['Rantai', 'Bintang', 'Kepala banteng', 'Pohon beringin'], jawaban: 0 },
    { tanya: 'Temanmu terjatuh saat bermain. Sikap yang tepat adalah...',
      pilihan: ['Menolong dan menanyakan keadaannya', 'Menertawakannya', 'Pura-pura tidak melihat', 'Meninggalkannya'], jawaban: 0 },
    { tanya: 'Contoh sikap sesuai sila kedua adalah...',
      pilihan: ['Tidak membeda-bedakan teman', 'Memilih teman hanya yang kaya', 'Mengejek teman yang berbeda', 'Merebut mainan teman'], jawaban: 0 },
    { tanya: 'Jika kita berbuat salah kepada teman, kita harus...',
      pilihan: ['Meminta maaf', 'Menyalahkan teman', 'Diam saja', 'Marah-marah'], jawaban: 0 }
  ],
  // ---------- Bab 3: Persatuan Indonesia ----------
  [
    { tanya: 'Bunyi sila ketiga Pancasila adalah...',
      pilihan: ['Persatuan Indonesia', 'Ketuhanan Yang Maha Esa', 'Kemanusiaan yang Adil dan Beradab', 'Keadilan Sosial bagi Seluruh Rakyat Indonesia'], jawaban: 0 },
    { tanya: 'Lambang sila ketiga Pancasila adalah...',
      pilihan: ['Pohon beringin', 'Rantai', 'Bintang', 'Padi dan kapas'], jawaban: 0 },
    { tanya: 'Arti semboyan Bhinneka Tunggal Ika adalah...',
      pilihan: ['Berbeda-beda tetapi tetap satu jua', 'Bersatu kita teguh', 'Rajin pangkal pandai', 'Hormat kepada orang tua'], jawaban: 0 },
    { tanya: 'Kerja bakti membersihkan sekolah adalah contoh...',
      pilihan: ['Gotong royong', 'Mementingkan diri sendiri', 'Bermalas-malasan', 'Saling menyalahkan'], jawaban: 0 },
    { tanya: 'Temanmu berasal dari suku yang berbeda. Sikap yang tepat adalah...',
      pilihan: ['Berteman baik dan saling menghargai', 'Menjauhinya', 'Mengejek logatnya', 'Tidak mau bermain dengannya'], jawaban: 0 }
  ],
  // ---------- Bab 4: Kerakyatan ----------
  [
    { tanya: 'Lambang sila keempat Pancasila adalah...',
      pilihan: ['Kepala banteng', 'Pohon beringin', 'Rantai', 'Bintang'], jawaban: 0 },
    { tanya: 'Sila keempat Pancasila berhubungan dengan...',
      pilihan: ['Musyawarah', 'Berebut', 'Bertengkar', 'Memaksakan kehendak'], jawaban: 0 },
    { tanya: 'Cara mengambil keputusan bersama di kelas adalah...',
      pilihan: ['Musyawarah untuk mufakat', 'Siapa yang paling keras suaranya', 'Menurut kemauan sendiri', 'Memaksa teman'], jawaban: 0 },
    { tanya: 'Hasil musyawarah kelas harus kita...',
      pilihan: ['Terima dan laksanakan bersama', 'Abaikan', 'Tolak jika tidak sesuai kemauan kita', 'Ejek'], jawaban: 0 },
    { tanya: 'Saat diskusi, temanmu berpendapat berbeda. Sebaiknya kita...',
      pilihan: ['Mendengarkan dengan baik', 'Memotong pembicaraannya', 'Mengejeknya', 'Meninggalkan diskusi'], jawaban: 0 }
  ],
  // ---------- Bab 5: Keadilan Sosial ----------
  [
    { tanya: 'Bunyi sila kelima Pancasila adalah...',
      pilihan: ['Keadilan Sosial bagi Seluruh Rakyat Indonesia', 'Persatuan Indonesia', 'Ketuhanan Yang Maha Esa', 'Kemanusiaan yang Adil dan Beradab'], jawaban: 0 },
    { tanya: 'Lambang sila kelima Pancasila adalah...',
      pilihan: ['Padi dan kapas', 'Kepala banteng', 'Bintang', 'Rantai'], jawaban: 0 },
    { tanya: 'Padi dan kapas melambangkan kebutuhan akan...',
      pilihan: ['Makanan dan pakaian', 'Mainan dan buku', 'Rumah dan kendaraan', 'Uang dan emas'], jawaban: 0 },
    { tanya: 'Contoh sikap sesuai sila kelima adalah...',
      pilihan: ['Suka berbagi dan bersikap adil', 'Mau menang sendiri', 'Pelit kepada teman', 'Menyalahgunakan milik orang lain'], jawaban: 0 },
    { tanya: 'Tugas piket kelas dibagi rata untuk semua siswa. Ini contoh sikap...',
      pilihan: ['Adil', 'Curang', 'Malas', 'Egois'], jawaban: 0 }
  ]
];