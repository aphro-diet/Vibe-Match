const moodData = {
  happy: [
    {
      title: "Happy – Pharrell Williams",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Pharrell_Williams_-_Happy.jpg/220px-Pharrell_Williams_-_Happy.jpg",
      link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs"
    },
    {
      title: "Good Time – Owl City & Carly Rae Jepsen",
      img: "https://upload.wikimedia.org/wikipedia/en/1/13/GoodTimeOwlCity.jpg",
      link: "https://www.youtube.com/watch?v=H7HmzwI67ec"
    }
  ],
  sad: [
    {
      title: "Let Her Go – Passenger",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/LetHerGo.jpg/220px-LetHerGo.jpg",
      link: "https://www.youtube.com/watch?v=RBumgq5yVrA"
    },
    {
      title: "Someone Like You – Adele",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Adele_-_Someone_Like_You.png/220px-Adele_-_Someone_Like_You.png",
      link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0"
    }
  ],
  birthday: [
    {
      title: "Birthday – Katy Perry",
      img: "https://upload.wikimedia.org/wikipedia/en/f/f4/Katy_Perry_-_Birthday.png",
      link: "https://www.youtube.com/watch?v=njYDPZOLXJs"
    },
    {
      title: "Birthday – Anne-Marie",
      img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Anne-Marie_-_Birthday.png",
      link: "https://www.youtube.com/watch?v=Li5E1JIgNuk"
    }
  ],
  picnic: [
    {
      title: "Banana Pancakes – Jack Johnson",
      img: "https://upload.wikimedia.org/wikipedia/en/6/6b/In_Between_Dreams.jpg",
      link: "https://www.youtube.com/watch?v=m-v-LGOfaKo"
    },
    {
      title: "Sunflower – Post Malone",
      img: "https://upload.wikimedia.org/wikipedia/en/8/80/Post_Malone_and_Swae_Lee_-_Sunflower.png",
      link: "https://www.youtube.com/watch?v=ApXoWvfEYVU"
    }
  ],
  aesthetic: [
    {
      title: "Golden Hour – JVKE",
      img: "https://upload.wikimedia.org/wikipedia/en/1/1e/JVKE_-_Golden_Hour.png",
      link: "https://www.youtube.com/watch?v=3JZ4pnNtyxQ"
    },
    {
      title: "Death Bed – Powfu",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Powfu_-_Death_Bed.png/220px-Powfu_-_Death_Bed.png",
      link: "https://www.youtube.com/watch?v=jJPMnTXl63E"
    }
  ],
  desi: [
    {
      title: "Jashn-E-Bahaaraa – Jodhaa Akbar",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Jodhaa_Akbar.jpg",
      link: "https://www.youtube.com/watch?v=4h1WFyOQv0Y"
    },
    {
      title: "Gallan Goodiyan – Dil Dhadakne Do",
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/Dil_Dhadakne_Do.jpg",
      link: "https://www.youtube.com/watch?v=jCEdTq3j-0U"
    }
  ]
};

function showRecommendations(mood) {
  const section = document.getElementById('recommendations');
  section.innerHTML = '';
  const songs = moodData[mood];
  songs.forEach(song => {
    section.innerHTML += `
      <div class="song-card">
        <img src="${song.img}" alt="${song.title}">
        <p><a href="${song.link}" target="_blank">${song.title}</a></p>
      </div>`;
  });
}
