function playVideo (stream , idVideo) {
    const video = document.querySelector(idVideo);
    video.srcObject = stream;
    video.onloadedmetadata = function() {
        video.play();
    };
}

module.exports = playVideo;

function openCamera (){
    navigator.mediaDevices.getUserMedia({audio : true , video: { width: 1280, height: 720 }}) // trar về câu lệnh promise
        .then(stream =>    playVideo(stream ,'localStream'))
        .catch(err => console.log(err))
} 
module.exports = openCamera;
