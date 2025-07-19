import{a as p,S as m,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="51393425-8a18948338a29ff5722d3f1bb",y="https://pixabay.com/api/";async function g(o){const r={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),v=new m(".gallery a");function L(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img class="gallery-image" src="${i}" alt="${e}"/>
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
  `).join("");c.insertAdjacentHTML("beforeend",r),v.refresh()}function b(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const d=document.querySelector(".form"),w=d.elements["search-text"];d.addEventListener("submit",async o=>{o.preventDefault();const r=w.value.trim();if(!r){n.warning({message:"Please enter a search query",position:"topRight"});return}b(),S();try{const i=await g(r);i.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(i.hits)}catch{n.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
