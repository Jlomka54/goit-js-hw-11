import{S as p,i as l}from"./assets/vendor-f33cd494.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",m=t=>{const o=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?key=45535880-f63e8525243c88ed6c06e2baa&${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},d=t=>`<li class="galerry-item">
    <a href="${t.largeImageURL}" ><img class="gallery-item-img" alt='${t.tags}' src='${t.webformatURL}'></img></a>
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
</li>`,n=document.querySelector(".search-form"),c=document.querySelector(".gallery-list"),h=document.querySelector(".loader-js"),f=new p(".gallery-list a",{captionsData:"alt",captionDelay:250}),g=t=>{t.preventDefault();const o=n.elements.search.value;c.innerHTML="",m(o).then(s=>{if(o.trim()===""){l.error({message:"Search value"});return}if(h.classList.add("loader"),s.hits.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",n.reset();return}const a=s.hits.map(e=>d(e)).join("");h.classList.remove("loader"),c.innerHTML=a,f.refresh()}).catch(s=>{l.error({message:`${s}`})})};n.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
