import{a as p,S as m,i as a}from"./assets/vendor-67BWzQEt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="51393425-8a18948338a29ff5722d3f1bb",g="https://pixabay.com/api/";function y(i){const r={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),d=document.querySelector(".loader"),v=new m(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img class="gallery-image" src="${o}" alt="${e}"/>
    </a>
    <div class="info">
      <div class="info-item">
        <h4>👍</h4>
        <p>${t}</p>
      </div>
      <div class="info-item">
        <h4>👁️</h4>
        <p>${s}</p>
      </div>
      <div class="info-item">
        <h4>💬</h4>
        <p>${u}</p>
      </div>
      <div class="info-item">
        <h4>⬇️</h4>
        <p>${f}</p>
      </div>
    </div>
  </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),v.refresh()}function b(){c.innerHTML=""}function P(){d.classList.remove("hidden")}function S(){d.classList.add("hidden")}const l=document.querySelector(".form"),q=l.elements["search-text"];l.addEventListener("submit",i=>{i.preventDefault();const r=q.value.trim();if(!r){a.warning({message:"Please enter a search query",position:"topRight"});return}b(),P(),y(r).then(o=>{o.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(L(o.hits),l.reset())}).catch(o=>{a.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
