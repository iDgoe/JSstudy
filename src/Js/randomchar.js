import { api } from '../api/api.js';
import {
  loader,
  renderLoader,
  hideLoader,
} from '../api/loader-placeholder.js';

const rcImgList = document.querySelector('.rc-list');
const rcDescrList = document.querySelector('.rc-descr-list');
let currentIndex = 0;
let currentIndexImg = 0;
let liImg = null;
let liText = null;



const getRandomOffset = () => {
    return Math.round(Math.random() * 1561);
  };

console.log(getRandomOffset());

const getRandomFive = async () => {
    let results =[];
    for (let i = 0; i < 5; i += 1) {
        const result = await api.getCharacters({
          limit: 1,
         offset: getRandomOffset(),
        });
        results.push(result[0]);
}
// console.log(results);
rcImgList.innerHTML = randomImgMarkup(results);
rcDescrList.innerHTML = randomDeskrMarkup(results);
setInterval(nextSlide, 3500);
liImg = document.querySelectorAll('.rc-img');
liText = document.querySelectorAll('.rc-descr-item');
};

let rcData = getRandomFive()
console.log(rcData);

function randomImgMarkup(array) {
    const markup = array
      .map(({ id, thumbnail }) => {
        const securePath = thumbnail.path.replace('http://', 'https://');
        const secureExtension = thumbnail.extension;
        return `  <li class='slide rc-img' data-id="${id}">
        <picture>
        <source media="(min-width: 1440px)" srcset="${securePath}.${secureExtension}" />
        <source media="(min-width: 375px)" srcset="${securePath}.${secureExtension}"/>
        <img class="rc-img" data-id="${id}"
          src='${securePath}.${secureExtension}'
          alt=''
        /></picture>`;
    })
    .join('');

  return markup;
}

function randomDeskrMarkup(array) {
    const markup = array
      .map(({ name, description, id }) => {
        let deskr = description;
        if (deskr == ""){deskr = 'No description'};
        return `
      <li class='rc-descr-item' data-id="${id}">
        <h3 class='rc-descr-title' data-id="${id}">${name}</h3>
        <p class='rc-descr-text' data-id="${id}">${deskr}</p>
      </li>`;
      })
      .join('');
    return markup;
  }
  
  function nextSlide () {
    liImg[currentIndexImg].className = 'slide rc-img';
    liText[currentIndex].className = 'rc-descr-item';
    currentIndexImg = (currentIndexImg + 2) % liImg.length;
    currentIndex = (currentIndex + 1) % liText.length;
    liImg[currentIndexImg].className = 'slide rc-img showing';
    liText[currentIndex].className = 'rc-descr-item active-text';
  };





