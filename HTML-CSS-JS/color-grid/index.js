// h1, h2, button properties
const h1 = document.querySelector('main h1');
const h2 = document.querySelector('main h2');
const btn = document.querySelector('main button');

// all the div inside section properties
const boxes = document.querySelectorAll('section div');

// event listener added to button - mouse over
btn.addEventListener('mouseover', ()=> {
    // all active classes
    h1.classList.add('heading-active');
    h2.classList.add('heading-active');
    btn.classList.add('btn-active');

    // loop over all divs
    boxes.forEach((j) => {
        j.style.cssText = `transform: scale(0)`;
        j.classList.add('scale-up');
        j.classList.remove('scale-down');
    }) 
})

// event listener added to button - reverse to mouse out
btn.addEventListener('mouseout', () => {
    h1.classList.remove('heading-active');
    h2.classList.remove('heading-active');
    btn.classList.remove('btn-active');
    
    boxes.forEach((j) => {
        j.style.cssText = `transform: scale(1)`;
        j.classList.add('scale-down');
        j.classList.remove('scale-up');
    })
})