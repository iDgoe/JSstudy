const firstBtn = document.querySelector('.first-slider-btn');
const middleBtn = document.querySelector('.middle-slider-btn');
const lastBtn = document.querySelector('.last-slider-btn');
const pantherImg = document.querySelector('.blackpanther-slider-img');
const spiderImg = document.querySelector('.spiderman-slider-img');
const hulkImg = document.querySelector('.hulk-slider-img');
const pantherCard = document.querySelector('.hero-png-panter');
const spiderCard = document.querySelector('.hero-png-spider');
const hulkCard = document.querySelector('.hero-png-hulk');
const circle = document.querySelector('.hero-circle');
const arrow = document.querySelector('.icon-arrow2');
const circleText = document.querySelector('.hero-circle-text');
const cardShadow = document.querySelector('.hero-gradient');



firstBtn.addEventListener('click', firstBtnClick);
middleBtn.addEventListener('click', middleBtnClick);
lastBtn.addEventListener('click', lastBtnClick);

function firstBtnClick() {
    firstBtn.style.backgroundColor = '#34387F';
    middleBtn.style.backgroundColor = '#171717';
    lastBtn.style.backgroundColor = '#171717';
    pantherImg.style.display = 'block';
    spiderImg.style.display = 'none';
    hulkImg.style.display = 'none';
    pantherCard.style.display = 'block';
    spiderCard.style.display = 'none';
    hulkCard.style.display = 'none';
    circle.style.background = 'radial-gradient(81.15% 81.15% at 50% 18.85%, #34387F 0%, #171717 100%)';
    arrow.style.fill = '#34387F';
    circleText.innerHTML = "BLACK PANTHER";
    cardShadow.style.background = '#34387F';
   
  };

function middleBtnClick() {
    firstBtn.style.backgroundColor = '#000000';
    lastBtn.style.backgroundColor = '#171717';
    middleBtn.style.backgroundColor = '#600404';
    spiderImg.style.display = 'block';
    pantherImg.style.display = 'none';
    hulkImg.style.display = 'none';
    pantherCard.style.display = 'none';
    spiderCard.style.display = 'block';
    hulkCard.style.display = 'none';
    circle.style.background = 'radial-gradient(81.15% 81.15% at 50% 18.85%, #600404 0%, #171717 100%)';
    arrow.style.fill = '#600404';
    circleText.innerHTML = "SPIDER MAN";
    cardShadow.style.background = '#600404';
  };

  function lastBtnClick() {
    lastBtn.style.backgroundColor = '#5B7F3C';
    firstBtn.style.backgroundColor = '#171717';
    middleBtn.style.backgroundColor = '#171717';
    pantherImg.style.display = 'none';
    spiderImg.style.display = 'none';
    hulkImg.style.display = 'block';
    pantherCard.style.display = 'none';
    spiderCard.style.display = 'none';
    hulkCard.style.display = 'block';
    circle.style.background = 'radial-gradient(81.15% 81.15% at 50% 18.85%, #5B7F3C 0%, #171717 100%)';
    arrow.style.fill = '#5B7F3C';
    circleText.innerHTML = "HULK";
    cardShadow.style.background = '#5B7F3C';
  };


//   const pantherCard = document.querySelector('.blackpanther-card-img');
// const spiderCard = document.querySelector('.spiderman-card-img');
// const hulkCard = document.querySelector('.hulk-card-img');
// const desc = document.querySelector('.characters-desc');
// const charactersBtn = document.querySelector('.hero-btn-characters');
// const hover = 'hero-btn-characters:hover{ background-color: #00ff00 }';
// const arrow = document.querySelector('.icon-arrow2');