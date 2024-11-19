// Dapatkan elemen tombol dan pop-up
const payButton = document.getElementById("payButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Fungsi untuk membuka pop-up
payButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

// Fungsi untuk menutup pop-up
closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});

// Tutup pop-up jika area luar di-klik
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.add("hidden");
    }
});
