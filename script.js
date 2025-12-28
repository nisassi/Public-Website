// Background video
const videos = [
  "backgrounds/vagabon_miyamoto.mp4",
  "backgrounds/ushio_noa.mp4",
  "backgrounds/two_heavens_as_one.mp4",
  "backgrounds/midnight_bloom.mp4"
];
document.getElementById("bg-video").src =
  videos[Math.floor(Math.random() * videos.length)];

// Typing effect
const lines = document.querySelectorAll(".line");
let index = 0;

function typeLine() {
  const line = lines[index];
  const text = line.dataset.text;
  let i = 0;
  line.classList.add("active");
  line.style.opacity = 1;

  const interval = setInterval(() => {
    line.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      line.classList.remove("active");
      index++;
      if (index < lines.length) setTimeout(typeLine, 200);
    }
  }, 50); // cursor speed fixed
}

typeLine();

// osu! API
async function fetchOsuStats() {
  const username = "NikiOnOsu";
  const apiKey = ["5f18654c","9151ec0b","d95f06f2","5136cf9b","0be345d6"].join("");

  const res = await fetch(`https://osu.ppy.sh/api/get_user?k=${apiKey}&u=${username}`);
  const data = await res.json();

  if (data[0]) {
    document.getElementById("osu-global-rank").textContent = data[0].pp_rank;
    document.getElementById("osu-country-rank").textContent = data[0].pp_country_rank;
  }
}

fetchOsuStats();
