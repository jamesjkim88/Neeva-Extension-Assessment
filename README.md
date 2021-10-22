# Neeva Chrome Extension Assessement

### Tech Stack
  - Extension built by [Extensionizr]( https://extensionizr.com/).
  - Coded in Vanilla JavaScript, CSS3, and HTML5 semantics.
  - Old code and approach is commented out for reference.

### How to run
  - Clone/download the file.
  - Open a new tab on Google Chrome browser.
  - On the new tab type in 'chrome://extensions'.
  - Once the page is loaded toggle 'Developer mode' on.
  - Once Developer mode is on click on 'Load unpacked' and load the downloaded file.
  - After loading the file you'll see extension on the page along with Google Chrome toolbar.

### How to use
  - After the extension is installed.
    - Do a google search e.i 'best mattress'.
    - On the popup page of the extension.
      - You will see total number of Ads.

### Approach
  - Required brainstorming sessions to breakdown what the app is doing.
  - Initial concept and idea was to make the extension "constantly" running.
    - Collect current tab url when page loads.
    - Instantly change background color of ads to red when ads are detected.
    - Have the extension instantly count total number of ads on current page and render to `popup.html`.
    - Update current tab query search to append ' in 2021' right after the original search has been made.
  - Currently stumped on updating the url to append ' in 2021' in ths search query.

### Tasks and features
  - Making current page url modification more efficient.
  - Able to render total number of ads on that specific page/tab after using the extension on multiple pages/tabs.
  - Ability to count total number of ads in 24 hours.

