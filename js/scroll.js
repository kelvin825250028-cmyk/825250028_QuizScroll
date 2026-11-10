// scroll.js - Fitur navigasi scroll (Scroll to Top & Scroll to Bottom)
// Kode dijalankan setelah seluruh struktur HTML selesai dimuat oleh browser
document.addEventListener('DOMContentLoaded', function () {
    const tombolAtas = document.getElementById('tombolAtas');
    const tombolBawah = document.getElementById('tombolBawah');

    // Scroll ke paling atas halaman
    if (tombolAtas) {
        tombolAtas.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll ke paling bawah halaman
    if (tombolBawah) {
        tombolBawah.addEventListener('click', function () {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
});
