const API_KEY = "55396873-a47aef8e45c54fcf79144888c";
const URL = "https://pixabay.com/api/";
let querry = "cat";
const type = "horizontal";
let page = 1;
let per_page = 9;

const listRef = document.querySelector(".list")
const loadBtn = document.querySelector(".btn")

function getImages() {
  return fetch(
    `${URL}?key=${API_KEY}&q=${querry}&image_type=${type}&page=${page}&per_page=${per_page}`,
  ).then((res) => res.json());
}

getImages().then((res) => createImages(res.hits));

function createImages(array) {
    const item = array.map(({largeImageURL, name}) => {
        return `<li class="item">
        <img src="${largeImageURL}" alt="${name}">
        </li>`
    }).join("")

    listRef.insertAdjacentHTML("beforeend", item)
}

loadBtn.addEventListener("click", () => {
    page += 1
    getImages().then((res) => {

   const totalPages = Math.ceil(res.totalHits / per_page)
   if(page > totalPages) {
    loadBtn.style.display = "none"
    return
   }
   else {

   }
   createImages(res.hits)
    })
})