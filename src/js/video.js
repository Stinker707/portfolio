import videoPath1 from '../video/background-fon.mp4';
import videoPath2 from '../video/background-fon.webm';
import videoPath3 from '../video/background-fon.ogv';
import previewPath from '../img/preview.png';

document.addEventListener('DOMContentLoaded', function() {
    $('#vide').vide({
        mp4: videoPath1,
        webm: videoPath2,
        ogv: videoPath3,
        poster: previewPath,
    }, {
        muted: true,
        autoplay: true,
        loop: true,
        playsinline: true
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
