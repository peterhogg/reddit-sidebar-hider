chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.insertCSS(null,{"code":".side{display:none};"})
});
