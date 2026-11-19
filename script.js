
/* =====================================================
   SCRIPT DASAR - Kuis Pancasila
   Membaca data dari: data/config.js, data/materi.js, data/soal.js
   Alur: Login > Menu > Pilih Bab > (Materi) > Pilih Stage > Soal > Hasil
   ===================================================== */
(function () {
  'use strict';
 
  // Jika file data tidak ditemukan, tampilkan pesan yang jelas
  if (typeof GAME_CONFIG === 'undefined' || typeof MATERI === 'undefined' || typeof SOAL === 'undefined') {
    var galat = document.getElementById('login-error');
    if (galat) {
      galat.textContent = 'File data tidak ditemukan. Pastikan folder "data" (berisi config.js, materi.js, soal.js) ada di samping index.html.';
    }
    var tombolMasuk = document.getElementById('login-btn');
    if (tombolMasuk) tombolMasuk.disabled = true;
    return;
  }
 
  var CFG = GAME_CONFIG;
  var STAGES = CFG.stagesPerChapter;
  var STORE_KEY = 'kuis-pancasila-progres';
  var SET_KEY = 'kuis-pancasila-pengaturan';
 
  function $(id) { return document.getElementById(id); }
 
  /* ---------- Penyimpanan di perangkat ---------- */
  function muat(key, cadangan) {
    try { var t = localStorage.getItem(key); return t ? JSON.parse(t) : cadangan; }
    catch (e) { return cadangan; }
  }
  function simpan(key, nilai) {
    try { localStorage.setItem(key, JSON.stringify(nilai)); } catch (e) { /* abaikan */ }
  }
 
  var state = muat(STORE_KEY, null) || { id: '', name: '', lessonSeen: {}, stages: {}, unsynced: false };
  var settings = muat(SET_KEY, null) || { music: true, sfx: true, volume: 70 };
 
  var currentChapter = 0;
  var quiz = null;       // soal yang sedang dikerjakan
  var lastResult = null; // hasil stage terakhir
 
  /* ---------- Aturan permainan ---------- */
  function rec(c, s) { return state.stages[c + '-' + s] || null; }
  function stageDone(c, s) { var r = rec(c, s); return !!(r && r.done); }
 
  function chapterDone(c) {
    for (var s = 0; s < STAGES; s++) if (!stageDone(c, s)) return false;
    return true;
  }
  function chapterDoneCount(c) {
    var n = 0;
    for (var s = 0; s < STAGES; s++) if (stageDone(c, s)) n++;
    return n;
  }
  function chapterStars(c) {
    var n = 0;
    for (var s = 0; s < STAGES; s++) { var r = rec(c, s); if (r && r.stars) n++; }
    return n;
  }
  function chapterUnlocked(c) { return c === 0 || chapterDone(c - 1); }
  function stageUnlocked(c, s) { return chapterUnlocked(c) && (s === 0 || stageDone(c, s - 1)); }
 
  function totalPoints() {
    var total = 0;
    for (var k in state.stages) if (state.stages.hasOwnProperty(k)) total += state.stages[k].points || 0;
    return total;
  }
  function starText(n, max) {
    var t = '';
    for (var i = 0; i < max; i++) t += i < n ? '★' : '☆';
    return t;
  }
 
  /* ---------- Tampilan layar ---------- */
  function show(id) {
    var semua = document.querySelectorAll('.screen');
    for (var i = 0; i < semua.length; i++) {
      semua[i].classList.remove('active');
      semua[i].hidden = true;
    }
    var layar = $(id);
    layar.hidden = false;
    layar.classList.add('active');
    var judul = layar.querySelector('header');
    if (judul) { judul.setAttribute('tabindex', '-1'); judul.focus(); }
    window.scrollTo(0, 0);
  }
 
  function setChapterTitle(screenId, c) {
    var el = $(screenId).querySelector('.chapter');
    if (el) el.textContent = 'Bab ' + (c + 1) + ': ' + MATERI[c].judul;
  }
 
  function el(tag, className, text) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
  }
 
  /* ---------- Audio ---------- */
  var bgm = $('bgm');
  function terapkanAudio() {
    if (!bgm) return;
    bgm.volume = settings.volume / 100;
    if (CFG.audio.bgm && !bgm.getAttribute('src')) bgm.setAttribute('src', CFG.audio.bgm);
    if (settings.music && CFG.audio.bgm) {
      var p = bgm.play();
      if (p && p.catch) p.catch(function () { /* browser menunggu interaksi */ });
    } else {
      bgm.pause();
    }
  }
  function bunyi(nama) {
    if (!settings.sfx || !CFG.audio[nama]) return;
    var a = new Audio(CFG.audio[nama]);
    a.volume = settings.volume / 100;
    var p = a.play();
    if (p && p.catch) p.catch(function () { /* abaikan */ });
  }
 
  /* ---------- Login ---------- */
  function buatId() {
    return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }
 
  function masuk() {
    var nama = $('player-name').value.replace(/\s+/g, ' ').trim();
    if (nama.length < 2) {
      $('login-error').textContent = 'Tulis nama panggilanmu dulu ya (minimal 2 huruf).';
      $('player-name').focus();
      return;
    }
    $('login-error').textContent = '';
    state.name = nama;
    if (!state.id) state.id = buatId();
    simpan(STORE_KEY, state);
    terapkanAudio();
    bukaMenu();
    kirimSkor();
  }
 
  function bukaMenu() {
    $('welcome-msg').textContent = 'Halo, ' + state.name + '!';
    show('start-screen');
  }
 
  /* ---------- Pilih bab ---------- */
  function bukaBab() {
    var daftar = $('chapter-list');
    daftar.textContent = '';
    for (var c = 0; c < MATERI.length; c++) {
      (function (c) {
        var terbuka = chapterUnlocked(c);
        var btn = el('button', 'list-btn' + (terbuka ? '' : ' locked'));
        btn.type = 'button';
        btn.disabled = !terbuka;
        var ikon = el('span', 'list-icon');
         if (terbuka) {
           ikon.innerHTML = '<img src="' + MATERI[c].simbol + '" alt="lambang" style="width: 40px; height: auto;">';
         } else {
        ikon.textContent = '🔒';
         }
btn.appendChild(ikon);
        var teks = el('span', 'list-text');
        teks.appendChild(el('strong', '', 'Bab ' + (c + 1) + ': ' + MATERI[c].judul));
        teks.appendChild(el('small', '', terbuka
          ? chapterDoneCount(c) + ' dari ' + STAGES + ' stage selesai'
          : 'Selesaikan bab sebelumnya dulu'));
        btn.appendChild(teks);
        btn.appendChild(el('span', 'list-meta', '★ ' + chapterStars(c) + '/' + STAGES));
        btn.addEventListener('click', function () {
          currentChapter = c;
          if (!state.lessonSeen[c]) bukaMateri(c); else bukaStage(c);
        });
        daftar.appendChild(btn);
      })(c);
    }
    show('chapter-selection-screen');
  }
 
  /* ---------- Materi ---------- */
  function bukaMateri(c) {
    currentChapter = c;
    setChapterTitle('lesson-screen', c);
    $('lesson-content').innerHTML = MATERI[c].isi;
    show('lesson-screen');
  }
 
  /* ---------- Pilih stage ---------- */
  function bukaStage(c) {
    currentChapter = c;
    setChapterTitle('stage-selection-screen', c);
    var daftar = $('stage-list');
    daftar.textContent = '';
    for (var s = 0; s < STAGES; s++) {
      (function (s) {
        var terbuka = stageUnlocked(c, s);
        var r = rec(c, s);
        var btn = el('button', 'stage-btn' + (terbuka ? '' : ' locked') + (r && r.done ? ' done' : ''));
        btn.type = 'button';
        btn.disabled = !terbuka;
        btn.setAttribute('aria-label', 'Stage ' + (s + 1) +
          (!terbuka ? ', terkunci' : (r && r.stars ? ', dapat bintang' : (r && r.done ? ', sudah dijawab' : ''))));
        btn.appendChild(el('span', 'stage-num', String(s + 1)));
        btn.appendChild(el('span', 'stage-mark', !terbuka ? '🔒' : (r && r.stars ? '★' : '☆')));
        btn.addEventListener('click', function () { mulaiSoal(c, s); });
        daftar.appendChild(btn);
      })(s);
    }
    show('stage-selection-screen');
  }
 
  /* ---------- Soal ---------- */
  function acak(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
 
  function mulaiSoal(c, s) {
    var data = SOAL[c][s];
    var pilihan = [];
    for (var i = 0; i < data.pilihan.length; i++) {
      pilihan.push({ teks: data.pilihan[i], benar: i === data.jawaban });
    }
    quiz = { c: c, s: s, pilihan: acak(pilihan), dijawab: false, penjelasan: data.penjelasan || '' };
    currentChapter = c;
 
    setChapterTitle('quiz-screen', c);
    $('quiz-progress').textContent = 'Stage ' + (s + 1) + ' dari ' + STAGES;
    $('quiz-score').textContent = 'Poin: ' + totalPoints();
    $('quiz-feedback').textContent = '';
    $('quiz-feedback').className = '';
    $('quiz-next-btn').hidden = true;
 
    var area = $('quiz-content');
    area.textContent = '';
    area.appendChild(el('p', 'question', data.tanya));
    var kotak = el('div', 'options');
    var huruf = ['A', 'B', 'C', 'D', 'E', 'F'];
    quiz.pilihan.forEach(function (p, idx) {
      var btn = el('button', 'option-btn');
      btn.type = 'button';
      btn.appendChild(el('span', 'opt-letter', huruf[idx]));
      btn.appendChild(el('span', 'opt-text', p.teks));
      btn.addEventListener('click', function () { jawab(idx); });
      kotak.appendChild(btn);
    });
    area.appendChild(kotak);
    show('quiz-screen');
  }
 
  function jawab(idx) {
    if (!quiz || quiz.dijawab) return;
    quiz.dijawab = true;
 
    var pilihanBenar = quiz.pilihan[idx].benar;
    var tombol = $('quiz-content').querySelectorAll('.option-btn');
    for (var i = 0; i < tombol.length; i++) {
      tombol[i].disabled = true;
      if (quiz.pilihan[i].benar) tombol[i].classList.add('correct');
    }
    if (!pilihanBenar) tombol[idx].classList.add('wrong');
 
    // Catat hasil
    var key = quiz.c + '-' + quiz.s;
    var r = state.stages[key] || { done: false, stars: 0, points: 0, attempts: 0 };
    var pertama = r.attempts === 0;
    var bab_selesai_sebelum = chapterDone(quiz.c);
    r.attempts++;
    var poin = 0;
    if (pilihanBenar) {
      poin = pertama ? CFG.points.firstTry : CFG.points.retry;
      r.points = Math.max(r.points, poin);
      r.stars = 1;
    }
    r.done = true;
    state.stages[key] = r;
    simpan(STORE_KEY, state);
 
    lastResult = {
      c: quiz.c, s: quiz.s, benar: pilihanBenar, poin: poin,
      silaBaru: !bab_selesai_sebelum && chapterDone(quiz.c)
    };
 
    $('quiz-score').textContent = 'Poin: ' + totalPoints();
    var umpan = $('quiz-feedback');
    if (pilihanBenar) {
      umpan.textContent = 'Hebat, jawabanmu benar! 🎉';
      umpan.className = 'feedback-ok';
      bunyi('correct');
    } else {
      umpan.textContent = 'Belum tepat. Jawaban yang benar sudah ditandai ya.';
      umpan.className = 'feedback-bad';
      bunyi('wrong');
    }
    if (quiz.penjelasan) {
      umpan.appendChild(el('span', 'feedback-explain', quiz.penjelasan));
    }
    $('quiz-next-btn').hidden = false;
    $('quiz-next-btn').focus();
    kirimSkor();
  }
 
  /* ---------- Hasil ---------- */
  function bukaHasil() {
    var h = lastResult;
    if (!h) return bukaBab();
    setChapterTitle('result-screen', h.c);
 
    var bintang = chapterStars(h.c);
    $('result-stars').textContent = starText(bintang, STAGES);
    $('result-stars').setAttribute('aria-label', bintang + ' dari ' + STAGES + ' bintang');
    $('result-score').textContent = h.benar
      ? 'Benar! Kamu mendapat ' + h.poin + ' poin.'
      : 'Belum benar, tidak apa-apa. Coba lagi yuk!';
    $('result-message').textContent = 'Total poinmu: ' + totalPoints();
 
    var hadiah = $('sila-reward');
    if (h.silaBaru) {
      $('sila-reward-symbol').innerHTML = '<img src="' + MATERI[h.c].simbol + '" alt="lambang" style="width: 80px; height: auto; margin-bottom: 10px;">';
      $('sila-reward-text').textContent = 'Selamat! Kamu mendapat lambang sila: ' + MATERI[h.c].namaSimbol;
      hadiah.hidden = false;
      bunyi('unlock');
    } else {
      hadiah.hidden = true;
    }
 
    var lanjut = $('result-next-btn');
    lanjut.textContent = h.s + 1 < STAGES ? 'Stage Berikutnya' : 'Pilih Bab';
    show('result-screen');
  }
 
  function lanjutDariHasil() {
    var h = lastResult;
    if (h && h.s + 1 < STAGES) mulaiSoal(h.c, h.s + 1);
    else bukaBab();
  }
 
  /* ---------- Koleksi sila ---------- */
  function bukaSila() {
    var daftar = $('sila-list');
    daftar.textContent = '';
    for (var c = 0; c < MATERI.length; c++) {
      var punya = chapterDone(c);
      var kartu = el('div', 'sila-card' + (punya ? '' : ' locked'));
      var simDiv = el('div', 'sila-symbol');
      if (punya) {
     simDiv.innerHTML = '<img src="' + MATERI[c].simbol + '" alt="lambang" style="width: 50px; height: auto;">';
      } else {
     simDiv.textContent = '🔒';
      }
      kartu.appendChild(simDiv);
      var teks = el('div');
      teks.appendChild(el('strong', '', punya ? MATERI[c].namaSimbol : 'Sila ke-' + (c + 1)));
      teks.appendChild(el('small', '', punya ? MATERI[c].bunyiSila : 'Selesaikan Bab ' + (c + 1) + ' untuk membukanya'));
      kartu.appendChild(teks);
      daftar.appendChild(kartu);
    }
    show('sila-screen');
  }
 
  /* ---------- Peringkat (Google Sheets) ---------- */
  function kirimSkor() {
    if (!CFG.sheetsUrl || !state.id) return;
    try {
      fetch(CFG.sheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ id: state.id, name: state.name, score: totalPoints() })
      }).then(function () {
        state.unsynced = false; simpan(STORE_KEY, state);
      }).catch(function () {
        state.unsynced = true; simpan(STORE_KEY, state);
      });
    } catch (e) {
      state.unsynced = true; simpan(STORE_KEY, state);
    }
  }
 
  function gambarPeringkat(baris) {
    var area = $('leaderboard-content');
    area.textContent = '';
    if (!baris.length) return;
    var tabel = el('table', 'board');
    var kepala = el('tr');
    ['#', 'Nama', 'Poin'].forEach(function (t) { kepala.appendChild(el('th', '', t)); });
    tabel.appendChild(kepala);
    baris.forEach(function (b, i) {
      var tr = el('tr', b.id === state.id ? 'me' : '');
      tr.appendChild(el('td', '', String(i + 1)));
      tr.appendChild(el('td', '', b.name));
      tr.appendChild(el('td', '', String(b.score)));
      tabel.appendChild(tr);
    });
    area.appendChild(tabel);
  }
 
  function bukaPeringkat() {
    show('leaderboard-screen');
    var status = $('leaderboard-status');
    var saya = [{ id: state.id, name: state.name, score: totalPoints() }];
 
    if (!CFG.sheetsUrl) {
      status.textContent = 'Peringkat bersama belum aktif. Ini skormu.';
      gambarPeringkat(saya);
      return;
    }
    status.textContent = 'Memuat peringkat...';
    $('leaderboard-content').textContent = '';
    kirimSkor();
    fetch(CFG.sheetsUrl + '?limit=' + CFG.leaderboardLimit)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var baris = (data && data.rows) ? data.rows : [];
        status.textContent = baris.length ? '' : 'Belum ada skor.';
        gambarPeringkat(baris);
      })
      .catch(function () {
        status.textContent = 'Tidak bisa terhubung ke internet. Ini skormu.';
        gambarPeringkat(saya);
      });
  }
 
  /* ---------- Pengaturan ---------- */
  function siapkanPengaturan() {
    var musik = $('music-toggle'), sfx = $('sfx-toggle'), vol = $('volume-range');
    musik.checked = settings.music;
    sfx.checked = settings.sfx;
    vol.value = settings.volume;
    musik.addEventListener('change', function () { settings.music = musik.checked; simpan(SET_KEY, settings); terapkanAudio(); });
    sfx.addEventListener('change', function () { settings.sfx = sfx.checked; simpan(SET_KEY, settings); });
    vol.addEventListener('input', function () { settings.volume = Number(vol.value); simpan(SET_KEY, settings); terapkanAudio(); });
  }
 
  /* ---------- Tombol ---------- */
  var KEMBALI = {
    'intro-screen': 'start-screen',
    'settings-screen': 'start-screen',
    'leaderboard-screen': 'start-screen',
    'sila-screen': 'start-screen',
    'chapter-selection-screen': 'start-screen',
    'stage-selection-screen': 'chapter-selection-screen',
    'lesson-screen': 'chapter-selection-screen'
  };
 
  function pasangTombol() {
    $('login-btn').addEventListener('click', masuk);
    $('player-name').addEventListener('keydown', function (e) { if (e.key === 'Enter') masuk(); });
 
    $('start-btn').addEventListener('click', bukaBab);
    $('intro-btn').addEventListener('click', function () { show('intro-screen'); });
    $('leaderboard-btn').addEventListener('click', bukaPeringkat);
    $('sila-btn').addEventListener('click', bukaSila);
    $('settings-btn').addEventListener('click', function () { show('settings-screen'); });
 
    var kembali = document.querySelectorAll('.back-btn');
    for (var i = 0; i < kembali.length; i++) {
      kembali[i].addEventListener('click', function (e) {
        var id = e.currentTarget.closest('.screen').id;
        var tujuan = KEMBALI[id] || 'start-screen';
        if (tujuan === 'chapter-selection-screen') bukaBab(); else show(tujuan);
      });
    }
 
    $('stage-lesson-btn').addEventListener('click', function () { bukaMateri(currentChapter); });
    $('lesson-next-btn').addEventListener('click', function () {
      state.lessonSeen[currentChapter] = true;
      simpan(STORE_KEY, state);
      bukaStage(currentChapter);
    });
 
    $('quiz-next-btn').addEventListener('click', bukaHasil);
    $('quiz-home-btn').addEventListener('click', bukaMenu);
 
    $('result-retry-btn').addEventListener('click', function () { if (lastResult) mulaiSoal(lastResult.c, lastResult.s); });
    $('result-next-btn').addEventListener('click', lanjutDariHasil);
    $('result-stage-btn').addEventListener('click', function () { bukaStage(lastResult ? lastResult.c : currentChapter); });
 
    window.addEventListener('online', function () { if (state.unsynced) kirimSkor(); 
     
/* bunyi */
   document.addEventListener('click', function (e) {
      if (e.target.closest('button')) {
        bunyi('click');
      }
    });

  }
 
  /* ---------- Mulai ---------- */
  function mulai() {
    pasangTombol();
    siapkanPengaturan();
    if (state.name) {
      bukaMenu();
      if (state.unsynced) kirimSkor();
    } else {
      show('login-screen');
    }
  }
 
  mulai();
})();
 
