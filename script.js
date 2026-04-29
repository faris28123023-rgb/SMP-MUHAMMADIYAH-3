// Mengatur fungsi toggle untuk menu navigasi di tampilan mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Menutup menu saat link diklik (untuk mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Validasi form dan kirim ke WhatsApp
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form reload halaman
            
            // Mengambil nilai input
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value;
            
            // Format nomor WhatsApp (Ganti angka 0 di depan dengan 62)
            const nomorWhatsApp = "6285603088178";
            
            // Menyusun pesan dengan rapi
            const pesanMentah = `Halo SMK Technologi Depok,\n\nPerkenalkan saya ${nama}.\nEmail: ${email}\n\nPesan saya:\n${pesan}`;
            
            // Encode teks agar aman dan bisa dibaca oleh link URL (mengubah spasi dan enter menjadi format URL yang valid)
            const teksPesan = encodeURIComponent(pesanMentah);
            
            // Buat URL WhatsApp API
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${teksPesan}`;
            
            // Buka WhatsApp di tab/jendela baru
            window.open(urlWhatsApp, '_blank');
            
            // Mengosongkan form
            contactForm.reset();
        });
    }
});