//creare unh array con url, titolo e descrizione
//creare markup statico di container e slide
//rimuovi contenuto statico e utilizza l array di oggetti  per svilupparlo in modo dinamico 
//al click a destra o sinistra l immagine attiva si vede e anche il relativo titolo/testo
// aggiungere ciclo infinito. 

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

sliderImages.forEach(thisSlide => {
    console.log(thisSlide);

    const sliderMarkup= `
    <div class="slides position-relative">
         <img class="active" src="./assets/${thisSlide.image}" alt=""> 
         <div class="slide_caption position-absolute bottom-0 start-50 translate-middle-x">
             <h3>${thisSlide.title}</h3>
             <p>${thisSlide.text}</p>
        </div>
    </div>
    `
   console.log(sliderMarkup);

})




