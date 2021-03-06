// html elements to turn background color to red
let mainAdsElemTop = document.querySelector("#tvcap");
let mainAdsElemBot = document.querySelector('#bottomads');
let ads1 = document.querySelector("#atvcap");
let adsSpan = document.querySelectorAll('.jpu5Q.VqFMTc.p8AiDd')

// html elements to gather total number of ads
let dataTextAd = document.querySelectorAll('[data-text-ad="1"]');
let dataPla = document.querySelector('[data-pla="1"]');
let topPlayGroupInner = document.querySelector('div.top-pla-group-inner');
let dataPlaAds = document.querySelectorAll('div.mnr-c.pla-unit');
let totalAds = dataTextAd.length + dataPlaAds.length;

// checking if these elements exists
if(mainAdsElemTop || mainAdsElemBot || ads1){
  // changing ad background color to red
  mainAdsElemTop.style.background = "red";
  mainAdsElemBot.style.background = "red";
  ads1.style.background = "red";
  adsSpan.forEach(e => {
    e.style.background = "red";
  })
}

// able to append ' in 2021' into search queries
// but it appends for all search queries on chrome :[
chrome.storage.sync.get(['modifiedUrl'], url => {
  console.log(url.modifiedUrl);
  if(window.localStorage){
    if(!localStorage.getItem('firstLoad')){
      localStorage['firstLoad'] = true;
      window.location.href = url.modifiedUrl;
      // checking if these elements exists after the page reloads with modified url
    }else{
      localStorage.removeItem('firstLoad');
    }
  }
});

// sending messages to background.js
chrome.runtime.sendMessage({totalAds}, (resp) => {
  console.log("message sent");
});

