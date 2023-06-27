import { api } from '../api/api.js';
import {
  loader,
  renderLoader,
  hideLoader,
} from '../api/loader-placeholder.js';

const rcImgList = document.querySelector('.rc-list');
const rcDescrList = document.querySelector('.rc-descr-list');
const btn = document.querySelector('.rc-btn-container');
const rcBox = document.querySelector('.rc-box');


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
}console.log(results);
rcImgList.innerHTML = randomImgMarkup(results);
rcDescrList.innerHTML = randomDeskrMarkup(results);
};

let rcData = getRandomFive()
console.log(rcData);

function randomImgMarkup(array) {
    const markup = array
      .map(({ id, thumbnail }) => {
        return `  <li class='rc-item slide' data-id="${id}">
        <picture>
        <source media="(min-width: 1440px)" srcset="${thumbnail.path}.${thumbnail.extension}" />
        <source media="(min-width: 375px)" srcset="${thumbnail.path}.${thumbnail.extension}"/>
        <img class="rc-img" data-id="${id}"
          src='${thumbnail.path}.${thumbnail.extension}'
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
  

