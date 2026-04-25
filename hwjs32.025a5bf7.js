let e=1,t=document.querySelector(".list"),n=document.querySelector(".btn");function a(){return fetch(`https://pixabay.com/api/?key=55396873-a47aef8e45c54fcf79144888c&q=cat&image_type=horizontal&page=${e}&per_page=9`).then(e=>e.json())}function i(e){let n=e.map(({largeImageURL:e,name:t})=>`<li class="item">
        <img src="${e}" alt="${t}">
        </li>`).join("");t.insertAdjacentHTML("beforeend",n)}a().then(e=>i(e.hits)),n.addEventListener("click",()=>{e+=1,a().then(t=>{let a=Math.ceil(t.totalHits/9);if(e>a){n.style.display="none";return}i(t.hits)})});
//# sourceMappingURL=hwjs32.025a5bf7.js.map
