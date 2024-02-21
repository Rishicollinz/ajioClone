function scrollImages(direction) {
    const overall = document.querySelectorAll('.overall');
    const button = document.querySelectorAll('.rightCardButton');
    const lfButton = document.querySelectorAll('.leftCardButton');
    const cardWidth = document.querySelector('.cardItem').offsetWidth;

    button.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            overall[index].scrollBy({
                left: direction * cardWidth * 4,
                behavior: 'smooth'
            });
        });
    });

    lfButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            overall[index].scrollBy({
                left: direction * cardWidth * 4,
                behavior: 'smooth'
            });
        });
    });
}