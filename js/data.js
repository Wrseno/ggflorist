/**
 * GG Florist Website Data Configuration
 * Contains all static data used throughout the website
 */

const data = {
  // Product catalog
  products: [
    {
      img: "https://media.karousell.com/media/photos/products/2024/2/18/tempat_jual_buket_bunga_semara_1708230544_a4ea513b_progressive",
      title: "Red Buket Flower",
      desc: "Fresh Flower",
      price: "Rp 150.000",
    },
    {
      img: "https://giftr.sg/cdn/shop/products/May_muGzBrKcT_1024x1024.jpg?v=1683515049",
      title: "Pink Posy",
      desc: "Premium Bouquet",
      price: "Rp 200.000",
    },
    {
      img: "https://www.glasshouseflorist.com/328-superlarge_default/white-bouquet.jpg",
      title: "White Elegant",
      desc: "Elegant Flower",
      price: "Rp 180.000",
    },
    {
      img: "https://bloomingails.ph/cdn/shop/files/a-burst-of-sunshine-bouquet.jpg?v=1745418974",
      title: "Sunshine Bouquet",
      desc: "Bright & Cheerful",
      price: "Rp 170.000",
    },
  ],

  // Customer testimonials
  testimonials: [
    {
      name: "Mario Raymond",
      message:
        "Pilihan bunganya banyak, dan staff sangat membantu. Bunga untuk wisuda teman saya jadi sempurna. Sangat direkomendasikan!",
    },
    {
      name: "Putri Anindya",
      message:
        "Pelayanannya sangat ramah dan cepat. Desain buketnya juga modern dan unik, tidak pasaran. Pasti akan pesan lagi di sini.",
    },
    {
      name: "Budi Santoso",
      message:
        "Pengiriman tepat waktu dan bunganya masih sangat segar saat tiba. Kualitasnya benar-benar terjaga. Terima kasih banyak!",
    },
    {
      name: "Sari Dewi",
      message:
        "Buket wedding saya sempurna! Tim GG Florist benar-benar memahami visi saya dan mewujudkannya dengan indah. Highly recommended!",
    },
    {
      name: "Andi Pratama",
      message:
        "Service excellent! Buketnya cantik banget dan harganya reasonable. Pasti jadi langganan untuk surprise-surprise berikutnya.",
    },
    {
      name: "Lisa Maharani",
      message:
        "Bunga-bunganya selalu fresh dan berkualitas. Custom design juga bisa, dan hasilnya selalu melampaui ekspektasi. Top deh!",
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
      instagram: "#",
      tiktok: "#",
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
