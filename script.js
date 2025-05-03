const vibes = {
  birthday: [
    { title: "Birthday - Katy Perry", cover: "https://upload.wikimedia.org/wikipedia/en/0/0a/Katy_Perry_Birthday.png", link: "https://www.youtube.com/watch?v=CEUg7OplvIQ" },
    { title: "Happy Birthday - Stevie Wonder", cover: "https://upload.wikimedia.org/wikipedia/en/c/cc/Stevie_Wonder_Happy_Birthday.jpg", link: "https://www.youtube.com/watch?v=F6FHehF5XyE" }
  ],
  sad: [
    { title: "Someone Like You - Adele", cover: "https://upload.wikimedia.org/wikipedia/en/d/d5/Adele_-_Someone_Like_You.png", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { title: "The Night We Met - Lord Huron", cover: "https://upload.wikimedia.org/wikipedia/en/c/c0/Lord_Huron_-_The_Night_We_Met.png", link: "https://www.youtube.com/watch?v=2xoGjpL9QQg" }
  ],
  happy: [
    { title: "Happy - Pharrell Williams", cover: "https://upload.wikimedia.org/wikipedia/en/2/26/Pharrell_Williams_-_Happy.png", link: "https://www.youtube.com/watch?v=y6Sxv-sUYtM" },
    { title: "Good as Hell - Lizzo", cover: "https://upload.wikimedia.org/wikipedia/en/9/97/Lizzo_Good_as_Hell.png", link: "https://www.youtube.com/watch?v=8M1q1ST9_8g" }
  ],
  energetic: [
    { title: "Uptown Funk - Mark Ronson ft. Bruno Mars", cover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Uptown_Funk%21_%28song%29.png", link: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
    { title: "Can't Stop the Feeling! - Justin Timberlake", cover: "https://upload.wikimedia.org/wikipedia/en/a/a4/Justin_Timberlake_-_Can%27t_Stop_the_Feeling%21.png", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" }
  ],
  romantic: [
    { title: "Perfect - Ed Sheeran", cover: "https://upload.wikimedia.org/wikipedia/en/2/2f/Ed_Sheeran_-_Perfect.png", link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
    { title: "All of Me - John Legend", cover: "https://upload.wikimedia.org/wikipedia/en/c/c3/John_Legend_-_All_of_Me.png", link: "https://www.youtube.com/watch?v=450p7goxZqg" }
  ],
  relaxed: [
    { title: "Sunflower - Post Malone & Swae Lee", cover: "https://upload.wikimedia.org/wikipedia/en/5/5a/Post_Malone_and_Swae_Lee_-_Sunflower.png", link: "https://www.youtube.com/watch?v=ApXoWvfEYVU" },
    { title: "Weightless - Marconi Union", cover: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Weightless_album_cover.jpg", link: "https://www.youtube.com/watch?v=UfcAVejslrU" }
  ],
  friends: [
    { title: "Count on Me - Bruno Mars", cover: "https://upload.wikimedia.org/wikipedia/en/d/d1/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png", link: "https://www.youtube.com/watch?v=yJYXItns2ik" },
    { title: "Lean On Me - Bill Withers", cover: "https://upload.wikimedia.org/wikipedia/en/3/35/Bill_Withers_-_Lean_on_Me.jpg", link: "https://www.youtube.com/watch?v=fOZ-MySzAac" }
  ],
  aesthetic: [
    { title: "Coffee - beabadoobee", cover: "https://i1.sndcdn.com/artworks-000242914675-zs1s4z-t500x500.jpg", link: "https://www.youtube.com/watch?v=J3uh3r3bDG4" },
    { title: "Peach - Broods", cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Broods_-_Peach.png", link: "https://www.youtube.com/watch?v=ZxZyrK-h0hw" }
  ],
  adventure: [
    { title: "Adventure of a Lifetime - Coldplay", cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/Coldplay_-_Adventure_of_a_Lifetime.png", link: "https://www.youtube.com/watch?v=QtXby3twMmI" },
    { title: "Road Trippin' - Red Hot Chili Peppers", cover: "https://upload.wikimedia.org/wikipedia/en/5/5d/Rhcp_road_trippin.jpg", link: "https://www.youtube.com/watch?v=PcAm2L368Ys" }
  ],
  chill: [
    { title: "Sunset Lover - Petit Biscuit", cover: "https://upload.wikimedia.org/wikipedia/en/d/d3/Sunset_Lover_cover.jpg", link: "https://www.youtube.com/watch?v=FzlPXM8Ct7I" },
    { title: "Ocean Eyes - Billie Eilish", cover: "https://upload.wikimedia.org/wikipedia/en/5/5b/Billie_Eilish_-_Ocean_Eyes.png", link: "https://www.youtube.com/watch?v=viimfQi_pUw" }
  ]
};

function showVibes(mood) {
  const container = document.getElementById('vibeResults');
  container.innerHTML = `<h2>${mood.charAt(0).toUpperCase()+mood.slice(1)} Vibes</h2>`;
  vibes[mood].forEach(song => {
    const card = `
      <div class="vibe-card">
        <img src="${song.cover}" alt="${song.title}" />
        <p>${song.title}</p>
        <a href="${song.link}" target="_blank">▶ Listen</a>
      </div>`;
    container.innerHTML += card;
  });
}

function showMoodBoard() {
  document.getElementById('moodBoard').classList.toggle('hidden');
}
