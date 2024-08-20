import{S as h,i as p}from"./assets/vendor-f33cd494.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",m=t=>{const o=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?key=45535880-f63e8525243c88ed6c06e2baa&${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},f=t=>`<li class="galerry-item">
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
</li>`,n=document.querySelector(".serch-form"),i=document.querySelector(".galery-list"),c=new h(".galery-list a",{captionsData:"alt",captionDelay:250}),d=t=>{t.preventDefault();const o=n.elements.serch.value;i.innerHTML='<span class="loader"></span>',m(o).then(s=>{if(s.hits.length===0){p.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML="",n.reset();return}const a=s.hits.map(e=>f(e)).join("");i.innerHTML=a,c.refresh(),setTimeout(()=>{i.innerHTML=a,c.refresh()},1e3)}).catch(s=>{console.log(s)})};n.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
