
/* =====================================================
   PENGATURAN UMUM GAME
   Edit file ini untuk mengganti poin, musik, dan alamat Peringkat.
   ===================================================== */
 
const GAME_CONFIG = {
  stagesPerChapter: 5,                  // jumlah stage (soal) per bab
  points: { firstTry: 10, retry: 5 },   // poin benar pertama kali / saat mengulang
  leaderboardLimit: 20,                 // jumlah pemain di layar Peringkat
 
  // Alamat Google Apps Script untuk Peringkat online.
  // Kosongkan dulu: Peringkat hanya menampilkan skor pemain ini.
  sheetsUrl: '',
 
  // Nama file audio di folder audio/. Kosongkan jika belum ada.
  audio: {
    bgm: '',        // musik latar, contoh: 'audio/musik.mp3'
    correct: '',    // efek suara jawaban benar
    wrong: '',      // efek suara jawaban salah
    unlock: ''      // efek suara lambang sila terbuka
  }
};
 