const firstItems = document.querySelectorAll('.first');


const header2 = document.querySelector('.header2');
const chatbox2 = document.querySelector('.chatbox2');


header2.style.display = 'none';
chatbox2.style.display = 'none';


firstItems.forEach(item => {
  item.addEventListener('click', () => {
    
    item.classList.toggle('selected');
    
    
    const header1 = document.querySelector('.header1');
    const chatbox1 = document.querySelector('.chatbox1');
    
    header1.style.display = 'none';
    chatbox1.style.display = 'none';
    
    header2.style.display = '';
    chatbox2.style.display = '';
  });
});

// Obtén todas las imágenes con la clase "clickable-image"
const clickableImages = document.querySelectorAll('.clickable-image');

// Agrega un event listener a cada imagen
clickableImages.forEach(image => {
  image.addEventListener('click', () => {
    // Agrega o quita la clase "enlarged" para cambiar el tamaño de la imagen
    image.classList.toggle('enlarged');
  });
});

const clickableImage = document.querySelector('.clickable-image');
const overlay = document.getElementById('overlay');

clickableImage.addEventListener('click', () => {
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
    }
});



 