const apiKey = 'AIzaSyB9QtXq7767nN1DcRobWOGVncGzFO21mG8';
const script = document.createElement('script');
script.src = `https://www.youtube.com/iframe_api?api_key=${apiKey}`;
document.head.appendChild(script);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'fs': 1,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    
}

function onPlayerStateChange(event) {
   
}

function loadVideo() {
    const videoId = document.getElementById('videoId').value;
    if (videoId) {
        player.loadVideoById(videoId);
    } else {
        alert('Please enter a valid YouTube Video ID.');
    }
}
