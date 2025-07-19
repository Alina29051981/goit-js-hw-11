/* empty css                      */import{a as p,S as f,i as a}from"./assets/vendor-rOMtvQ2t.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="51378857-ce26c557409bd50545eef808f",m="https://pixabay.com/api/";async function g(s){const o={key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await p.get(m,{params:o})).data}catch{throw new Error("Failed to fetch images. Please try again later.")}}const l=document.querySelector(".gallery");let i=null;function y(s){const o=s.map(e=>`
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
  `).join("");l.insertAdjacentHTML("beforeend",o),i?i.refresh():i=new f(".gallery a")}function h(){l.innerHTML=""}function v(){document.querySelector("#loading-message")||document.body.insertAdjacentHTML("beforeend",`
      <p id="loading-message" style="
        text-align: center;
        font-size: 16px;
        color: #2e2f42;
        margin: 20px auto;
      ">
        Loading images, please wait...
      </p>
    `)}function L(){const s=document.querySelector("#loading-message");s&&s.remove()}const d=document.querySelector(".form"),b=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async s=>{s.preventDefault();const o=b.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}h(),v();try{const e=await g(o);e.hits.length===0?a.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):y(e.hits)}catch(e){a.error({title:"Error",message:e.message,position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
