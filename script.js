function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* ANIMAÇÃO EM CASCATA */
window.addEventListener("load", () => {
    const images = document.querySelectorAll(".gallery img");

    images.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.1}s`;
    });
});
