/**
 * GG Florist Website Data Configuration
 * Contains all static data used throughout the website
 */

const data = {
  // Product categories
  productCategories: [
    { id: "fresh", name: "Bunga Segar" },
    { id: "artificial", name: "Bunga Pipa Bulu" },
    { id: "bouquet", name: "Buket Foto" },
    { id: "acrylic", name: "Akrilik" },
  ],

  // Product catalog
  products: [
    {
      "img": "assets/images/fresh-flower-4.jpg",
      "title": "Buket Mawar Merah",
      "desc": "Buket mawar merah segar dengan pinggiran putih",
      "price": "Rp 750.000",
      "category": "fresh"
    },
    {
      "img": "assets/images/fresh-flower-3.jpg",
      "title": "Buket Mawar Pink",
      "desc": "Rangkaian Bunga mawar pink yang elegan",
      "price": "Rp 400.000",
      "category": "fresh"
    },
    {
      "img": "assets/images/fresh-flower-2.jpg",
      "title": "Buket Bunga Warna-Warni",
      "desc": "Buket ceria dengan perpaduan bunga krisan, mawar, dan aster dalam berbagai warna. Dibungkus kertas kraft dan pita pink.",
      "price": "Rp 100.000",
      "category": "fresh"
    },
        {
      "img": "assets/images/fresh-flower-1.jpg",
      "title": "Buket Mawar Putih",
      "desc": "Rangkaian mawar putih premium dengan bunga pikok, dibungkus elegan dengan kertas putih dan pita hitam.",
      "price": "Rp 60.000",
      "category": "fresh"
    },
    {
      "img": "assets/images/artificial-flower.png",
      "title": "Buket Bunga Pipa Ungu & Oranye",
      "desc": "Buket bunga pipa kombinasi warna ungu dan oranye, dibungkus kertas metalik ungu yang mewah.",
      "price": "Rp 95.000",
      "category": "artificial"
    },
    {
      "img": "assets/images/artificial-flower-3.png",
      "title": "Buket Bunga Pipa Aneka Warna",
      "desc": "Buket bunga dari pipa bulu (chenille) warna-warni yang ceria, cocok untuk hadiah kelulusan atau ulang tahun.",
      "price": "Rp 80.000",
      "category": "artificial"
    },
    {
      "img": "assets/images/artificial-flower-4.png",
      "title": "Buket Bunga Pipa Bulu Biru",
      "desc": "Buket bunga dari pipa bulu (chenille) berwarna biru muda, dirangkai modern dengan pembungkus hitam dan iridescent.",
      "price": "Rp 70.000",
      "category": "artificial"
    },
    {
      "img": "assets/images/artificial-flower-2.png",
      "title": "Buket Bunga Pipa Merah",
      "desc": "Buket bunga unik yang terbuat dari pipa bulu (chenille) berwarna merah, dibungkus kertas iridescent dengan pita perak.",
      "price": "Rp 55.000",
      "category": "artificial"
    },
    {
      "img": "assets/images/photo-bouquet-3.png",
      "title": "Buket Foto Kenangan",
      "desc": "Buket dengan foto kenangan dari momen spesial Anda dipadukan dengan fresh flower.",
      "price": "Rp 125.000",
      "category": "bouquet"
    },
    {
      "img": "assets/images/photo-bouquet.png",
      "title": "Buket Foto Kenangan",
      "desc": "Buket dengan foto kenangan dari momen spesial Anda.",
      "price": "Rp 55.000",
      "category": "bouquet"
    },
    {
      "img": "assets/images/photo-bouquet-4.png",
      "title": "Buket Foto Kenangan",
      "desc": "Buket foto kenangan dari momen spesial Anda.",
      "price": "Rp 50.000",
      "category": "bouquet"
    },
    {
      "img": "assets/images/photo-bouquet-2.png",
      "title": "Buket Foto Idol",
      "desc": "Buket foto idol special ditambah dengan sedikit sentuhan bunga",
      "price": "Rp 95.000",
      "category": "bouquet"
    },
     {
      "img": "assets/images/acrylic-gift-3.png",
      "title": "Papan Akrilik Ulang Tahun",
      "desc": "Papan akrilik pink dengan tulisan \"Happy Birthday\", dihiasi bunga artifisial ungu dan putih di atas kuda-kuda kayu.",
      "price": "Rp 200.000",
      "category": "acrylic"
    },
    {
      "img": "assets/images/acrylic-gift.png",
      "title": "Papan Akrilik Wisuda",
      "desc": "Papan akrilik custom untuk ucapan selamat wisuda, dihiasi rangkaian bunga artifisial biru dan putih. Lengkap dengan tripod.",
      "price": "Rp 75.000",
      "category": "acrylic"
    },
    {
      "img": "assets/images/acrylic-gift-2.png",
      "title": "Papan Akrilik Seminar",
      "desc": "Papan akrilik untuk ucapan selamat dan sukses atas acara formal, dihiasi bunga artifisial nuansa ungu.",
      "price": "Rp 75.000",
      "category": "acrylic"
    },
    {
      "img": "assets/images/acrylic-gift-4.jpg",
      "title": "Papan Akrilik Pernikahan",
      "desc": "Papan akrilik custom untuk ucapan \"Happy Wedding\", dihiasi bunga artifisial nuansa pink, merah, dan putih.",
      "price": "Rp 75.000",
      "category": "acrylic"
    }
  ],

  // Customer testimonials
  testimonials: [
    {
      name: "Bem Dzul",
      message:
        "Saya puas banget dengan toko bunga ini. Mereka punya banyak pilihan bunga dan dekorasinya cantik banget. Pengirimannya tepat waktu, cocok untuk last-minute gifts yang tetap berkualitas!",
    },
    {
      name: "Amanda Rizky",
      message:
        "Bunga nya fresh dan affordable, cocok bangettt buat anak kuliahan yang sering butuhin buket buat kasih gift",
    },
    {
      name: "Fiani Aliya Hartanti",
      message:
        "Suka bgttt pesen bucket di ggflorist 🥰… selalu bunganya cantik”, seger” juga dan harga terjangkau bgt bisa minta sesuai budget kita … lopee dah 🫶🏻🫶🏻",
    },
    {
      name: "Virgie Salma",
      message:
        "Bunganya fresh dan cantikk, rangkaiannya juga bagus banget dengan harga yg affordable 🫶🌹😍 Satu buket dapat macam2 bunga dan  rapih ❤️❤️❤️",
    },
    {
      name: "Anandari towoliu",
      message:
        "ga nyangka bunga dengan harga se affordable itu bisa bagus banget kualitasnya. fresh, wangi, looks so prettyyy.",
    },
    {
      name: "Nisrina A.P",
      message:
        "Puas bgt sama buketnya! Bunga-bunganya segar, lengkap dan rangkaiannya beneran niat. Nggak nyesel deh pilih toko ini buat kasih surprise buat temen.",
    },
  ],

  // How to order steps
  howToOrderSteps: [
    {
      title: "Tentukan Waktu & Tanggal",
      desc: "Pilih hari dan jam bunga ingin digunakan. Untuk pesanan hari ini, ketersediaan menyesuaikan stok.",
    },
    {
      title: "Tentukan Pilihan Bunga",
      desc: "Cek pilihan bunga di katalog Instagram/WhatsApp kami. Request desain juga bisa.",
    },
    {
      title: "Tambahkan Item Pelengkap",
      desc: "Beri tahu jika ada tambahan item seperti cokelat, boneka, kartu, atau snack.",
    },
    {
      title: "Pilih Metode Pengambilan",
      desc: "Tentukan apakah bunga akan diambil di toko atau dikirim ke lokasi Anda.",
    },
    {
      title: "Lakukan Pembayaran",
      desc: "Segera lunasi pembayaran agar pesanan dapat kami proses. Selamat berbelanja!",
    },
  ],

  // Last Minute Order policy
  lmoPolicy: [
    {
      title: "Definisi LMO",
      desc: "Pesanan mendadak untuk hari ini atau untuk besok pagi (di bawah jam 12 siang).",
    },
    {
      title: "Pilihan Terbatas",
      desc: "Pesanan LMO hanya bisa menggunakan bunga, wrapping, dan pita yang 'READY' di toko.",
    },
    {
      title: "Kustomisasi Menyesuaikan",
      desc: "Anda dapat menentukan tone/warna dan budget, kami akan sesuaikan dengan stok yang ada.",
    },
    {
      title: "Hasil Akhir LMO",
      desc: "Hasil akhir rangkaian akan menyesuaikan ketersediaan bunga & tidak bisa persis seperti katalog.",
    },
    {
      title: "Pembayaran LMO",
      desc: "Wajib melakukan pembayaran/DP sebelum pesanan diproses, selambat-lambatnya 2 jam sebelum diambil.",
    },
  ],

  // Contact information
  contactInfo: {
    phone: "0823-2704-4636",
    email: "ggfloristofficial@gmail.com",
    locations: [
      {
        name: "Cabang UNDIP",
        address:
          "Jl. Banyu Putih Raya No.13, Tembalang, Kota Semarang, Jawa Tengah 50275",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.626482136063!2d110.4377771747596!3d-7.052601892900227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c14d937012f%3A0x6b37eb0e6f9d3b73!2sGG%20Florist%20Tembalang!5e0!3m2!1sen!2sid!4v1718953185526!5m2!1sen!2sid",
      },
      {
        name: "Cabang UNNES",
        address:
          "Jl. Taman Siswa No.44, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9804825225175!2d110.38554227475924!3d-7.011685192939226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b067411211b%3A0xa126f555541249e0!2sGG%20FLORIST%20UNNES!5e0!3m2!1sen!2sid!4v1718953243542!5m2!1sen!2sid",
      },
    ],
    operationalHours: [
      { day: "Senin - Sabtu", hours: "07.30 - 17.00" },
      { day: "Minggu", hours: "07.30 - 21.00" },
    ],
    socials: {
      whatsapp: "https://wa.me/6282327044636",
      instagram: "https://www.instagram.com/ggflorist_smg/",
      tiktok: "https://www.tiktok.com/@ggflorist_",
    },
  },

  // Chatbot knowledge base
  chatbotKB: {
    greetings: ["halo", "hai", "hi", "pagi", "siang", "sore", "malam"],
    products: ["produk", "bunga", "buket", "jual apa", "katalog"],
    order: ["pesan", "order", "cara pesan", "beli"],
    lmo: ["lmo", "last minute", "mendadak"],
    location: ["lokasi", "alamat", "toko", "dimana"],
    hours: ["jam buka", "operasional"],
    custom: ["kustom", "request"],
    thanks: ["terima kasih", "makasih", "thanks"],
    responses: {
      welcome:
        "Halo! Selamat datang di GG Florist. Ada yang bisa saya bantu? Anda bisa tanya tentang produk, cara order, lokasi, atau minta rekomendasi. 😊",
      products:
        "Kami menyediakan berbagai macam buket bunga segar, mulai dari buket wisuda, pernikahan, hingga bunga papan. Anda bisa melihat beberapa pilihan di bagian 'Buket Pilihan Kami' atau langsung konsultasi via WhatsApp untuk katalog lengkap.",
      order:
        "Tentu! Anda bisa memesan dengan 5 langkah mudah: 1. Tentukan waktu, 2. Pilih bunga, 3. Tambah item pelengkap (jika ada), 4. Pilih metode pengambilan/pengiriman, 5. Lakukan pembayaran. Info lengkap ada di bagian 'Cara Pesan & Kebijakan'.",
      lmo: "Untuk pesanan mendadak (Last Minute Order), pilihan bunga dan wrapping akan disesuaikan dengan stok yang tersedia di toko ya. Kami akan tetap bantu carikan yang terbaik sesuai budget dan tone warna yang Anda inginkan!",
      location:
        "Kami punya 2 cabang: di Tembalang (dekat UNDIP) dan Sekaran (dekat UNNES). Alamat lengkap dan peta bisa Anda lihat di bagian 'Kontak' di bawah ya.",
      hours:
        "Toko kami buka Senin-Sabtu jam 07.30 - 17.00, dan khusus hari Minggu kami buka lebih lama hingga jam 21.00.",
      custom:
        "Sangat bisa! Kami melayani pesanan buket kustom. Silakan klik tombol 'Konsultasi via WhatsApp' di bagian 'Wujudkan Buket Impian Anda' untuk diskusi lebih lanjut dengan tim kami.",
      thanks:
        "Sama-sama! Senang bisa membantu. Jika ada pertanyaan lain, jangan ragu bertanya ya.",
      default:
        "Maaf, saya kurang mengerti. Coba tanyakan tentang produk, cara pesan, atau lokasi toko kami.",
    },
  },
};

// Export data untuk digunakan di main.js
export default data;
