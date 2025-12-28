// Random background video
const videos = [
  "backgrounds/vagabon_miyamoto.mp4",
  "backgrounds/ushio_noa.mp4",
  "backgrounds/two_heavens_as_one.mp4",
  "backgrounds/midnight_bloom.mp4",
  "backgrounds/wandering_swordsman.mp4"
];

const videoElement = document.getElementById("bg-video");
const randomIndex = Math.floor(Math.random() * videos.length);
videoElement.src = videos[randomIndex];
