
/* =====================================================
   BANK SOAL: 5 bab x 5 soal (1 soal = 1 stage)
   Sasaran: siswa kelas 5-6 SD. Semua soal bersumber dari materi.js.
 
   Cara membaca:
   - tanya     : kalimat soal
   - pilihan   : 4 pilihan jawaban. PILIHAN PERTAMA SELALU YANG BENAR,
                 karena urutannya diacak otomatis saat soal tampil.
   - jawaban   : nomor pilihan yang benar (0 = pilihan pertama)
   - penjelasan: alasan jawaban (opsional; belum ditampilkan di game)
 
   Urutan soal dalam tiap bab: dari yang paling mudah ke yang paling sulit.
   Urutan bab di sini harus sama dengan urutan di materi.js.
   ===================================================== */
 
const SOAL = [
  /* ================= BAB I: Sejarah Kelahiran Pancasila ================= */
  [
    { tanya: 'Sidang BPUPKI pada 29 Mei–1 Juni 1945 membahas tentang...',
      pilihan: ['Dasar negara Indonesia', 'Pemilihan presiden dan wakil presiden', 'Lagu dan lambang negara Indonesia', 'Batas wilayah negara Indonesia'],
      jawaban: 0,
      penjelasan: 'Sidang pertama BPUPKI diadakan untuk membahas dasar negara Indonesia.' },
 
    { tanya: 'Siapa tokoh yang memperkenalkan istilah Pancasila pada 1 Juni 1945?',
      pilihan: ['Ir. Soekarno', 'Mohammad Yamin', 'Soepomo', 'Mohammad Hatta'],
      jawaban: 0,
      penjelasan: 'Pada 1 Juni 1945, Ir. Soekarno memperkenalkan istilah Pancasila. Mohammad Yamin dan Soepomo juga menyampaikan gagasan tentang dasar negara.' },
 
    { tanya: 'Panitia Sembilan menghasilkan sebuah dokumen penting pada 22 Juni 1945. Dokumen itu bernama...',
      pilihan: ['Piagam Jakarta', 'Teks Proklamasi', 'Sumpah Pemuda', 'Dekrit Presiden'],
      jawaban: 0,
      penjelasan: 'Panitia Sembilan menghasilkan Piagam Jakarta pada 22 Juni 1945.' },
 
    { tanya: 'Pancasila disahkan sebagai dasar negara pada 18 Agustus 1945 oleh...',
      pilihan: ['PPKI', 'BPUPKI', 'Panitia Sembilan', 'Dewan Perwakilan Rakyat'],
      jawaban: 0,
      penjelasan: 'PPKI mengesahkan Pancasila pada 18 Agustus 1945. BPUPKI bertugas membahas dasar negara, bukan mengesahkannya.' },
 
    { tanya: 'Para tokoh perumus dasar negara memiliki pendapat yang berbeda-beda. Sikap mereka yang patut diteladani adalah...',
      pilihan: ['Mengutamakan musyawarah dan kepentingan bangsa', 'Mempertahankan pendapat sendiri sampai menang', 'Menunggu orang lain mengambil keputusan', 'Meninggalkan sidang saat tidak sependapat'],
      jawaban: 0,
      penjelasan: 'Para tokoh mengutamakan musyawarah dan rela berkorban demi bangsa.' }
  ],
 
  /* ================= BAB II: Pancasila sebagai Dasar Negara ================= */
  [
    { tanya: 'Lambang sila ketiga Pancasila, yaitu Persatuan Indonesia, adalah...',
      pilihan: ['Pohon beringin', 'Bintang', 'Rantai', 'Padi dan kapas'],
      jawaban: 0,
      penjelasan: 'Sila ketiga berlambang pohon beringin.' },
 
    { tanya: 'Pancasila sebagai dasar negara berarti Pancasila menjadi...',
      pilihan: ['Pedoman dalam berbangsa dan bernegara', 'Aturan yang hanya berlaku bagi pejabat', 'Lambang yang dipasang di gedung negara', 'Semboyan yang dibacakan saat upacara'],
      jawaban: 0,
      penjelasan: 'Pancasila adalah dasar negara dan pedoman dalam kehidupan berbangsa dan bernegara.' },
 
    { tanya: 'Pancasila dapat menyatukan bangsa Indonesia yang beraneka ragam. Hal ini menunjukkan Pancasila sebagai...',
      pilihan: ['Pemersatu bangsa', 'Sumber hukum negara', 'Lambang negara Indonesia', 'Pandangan hidup pribadi'],
      jawaban: 0,
      penjelasan: 'Salah satu fungsi Pancasila adalah sebagai pemersatu bangsa.' },
 
    { tanya: 'Nilai-nilai Pancasila dijadikan petunjuk dalam bersikap sehari-hari. Hal ini menunjukkan Pancasila sebagai...',
      pilihan: ['Pandangan hidup bangsa', 'Dasar negara', 'Pemersatu bangsa', 'Sumber hukum negara'],
      jawaban: 0,
      penjelasan: 'Sebagai pandangan hidup, nilai Pancasila menjadi pedoman sikap dan perilaku bangsa Indonesia.' },
 
    { tanya: 'Semua peraturan di Indonesia tidak boleh bertentangan dengan Pancasila. Alasannya, Pancasila adalah...',
      pilihan: ['Sumber dari segala sumber hukum', 'Pandangan hidup setiap keluarga', 'Aturan tertulis tentang hak warga', 'Hukum yang dibuat tiap daerah'],
      jawaban: 0,
      penjelasan: 'Pancasila adalah sumber dari segala sumber hukum negara, sehingga semua aturan harus sesuai dengan nilainya.' }
  ],
 
  /* ================= BAB III: Pancasila dalam Kehidupan Sehari-hari ================= */
  [
    { tanya: 'Menghormati teman yang sedang beribadah sesuai agamanya adalah penerapan Pancasila sila...',
      pilihan: ['Pertama', 'Kedua', 'Ketiga', 'Keempat'],
      jawaban: 0,
      penjelasan: 'Sila pertama mengajarkan kita beribadah dan menghormati agama orang lain.' },
 
    { tanya: 'Dani tidak ikut mengejek temannya, bahkan ia membantu temannya yang kesulitan. Sikap Dani sesuai dengan sila...',
      pilihan: ['Kedua', 'Pertama', 'Ketiga', 'Kelima'],
      jawaban: 0,
      penjelasan: 'Sila kedua mengajarkan kita menolong teman dan tidak melakukan perundungan.' },
 
    { tanya: 'Manakah contoh penerapan Pancasila sila ketiga?',
      pilihan: ['Memakai produk buatan dalam negeri', 'Menolong teman yang sedang kesulitan', 'Beribadah dengan tertib dan tepat waktu', 'Menabung sebagian uang jajan'],
      jawaban: 0,
      penjelasan: 'Sila ketiga mengajarkan kita menjaga persatuan dan mencintai produk dalam negeri.' },
 
    { tanya: 'Saat memilih ketua kelas, semua siswa berdiskusi dan menghargai pendapat temannya. Sikap ini sesuai dengan sila...',
      pilihan: ['Keempat', 'Ketiga', 'Kelima', 'Kedua'],
      jawaban: 0,
      penjelasan: 'Sila keempat mengajarkan kita bermusyawarah dan menghargai pendapat.' },
 
    { tanya: 'Manakah contoh penerapan Pancasila sila kelima?',
      pilihan: ['Rajin menabung dan menghargai karya teman', 'Bermusyawarah memilih ketua kelas', 'Menghormati teman yang berbeda agama', 'Menjaga persatuan di lingkungan sekolah'],
      jawaban: 0,
      penjelasan: 'Sila kelima mengajarkan kita bersikap adil, rajin menabung, dan menghargai karya orang lain.' }
  ],
 
  /* ================= BAB IV: Norma, Hak, dan Kewajiban ================= */
  [
    { tanya: 'Aturan hidup yang mengatur perilaku manusia agar tercipta ketertiban, keamanan, dan kenyamanan disebut...',
      pilihan: ['Norma', 'Hak', 'Kewajiban', 'Hukuman'],
      jawaban: 0,
      penjelasan: 'Norma adalah aturan hidup yang mengatur perilaku manusia.' },
 
    { tanya: 'Menghormati orang tua termasuk contoh norma...',
      pilihan: ['Kesopanan', 'Agama', 'Kesusilaan', 'Hukum'],
      jawaban: 0,
      penjelasan: 'Norma kesopanan berasal dari tata krama, contohnya menghormati orang tua.' },
 
    { tanya: 'Norma yang berasal dari hati nurani, misalnya berkata jujur, disebut norma...',
      pilihan: ['Kesusilaan', 'Kesopanan', 'Agama', 'Hukum'],
      jawaban: 0,
      penjelasan: 'Norma kesusilaan berasal dari hati nurani, contohnya berkata jujur.' },
 
    { tanya: 'Mematuhi peraturan lalu lintas termasuk norma hukum. Ciri norma hukum adalah...',
      pilihan: ['Dibuat oleh negara dan memiliki sanksi tegas', 'Berasal dari hati nurani setiap orang', 'Berasal dari tata krama dalam masyarakat', 'Berasal dari ajaran agama yang dianut'],
      jawaban: 0,
      penjelasan: 'Norma hukum dibuat oleh negara dan memiliki sanksi yang tegas.' },
 
    { tanya: 'Pasangan kewajiban dan hak seorang siswa yang tepat adalah...',
      pilihan: ['Kewajiban: belajar dan mematuhi aturan sekolah; Hak: mendapat ilmu dan bimbingan guru',
                'Kewajiban: mendapat ilmu dan bimbingan guru; Hak: belajar dan mematuhi aturan sekolah',
                'Kewajiban: mematuhi aturan sekolah; Hak: bebas memilih pelajaran yang disukai',
                'Kewajiban: mendapat uang jajan; Hak: dibantu mengerjakan semua tugas'],
      jawaban: 0,
      penjelasan: 'Kewajiban siswa adalah belajar dan mematuhi aturan sekolah. Haknya adalah mendapat ilmu dan bimbingan guru. Hak dan kewajiban harus seimbang.' }
  ],
 
  /* ================= BAB V: Bhinneka Tunggal Ika ================= */
  [
    { tanya: 'Bhinneka Tunggal Ika berarti...',
      pilihan: ['Berbeda-beda tetapi tetap satu jua', 'Bersatu kita teguh, bercerai kita runtuh', 'Satu untuk semua, semua untuk satu', 'Banyak suku, banyak aturan'],
      jawaban: 0,
      penjelasan: 'Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu jua.' },
 
    { tanya: 'Rumah Gadang adalah rumah adat yang berasal dari daerah...',
      pilihan: ['Sumatra Barat', 'Jawa Barat', 'Bali', 'Jawa Tengah'],
      jawaban: 0,
      penjelasan: 'Rumah Gadang berasal dari Sumatra Barat. Angklung berasal dari Jawa Barat, dan Tari Kecak dari Bali.' },
 
    { tanya: 'Rumah Gadang, angklung, Tari Kecak, dan keris menunjukkan bahwa Indonesia kaya akan...',
      pilihan: ['Keanekaragaman budaya', 'Hasil tambang yang melimpah', 'Kemajuan teknologi modern', 'Keindahan alam pegunungan'],
      jawaban: 0,
      penjelasan: 'Rumah adat, alat musik, tarian, dan senjata tradisional adalah bentuk budaya Indonesia yang beragam.' },
 
    { tanya: 'Raka memiliki teman yang berbeda suku dan agama. Sikap Raka yang tepat adalah...',
      pilihan: ['Menghormati perbedaan dan tetap berteman baik', 'Mengajak bermain teman yang sesuku saja', 'Meminta temannya mengikuti kebiasaan Raka', 'Tidak mengajak bermain karena adatnya berbeda'],
      jawaban: 0,
      penjelasan: 'Kita harus berteman tanpa membeda-bedakan dan menghormati perbedaan agama dan budaya.' },
 
    { tanya: 'Manfaat saling menghargai keberagaman bagi bangsa Indonesia adalah...',
      pilihan: ['Kehidupan menjadi aman, damai, dan rukun', 'Semua orang memiliki budaya yang sama', 'Perbedaan suku dan agama menjadi hilang', 'Setiap daerah berjalan sendiri-sendiri'],
      jawaban: 0,
      penjelasan: 'Menghargai keberagaman membuat hidup aman, damai, rukun, dan memperkuat persatuan bangsa.' }
  ]
];
 
