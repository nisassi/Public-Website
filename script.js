// Random background video
const videos = [
  "backgrounds/vagabon_miyamoto.mp4",
  "backgrounds/ushio_noa.mp4",
  "backgrounds/two_heavens_as_one.mp4",
  "backgrounds/midnight_bloom.mp4",
  "backgrounds/wandering_swordsman.mp4"
];
const videoElement = document.getElementById("bg-video");
videoElement.src = videos[Math.floor(Math.random() * videos.length)];

// Typing effect
const lines = document.querySelectorAll(".terminal-bio .line");
const recentVideo = document.getElementById("recent-video");
const gameCards = document.querySelectorAll(".game-card");

let currentLine = 0;

function typeLine(lineIndex) {
  const line = lines[lineIndex];
  const text = line.dataset.text;
  let i = 0;
  line.style.opacity = 1;

  const typing = setInterval(() => {
    line.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(typing);
      currentLine++;

      // Trigger video and game cards after "Recent Video" line
      if (text.includes("Recent Video")) {
        setTimeout(() => {
          recentVideo.classList.add("show");
          gameCards.forEach((card, index) => {
            setTimeout(() => card.classList.add("show"), index * 300);
          });
        }, 300);
      }

      if (currentLine < lines.length) {
        setTimeout(() => typeLine(currentLine), 50);
      }
    }
  }, 50); // Cursor speed ~0.05s per char
}

typeLine(currentLine);

// ---- Fetch Valorant rank (placeholder) ----
async function fetchValorantRank() {
  const rankElement = document.getElementById("valorant-rank");
  rankElement.textContent = "Gold 1 (updated 28/12/2025)";
}

// ---- Fetch osu! stats ----
async function fetchOsuStats() {
  const username = "NikiOnOsu";
  const apiKey = [
    "5f18654c",
    "9151ec0b",
    "d95f06f2",
    "5136cf9b",
    "0be345d6"
  ].join("");

  try {
    const response = await fetch(
      `https://osu.ppy.sh/api/get_user?k=${apiKey}&u=${username}`
    );
    const data = await response.json();

    const globalRank = document.getElementById("osu-global-rank");
    const countryRank = document.getElementById("osu-country-rank");

    if (data && data.length > 0) {
      globalRank.textContent = data[0].pp_rank;
      countryRank.textContent = data[0].pp_country_rank;
    } else {
      globalRank.textContent = "N/A";
      countryRank.textContent = "N/A";
    }
  } catch (err) {
    console.error("osu! API error:", err);
    document.getElementById("osu-global-rank").textContent = "Error";
    document.getElementById("osu-country-rank").textContent = "Error";
  }
}

fetchValorantRank();
fetchOsuStats();
