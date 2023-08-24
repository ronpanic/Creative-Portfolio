const firstItems = document.querySelectorAll('.first');
const header2 = document.querySelector('.header2');
const chatbox2 = document.querySelector('.chatbox2');
const clickableImages = document.querySelectorAll('.clickable-image');
const overlay = document.getElementById('overlay');
let chatbox2Overflow = 'auto';

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
        chatbox2.style.display = 'block';
    });
});

clickableImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('enlarged');
        
        
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
            chatbox2Overflow = 'auto';
        } else {
            overlay.style.display = 'block';
            chatbox2Overflow = 'hidden';
        }
        
        chatbox2.style.overflowY = chatbox2Overflow;
    });
});
