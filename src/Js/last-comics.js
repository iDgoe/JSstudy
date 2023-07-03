import { api } from '../api/api.js';

const lcList = document.querySelector('#lc-list');

const getLastComics = async () => {
    // try {
    const result = await api.getComics({
        limit: 3,
        dateDescriptor: 'lastWeek',
    }) ;
    console.log(result);
    lcList.innerHTML = createCardComics(result.results);
// } catch (error) {
    // location.replace('../404.html');
// }
};

function createCardComics(array) {
    const markup = array
    .map(({ id, thumbnail: { path, extension }, title, creators }) => {
        const writer = creators.items.find(creator => creator.role === 'writer');
        const writerName = writer ? writer.name : '';
  
        return `<li class= 'lc-img' data-id="${id}">
        <a href="#" class="lastcomics-link-comics" rel="nofollow noreferrer noopener" data-id="${id}">
        <img src="${path}.${extension}" alt="${title}" class="lastcomics-image" data-id="${id}">
        <h3 class="lastcomics-comics-title" data-id="${id}">${title}</h3>
        <p class="creator-names" data-id="${id}">${writerName}</p>
      </a>
      </li>
        `;
    }) 
    return markup;
}

let lcData = getLastComics();
console.log(lcData);




