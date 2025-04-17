document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cta-btn');
    const text = 'Coming Soon...';
    let index = 0;

    function animateText() {
        button.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            index = 0;
        }
    }

    setInterval(animateText, 250);
});