
 const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchedQuery) => {
    const urlParams = new URLSearchParams({
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });


       return fetch(`${BASE_URL}?key=45535880-f63e8525243c88ed6c06e2baa&${urlParams}`).then(
        respons => {
        if (!respons.ok) {
            throw new Error(respons.status);
        }
        return respons.json()
    });
 };
