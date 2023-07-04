import { api } from '../api/api.js';

const lcList = document.querySelector('#lc-list');
let offset = 0;

let media;
let max;

// let media = 246;
// let max = 600;
const sliderLine = document.querySelector('.lc-slider');
const rightSlider = document.querySelector('.right-slider');
const leftSlider = document.querySelector('.left-slider');

const getLastComics = async () => {
    try {
    const result = await api.getComics({
        limit: 3,
        dateDescriptor: 'lastWeek',
    }) ;
    console.log(result);
    lcList.innerHTML = createCardComics(result.results);
} catch (error) {
    location.replace('../404.html');
}
};

function createCardComics(array) {
    const markup = array
    .map(({ id, thumbnail: { path, extension }, title, creators }) => {
        const writer = creators.items.find(creator => creator.role === 'writer');
        const writerName = writer ? writer.name : '';
  
        return `
        <li class= 'lc-item' data-id="${id}">
        <a href="#" class="lastcomics-link-comics" data-id="${id}">
        <img src="${path}.${extension}" alt="${title}" class="lastcomics-image" data-id="${id}">
        <h3 class="lastcomics-comics-title" data-id="${id}">${title}</h3>
        <p class="creator-names" data-id="${id}">${writerName}</p>
      </a>
      </li>`;
    }) 
    .join('');
    return markup;
}

let lcData = getLastComics();
console.log(lcData);

function handleResize() {
    if (window.matchMedia('(min-width: 768px)').matches) {
        media = 350; max = 1000;
      // Виконати додаткові дії для медіа-запиту min-width: 768px
    } else {
        media = 246; max = 600;
      // ri Виконати додаткові дії для медіа-запиту менше 768px
    }
    offset = 0;
    sliderLine.style.left = -offset + 'px';
  }
  handleResize();

  window.addEventListener('resize', handleResize);

function rightSliderClick() {
    offset = offset + media;
    if (offset > max) {
      offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
  }

  function leftSliderClick() {
    offset = offset - media;
    if (offset < 0) {
      offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
  }

  rightSlider.addEventListener('click', rightSliderClick);
  leftSlider.addEventListener('click', leftSliderClick);



// document.querySelector('.right-slider').addEventListener('click', function () {
//     offset = offset + 250;
//     if (offset > 600) {offset = 0};
//     sliderLine.style.left = -offset + 'px'
// })

// document.querySelector('.left-slider').addEventListener('click', function () {
//     offset = offset - 250;
//     if (offset < 0) {offset = 0};
//     sliderLine.style.left = -offset + 'px'
// })



