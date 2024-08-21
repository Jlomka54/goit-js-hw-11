import { fetchPhotos } from './js/pixabay-api.js';
import { createGalerryCard } from './js/render-function.js';
import iziToast from 'izitoast';
import SimpleLightbox from "simplelightbox";



const formEl = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader-js');

const galleryLightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});


const onSearchPhotos = event => {
    event.preventDefault();
    const searchValue = formEl.elements.search.value;
    galleryList.innerHTML = '';

    fetchPhotos(searchValue)
        .then(data => {
       
            if (searchValue.trim() === '') {
    iziToast.error({
    message: 'Search value',
    });
 
                return;
            }
            loader.classList.add('loader');

            if (data.hits.length === 0) {
                iziToast.warning({
    message: 'Sorry, there are no images matching your search query. Please try again!',
                });

                galleryList.innerHTML = '';
                formEl.reset();

                return;
            }

            const galleryCardsTemplate = data.hits.map(photoInfo => createGalerryCard(photoInfo)).join('');
            loader.classList.remove('loader');
            galleryList.innerHTML = galleryCardsTemplate;
            galleryLightbox.refresh();
            
}).catch(erroe =>
    {
        iziToast.error({
    message: `${erroe}`,
                }); 
        
    });
 
    
};



formEl.addEventListener('submit', onSearchPhotos)