import{S as c,i as h}from"./assets/vendor-f33cd494.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",u=t=>{const s=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?key=45535880-f63e8525243c88ed6c06e2baa&${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},m=t=>`<li class="galerry-item">
    <a href="${t.largeImageURL}" ><img class="galery-item-img" alt='${t.tags}' src='${t.webformatURL}'></img></a>
     <ul class="photo-info-list">
    <li class="photo-info-item">
        <h4>Likes</h4>
        <p class="photo-paragraph">${t.likes}</p>
</li>
    <li class="photo-info-item">
         <h4>Views</h4>
        <p class="photo-paragraph">${t.views}</p>
    </li>
    <li class="photo-info-item">
         <h4>Commenst</h4>
        <p class="photo-paragraph">${t.comments}</p>
    </li>
    <li class="photo-info-item">
        <h4>Downloads</h4>
        <p class="photo-paragraph">${t.downloads}</p>
</li>
</ul> 
</li>`,l=document.querySelector(".serch-form"),n=document.querySelector(".galery-list");new c(".gallery a",{captionsData:"alt",captionDelay:250});const f=t=>{t.preventDefault();const s=l.elements.serch.value;u(s).then(r=>{if(r.hits.length===0){h.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",l.reset();return}console.log(r);const a=r.hits.map(e=>m(e)).join("");n.innerHTML=a}).catch(r=>{console.log(r)})};new c(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
