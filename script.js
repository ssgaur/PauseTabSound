function pauseYoutube(){
	chrome.tabs.query({}, function(tabs){
        for(var i = 0; i < tabs.length; i++) {
            var found = tabs[i].url.search(/.*youtube.*/);
            console.log(tabs[i]);
            if(found != -1 ){

                chrome.tabs.executeScript(tabs[i].id,
                	{
                    	code:'document.getElementsByClassName("ytp-play-button")[0].click();'
                 	},
                 	function(results){
                 		console.log("Callback worked")}
                 );
            }                    
        }
    });
}


var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "play.png", tabId:tab.id});
  }
  else{
    chrome.browserAction.setIcon({path: "pause.png", tabId:tab.id});
  }
  pauseYoutube();
});


