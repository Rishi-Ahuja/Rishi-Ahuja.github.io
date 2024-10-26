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

// Function for smooth scrolling to content and hiding the landing screen
function scrollToContent() {
    document.getElementById('landing-screen').style.display = 'none';
    document.getElementById('header').classList.remove('hidden');
    window.scrollTo({
        top: document.getElementById('main-content').offsetTop,
        behavior: 'smooth'
    });
}

// Event listener for the Get Started button
document.querySelector('.btn').addEventListener('click', scrollToContent);

// Shrink header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-small');
    } else {
        header.classList.remove('header-small');
    }
});
