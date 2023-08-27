const firstItems = document.querySelectorAll('.first');
const header2 = document.querySelector('.header2');
const chatbox1 = document.querySelector('.chatbox1');
const chatbox2 = document.querySelector('.chatbox2');
const clickableImages = document.querySelectorAll('.clickable-image');
const overlay = document.getElementById('overlay');
const settings = document.getElementById('settings');
const ellipsis = document.querySelector('.ellipsis');
const chatbIcon = document.querySelector('.chatb'); 
const peopleIcon = document.querySelector('.people'); 
const settingsItem = document.querySelector('.settings-item'); 
const lenguageButton = document.querySelector('.lenguagebt'); 
const changelengButton = document.querySelector('.changeleng');
const lenguageButtons = document.querySelectorAll('.lenguagebt button');

let chatbox2Overflow = 'auto';
let ellipsisClicked = false; 
let chatbClicked = false;
let peopleClicked = false; 

header2.style.display = 'none';
chatbox1.style.display = 'block';
chatbox2.style.display = 'none';
settings.style.display = 'none';
lenguageButton.style.display = 'none';

ellipsis.addEventListener('click', () => {
    ellipsisClicked = !ellipsisClicked;
    settings.style.display = ellipsisClicked ? 'block' : 'none';
    ellipsis.style.backgroundColor = ellipsisClicked ? 'rgba(166, 166, 166, 0.2)' : 'transparent';
    ellipsis.style.borderRadius = ellipsisClicked ? '50%' : '0';
    ellipsis.style.padding = ellipsisClicked ? '4px' : '0';
});

chatbIcon.addEventListener('click', () => {
    chatbClicked = !chatbClicked;
    chatbIcon.style.backgroundColor = chatbClicked ? 'rgba(166, 166, 166, 0.2)' : 'transparent';
    chatbIcon.style.borderRadius = chatbClicked ? '50%' : '0';
    chatbIcon.style.padding = chatbClicked ? '4px' : '0';
});

peopleIcon.addEventListener('click', () => {
    peopleClicked = !peopleClicked;
    peopleIcon.style.backgroundColor = peopleClicked ? 'rgba(166, 166, 166, 0.2)' : 'transparent';
    peopleIcon.style.borderRadius = peopleClicked ? '50%' : '0';
    peopleIcon.style.padding = peopleClicked ? '4px' : '0';
});

firstItems.forEach(item => {
    item.addEventListener('click', () => {
        chatbox1.style.display = 'none';
        chatbox2.style.display = 'block';
    });
});

clickableImages.forEach(image => {
    image.addEventListener('click', () => {
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

changelengButton.addEventListener('click', () => {
    settingsItem.style.display = 'none';
    lenguageButton.style.display = 'block';
    
    lenguageButton.style.marginTop = '-6rem';
    lenguageButton.style.marginLeft = '5rem';
    lenguageButton.style.backgroundColor = '#1a1c2c';
    lenguageButton.style.borderRadius = '5px';
});


lenguageButtons.forEach(button => {
    button.addEventListener('click', () => {
        lenguageButton.style.display = 'none';
        settingsItem.style.display = 'block';
    });
});
