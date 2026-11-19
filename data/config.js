
/* =====================================================
   PENGATURAN UMUM GAME
   Edit file ini untuk mengganti poin, musik, dan alamat Peringkat.
   ===================================================== */
 
const GAME_CONFIG = {
  stagesPerChapter: 5,                  // jumlah stage (soal) per bab
  points: { firstTry: 10, retry: 5 },   // poin benar pertama kali / saat mengulang
  leaderboardLimit: 50,                 // jumlah pemain di layar Peringkat
 
  // Alamat Google Apps Script untuk Peringkat online.
  // Kosongkan dulu: Peringkat hanya menampilkan skor pemain ini.
  sheetsUrl: 'https://script.google.com/macros/s/AKfycbxIcSG_2fiVaY8hJrA3Zip51Q-barWX8_TM7ff-V3sm4C69V8mMaJL39vjUMlNTWXQHrg/exec',
 
  // Nama file audio di folder audio/. Kosongkan jika belum ada.
  audio: {
    bgm: 'audio/music.mp3',        // musik latar, contoh: 'audio/musik.mp3'
    correct: 'audio/correct.mp3',    // efek suara jawaban benar
    wrong: 'audio/wrong.mp3',      // efek suara jawaban salah
    unlock: 'audio/unlock.mp3',      // efek suara lambang sila terbuka
   click: 'assets/audio/click.mp3'
  }
};
 
