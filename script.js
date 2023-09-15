const firstItems = document.querySelectorAll('.first');
const secondItems = document.querySelectorAll('.second');
const header1 = document.querySelector('.header1');
const header2 = document.querySelector('.header2');
const chatbox1 = document.querySelector('.chatbox1');
const chatbox2 = document.querySelector('.chatbox2');
const chatbox3 = document.querySelector('.chatbox3');
const chatbox4 = document.querySelector('.chatbox4');
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
const header3 = document.querySelector('.header3');
const header4 = document.querySelector('.header4');
const aboutItems = document.querySelectorAll('.about');
const bdark = document.querySelector('#color-page');
const body = document.querySelector('body');
const sunnyIcon = document.getElementById('sunny-icon');
const moonIcon = document.getElementById('moon-icon');

let chatbox2Overflow = 'auto';
let ellipsisClicked = false; 
let chatbClicked = false;
let peopleClicked = false; 

header1.style.display = '';
header2.style.display = 'none';
chatbox1.style.display = 'block';
chatbox2.style.display = 'none';
chatbox3.style.display = 'none';
chatbox4.style.display = 'none';
header3.style.display = 'none';
header4.style.display = 'none';
settings.style.display = 'none';
lenguageButton.style.display = 'none';
sunnyIcon.style.display = 'none';

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


aboutItems.forEach(item => {
    item.addEventListener('click', () => {
        header1.style.display = 'none';
        header2.style.display = 'none';
        header3.style.display = '';
        header4.style.display = 'none';
        chatbox1.style.display = 'none';
        chatbox2.style.display = 'none';
        chatbox3.style.display = 'block';
        chatbox4.style.display = 'none';
    });
});

firstItems.forEach(item => {
    item.addEventListener('click', () => {
        header1.style.display = 'none';
        header2.style.display = '';
        header3.style.display = 'none';
        header4.style.display = 'none';
        chatbox1.style.display = 'none';
        chatbox2.style.display = 'block';
        chatbox3.style.display = 'none';
        chatbox4.style.display = 'none';
    });
});

secondItems.forEach(item => {
    item.addEventListener('click', () => {
        header1.style.display = 'none';
        header2.style.display = 'none';
        header3.style.display = 'none';
        header4.style.display = '';
        chatbox1.style.display = 'none';
        chatbox2.style.display = 'none';
        chatbox3.style.display = 'none';
        chatbox4.style.display = 'block';
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

// DARKMODE //

sunnyIcon.addEventListener('click', () => {
    sunnyIcon.style.display = 'none';
    moonIcon.style.display = '';
    localStorage.setItem('darkmode', 'false');
});

moonIcon.addEventListener('click', () => {
    moonIcon.style.display = 'none';
    sunnyIcon.style.display = '';
    localStorage.setItem('darkmode', 'true'); 
});

load();

bdark.addEventListener('click' , e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});


function load() {
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode) {
        store('false');
    } else if(darkmode == 'true') {
        body.classList.add('darkmode');
        moonIcon.style.display = 'none';
        sunnyIcon.style.display = '';
    }
}

function store(value) {
    localStorage.setItem('darkmode', value);
}
