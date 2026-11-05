const dataArtikel = [
  {
    id: 1,
    judul: "5 Langkah Memulai Pola Makan Sehat Tanpa Diet Menyiksa",
    deskripsi: "Pelajari cara menyeimbangkan porsi karbohidrat, protein, dan serat harian secara bertahap tanpa perlu rasa lapar berlebihan.",
    kategori: "Nutrisi",
    waktuBaca: "5 mnt baca",
    gambar: "assets/sayur.jpg",
    isi: `
      <p>Pola makan sehat tidak harus dimulai dengan larangan. Kuncinya adalah perubahan kecil yang bisa Anda jalani setiap hari, bukan diet ketat yang hanya bertahan seminggu.</p>
      <h2>1. Tambah, jangan langsung kurangi</h2>
      <p>Mulailah dengan menambahkan satu porsi sayur atau buah di setiap waktu makan. Seiring waktu, porsi makanan olahan akan berkurang dengan sendirinya.</p>
      <h2>2. Atur isi piring</h2>
      <p>Isi separuh piring dengan sayur dan buah, seperempat dengan protein, dan seperempat dengan karbohidrat kompleks. Cara ini menjaga porsi tanpa perlu menghitung kalori.</p>
      <h2>3. Pilih karbohidrat yang lebih utuh</h2>
      <p>Ganti sebagian nasi putih dengan nasi merah, oat, atau ubi. Seratnya membuat Anda kenyang lebih lama.</p>
      <h2>4. Cukupi protein</h2>
      <p>Telur, ikan, tempe, tahu, dan ayam membantu menjaga rasa kenyang dan massa otot.</p>
      <h2>5. Makan perlahan dan minum air putih</h2>
      <p>Otak butuh sekitar 20 menit untuk menyadari tubuh sudah kenyang. Makan perlahan dan sediakan camilan sehat seperti buah atau kacang agar tidak lapar di sore hari.</p>`
  },
  {
    id: 2,
    judul: "Berapa Langkah Kaki yang Sebenarnya Dibutuhkan Tubuh?",
    deskripsi: "Manfaat kesehatan sudah terasa di bawah 10.000 langkah. Simak cara menambah langkah harian tanpa ribet.",
    kategori: "Kebugaran",
    waktuBaca: "4 mnt baca",
    gambar: "assets/tangga.jpg",
    isi: `
      <p>Angka 10.000 langkah sudah lama menjadi target harian yang populer. Namun, manfaat kesehatan sudah mulai terasa pada jumlah langkah yang lebih rendah dari itu.</p>
      <h2>Dari mana angka 10.000 berasal?</h2>
      <p>Angka ini lebih dikenal sebagai target yang mudah diingat dibandingkan hasil patokan medis yang kaku. Anda tidak perlu merasa gagal jika hari itu belum mencapai angka tersebut.</p>
      <h2>Yang terpenting: konsisten</h2>
      <p>Bergerak sedikit tetapi rutin lebih baik daripada olahraga berat sesekali. Tubuh mendapat manfaat dari gerak harian yang terus berulang.</p>
      <h2>Cara menambah langkah tanpa ribet</h2>
      <ul>
        <li>Pilih tangga daripada lift.</li>
        <li>Berjalan sambil menelepon.</li>
        <li>Turun satu halte lebih awal lalu jalan kaki.</li>
        <li>Parkir sedikit lebih jauh dari pintu masuk.</li>
      </ul>
      <h2>Naikkan target pelan-pelan</h2>
      <p>Lihat rata-rata langkah Anda minggu ini, lalu tambah sekitar 1.000 langkah di minggu berikutnya. Cara bertahap lebih mudah dijalani dan lebih kecil risikonya.</p>`
  },
  {
    id: 3,
    judul: "Rahasia Tidur Nyenyak Demi Produktivitas Maksimal",
    deskripsi: "Tidur bukan waktu terbuang. Kenali kebiasaan sederhana yang membantu tidur lebih berkualitas.",
    kategori: "Pola Tidur",
    waktuBaca: "6 mnt baca",
    gambar: "assets/tidur.jpg",
    isi: `
      <p>Tidur bukan waktu yang terbuang. Saat tidur, tubuh memulihkan diri, mengatur metabolisme, dan merapikan ingatan. Orang dewasa umumnya membutuhkan sekitar 7-9 jam per malam.</p>
      <h2>1. Jam tidur yang konsisten</h2>
      <p>Tidur dan bangun di jam yang sama setiap hari, termasuk akhir pekan, membantu jam biologis tubuh bekerja teratur.</p>
      <h2>2. Jauhi layar sebelum tidur</h2>
      <p>Matikan HP dan laptop sekitar 30 menit sebelum tidur. Cahaya layar bisa membuat otak merasa hari belum berakhir.</p>
      <h2>3. Buat kamar nyaman</h2>
      <p>Redupkan lampu, jaga suhu ruangan tetap sejuk, dan gunakan kasur serta bantal yang nyaman.</p>
      <h2>4. Batasi kafein dan makan berat</h2>
      <p>Hindari kopi atau teh pekat setelah sore, dan beri jeda beberapa jam antara makan malam dan waktu tidur.</p>
      <p>Jika Anda sulit tidur selama beberapa minggu meskipun sudah mencoba kebiasaan di atas, sebaiknya konsultasikan dengan tenaga kesehatan.</p>`
  }
];

// ===== HALAMAN DAFTAR =====
const template = document.getElementById("template");
const daftarKartu = document.getElementById("daftar-kartu");

if (daftarKartu && template) {

  dataArtikel.forEach(({ id, judul, deskripsi, kategori, waktuBaca, gambar }) => {
    // membuat salinan template
    const templateClone = template.content.cloneNode(true);

    // mengambil elemen kartu dari salinan
    const kartu = templateClone.querySelector(".card");

    // mengisi gambar
    const img = kartu.querySelector(".gambar");
    img.src = gambar;
    img.alt = judul;

    // mengisi data teks
    kartu.querySelector(".chip-kategori").textContent = kategori;
    kartu.querySelector(".waktu").textContent = waktuBaca;
    kartu.querySelector(".judul").textContent = judul;
    kartu.querySelector(".deskripsi").textContent = deskripsi;

    // link ke halaman detail
    kartu.href = `detail-article.html?id=${id}`;

    // menambahkan kartu ke daftar
    daftarKartu.appendChild(kartu);
  });
}

// ===== HALAMAN DETAIL =====
const detailArtikel = document.getElementById("detail-artikel");

// memastikan elemen detail artikel tersedia
if (detailArtikel) {
  // mengambil parameter dari URL
  const parameter = new URLSearchParams(window.location.search);

  // mengambil id dari parameter (diubah ke angka)
  const idArtikel = Number(parameter.get("id"));

  // mencari artikel berdasarkan id
  const artikel = dataArtikel.find((item) => item.id === idArtikel);

  if (artikel) {
    document.title = artikel.judul;

    const gambarArtikel = document.getElementById("gambar-artikel");
    gambarArtikel.src = artikel.gambar;
    gambarArtikel.alt = artikel.judul;

    document.getElementById("kategori-artikel").textContent = artikel.kategori;
    document.getElementById("waktu-artikel").textContent = artikel.waktuBaca;
    document.getElementById("judul-artikel").textContent = artikel.judul;

    // isi berisi tag HTML (<p>, <h2>, <ul>), jadi pakai innerHTML
    document.getElementById("isi-artikel").innerHTML = artikel.isi;

    detailArtikel.hidden = false;
  } else {
    document.title = "Artikel tidak ditemukan";
    detailArtikel.hidden = false;
    detailArtikel.innerHTML = "<p>Artikel tidak ditemukan. Silakan kembali dan pilih artikel yang tersedia.</p>";
  }
}

const berat = document.getElementById("berat");
const tinggi = document.getElementById("tinggi");
const tombol = document.getElementById("tombol");
const hasil = document.getElementById("hasil");

tombol.addEventListener("click", function () {
  const b = Number(berat.value);
  const t = Number(tinggi.value) / 100;
  const bmi = b / (t * t);

  let kategori = "";
  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi < 25) {
    kategori = "Normal";
  } else if (bmi < 30) {
    kategori = "Berlebih";
  } else {
    kategori = "Obesitas";
  }

  hasil.textContent = "BMI: " + bmi.toFixed(1) + " (" + kategori + ")";
});