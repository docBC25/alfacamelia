window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 1.3;

        if (scrollPosition > sectionTop) {
            section.classList.add('active');
        }
    });
});

// Redirection vers le numéro de téléphone sur le clic du bouton
const appointmentBtn = document.querySelector('.appointment-btn');
appointmentBtn.addEventListener('click', () => {
    window.location.href = "tel:+33645345078";
});
