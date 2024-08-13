document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let index = 0;

    function showImage(newIndex) {
        index = newIndex;
        if (index >= totalImages) index = 0;
        if (index < 0) index = totalImages - 1;
        carouselImages.style.transform = `translateX(${-index * 100}%)`;
    }

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        showImage(index + 1);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        showImage(index - 1);
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        showImage(index + 1);
    }, 5000);
});
