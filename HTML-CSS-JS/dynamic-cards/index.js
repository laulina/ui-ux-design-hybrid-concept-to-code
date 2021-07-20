// svg, stroke, and background properties
const svg = document.querySelector('.background-svg');
const strokeUp = document.querySelector('.background-strokeUp')
const strokeDown = document.querySelector('.background-strokeDown')

// card properties
const card1 = document.querySelector('.card:nth-of-type(1)');
const card2 = document.querySelector('.card:nth-of-type(2)');
const card3 = document.querySelector('.card:nth-of-type(3)');

// event listener added to card
card1.addEventListener('mouseover', function () {
    // svg fill color change and add transition
    svg.style.cssText = 'fill:purple; transition: all 0.5s ease;';
    strokeUp.style.cssText = 'fill:orange; transition: all 0.5s ease;';
    strokeDown.style.cssText = 'fill:green; transition: all 0.5s ease;';
})

// event listener added to card 2
card2.addEventListener('mouseover', function () {
    svg.style.cssText = 'fill:green; transition: all 0.5s ease;';
    strokeUp.style.cssText = 'fill:purple; transition: all 0.5s ease;';
    strokeDown.style.cssText = 'fill:orange; transition: all 0.5s ease;';
})

// event listener added to card 3
card3.addEventListener('mouseover', function () {
    svg.style.cssText = 'fill:orange; transition: all 0.5s ease;';
    strokeUp.style.cssText = 'fill:green; transition: all 0.5s ease;';
    strokeDown.style.cssText = 'fill:purple; transition: all 0.5s ease;';
})


