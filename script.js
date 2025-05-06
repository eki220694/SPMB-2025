// Contoh: Menampilkan pesan selamat datang saat halaman dimuat
window.onload = () => {
  alert("Selamat datang di halaman SPMB SMAN 6 SIGI!");
};

// Contoh: Animasi sederhana untuk elemen header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  if (header) {
    header.style.transition = "all 1s ease-in-out";
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
  }
});

// Contoh: Validasi sederhana untuk tautan pendaftaran
document.querySelectorAll("a[href^='http']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const confirmMessage = confirm(
      "Apakah Anda yakin ingin membuka formulir pendaftaran?"
    );
    if (!confirmMessage) {
      event.preventDefault(); // Mencegah pengguna membuka tautan jika dibatalkan
    }
  });
});