
/* =====================================================
   MATERI 5 BAB
   - judul       : judul bab
   - simbol      : lambang sila yang terbuka saat bab selesai
   - namaSimbol  : nama lambang tersebut
   - isi         : isi materi (boleh memakai HTML, termasuk gambar:
                   <img src="assets/images/nama-file.png" alt="deskripsi">)
   Urutan bab di sini harus sama dengan urutan di soal.js.
   ===================================================== */
 
const MATERI = [
  /* ---------- BAB I ---------- */
  {
    judul: 'Sejarah Kelahiran Pancasila',
    simbol: '⭐', namaSimbol: 'Bintang (Sila ke-1)',
    isi: `
      <p>Pancasila merupakan dasar negara Indonesia yang dirumuskan melalui perjuangan dan musyawarah para tokoh bangsa sebelum kemerdekaan.</p>
 
      <h3>Proses lahirnya Pancasila</h3>
      <ol>
        <li>Sidang pertama BPUPKI berlangsung pada 29 Mei–1 Juni 1945 untuk membahas dasar negara.</li>
        <li>Tokoh perumus dasar negara yaitu Mohammad Yamin, Soepomo, dan Ir. Soekarno.</li>
        <li>Pada 1 Juni 1945, Ir. Soekarno memperkenalkan istilah Pancasila.</li>
        <li>Panitia Sembilan menghasilkan Piagam Jakarta pada 22 Juni 1945.</li>
        <li>Pancasila disahkan oleh PPKI pada 18 Agustus 1945.</li>
      </ol>
 
      <h3>Sikap terpuji yang dapat diteladani</h3>
      <ul>
        <li>Rela berkorban demi bangsa.</li>
        <li>Mengutamakan musyawarah.</li>
        <li>Mencintai tanah air.</li>
        <li>Menghargai perbedaan.</li>
        <li>Bertanggung jawab.</li>
      </ul>`
  },
 
  /* ---------- BAB II ---------- */
  {
    judul: 'Pancasila sebagai Dasar Negara',
    simbol: '⛓️', namaSimbol: 'Rantai (Sila ke-2)',
    isi: `
      <p>Pancasila adalah dasar negara dan pedoman dalam kehidupan berbangsa dan bernegara.</p>
 
      <h3>Fungsi Pancasila</h3>
      <ol>
        <li>Sebagai dasar negara.</li>
        <li>Sebagai pandangan hidup bangsa.</li>
        <li>Sebagai pemersatu bangsa.</li>
        <li>Sebagai sumber dari segala sumber hukum negara.</li>
      </ol>
 
      <h3>Lima sila dan lambangnya</h3>
      <ol>
        <li>Sila pertama: <strong>Bintang</strong> (Ketuhanan).</li>
        <li>Sila kedua: <strong>Rantai</strong> (Kemanusiaan).</li>
        <li>Sila ketiga: <strong>Pohon beringin</strong> (Persatuan).</li>
        <li>Sila keempat: <strong>Kepala banteng</strong> (Musyawarah).</li>
        <li>Sila kelima: <strong>Padi dan kapas</strong> (Keadilan sosial).</li>
      </ol>`
  },
 
  /* ---------- BAB III ---------- */
  {
    judul: 'Pancasila dalam Kehidupan Sehari-hari',
    simbol: '🌳', namaSimbol: 'Pohon Beringin (Sila ke-3)',
    isi: `
      <p>Penerapan Pancasila adalah melaksanakan nilai-nilai lima sila dalam kehidupan di rumah, sekolah, dan masyarakat.</p>
 
      <h3>Contoh penerapannya</h3>
      <ol>
        <li><strong>Sila pertama:</strong> Beribadah dan menghormati agama orang lain.</li>
        <li><strong>Sila kedua:</strong> Menolong teman dan tidak melakukan perundungan.</li>
        <li><strong>Sila ketiga:</strong> Menjaga persatuan dan mencintai produk dalam negeri.</li>
        <li><strong>Sila keempat:</strong> Bermusyawarah dan menghargai pendapat.</li>
        <li><strong>Sila kelima:</strong> Bersikap adil, rajin menabung, dan menghargai karya orang lain.</li>
      </ol>`
  },
 
  /* ---------- BAB IV ---------- */
  {
    judul: 'Norma, Hak, dan Kewajiban',
    simbol: '🐂', namaSimbol: 'Kepala Banteng (Sila ke-4)',
    isi: `
      <p>Norma adalah aturan hidup yang mengatur perilaku manusia agar tercipta ketertiban, keamanan, dan kenyamanan.</p>
 
      <h3>Macam-macam norma</h3>
      <ol>
        <li><strong>Norma agama:</strong> Berasal dari ajaran Tuhan, contohnya beribadah.</li>
        <li><strong>Norma kesusilaan:</strong> Berasal dari hati nurani, contohnya berkata jujur.</li>
        <li><strong>Norma kesopanan:</strong> Berasal dari tata krama, contohnya menghormati orang tua.</li>
        <li><strong>Norma hukum:</strong> Dibuat oleh negara dan memiliki sanksi tegas, contohnya mematuhi peraturan lalu lintas.</li>
      </ol>
 
      <h3>Pengertian hak dan kewajiban</h3>
      <ul>
        <li><strong>Hak</strong> adalah sesuatu yang pantas diterima atau didapatkan.</li>
        <li><strong>Kewajiban</strong> adalah sesuatu yang harus dilakukan dengan tanggung jawab.</li>
      </ul>
 
      <h3>Contoh</h3>
      <ul>
        <li><strong>Kewajiban:</strong> Belajar dan mematuhi aturan sekolah.</li>
        <li><strong>Hak:</strong> Mendapatkan ilmu dan bimbingan guru.</li>
      </ul>
 
      <p>Hak dan kewajiban harus dilaksanakan secara seimbang.</p>`
  },
 
  /* ---------- BAB V ---------- */
  {
    judul: 'Bhinneka Tunggal Ika',
    simbol: '🌾', namaSimbol: 'Padi dan Kapas (Sila ke-5)',
    isi: `
      <p><strong>Bhinneka Tunggal Ika</strong> berarti berbeda-beda tetapi tetap satu jua. Semboyan ini menggambarkan keberagaman Indonesia yang tetap bersatu.</p>
 
      <h3>Bentuk keberagaman Indonesia</h3>
      <ol>
        <li><strong>Suku bangsa:</strong> Jawa, Sunda, Batak, Minangkabau, dan Dayak.</li>
        <li><strong>Agama:</strong> Islam, Kristen Protestan, Katolik, Hindu, Buddha, dan Konghucu.</li>
        <li><strong>Bahasa daerah:</strong> Jawa, Sunda, Batak, dan lainnya.</li>
        <li><strong>Budaya:</strong> Rumah adat, pakaian adat, tarian, alat musik, dan senjata tradisional.</li>
      </ol>
 
      <h3>Contoh budaya Indonesia</h3>
      <ul>
        <li>Rumah Gadang dari Sumatra Barat.</li>
        <li>Angklung dari Jawa Barat.</li>
        <li>Tari Kecak dari Bali.</li>
        <li>Keris sebagai senjata tradisional.</li>
      </ul>
 
      <h3>Sikap menghargai keberagaman</h3>
      <ul>
        <li>Berteman tanpa membeda-bedakan.</li>
        <li>Menghormati perbedaan agama dan budaya.</li>
        <li>Tidak mengejek adat atau bahasa daerah lain.</li>
        <li>Saling membantu dan menjaga kerukunan.</li>
      </ul>
 
      <p>Manfaat menghargai keberagaman adalah menciptakan kehidupan yang aman, damai, rukun, serta memperkuat persatuan bangsa.</p>
 
      <h3>Kesimpulan</h3>
      <p>Pancasila merupakan dasar negara dan pedoman hidup bangsa Indonesia. Sebagai generasi muda, kita harus menerapkan nilai Pancasila, menaati norma, melaksanakan hak dan kewajiban, serta menghargai keberagaman demi menjaga persatuan dan kesatuan Indonesia.</p>`
  }
];
 
