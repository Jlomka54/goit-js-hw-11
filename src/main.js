import { fetchPhotos } from './js/pixabay-api.js';
import { createGalerryCard } from './js/render-function.js';
import iziToast from 'izitoast';
import SimpleLightbox from "simplelightbox";



const formEl = document.querySelector('.serch-form');
const galeryList = document.querySelector('.galery-list');

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


const onSerchPhotos = event => {
    event.preventDefault();
    const serchValue = formEl.elements.serch.value;

    fetchPhotos(serchValue)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.warning({
    message: 'Sorry, there are no images matching your search query. Please try again!',
                });

                galeryList.innerHTML = '';
                formEl.reset();

                return;
            }
            console.log(data);

            const galleryCardsTemplate = data.hits.map(photoInfo => createGalerryCard(photoInfo)).join('');
           
            galeryList.innerHTML = galleryCardsTemplate;
}).catch(erroe =>
    {
        console.log(erroe); 
        
    });
 
    
};

new SimpleLightbox('.gallery a', {
captionsData: 'alt',
  captionDelay: 250,
});

formEl.addEventListener('submit', onSerchPhotos)