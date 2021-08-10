// alert("Hello!")
let video_element = document.querySelector('video');
if (video_element.id != null) {

    video_element.id = 'video_id';
    media = document.getElementById("video_id");

    document.body.addEventListener('keydown',
        event => {
            playbackRate = 0.1;
            volumeRate = 0.05;
            if (event.key === '>') {
                // fast 
                if (media.playbackRate + playbackRate < 16) {
                    media.playbackRate += 0.1
                } else {
                    media.playbackRate = 16
                }
                console.log("fast : " + media.playbackRate);
            } else if (event.key === '<') {
                // slow
                if (0.1 < media.playbackRate - playbackRate) {
                    media.playbackRate -= 0.1;
                } else {
                    media.playbackRate = 0.1;
                }
                console.log("slow : " + media.playbackRate);
            } else if (event.key === 'e') {
                // loop
                if (media.loop) {
                    media.loop = false;
                } else {
                    media.loop = true;
                }
                console.log("loop : " + media.loop);
            } else if (event.key === 'm') {
                // mute
                if (media.muted) {
                    media.muted = false;
                } else {
                    media.muted = true;
                }
                console.log("muted : " + media.loop);
            } else if (event.key === 'k') {
                // play and pause (as same as space)
                if (media.paused) {
                    media.play();
                } else {
                    media.pause();
                }
            } else if (event.key === 'l') {
                // skip 10 seconds
                media.currentTime += 10;
            } else if (event.key === 'j') {
                // skip 10 seconds
                media.currentTime -= 10;
            } else if (event.key === 'L') {
                // skip 10 seconds
                media.currentTime += 60;
            } else if (event.key === 'J') {
                // skip 10 seconds
                media.currentTime -= 60;
            } else if (event.key === 'ArrowRight') {
                // skip 5 seconds
                media.currentTime += 5;
            } else if (event.key === 'ArrowLeft') {
                // skip 5 seconds
                media.currentTime -= 5;
            } else if (event.key === 'ArrowUp') {
                // volume
                if (media.volume + volumeRate < 1) {
                    media.volume += 0.05;
                } else {
                    media.volume = 1;
                }
                console.log("volume : " + media.volume);
            } else if (event.key === 'ArrowDown') {
                if (0 < media.volume - volumeRate) {
                    media.volume -= 0.05;
                } else {
                    media.volume = 0
                }
                console.log("volume : " + media.volume);
            } else if (event.key === 'i') {
                msg = "Playback Speed " + media.playbackRate + "x\nLoop : " + media.loop;
                alert(msg);
                // state   
            } else if (event.key === '0') {
                media.currentTime = 0;
            } else if (event.key === '1') {
                media.currentTime = (media.duration * 0.1);
            } else if (event.key === '2') {
                media.currentTime = (media.duration * 0.2);
            } else if (event.key === '3') {
                media.currentTime = (media.duration * 0.3);
            } else if (event.key === '4') {
                media.currentTime = (media.duration * 0.4);
            } else if (event.key === '5') {
                media.currentTime = (media.duration * 0.5);
            } else if (event.key === '6') {
                media.currentTime = (media.duration * 0.6);
            } else if (event.key === '7') {
                media.currentTime = (media.duration * 0.7);
            } else if (event.key === '8') {
                media.currentTime = (media.duration * 0.8);
            } else if (event.key === '9') {
                media.currentTime = (media.duration * 0.9);
            } else if (event.code === 'Digit1' && event.shiftKey) {
                media.playbackRate = 0.25;
            } else if (event.code === 'Digit2' && event.shiftKey) {
                media.playbackRate = 0.5;
            } else if (event.code === 'Digit3' && event.shiftKey) {
                media.playbackRate = 0.75;
            } else if (event.code === 'Digit4' && event.shiftKey) {
                media.playbackRate = 1;
            } else if (event.code === 'Digit5' && event.shiftKey) {
                media.playbackRate = 1.25;
            } else if (event.code === 'Digit6' && event.shiftKey) {
                media.playbackRate = 1.5;
            } else if (event.code === 'Digit7' && event.shiftKey) {
                media.playbackRate = 1.75;
            } else if (event.code === 'Digit8' && event.shiftKey) {
                media.playbackRate = 2;
            } else if (event.code === 'Digit9' && event.shiftKey) {
                media.playbackRate = 2.25;
            }
        });
}
