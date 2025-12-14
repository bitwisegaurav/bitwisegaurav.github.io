(() => {
    const container = document.getElementById('screenshotsCarousel');
    if (!container) return;

    const prev = container.parentElement.querySelector('.prev');
    const next = container.parentElement.querySelector('.next');

    // 18rem card width + 2rem gap = 20rem total
    const CARD_WIDTH = 20 * 16; // Convert rem to pixels (assuming 1rem = 16px)

    prev.addEventListener('click', () => {
        container.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
        container.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    });
})();
