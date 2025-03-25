document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slope");

    function checkVisibility() {
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                img.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});