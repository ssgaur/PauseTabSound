var allVideoTiles = document.querySelectorAll('button[data-testid="play_pause_control"]');
for (var i = 0; i < allVideoTiles.length; i++) {
	console.log(allVideoTiles[i].innerText); 
	if (allVideoTiles[i].innerText == "Pause" ) {
		allVideoTiles[i].click(); 
	}
};
var embedYoutubeVideos = document.getElementsByClassName("ytp-play-button");
console.log(embedYoutubeVideos.length);
for (var i = 0; i < embedYoutubeVideos.length; i++) {
	console.log("some - " + embedYoutubeVideos[i].getAttribute("aria-label"));
	if (embedYoutubeVideos[i].getAttribute("aria-label") == "Pause") {
		embedYoutubeVideos[i].click();
	}
};
