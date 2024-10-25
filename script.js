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

// Change button background color on hover
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.background = 'linear-gradient(45deg, #0078D7, #5BC0DE)';
});
ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.background = '#5BC0DE';
});
