// Random background video
const videos = [
  "backgrounds/vagabon_miyamoto.mp4",
  "backgrounds/ushio_noa.mp4",
  "backgrounds/two_heavens_as_one.mp4",
  "backgrounds/midnight_bloom.mp4",
  "backgrounds/wandering_swordsman.mp4"
];
const videoElement = document.getElementById("bg-video");
videoElement.src = videos[Math.floor(Math.random()*videos.length)];

// Typing effect
const lines = document.querySelectorAll(".terminal-bio .line");
const recentVideo = document.getElementById("recent-video");
const gameCards = document.querySelectorAll(".game-card");

let currentLine = 0;

function typeLine(lineIndex){
  const line = lines[lineIndex];
  const text = line.dataset.text;
  let i = 0;
  line.style.opacity = 1;

  const typing = setInterval(()=>{
    line.textContent += text[i];
    i++;
    if(i === text.length){
      clearInterval(typing);
      currentLine++;

      // Trigger video after "Recent Video" line
      if(text.includes("Most Recent Video")){
        setTimeout(() => {
          recentVideo.classList.add("show");
          // Show game cards sequentially after video
          gameCards.forEach((card,index)=>{
            setTimeout(()=>card.classList.add("show"), index*300);
          });
        }, 300);
      }

      if(currentLine < lines.length){
        setTimeout(()=>typeLine(currentLine), 200);
      }
    }
  },50);
}

typeLine(currentLine);

// ---- Fetch Valorant rank (placeholder) ----
async function fetchValorantRank(){
  const rankElement = document.getElementById("valorant-rank");
  rankElement.textContent = "Gold 1 (updated 28/12/2025)";
}

// ---- Fetch osu! stats (placeholder) ----
async function fetchOsuStats(){
  const globalRank = document.getElementById("osu-global-rank");
  const countryRank = document.getElementById("osu-country-rank");
  globalRank.textContent = "120,424";
  countryRank.textContent = "5,210";
}

fetchValorantRank();
fetchOsuStats();
