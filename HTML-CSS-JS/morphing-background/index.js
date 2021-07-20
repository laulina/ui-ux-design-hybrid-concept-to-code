// svg path property
const svg = document.querySelector('.background svg path');
// storing the svg path
const svgPath = svg.getAttribute('d');
// new svg path property
const svgNewPath = "M-446,1199C-446,1199 -843,362.333 -744,297C-645,231.667 -598,-159.333 -499,-216C-400.64,-272.3 4.841,-158.333 158,-246C523.479,-455.196 796.667,-84.333 895,-172C993.333,-259.667 1281.67,35.667 1392,-52C1502.33,-139.667 2054,-52 2054,-52L2054,1206L-446,1199Z";

// buttons and main intro properties
const btn = document.querySelector('section button');
const btnBack = document.querySelector('header button');
const main = document.querySelector('main')

// event listener added to buttons and main intro
btn.addEventListener('click', ()=> {
    // new svg path turning into new path
    svg.setAttribute('d', svgNewPath);
    // hiding the next button
    btn.classList.add('btn-fade');
    // show text
    setTimeout(() => {
        main.classList.add('main-active')
    }, 400);
})

// event listener added to back button
btnBack.addEventListener('click', () => {
    svg.setAttribute('d', svgPath);
    setTimeout(() => {
        btn.classList.remove('btn-fade')
    }, 800);
    main.classList.remove('main-active')
})

