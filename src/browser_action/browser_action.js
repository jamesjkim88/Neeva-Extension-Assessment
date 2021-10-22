/*

TASKS:

  - Receive the messages from content.js to render total number of ads on current url
    - Keep specific number of ads the same for original tab url
      
  - Render total number of ads in last 24 hrs
    - make function comptaible for executeScript to background.js can run it
    - setup counter to count total number ads
    - setup timer to count 24 hrs
    - render total ads counted thus far and timer onto pop html
      - HTML elements have been created

*/
let totalCount = document.querySelector('#total-count');
let countBtn = document.querySelector('#count-submit');
let inputVal = document.getElementById('input-val');
let searchBtn = document.querySelector('#search');



// counter for total number of ads in last 24 hrs
let counter = 0;

chrome.storage.sync.get(['totalAds'], ads => {
  console.log(ads.totalAds);
  console.log(ads.totalAds);
  console.log(`${ads.totalAds} ads`);
  if(ads.totalAds){
    console.log('ding');
    totalCount.innerHTML = `${ads.totalAds} ads`;
  };
});

// searchBtn.addEventListener('click', evt => {
//   evt.preventDefault();
//   console.log(inputVal.value);
//   // chrome.storage.sync.set({inputVal: inputVal.value})
//   chrome.tabs.query({active: true, currentWindow: true}, tab => {
//     console.log(tab[0].url);
//     chrome.tab.update(tab[0].id, {url: inputVal.value})
//   })
// })