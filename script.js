// Background rotation
const bgVideos = [
  "backgrounds/vagabon_miyamoto.mp4",
  "backgrounds/ushio_noa.mp4",
  "backgrounds/two_heavens_as_one.mp4",
  "backgrounds/midnight_bloom.mp4",
  "backgrounds/wandering_swordsman.mp4"
];
document.getElementById("bg-video").src =
  bgVideos[Math.floor(Math.random() * bgVideos.length)];

// Typing effect
const lines = document.querySelectorAll(".line");
let index = 0;

function typeLine() {
  const line = lines[index];
  const text = line.dataset.text;
  let i = 0;
  line.classList.add("cursor");
  line.style.opacity = 1;

  const interval = setInterval(() => {
    line.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(interval);
      line.classList.remove("cursor");
      index++;

      if (index === lines.length) {
        document.querySelectorAll(".section").forEach(s => s.classList.add("show"));
        return;
      }
      setTimeout(typeLine, 200);
    }
  }, 40);
}

typeLine();

// osu stats
async function fetchOsuStats() {
  const key = ["5f18654c","9151ec0b","d95f06f2","5136cf9b","0be345d6"].join("");
  const res = await fetch(`https://osu.ppy.sh/api/get_user?k=${key}&u=NikiOnOsu`);
  const data = await res.json();
  document.getElementById("osu-global-rank").textContent = data[0].pp_rank;
  document.getElementById("osu-country-rank").textContent = data[0].pp_country_rank;
}
fetchOsuStats();
