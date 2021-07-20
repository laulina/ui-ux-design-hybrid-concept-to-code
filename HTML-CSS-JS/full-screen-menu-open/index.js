// button and navigation properties
const menu = document.querySelector('button');
const navigation = document.querySelector('nav');
// all section properties
const sections = document.querySelectorAll('main section');

// event listener added to menu
menu.addEventListener('click', () => {
    // toggle navigation - menu items displayed
    navigation.classList.toggle('nav-active')
     // each section getting description
    sections.forEach((i) => {
        i.style.display = 'block'
        i.classList.toggle('rotate-active')
        i.classList.toggle('closed')
    })
})

// buttons and strokes properties
const button = document.querySelector('button');
const strokeTop = document.querySelector('.top');
const strokeMiddle = document.querySelector('.middle');
const strokeBottom = document.querySelector('.bottom');

// event listener added to burger menu button
button.addEventListener('click', function () {
    strokeTop.classList.toggle('top-active')
    strokeMiddle.classList.toggle('middle-active')
    strokeBottom.classList.toggle('bottom-active')
})