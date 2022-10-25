//creare unh array con url, titolo e descrizione
//creare markup statico di container e slide
//rimuovi contenuto statico e utilizza l array di oggetti  per svilupparlo in modo dinamico 
//al click a destra o sinistra l immagine attiva si vede e anche il relativo titolo/testo
// aggiungere ciclo infinito. 
const sliderDomEl= document.querySelector('.slider');
const iconsEl = document.querySelector('.icons');
let activeSlide = 0;
//seleziono bottoni next e prev
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');

const sliderImages = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//ciclo dentro array e seleziono valori da inserire in markup

sliderImages.forEach((thisSlide, i) => {
    console.log(thisSlide);

    const sliderMarkup= `
    <div class="slides text-center position-relative ${i === activeSlide ? 'active' : ''}">
       <img src="./assets/${thisSlide.image}" alt=""> 
       <div class="slide_caption position-absolute  bottom-0 start-50 translate-middle-x">
           <h3>${thisSlide.title}</h3>
           <p>${thisSlide.text}</p>
       </div>
    </div>
    `
   console.log(sliderMarkup);

   const iconMarkup = `<img class="img-fluid ${i === activeSlide ? 'active' : ''}" src="./assets/${thisSlide.image}" alt="">`
   //creo collegamento con dom e inserisco slides in modo dinamico
   sliderDomEl.insertAdjacentHTML('afterbegin', sliderMarkup);

   

   iconsEl.insertAdjacentHTML('afterbegin', iconMarkup);
    
})

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

setInterval(() => {
    nextImage()
}, 3000);

function prevImage(){
    //ascolto per prev click
    //cerco slide attiva
    const currentSlide = document.querySelector('.slider > .slides.active');
    console.log(currentSlide);
    const currentIcon = document.querySelector('.icons > img.active');
    //tolgo classe e decremento di uno 
    currentSlide.classList.remove('active');
    currentIcon.classList.remove('active');
    activeSlide--
    if (activeSlide < 0){
        activeSlide = sliderImages.length -  1;
    }
    //seleziono precedente e applico classe active
    const allSlides = document.querySelectorAll('.slider > .slides');
    allSlides[activeSlide].classList.add('active');
    const allIcons = document.querySelectorAll('.icons > img');
    allIcons[activeSlide].classList.add('active');  
}

function nextImage(){
    //cerco slide attiva
    const currentSlide = document.querySelector('.slider > .slides.active');
    console.log(currentSlide);
    const currentIcon = document.querySelector('.icons > img.active');
    //tolgo classe e aumenta di uno 
    currentSlide.classList.remove('active');
    currentIcon.classList.remove('active');
    activeSlide++
    if (activeSlide === sliderImages.length){
        activeSlide = 0;
    }
    //seleziono successiva e applico classe active
    const allSlides = document.querySelectorAll('.slider > .slides');
    const nextSlide = allSlides[activeSlide];
    nextSlide.classList.add('active');
    const allIcons = document.querySelectorAll('.icons > img');
    allIcons[activeSlide].classList.add('active');  
}