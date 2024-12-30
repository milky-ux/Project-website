const images = ["assets/product1.svg", "assets/product2.svg", "assets/product3.svg"];
let currentIndex = 0;

function changeImage(direction) {
    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    }
    document.getElementById('productImage').src = images[currentIndex];
}