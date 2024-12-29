console.log('init content.js')

chrome.runtime.onMessage.addListener((obj, sender, response) => {
    console.log('content.js < msg')
    if( obj.type === 'on_playlists'){
        console.log('on playlists page')
        overlay()
    }
})

function overlay() {
    //yt-core-attributed-string
    // const playlistContainer = document.getElementById('contents')
    // let playlists = [...playlistContainer.children]
    // for (let playlist of playlists) {
    //     playlist = [...playlist.children]
    //     playlist = playlist[0]
    //     console.log(playlist)
    // }
    let playlists = xpath("//a[@class='yt-lockup-metadata-view-model-wiz__title']")
    console.log(playlists)
}

function xpath(xpathToExecute){
    var result = [];
    var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
        result.push( nodesSnapshot.snapshotItem(i) );
    }
    return result;
}