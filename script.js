// Array of background video filenames
const backgrounds = [
    "backgrounds/vagabon_miyamoto.mp4",
    "backgrounds/ushio_noa.mp4",
    "backgrounds/two_heavens_as_one.mp4",
    "backgrounds/midnight_bloom.mp4",
    "backgrounds/wandering_swordsman.mp4"
];

// Select a random video
const randomVideo = backgrounds[Math.floor(Math.random() * backgrounds.length)];

const container = document.getElementById("background-container");
const video = document.createElement("video");
video.src = randomVideo;
video.autoplay = true;
video.loop = true;
video.muted = true;
container.appendChild(video);
