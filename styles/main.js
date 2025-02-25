// Custom Element
class DengueAlerta extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="alert">
                <h3>¡Alerta Nacional!</h3>
                <p>El Salvador enfrenta brote de dengue - Temporada 2024</p>
            </div>
        `;
    }
}
customElements.define('dengue-alerta', DengueAlerta);

// Eventos JavaScript
document.getElementById('preventionBtn').addEventListener('click', function() {
    document.querySelector('.prevention-content').classList.toggle('show');
});

function scaleCard(card) {
    card.style.transform = 'scale(1.05)';
}

function unscaleCard(card) {
    card.style.transform = 'scale(1)';
}

// Scroll Animation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});