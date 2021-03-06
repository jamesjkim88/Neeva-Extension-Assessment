// setting up global variables for modifyUrl helper function
let queries;
let modifiedUrl;
let url;

// starting 24 hour timer to collect total number of ads
setInterval( () => {
  let timer;
  let date = new Date();
  let hour = 24 - date.getHours();
  let min = 60 - date.getMinutes();
  let sec = 60 - date.getSeconds();
  if((min + '').length === 1){
    min = '0' + min;
  }
  if((sec + '').length === 1){
    sec = '0' + sec;
  }
  timer = `${hour}:${min}:${sec}`;
})

// receiving the url on current tab from content.js
chrome.runtime.onMessage.addListener(function(req, sender, sendResponse){
  console.log("background is running");

  // storing total number of ads seen on current tab onto storage
  // to render total number of ads on extension popup
  chrome.storage.sync.set({totalAds: req.totalAds});
});

// getting current tab url and modifying to append ' in 2021' at end of search query
chrome.tabs.onUpdated.addListener(info => {
  chrome.tabs.query({active: true, currentWindow: true}, tab => {
    url = tab[0].url
    console.log(tab);
    // if url exists
    if(url){
      // modifying url to concat ' in 2021'
      baseUrl = url.slice(0, url.indexOf('?'));
      queries = url.slice(url.indexOf('?')).split('&');
      queries[0] = queries[0] + "+in+2021";
      queries[1] = queries[1] + "+in+2021";
      queries = queries.join('&');
      modifiedUrl = baseUrl + queries;
      console.log(modifiedUrl);
      chrome.storage.sync.set({modifiedUrl});
      //chrome.tabs.update(tab.id, {url: modifiedUrl})
    };
  })
})




/********************************************************************************
********************************************************************************* 
OLD CODE AND DIFFERENT APPROACH ON MODIFYING CURRENT TAB URL TO APPEND ' in 2021'
********************************************************************************* 
********************************************************************************/

// listening for any changes on current tab
// chrome.tabs.onActivated.addListener(activeInfo => {
//   //getting current tab url
//   chrome.tabs.get(activeInfo.tabId, tab => {
//     url = tab.url

//     /*********************************************
//     Modifying current tab url to append ' in 2021'
//     **********************************************/
//     // if url exists
//     if(url){
//       // modifying url to concat ' in 2021'
//       baseUrl = url.slice(0, url.indexOf('?'));
//       queries = url.slice(url.indexOf('?')).split('&');
//       queries[0] = queries[0] + "+in+2021";
//       queries[1] = queries[1] + "+in+2021";
//       queries = queries.join('&');
//       modifiedUrl = baseUrl + queries;
//       console.log(modifiedUrl);
//       //chrome.storage.sync.set({modifiedUrl});
//     };
//   });
// });

// chrome.tabs.query({active: true, currentWindow: true}, tabs => {
//   chrome.tabs.update(tabs[0].id || tabs.id, {url: modifiedUrl})
// })
// chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
//   console.log(tab);
//   if (tab.active && change.url) {
//       console.log("you are here: "+change.url);           
//   }
// });


// chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
//   console.log(tab);
//   if (tab.active && change.url) {
//       console.log("you are here: "+change.url);           
//   }
// });









