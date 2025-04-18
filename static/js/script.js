document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cta-btn');
    const text = 'Coming Soon....';
    let index = 1;

    function animateText() {
        button.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            index = 1;
        }
    }

    setInterval(animateText, 250);
});