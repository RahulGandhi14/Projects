//Movement animation to happen

//Items
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const sneaker = document.querySelector('.sneaker img');
const title = document.querySelector('.title');
const description = document.querySelector('.info h3');
const purchase = document.querySelector('.purchase button');
const sizes = document.querySelector('.sizes');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX) / 15;
    let yAxis = (window.innerHeight/2 - e.pageY) / 15 ;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    //Pop-Up
    title.style.transform = `translateZ(110px)`;
    sneaker.style.transform = `translateZ(160px) rotateZ(-30deg)`;
    description.style.transform = `translateZ(100px)`;
    purchase.style.transform = `translateZ(85px)`;
    sizes.style.transform = `translateZ(75px)`;
});

//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Pop-Back
    title.style.transform = `translateZ(0px)`;
    sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
    description.style.transform = `translateZ(0px)`;
    purchase.style.transform = `translateZ(0px)`;
    sizes.style.transform = `translateZ(0px)`;
})