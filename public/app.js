'use strict';

const searchBtn = document.getElementById('search-btn');
const searchContainer = document.getElementById('search-container');
const closeBtn = document.getElementById('close-search');
const firstDescription = document.getElementById('first-description');
const firstPargraph = document.getElementById('first-paragraph');
const secondDescription = document.getElementById('second-description');
const thirdDescription = document.getElementById('third-description');
const forthDescription = document.getElementById('forth-description');
const fifthDescription = document.getElementById('fifth-description');
const secondParagraph = document.getElementById('second-paragraph');
const sixthDescription = document.getElementById('sixth-description');
const seventhDescription = document.getElementById('seventh-description');
const eightDescription = document.getElementById('eight-description');
const createParagraph = document.createElement('p');
const firstImg = document.getElementById('first-section-img');
const secondImg = document.getElementById('second-section-img');
const secondSection = document.getElementById('second-section-div');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  searchContainer.classList.add('hidden');
});

// making first section buttons dynamic
function addDescription(a, b, c) {
  b.innerText = c;
  b.classList = 'mt-1 text-base font-light';
  a.classList.add('bg-[#efecfe]');
  a.appendChild(b);
}

function addDescriptionTwo(a, b, c) {
  b.innerText = c;
  b.classList = 'mt-1 text-base font-light';
  a.classList.add('bg-[#ecf5fe]');
  a.appendChild(b);
}

firstDescription.addEventListener('click', () => {
  firstDescription.classList.add('bg-[#efecfe]');
  firstPargraph.classList.remove('hidden');
  secondDescription.classList.remove('bg-[#efecfe]');
  thirdDescription.classList.remove('bg-[#efecfe]');
  forthDescription.classList.remove('bg-[#efecfe]');
  firstImg.src = 'img/first-section-phone.png';
});

secondDescription.addEventListener('click', () => {
  addDescription(
    secondDescription,
    createParagraph,
    'Get up to 10% in annual rewards by putting your crypto to work.',
  );
  firstPargraph.classList.add('hidden');
  firstDescription.classList.remove('bg-[#efecfe]');
  thirdDescription.classList.remove('bg-[#efecfe]');
  forthDescription.classList.remove('bg-[#efecfe]');
  firstImg.src = 'img/first-section2.png';
});

thirdDescription.addEventListener('click', () => {
  addDescription(
    thirdDescription,
    createParagraph,
    'Sleep better at night knowing only you can access your funds.',
  );
  firstPargraph.classList.add('hidden');
  firstDescription.classList.remove('bg-[#efecfe]');
  secondDescription.classList.remove('bg-[#efecfe]');
  forthDescription.classList.remove('bg-[#efecfe]');
  firstImg.src = 'img/first-section3.png';
});

forthDescription.addEventListener('click', () => {
  addDescription(
    forthDescription,
    createParagraph,
    'Use dapps, collect NFTs, and unlock the power of web3.',
  );
  firstPargraph.classList.add('hidden');
  firstDescription.classList.remove('bg-[#efecfe]');
  secondDescription.classList.remove('bg-[#efecfe]');
  thirdDescription.classList.remove('bg-[#efecfe]');
  firstImg.src = 'img/first-section4.png';
});

fifthDescription.addEventListener('click', () => {
  fifthDescription.classList.add('bg-[#ecf5fe]');
  secondParagraph.classList.remove('hidden');
  sixthDescription.classList.remove('bg-[#ecf5fe]');
  seventhDescription.classList.remove('bg-[#ecf5fe]');
  eightDescription.classList.remove('bg-[#ecf5fe]');
  secondImg.src = 'img/second-section1.png';
  secondSection.classList = 'absolute left-[32rem] top-[66rem]';
});

sixthDescription.addEventListener('click', () => {
  addDescriptionTwo(
    sixthDescription,
    createParagraph,
    'Get up to 10% in annual rewards by putting your crypto to work.',
  );
  firstPargraph.classList.add('hidden');
  fifthDescription.classList.remove('bg-[#ecf5fe]');
  seventhDescription.classList.remove('bg-[#ecf5fe]');
  eightDescription.classList.remove('bg-[#ecf5fe]');
  secondImg.src = 'img/second-section2.png';
  secondSection.classList = 'absolute left-[24rem] top-[66rem]';
});

seventhDescription.addEventListener('click', () => {
  addDescriptionTwo(
    seventhDescription,
    createParagraph,
    'Get up to 10% in annual rewards by putting your crypto to work.',
  );
  firstPargraph.classList.add('hidden');
  fifthDescription.classList.remove('bg-[#ecf5fe]');
  sixthDescription.classList.remove('bg-[#ecf5fe]');
  eightDescription.classList.remove('bg-[#ecf5fe]');
  secondImg.src = 'img/second-section3.png';
  secondSection.classList = 'absolute left-[32rem] top-[66rem]';
});

eightDescription.addEventListener('click', () => {
  addDescriptionTwo(
    eightDescription,
    createParagraph,
    'Get up to 10% in annual rewards by putting your crypto to work.',
  );
  firstPargraph.classList.add('hidden');
  fifthDescription.classList.remove('bg-[#ecf5fe]');
  sixthDescription.classList.remove('bg-[#ecf5fe]');
  seventhDescription.classList.remove('bg-[#ecf5fe]');
  secondImg.src = 'img/second-section4.png';
  secondSection.classList = 'absolute top-[62rem] left-[2rem] ';
});
