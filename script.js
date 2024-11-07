document.addEventListener("DOMContentLoaded", () => {
    const landingPage = document.getElementById("landingPage");
    const header = document.getElementById("header");
    const getStartedBtn = document.getElementById("getStartedBtn");
    const forgeTitle = document.getElementById("forgeTitle");

    // Show header when scrolling down and hide landing page
    function toggleHeaderVisibility() {
        if (window.scrollY > 50) {
            header.classList.add("visible");
            landingPage.classList.add("minimize"); // Add class to minimize landing page
        } else {
            header.classList.remove("visible");
            landingPage.classList.remove("minimize"); // Restore full landing page
        }
    }

    // Confetti effect for Forge title
    forgeTitle.addEventListener("mouseenter", () => {
        for (let i = 0; i < 15; i++) {
            const symbol = document.createElement("span");
            symbol.classList.add("currency-symbol");

            // Set random position for confetti around Forge text
            symbol.style.setProperty("--random-x", Math.random());
            symbol.style.setProperty("--random-y", Math.random());

            // Position confetti directly from the center of the Forge text
            const rect = forgeTitle.getBoundingClientRect();
            symbol.style.left = `${rect.left + rect.width / 2}px`;
            symbol.style.top = `${rect.top + rect.height / 2}px`;

            symbol.innerText = "$€£¥₹".charAt(Math.floor(Math.random() * 5));
            document.body.appendChild(symbol);

            setTimeout(() => symbol.remove(), 1000);
        }
    });

    // Smooth scroll on Get Started button click
    getStartedBtn.addEventListener("click", () => {
        document.getElementById("why-choose-forge").scrollIntoView({ behavior: "smooth" });
    });

    // Scroll event for header visibility
    window.addEventListener("scroll", toggleHeaderVisibility);
});
