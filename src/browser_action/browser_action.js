/*

TASKS:

  - Receive the messages from content.js to render total number of ads on current url
    - After recieivng the message...
      - render total number of ads on extension pop html
      - keep extension running at all times even when html is closed
      
  - Render total number of ads in last 24 hrs
    - make function comptaible for executeScript to background.js can run it
    - setup counter to count total number ads
    - setup timer to count 24 hrs
    - render total ads counted thus far and timer onto pop html
      - HTML elements have been created

*/
let totalCount = document.querySelector('#total-count');
let countBtn = document.querySelector('#count-submit');

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