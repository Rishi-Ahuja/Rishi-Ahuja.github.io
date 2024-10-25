// Smooth scroll for the CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#features').scrollIntoView({
        behavior: 'smooth'
    });
});

// Animate features on scroll
const features = document.querySelectorAll('.feature');
window.addEventListener('scroll', () => {
    features.forEach((feature) => {
        const featurePosition = feature.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (featurePosition < windowHeight - 50) {
            feature.classList.add('animate');
        }
    });
});
