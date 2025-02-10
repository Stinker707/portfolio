import videoPath from '../video/background-fon.mp4';

document.addEventListener('DOMContentLoaded', function () {
    var instance = $('#header').vide({
        mp4: videoPath,
        poster: 'path/to/fallback.jpg'
    });

    var video = instance.getVideoObject();
    if (video) {
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkit-playsinline', 'true');
        video.muted = true;
        video.play().catch(err => console.warn('Autoplay failed:', err));
    }
});