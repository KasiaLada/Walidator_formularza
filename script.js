// 

document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
});

async function fetchImages() {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?count=10&client_id=YOUR_ACCESS_KEY');
        const images = await response.json();

        const gallery = document.querySelector('.gallery');
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            gallery.appendChild(imgElement);
        });
    } catch (error) {
        console.error('Błąd podczas pobierania obrazów:', error);
    }
}