import videoPath from '../video/background-fon.mp4';
import previewPath from '../img/preview.png';

document.addEventListener('DOMContentLoaded', function() {
    $('#vide').vide({
        mp4: videoPath,
        poster: previewPath,
    });

    // var video = instance.getVideoObject();
    // if (video) {
    //     video.setAttribute('playsInline', 'true');
    //     video.setAttribute('webkit-playsInline', 'true');
    //     video.muted = true;
    //     video.play().catch(err => console.warn('Autoplay failed:', err));
    // }
});

// document.addEventListener('DOMContentLoaded', function() {
//     $('#header').vide(videoPath, {
//         autoplay: true,
//         loop: true
//     });
    
//     var video = document.querySelector('#header video');
//     if (video) {
//         video.setAttribute('playsinline', 'true');
//         video.setAttribute('webkit-playsinline', 'true'); // Для iOS Safari
//         video.muted = true;
//         video.play().catch(err => console.warn('Autoplay failed:', err));
//     }
// });
