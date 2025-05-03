// Full Vibes Data (includes new categories)
const fullVibes = {
  desi: {
    songs: [
      { title: "Jai Jai Shivshankar", artist: "Vishal-Shekhar", cover: "https://i.imgur.com/DtkXWGb.jpg", link: "https://youtu.be/Xc6fROZ7vvE" },
      { title: "Lungi Dance", artist: "Honey Singh", cover: "https://i.imgur.com/nW91VGg.jpg", link: "https://youtu.be/aJ5ejdyDmx4" },
      { title: "Dil Dhadakne Do", artist: "Priyanka Chopra, Farhan Akhtar", cover: "https://i.imgur.com/1uBlvzn.jpg", link: "https://youtu.be/Li4Yg0Tay1w" }
    ],
    layouts: ["Indian wedding decor", "Saree-inspired colors", "Bollywood poster style"],
    colors: ["#D32F2F", "#F44336", "#8BC34A"],
    compliment: "You're as stunning as a Bollywood star!",
    songOfDay: { title: "Lungi Dance", artist: "Honey Singh", link: "https://youtu.be/aJ5ejdyDmx4" }
  },
  picnic: {
    songs: [
      { title: "Sunflower", artist: "Post Malone", cover: "https://i.imgur.com/q17k0Rf.jpg", link: "https://youtu.be/ApXoWvfEYVU" },
      { title: "Take It Easy", artist: "Eagles", cover: "https://i.imgur.com/U9QUqBz.jpg", link: "https://youtu.be/4WqfJ0HqJmQ" },
      { title: "Adventure of a Lifetime", artist: "Coldplay", cover: "https://i.imgur.com/79VX12H.jpg", link: "https://youtu.be/QtXby3twMmI" }
    ],
    layouts: ["Nature-inspired vibes", "Picnic basket and blanket arrangement", "Boho chic setup"],
    colors: ["#64B5F6", "#FFEB3B", "#8D6E63"],
    compliment: "You brighten up every picnic day!",
    songOfDay: { title: "Take It Easy", artist: "Eagles", link: "https://youtu.be/4WqfJ0HqJmQ" }
  },
  wedding: {
    songs: [
      { title: "Perfect", artist: "Ed Sheeran", cover: "https://i.imgur.com/UlSSkD0.jpg", link: "https://youtu.be/2Vv-BfVoq4g" },
      { title: "Marry You", artist: "Bruno Mars", cover: "https://i.imgur.com/fWy90Af.jpg", link: "https://youtu.be/fR74zY2DJ-Q" },
      { title: "A Thousand Years", artist: "Christina Perri", cover: "https://i.imgur.com/EDcse9B.jpg", link: "https://youtu.be/rtOvBOT3P6M" }
    ],
    layouts: ["Elegant floral arrangements", "Golden wedding ring accents", "Glittering fairytale lighting"],
    colors: ["#FFD54F", "#FF7043", "#4CAF50"],
    compliment: "You're the heart and soul of every wedding!",
    songOfDay: { title: "Perfect", artist: "Ed Sheeran", link: "https://youtu.be/2Vv-BfVoq4g" }
  },
  happy: {
    songs: [
      { title: "Happy", artist: "Pharrell Williams", cover: "https://i.imgur.com/YXHbZ16.jpg", link: "https://youtu.be/Yb1cT0hFLbM" },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", cover: "https://i.imgur.com/ML5XxGd.jpg", link: "https://youtu.be/ru0K8uYEZWw" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", cover: "https://i.imgur.com/LWwR9D9.jpg", link: "https://youtu.be/OPf0YbXqDm0" }
    ],
    layouts: ["Colorful confetti background", "Smiling faces theme", "Positive affirmation quotes"],
    colors: ["#FFEB3B", "#81C784", "#FF7043"],
    compliment: "You radiate happiness and joy!",
    songOfDay: { title: "Happy", artist: "Pharrell Williams", link: "https://youtu.be/Yb1cT0hFLbM" }
  },
  sad: {
    songs: [
      { title: "Someone Like You", artist: "Adele", cover: "https://i.imgur.com/XB7gg0t.jpg", link: "https://youtu.be/hLQl3WQQoQ0" },
      { title: "The Night We Met", artist: "Lord Huron", cover: "https://i.imgur.com/Y5QDCje.jpg", link: "https://youtu.be/2gTkaSxX_xk" },
      { title: "All I Want", artist: "Kodaline", cover: "https://i.imgur.com/dWxggpB.jpg", link: "https://youtu.be/bbKGVUbi3D8" }
    ],
    layouts: ["Raindrop patterns", "Dimly lit mood", "Emotional monochrome themes"],
    colors: ["#757575", "#B0BEC5", "#90A4AE"],
    compliment: "Your strength shines even in the hardest moments.",
    songOfDay: { title: "Someone Like You", artist: "Adele", link: "https://youtu.be/hLQl3WQQoQ0" }
  },
  friends: {
    songs: [
      { title: "Lean On Me", artist: "Bill Withers", cover: "https://i.imgur.com/hWsiwzE.jpg", link: "https://youtu.be/fOZqR8X2lF8" },
      { title: "Count On Me", artist: "Bruno Mars", cover: "https://i.imgur.com/5kseuUP.jpg", link: "https://youtu.be/MReM6tYQ3so" },
      { title: "With a Little Help From My Friends", artist: "The Beatles", cover: "https://i.imgur.com/LS6ft4S.jpg", link: "https://youtu.be/10uGOQOBqFk" }
    ],
    layouts: ["Group photos of friends", "Friendship quote designs", "Puzzle piece designs symbolizing unity"],
    colors: ["#64B5F6", "#FFEB3B", "#FF9800"],
    compliment: "True friendship is a rare and beautiful gift.",
    songOfDay: { title: "Lean On Me", artist: "Bill Withers", link: "https://youtu.be/fOZqR8X2lF8" }
  },
  aesthetic: {
    songs: [
      { title: "Blinding Lights", artist: "The Weeknd", cover: "https://i.imgur.com/92zNq95.jpg", link: "https://youtu.be/4NRyFC8Go-k" },
      { title: "Sunflower", artist: "Post Malone", cover: "https://i.imgur.com/wJQvhBf.jpg", link: "https://youtu.be/ApXoWvfEYVU" },
      { title: "Levitating", artist: "Dua Lipa", cover: "https://i.imgur.com/0O94ZYd.jpg", link: "https://youtu.be/TfG01leKHLo" }
    ],
    layouts: ["Soft pastel background", "Polaroid photo display", "Minimalist design"],
    colors: ["#FFC107", "#FF9800", "#FF5722"],
    compliment: "You're glowing with aesthetic vibes!",
    songOfDay: { title: "Blinding Lights", artist: "The Weeknd", link: "https://youtu.be/4NRyFC8Go-k" }
  }
};

let selectedImage = null;

// Image Upload and Preview
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      selectedImage = e.target.result;
      imagePreview.innerHTML = `<img src="${selectedImage}" alt="Uploaded Image" style="width: 100%; max-width: 400px; border-radius: 10px;">`;
    };
    reader.readAsDataURL(file);
  }
});

// Generate the Full Vibe Based on the Selected Category
function generateFullVibe() {
  const categorySelect = document.getElementById("categorySelect");
  const selectedCategory = categorySelect.value;
  const vibe = fullVibes[selectedCategory];
  const vibeContainer = document.getElementById("fullVibe");

  if (!selectedCategory) {
    return alert("Please select a vibe category.");
  }

  vibeContainer.innerHTML = `
    <h2>${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Vibe</h2>
    
    <!-- Display Image if Uploaded -->
    ${selectedImage ? `<img src="${selectedImage}" alt="User's Picture" style="width: 100%; max-width: 400px; border-radius: 10px;">` : ""}
    
    <div class="section">
      <h4>Song Recommendations</h4>
      <ul>
        ${vibe.songs.map(song => `<li><a href="${song.link}" target="_blank">${song.title} by ${song.artist}<img src="${song.cover}" alt="${song.title}" /></a></li>`).join("")}
      </ul>
    </div>
    <div class="section">
      <h4>Layout Ideas</h4>
      <ul>
        ${vibe.layouts.map(layout => `<li>${layout}</li>`).join("")}
      </ul>
    </div>
    <div class="section">
      <h4>Vibe Colors</h4>
      <div>
        ${vibe.colors.map(c => `<span class="color-box" style="background-color:${c}"></span>`).join("")}
      </div>
    </div>
    <div class="section">
      <h4>Compliment</h4>
      <p>${vibe.compliment}</p>
    </div>
    <div class="section">
      <h4>Song of the Day</h4>
      <a href="${vibe.songOfDay.link}" target="_blank">${vibe.songOfDay.title} by ${vibe.songOfDay.artist}</a>
    </div>
  `;
}
