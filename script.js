document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");

  if (menuIcon && navbar && header) {
    // Event listener untuk ikon menu (membuka/menutup menu)
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
      header.classList.toggle("header-active");
    });

    // Event listener untuk setiap link di dalam navbar
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) { // Tambahkan 'event' sebagai parameter
        // 1. Mencegah perilaku default tautan (navigasi langsung)
        event.preventDefault();

        // 2. Simpan URL tujuan dari tautan yang diklik
        const targetHref = this.href;

        // 3. Tutup menu dengan sedikit penundaan (sesuai durasi transisi CSS)
        setTimeout(() => {
          navbar.classList.remove("active");
          header.classList.remove("header-active");

          // 4. Setelah menu tertutup, baru navigasi ke halaman yang dituju
          window.location.href = targetHref;
        }, 300); // Durasi timeout 300ms agar sesuai dengan transisi 0.3s
      });
    });
  } else {
    console.error("Element menu-icon, navbar, atau header tidak ditemukan");
  }
});