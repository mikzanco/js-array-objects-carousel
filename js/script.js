/*
1 ricerare container immagine in html
2 creare array con immagine titolo e descrizione
3 creare thumbnail sotto l'immagine principale
----------------------------------------


4 l'immagine attiva sarà illimunata a colori normali e rialzata con un bordo bianco.
5 le altre immagini scure a comporre tutta la linea.
6 creare due bottono uno avanti e uno indietro.
*/
// const container = document.querySelector('.container');
// const slider = document.querySelector('.slider');
// const thumbs = document.querySelector('.thumbs');



const images = [
    {
        paese: 'Argentina',
        commento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        immagine: 'img/argentina.jpg',
    },
    {
        paese: 'Chile',
        commento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        immagine: 'img/chile.jpg',
    },
    {
        paese: 'Colombia',
        commento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        immagine: 'img/colombia.jpg',
    },
    {
        paese: 'Perù',
        commento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        immagine: 'img/peru.jpg',
    },
    {
        paese: 'Sweden',
        commento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        immagine: 'img/sweden.jpg',
    },
];

const containerImages = document.querySelector('.my-carousel-images');
const containerThumb = document.querySelector('.my-thumbnails .inner');
const nextBtn = document.querySelector('.my-next-hook');
const prevBtn = document.querySelector('.my-prev-hook');

nextBtn.isNext = true;
prevBtn.isNext = false;

nextBtn.addEventListener('click', handleNextPrev);
prevBtn.addEventListener('click', handleNextPrev);

let counterImages = 0;

init();

function init(){

    // crep gli elementi per svuotare tutto.
    containerImages.innerHTML = '';
    containerThumb.innerHTML = '';

    // ciclo l'array di immagini e stampo in pagina e immagini

    images.forEach(image => {
        containerImages.innerHTML += getTemplateImage(image);
        containerThumb.innerHTML += getTemplateThumb(image);
    });
    activateImage();
    console.log('init');
}

function handleNextPrev(){
    deactivateImage();
    if(this.isNext){
        counterImages++;
        if(counterImages === images.length) counterImages = 0;
    }else{
        counterImages--;
        if(counterImages < 0) counterImages = images.length -1;
    }
    activateImage();

}

function activateImage(){
    document.getElementsByClassName('my-carousel-item ')[counterImages].classList.add('active');
    document.getElementsByClassName('my-thumbnail')[counterImages].classList.add('active');
}

function deactivateImage(){
    document.getElementsByClassName('my-carousel-item ')[counterImages].classList.remove('active');
    document.getElementsByClassName('my-thumbnail')[counterImages].classList.remove('active');
}

function getTemplateImage(image){
    const {immagine, paese, commento} = image;

    return `
    <div class="my-carousel-item" >
        <img class="img-fluid" src="${immagine}" alt="${paese}picture">
        <div class="item-description px-3">
            <h2>${paese}</h2>
            <p>${commento}</p>
        </div>
    </div>
    `
}

function getTemplateThumb(image){
    const {immagine, paese} = image;

    return `
    <div class="my-thumbnail ">
        <img class="img-fluid" src="${immagine}" alt="Thumbnail of ${paese} picture">
    </div>
    `
}


