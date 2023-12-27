var video = document.getElementById('studyVideo');
var playlist = document.getElementById('playlist'); 
var videoBtn = document.getElementById('videoButton');
var playlistButton = document.getElementById('playlistButton');
var APIkey = "AIzaSyAVKWlv9PIfIlYW-TlovuwsHQwJ_mBhjIw";
var playlistID = "PLjFqhT1lJSsAgY9h3kg4vL2wQkSPfzKzp";
var videoIds = [
    '08DochENii8',
    '1O1WyCF6gUU',
    '6bew5KjOPIA',
    '5tZU1ok0tZs',
    '10mVpkLNq6M'
];
var videoIndex = -1;

var playlistIndex = 0;
var playlistVideoIds = [];

function loadVideo() { 
    if (videoIndex == videoIds.length - 1) {
        videoIndex = 0;
    } else {
        videoIndex++;
    }
    var videoId = videoIds[videoIndex];
    video.src = "https://www.youtube.com/embed/" + videoId;
}

function fetchPlaylist() {
    var url = "https://www.googleapis.com/youtube/v3/playlistItems" + "?part=snippet&maxResults=50&playlistId=" + playlistID + "&key=" + APIkey;
    fetch(url)
        .then(response => response.json()) 
        .then(data => {            
            playlistVideoIds = data.items.map(item => item.snippet.resourceId.videoId);
            changeVideo(playlistIndex);
        });
}

function changeVideo(index) {
    var iframe = document.getElementById('playlist');
    iframe.src = "https://www.youtube.com/embed/" + playlistVideoIds[index];
    playlistIndex = index; 
}

function loadPlaylistVideo() { 
    if (playlistIndex == playlistVideoIds.length - 1) {
        playlistIndex = 0;
    } else {
        playlistIndex++;
    }
    var videoId = playlistVideoIds[playlistIndex];
    playlist.src = "https://www.youtube.com/embed/" + videoId;
}

fetchPlaylist();
videoBtn.addEventListener('click', loadVideo);
playlistButton.addEventListener('click', loadPlaylistVideo);
loadVideo();

// reminder bug 
// change playlist 
// playlist loop problem 
