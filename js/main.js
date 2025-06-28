/**
 * GG Florist Website Main JavaScript
 * Handles all website functionality including theme management,
 * mobile menu, animations, and interactive components
 */

import data from "./data.js";

// Theme Management Module
const ThemeManager = {
  getTheme() {
    return localStorage.getItem("theme") || "light";
  },

  saveTheme(theme) {
    localStorage.setItem("theme", theme);
  },

  applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Update theme icons
    document
      .querySelectorAll("#moon-icon, #mobile-moon-icon")
      .forEach((icon) => icon.classList.toggle("hidden", theme === "dark"));
    document
      .querySelectorAll("#sun-icon, #mobile-sun-icon")
      .forEach((icon) => icon.classList.toggle("hidden", theme === "light"));
  },

  init() {
    const theme = this.getTheme();
    this.applyTheme(theme);

    // Add event listeners for theme toggle buttons
    document
      .querySelectorAll("#theme-toggle, #mobile-theme-toggle")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const newTheme = this.getTheme() === "light" ? "dark" : "light";
          this.saveTheme(newTheme);
          this.applyTheme(newTheme);
        });
      });
  },
};

// Mobile Menu Module
const MobileMenu = {
  init() {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("-translate-y-[150%]");
      mobileMenu.classList.toggle("translate-y-0");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("-translate-y-[150%]");
        mobileMenu.classList.remove("translate-y-0");
      });
    });
  },
};

// Animation Observer Module
const AnimationObserver = {
  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".fade-in-section")
      .forEach((section) => observer.observe(section));
  },
};

// Gallery Module
const Gallery = {
  currentFilter: "fresh",

  renderCategoryButtons() {
    const productSection = document.getElementById("produk");
    if (!productSection) return;

    let categoryContainer = document.getElementById("categoryButtons");
    if (!categoryContainer) {
      categoryContainer = document.createElement("div");
      categoryContainer.id = "categoryButtons";
      categoryContainer.className =
        "overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 flex gap-2 sm:gap-0 sm:justify-center border-b border-gray-200 dark:border-gray-600 mb-12 mt-8";

      // Insert after the header section
      const headerSection = productSection.querySelector(".text-center");
      if (headerSection) {
        headerSection.parentNode.insertBefore(
          categoryContainer,
          headerSection.nextSibling
        );
      }
    }

    categoryContainer.innerHTML = data.productCategories
      .map(
        (category) => `
        <button 
          onclick="Gallery.filterProducts('${category.id}')"
          class="category-filter-btn flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm transition-all duration-300 relative ${
            this.currentFilter === category.id
              ? "text-primary border-primary"
              : "text-gray-600 dark:text-gray-400 hover:text-primary border-transparent"
          } border-b-2"
          data-category="${category.id}"
        >
          ${category.name}
        </button>
      `
      )
      .join("");
  },

  filterProducts(categoryId) {
    this.currentFilter = categoryId;
    this.renderCategoryButtons();
    this.renderProducts();

    const grid = document.getElementById("galleryGrid");
    if (grid) {
      grid.style.opacity = "0";
      setTimeout(() => {
        grid.style.opacity = "1";
      }, 150);
    }
  },

  getFilteredProducts() {
    return data.products.filter(
      (product) => product.category === this.currentFilter
    );
  },

  renderProducts() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    const filteredProducts = this.getFilteredProducts();

    if (filteredProducts.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-12">
          <div class="text-gray-400 dark:text-gray-600 mb-4">
            <i class="fas fa-search text-4xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Tidak ada produk ditemukan
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Coba pilih kategori lain
          </p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filteredProducts
      .map(
        (item) => `
        <div class="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
          <div class="aspect-square w-full overflow-hidden">
            <img 
              src="${item.img}" 
              alt="${item.title}" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
              loading="lazy"
              onerror="this.src='assets/images/fresh-flower-1.jpg'"
            >
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-1 mb-2">
              ${item.title}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">${item.desc}</p>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">${item.price}</p>
          </div>
        </div>
      `
      )
      .join("");
  },

  orderProduct(title, price) {
    const message = `Halo GG Florist! Saya tertarik untuk memesan:\n\nProduk: ${title}\nHarga: ${price}\n\nBisa tolong berikan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6282327044636?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  },

  render() {
    this.renderCategoryButtons();
    this.renderProducts();
  },
};

// Testimonials Module
const Testimonials = {
  render() {
    const swiperWrapper = document.getElementById("testimoniSwiper");
    if (!swiperWrapper) return;

    // Hanya render 1 testimoni per slide (Swiper akan handle responsive)
    const slides = data.testimonials.map(
      (testimonial) => `
      <div class="swiper-slide">
        <div class="max-w-md mx-auto px-4">
          <div class="p-6">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <i class="fas fa-user text-lg text-primary"></i>
              </div>
              <blockquote class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                <p>"${testimonial.message}"</p>
              </blockquote>
              <figcaption class="font-semibold text-gray-900 dark:text-white text-base">
                ${testimonial.name}
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    `
    );

    swiperWrapper.innerHTML = slides.join("");

    // Inisialisasi Swiper
    new Swiper(".testimoni-swiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
      grabCursor: true,
      speed: 600,
      effect: "slide",
    });
  },
};

// Info Section Module
const InfoSection = {
  render() {
    const infoContainer = document.getElementById("infoSection");
    if (!infoContainer) return;

    const policyIcons = [
      "fas fa-clock",
      "fas fa-exclamation-triangle",
      "fas fa-money-bill-wave",
      "fas fa-gift",
      "fas fa-info-circle",
    ];

    infoContainer.innerHTML = `
            <div class="lg:col-span-1">
                <div class="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full">
                    <div class="text-center mb-8">
                        <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
                            <i class="fas fa-shopping-cart text-2xl text-primary"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                            Bagaimana Cara Memesan
                        </h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Langkah mudah untuk memesan buket impian Anda
                        </p>
                    </div>
                    <div class="space-y-6">
                        ${data.howToOrderSteps
                          .map(
                            (step, index) => `
                            <div class="flex items-start gap-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300">
                                <div class="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                                    ${index + 1}
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">
                                        ${step.title}
                                    </h4>
                                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        ${step.desc}
                                    </p>
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
            
            <div class="lg:col-span-1">
                <div class="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full">
                    <div class="text-center mb-8">
                        <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
                            <i class="fas fa-exclamation-triangle text-2xl text-primary"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                            Kebijakan Last Minute Order
                        </h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Informasi penting untuk pemesanan mendadak
                        </p>
                    </div>
                    <div class="space-y-6">
                        ${data.lmoPolicy
                          .map(
                            (policy, index) => `
                            <div class="flex items-start gap-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300">
                                <div class="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary dark:bg-primary">
                                    <i class="${
                                      policyIcons[index] || "fas fa-info-circle"
                                    } text-white dark:text-white text-lg"></i>
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">
                                        ${policy.title}
                                    </h4>
                                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        ${policy.desc}
                                    </p>
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;
  },
};

// Footer Module
const Footer = {
  render() {
    const footer = document.querySelector("footer");
    if (!footer) return;

    footer.innerHTML = `
            <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 text-center md:text-left">
                    <div class="lg:col-span-2 flex flex-col items-center md:items-start">
                        <a href="#" class="inline-flex items-center gap-x-3">
                            <img src="assets/images/logo-ggflorist.png" alt="GG Florist Logo" 
                                     class="h-10 w-10 object-cover rounded-full">
                            <span class="text-2xl font-bold text-white dark:text-white font-logo">GG Florist</span>
                        </a>
                        <p class="mt-4 text-sm text-blue-100/90 dark:text-gray-200 max-w-xs">
                            Penyedia rangkaian bunga segar dan hadiah spesial untuk semua momen berharga Anda di Semarang dan sekitarnya.
                        </p>
                        <div class="mt-6 flex justify-center md:justify-start gap-x-4">
                            <a href="${
                              data.contactInfo.socials.whatsapp
                            }" target="_blank" 
                                 class="text-blue-200 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">
                                <span class="sr-only">WhatsApp</span>
                                <i class="fab fa-whatsapp text-2xl"></i>
                            </a>
                            <a href="${
                              data.contactInfo.socials.instagram
                            }" target="_blank" 
                                 class="text-blue-200 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">
                                <span class="sr-only">Instagram</span>
                                <i class="fab fa-instagram text-2xl"></i>
                            </a>
                            <a href="${
                              data.contactInfo.socials.tiktok
                            }" target="_blank" 
                                 class="text-blue-200 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">
                                <span class="sr-only">TikTok</span>
                                <i class="fab fa-tiktok text-2xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="flex flex-col items-center md:items-start">
                        <h3 class="text-lg font-semibold text-white dark:text-white">Tautan Cepat</h3>
                        <ul class="mt-4 space-y-3 text-blue-100/90 dark:text-gray-200">
                            <li><a href="#home" class="hover:text-white hover:underline dark:hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" class="hover:text-white hover:underline dark:hover:text-white transition-colors">Tentang Kami</a></li>
                            <li><a href="#produk" class="hover:text-white hover:underline dark:hover:text-white transition-colors">Produk</a></li>
                            <li><a href="#custom-order" class="hover:text-white hover:underline dark:hover:text-white transition-colors">Kustomisasi</a></li>
                            <li><a href="#galeri" class="hover:text-white hover:underline dark:hover:text-white transition-colors">Galeri</a></li>
                            <li><a href="#kontak" class="hover:text-white hover:underline dark:hover:text-white transition-colors">Kontak</a></li>
                        </ul>
                    </div>
                    
                    <div class="flex flex-col items-center md:items-start">
                        <h3 class="text-lg font-semibold text-white dark:text-white">Kontak</h3>
                        <ul class="mt-4 space-y-4 text-blue-100/90 dark:text-gray-200">
                            <li class="flex items-center gap-x-3">
                                <i class="fas fa-phone h-5 w-5 flex-none text-blue-200 dark:text-gray-300"></i>
                                <a href="tel:${data.contactInfo.phone}" 
                                     class="hover:text-white dark:hover:text-white transition-colors">
                                    ${data.contactInfo.phone}
                                </a>
                            </li>
                            <li class="flex items-center gap-x-3">
                                <i class="fas fa-envelope h-5 w-5 flex-none text-blue-200 dark:text-gray-300"></i>
                                <a href="mailto:${data.contactInfo.email}" 
                                     class="hover:text-white dark:hover:text-white transition-colors">
                                    ${data.contactInfo.email}
                                </a>
                            </li>
                            <li class="flex items-center gap-x-3">
                                <i class="fas fa-map-marker-alt h-5 w-5 flex-none text-blue-200 dark:text-gray-300"></i>
                                <span>Semarang, Jawa Tengah</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-10 border-t border-white/20 dark:border-gray-600 pt-6 flex flex-col items-center">
                    <img src="assets/images/logo-itsday.png" alt="GG ITs day Logo" class="h-26 w-32"/>
                    <p class="text-center text-sm text-blue-100/80 dark:text-gray-300">
                        © ${new Date().getFullYear()} GG Florist. Semua hak dilindungi.
                    </p>
                </div>
            </div>
        `;
  },
};

// Chatbot Module
const Chatbot = {
  init() {
    const chatToggle = document.getElementById("chatToggle");
    const chatContainer = document.getElementById("chatContainer");
    const chatClose = document.getElementById("chatClose");
    const chatInput = document.getElementById("chatInput");
    const chatSend = document.getElementById("chatSend");
    const chatMessages = document.getElementById("chatMessages");

    if (!chatToggle || !chatMessages) return;

    const API_KEY = "AIzaSyC4PrfoJDrAae7zA8HdvdHCBNJJbJsQb38";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

    const addMessage = (message, isUser = false) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = `flex items-start gap-2.5 animate-fade-in ${
        isUser ? "justify-end" : ""
      }`;
      messageDiv.innerHTML = isUser
        ? `
        <div class="bg-primary text-white rounded-xl rounded-br-none p-3 max-w-xs">
          <p class="text-xs">${message}</p>
        </div>
        <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <i class="fas fa-user text-white text-xs"></i>
        </div>`
        : `
        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 dark:bg-blue-900">
          <i class="fas fa-robot text-primary text-xs dark:text-blue-300"></i>
        </div>
        <div class="bg-gray-100 dark:bg-gray-700 rounded-xl rounded-bl-none p-3 max-w-xs">
          <p class="text-xs text-gray-800 dark:text-gray-200">${message}</p>
        </div>`;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const getGeminiResponse = async (userMessage) => {
      const knowledgeBase = `
        - Data Produk yang tersedia: ${JSON.stringify(data.products)}
        - Testimoni dari pelanggan: ${JSON.stringify(data.testimonials)}
        - Langkah-langkah cara pemesanan: "${JSON.stringify(
          data.howToOrderSteps
        )}"
        - Kebijakan garansi (LMO Policy): "${JSON.stringify(data.lmoPolicy)}"
        - Informasi Kontak Toko: "${JSON.stringify(data.contactInfo)}"
      `;

      const fullPrompt = `
        Kamu adalah asisten dari sebuah toko buket dengan nama GGFlorist, jawablah pelanggan dengan ramah. Jika pelanggan menanyakan diluar topik buket alihkan pembicaraan ke buket lagi, jangan dijawab jika tidak berkaitan dengan buket dalam bentuk apapun. Jangan memberikan kode-kode atau response yang tidak jelas. Jawab pertanyaan pelanggan berdasarkan data berikut:
        ---
        DATA PENGETAHUAN:
        ${knowledgeBase}
        ---
        PERTANYAAN PELANGGAN: "${userMessage}"
        JAWABAN RAMAHMU:
      `;

      try {
        const requestBody = {
          contents: [{ parts: [{ text: fullPrompt }] }],
        };

        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        const botMessage =
          responseData?.candidates?.[0]?.content?.parts?.[0]?.text;

        return (
          botMessage ||
          "Maaf, sepertinya ada sedikit kendala. Bisa ulangi pertanyaannya?"
        );
      } catch (error) {
        console.error("Error fetching Gemini response:", error);
        return "Maaf, terjadi kesalahan. Tim kami sedang memperbaikinya.";
      }
    };

    const handleSendMessage = async () => {
      const message = chatInput.value.trim();
      if (!message) return;

      addMessage(message, true);
      chatInput.value = "";

      addMessage("...", false);
      const typingIndicator = chatMessages.lastChild;

      const aiResponse = await getGeminiResponse(message);

      chatMessages.removeChild(typingIndicator);

      addMessage(aiResponse, false);
    };

    chatToggle.addEventListener("click", () => {
      chatContainer.classList.remove("translate-y-full", "opacity-0");
      chatToggle.classList.add("scale-0");
    });

    chatClose.addEventListener("click", () => {
      chatContainer.classList.add("translate-y-full", "opacity-0");
      chatToggle.classList.remove("scale-0");
    });

    chatSend.addEventListener("click", handleSendMessage);
    chatInput.addEventListener(
      "keypress",
      (e) => e.key === "Enter" && handleSendMessage()
    );

    addMessage(
      "Halo! Selamat datang di Toko GGFlorist. Ada yang bisa saya bantu?",
      false
    );
  },
};

// Custom Order Module
const CustomOrder = {
  send() {
    const nama = document.getElementById("nama").value;
    const telepon = document.getElementById("telepon").value;
    const konsep = document.getElementById("konsep").value;
    const anggaran = document.getElementById("anggaran").value;

    if (!nama || !telepon || !konsep) {
      alert("Mohon isi nama, nomor telepon, dan konsep buket Anda.");
      return;
    }

    const message = `Halo GG Florist, saya ingin membuat pesanan kustom:\n\nNama: ${nama}\nNomor Telepon: ${telepon}\nKonsep Buket: ${konsep}\nAnggaran: ${
      anggaran ? "Rp " + anggaran : "Tidak disebutkan"
    }`;
    const whatsappUrl = `https://wa.me/6282327044636?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  },
};

// Application Initialization
document.addEventListener("DOMContentLoaded", async () => {
  try {
    ThemeManager.init();
    MobileMenu.init();
    AnimationObserver.init();
    Gallery.render();
    Testimonials.render();
    InfoSection.render();
    Footer.render();
    Chatbot.init();

    // Make functions globally available
    window.sendCustomOrder = CustomOrder.send;
    window.Gallery = Gallery; // Make Gallery object globally available

    console.log("GG Florist website initialized successfully!");
  } catch (error) {
    console.error("Error initializing website:", error);
  }
});
