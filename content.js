// alert("Hello!")
let video_element = document.querySelector('video');
if (video_element.id != null) {

    video_element.id = 'video_id';
    media = document.getElementById("video_id");

    document.body.addEventListener('keydown',
        event => {
            playbackRate = 0.1;
            volumeRate = 0.05;
            if (event.key === 'f') {
                // fast 
                if (media.playbackRate + playbackRate < 16) {
                    media.playbackRate += 0.1
                } else {
                    media.playbackRate = 16
                }
                console.log("fast : " + media.playbackRate);
            } else if (event.key === 's') {
                // slow
                if (0.1 < media.playbackRate - playbackRate) {
                    media.playbackRate -= 0.1;
                } else {
                    media.playbackRate = 0.1;
                }
                console.log("slow : " + media.playbackRate);
            } else if (event.key === 'l') {
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
            } else if (event.key === 'ArrowRight') {
                // skip
                media.currentTime += 10;
            } else if (event.key === 'ArrowLeft') {
                // skip
                media.currentTime -= 10;
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
            }
        });
}
