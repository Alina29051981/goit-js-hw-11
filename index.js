/* empty css                      */import{a as u,S as f,i}from"./assets/vendor-BDlA6vKe.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const y="51378857-ce26c557409bd50545eef808f",m="https://pixabay.com/api/";async function g(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(m,{params:o})).data}catch{throw new Error("Failed to fetch images. Please try again later.")}}const p=document.querySelector(".gallery"),n=document.querySelector(".loader");let l=null;function h(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
      </a>
      <div class="info-row">
        <div class="info-block">
          <span>Likes</span>
          <span>${e.likes}</span>
        </div>
        <div class="info-block">
          <span>Views</span>
          <span>${e.views}</span>
        </div>
        <div class="info-block">
          <span>Comments</span>
          <span>${e.comments}</span>
        </div>
        <div class="info-block">
          <span>Downloads</span>
          <span>${e.downloads}</span>
        </div>
      </div>
    </li>
  `).join("");p.insertAdjacentHTML("beforeend",o),l?l.refresh():l=new f(".gallery a")}function v(){p.innerHTML=""}function L(){n.textContent="Loading images, please wait...",n.style.display="inline-block"}function b(){n.textContent="",n.style.display="none"}const d=document.querySelector(".form"),w=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}v(),L();try{const e=await g(o);e.hits.length===0?i.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):h(e.hits)}catch(e){i.error({title:"Error",message:e.message,position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
