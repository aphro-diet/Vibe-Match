const fullVibes = {
  desi: {
    songs: [
      { title: "Jashn-E-Bahara", artist: "A.R. Rahman", cover: "https://i.imgur.com/Qk2cBvC.jpg", link: "https://youtu.be/6mR6Pwyrx_s" },
      { title: "Gallan Goodiyaan", artist: "Dil Dhadakne Do", cover: "https://i.imgur.com/1LZX7Fb.jpg", link: "https://youtu.be/pnF6n8wO_VY" }
    ],
    layouts: ["Vibrant mandala borders", "Gold foil typography", "Saturated color filter"],
    colors: ["#E53935","#FFEB3B","#8E24AA"],
    compliment: "Your desi vibes are on point—rock that look!",
    songOfDay: { title: "Desi Girl", artist: "Dostana", link: "https://youtu.be/nZpMsxA-TX8" }
  },
  // ... similarly define for sari, western, friends, wedding, etc.
  picnic: {
    songs: [
      { title: "Better Together", artist: "Jack Johnson", cover: "https://i.imgur.com/4E0N1ho.jpg", link: "https://youtu.be/_fW6cEWckuA" },
      { title: "Banana Pancakes", artist: "Jack Johnson", cover: "https://i.imgur.com/g1h8Rgw.jpg", link: "https://youtu.be/qW8_rIYL8i4" }
    ],
    layouts: ["Sunshine lens flare", "Overhead food flatlay", "Muted green filter"],
    colors: ["#AED581","#FFF176","#FF8A65"],
    compliment: "You look picnic‑ready—so fresh and vibrant!",
    songOfDay: { title: "Sunflower", artist: "Post Malone", link: "https://youtu.be/ApXoWvfEYVU" }
  }
};

function generateFullVibe() {
  const category = document.getElementById("categorySelect").value;
  if (!category) return alert("Please select a category.");

  const vibe = fullVibes[category];
  const container = document.getElementById("fullVibe");
  container.innerHTML = `
    <h2>${category.charAt(0).toUpperCase()+category.slice(1)} Vibe Match</h2>
    <p class="compliment">${vibe.compliment}</p>
    <h3>Song of the Day: <a href="${vibe.songOfDay.link}" target="_blank">${vibe.songOfDay.title} by ${vibe.songOfDay.artist}</a></h3>
    <div class="section"><h4>Recommended Songs</h4>
      ${vibe.songs.map(s => `
        <div class="song-card">
          <img src="${s.cover}" alt="${s.title}">
          <p>${s.title} - ${s.artist}</p>
          <a href="${s.link}" target="_blank">▶ Listen</a>
        </div>`).join("")}
    </div>
    <div class="section"><h4>Layout Ideas</h4>
      <ul>${vibe.layouts.map(l=>`<li>${l}</li>`).join("")}</ul>
    </div>
    <div class="section"><h4>Color Palette</h4>
      ${vibe.colors.map(c=>`<div class="color-box" style="background:${c}"></div>`).join("")}
    </div>
  `;
}
