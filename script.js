// Smooth button interaction

function contactSeller() {

    const email = "your-email@example.com";

    window.location.href =
        "mailto:" + email +
        "?subject=Finance Manager - Demo Request" +
        "&body=Hi, I am interested in Finance Manager. I would like to know more about the app and pricing.";

}


// Add subtle reveal animations

const revealElements = document.querySelectorAll(
    ".feature-card, .step, .security-card, .price-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
