import videoPath from '../video/background-fon.mp4';

document.addEventListener('DOMContentLoaded', function() {
    $('#header').vide(videoPath, {
        autoplay: 'muted',
        loop: true,
        muted: true,
        playsinline: true,
        controls: false
    });
});