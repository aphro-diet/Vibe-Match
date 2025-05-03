const vibes = {
  happy: [
    {
      title: "Good Day - Nappy Roots",
      cover: "https://upload.wikimedia.org/wikipedia/en/5/52/Nappyrootsgoodday.jpg",
      link: "https://www.youtube.com/watch?v=6WJFjXtHcy4"
    },
    {
      title: "Walking on Sunshine - Katrina",
      cover: "https://upload.wikimedia.org/wikipedia/en/7/7a/Walking_on_Sunshine.jpg",
      link: "https://www.youtube.com/watch?v=iPUmE-tne5U"
    }
  ],
  sad: [
    {
      title: "Let Her Go - Passenger",
      cover: "https://upload.wikimedia.org/wikipedia/en/f/f7/LetHerGo.jpg",
      link: "https://www.youtube.com/watch?v=RBumgq5yVrA"
    }
  ],
  birthday: [
    {
      title: "Birthday - Katy Perry",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/4b/Katy_Perry_-_Birthday.png",
      link: "https://www.youtube.com/watch?v=3GwjfUFyY6M"
    }
  ],
  aesthetic: [
    {
      title: "Coffee - beabadoobee",
      cover: "https://i1.sndcdn.com/artworks-000242914675-zs1s4z-t500x500.jpg",
      link: "https://www.youtube.com/watch?v=J3uh3r3bDG4"
    }
  ],
  friends: [
    {
      title: "Count on Me - Bruno Mars",
      cover: "https://upload.wikimedia.org/wikipedia/en/d/d1/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png",
      link: "https://www.youtube.com/watch?v=yJYXItns2ik"
    }
  ]
};

function showVibes(mood) {
  const container = document.getElementById('vibeResults');
  container.innerHTML = '';
  vibes[mood].forEach(song => {
    container.innerHTML += `
      <div class="vibe-card">
        <img src="${song.cover}" alt="${song.title}" />
        <p>${song.title}</p>
        <a href="${song.link}" target="_blank">Listen</a>
      </div>
    `;
  });
}

function showMoodBoard() {
  const board = document.getElementById('moodBoard');
  board.classList.toggle('hidden');
}
