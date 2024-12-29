console.log('init background.js')

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log('background.js > msg')
    console.log(tab.url);
    if (tab.url.includes('playlists')) {
        chrome.tabs.sendMessage(tabId, {
            type: "on_playlists",
            page: tab.url
        })
    }
})