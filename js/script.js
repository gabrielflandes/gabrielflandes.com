const heroBackground = document.querySelector(".hero-background");

if (heroBackground) {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        heroBackground.style.transform = `translateY(${scrollY * 0.25}px)`;
    });
}