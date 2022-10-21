//creare unh array con url, titolo e descrizione
//creare markup statico di container e slide
//rimuovi contenuto statico e utilizza l array di oggetti  per svilupparlo in modo dinamico 
//al click a destra o sinistra l immagine attiva si vede e anche il relativo titolo/testo
// aggiungere ciclo infinito. 
const sliderDomEl= document.querySelector('.slider');

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
    <div class="slides text-center position-relative">
       <img class="${i === activeSlide ? 'active' : ''}" id="this" src="./assets/${thisSlide.image}" alt=""> 
       <div class="slide_caption position-absolute  bottom-0 start-50 translate-middle-x">
           <h3 class="${i === activeSlide ? 'active' : ''}" id="this">${thisSlide.title}</h3>
           <p class="${i === activeSlide ? 'active' : ''}" id="this">${thisSlide.text}</p>
       </div>
    </div>
    `
   console.log(sliderMarkup);
   //creo collegamento con dom e inserisco slides in modo dinamico
   sliderDomEl.insertAdjacentHTML('afterbegin', sliderMarkup);
    
})


//ascolto per prev click
prevBtn.addEventListener('click', function (){
    //cerco slide attiva
    const currentSlide = document.querySelector('.slides > img.active');
    console.log(currentSlide);
    //tolgo classe e decremento di uno 
    currentSlide.classList.remove('active');
    activeSlide--
    if (activeSlide < 0){
        activeSlide = sliderImages.length - 1;
    }
    //seleziono precedente e applico classe active
    const allSlides = document.querySelectorAll('.slides > img');
    const prevSlide = allSlides[activeSlide];
    console.log(prevSlide);
    prevSlide.classList.add('active');
    
})

//ascolto per next click
nextBtn.addEventListener('click', function (){
    //cerco slide attiva
    const currentSlide = document.querySelector('.slides > img.active');
    console.log(currentSlide);
    //tolgo classe e aumenta di uno 
    currentSlide.classList.remove('active');
    activeSlide++
    if (activeSlide > sliderImages.length ){
        activeSlide = sliderImages.lenght - 5;
    }
    //seleziono successiva e applico classe active
    const allSlides = document.querySelectorAll('.slides > img');
    const nextSlide = allSlides[activeSlide];
    nextSlide.classList.add('active');
    
})
