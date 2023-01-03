const button = document.querySelector('button')
let beercon = document.querySelector('.beer-container')
button.addEventListener('click', (e) =>{
    let nav = document.querySelector('nav')
    nav.classList.toggle('hidden')
})

// =============
function f(e , id){
    let beers = document.getElementsByClassName('beer')
    for(i=0; i<beers.length; i++){
        beers[i].classList.add('hidden')
        let beer = document.getElementById(id)
        beer.classList.remove('hidden')
    }

    let buttons = document.querySelectorAll('.beer-1');
    for (let i=0; i<buttons.length;i++){
        buttons[i].classList.remove('active')
    }
    e.target.classList.add('active')
}
document.getElementById('default').click();

// ============
let open = document.querySelector('.open')
let modal = document.getElementById('modal')

open.addEventListener('click', (e) => {
    modal.classList.remove('hidden')
})
modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.add('hidden')
    }
})

// ============

function b(el) {
    const item = el.nextElementSibling;
    el.classList.toggle('active');
    item.classList.toggle('max-h-40')
}

// =============

let newcontainer = document.querySelector('.new-container')
let forms = document.querySelector('form')

forms.addEventListener('submit', (e) => {
    e.preventDefault();
    newcontainer.innerHTML = '<h1>구독해주셔서 감사합니다.</h1>'
})