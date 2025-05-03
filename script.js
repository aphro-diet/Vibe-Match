const moodData = {
    happy: {
        songs: [
            { title: "Happy", artist: "Pharrell Williams", album: "G I R L", image: "https://upload.wikimedia.org/wikipedia/en/7/73/Pharrell_Williams_-_G_I_R_L.png", link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
            { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", album: "Trolls (Original Soundtrack)", image: "https://upload.wikimedia.org/wikipedia/en/3/37/Trolls_soundtrack_cover.jpg", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" }
        ]
    },
    sad: {
        songs: [
            { title: "Someone Like You", artist: "Adele", album: "21", image: "https://upload.wikimedia.org/wikipedia/en/a/ab/Adele_-_21.png", link: "https://www.youtube.com/watch?v=hLQl3WQQoRk" },
            { title: "The Night We Met", artist: "Lord Huron", album: "Strange Trails", image: "https://upload.wikimedia.org/wikipedia/en/2/28/Lord_Huron_-_Strange_Trails.png", link: "https://www.youtube.com/watch?v=zi1X62tX7L4" }
        ]
    },
    birthday: {
        songs: [
            { title: "Birthday", artist: "Katy Perry", album: "Prism", image: "https://upload.wikimedia.org/wikipedia/en/3/34/Katy_Perry_-_Prism_%28album_cover%29.png", link: "https://www.youtube.com/watch?v=kNku9xFJ0UQ" },
            { title: "Happy Birthday", artist: "Stevie Wonder", album: "Stevie Wonder's Original Musiquarium I", image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Stevie_Wonder_-_Musiquarium.png", link: "https://www.youtube.com/watch?v=KItk5fQvIfE" }
        ]
    },
    picnic: {
        songs: [
            { title: "Walking on Sunshine", artist: "Katrina and The Waves", album: "Katrina and The Waves", image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Katrina_and_The_Waves_-_Walking_on_Sunshine.jpg", link: "https://www.youtube.com/watch?v=iPUmE-tne5U" },
            { title: "Here Comes the Sun", artist: "The Beatles", album: "Abbey Road", image: "https://upload.wikimedia.org/wikipedia/en/4/42/The_Beatles_-_Abbey_Road.jpg", link: "https://www.youtube.com/watch?v=KQetemT1sWc" }
        ]
    },
    aesthetic: {
        songs: [
            { title: "Sunflower", artist: "Post Malone & Swae Lee", album: "Spider-Man: Into the Spider-Verse", image: "https://upload.wikimedia.org/wikipedia/en/0/02/Post_Malone_%26_Swae_Lee_-_Sunflower.jpg", link: "https://www.youtube.com/watch?v=ApXoWvfEYVU" },
            { title: "Ocean Eyes", artist: "Billie Eilish", album: "Dont Smile at Me", image: "https://upload.wikimedia.org/wikipedia/en/a/ab/Billie_Eilish_-_Dont_Smile_at_Me.png", link: "https://www.youtube.com/watch?v=viimfQi_pUw" }
        ]
    },
    desi: {
        songs: [
            { title: "Tum Hi Ho", artist: "Arijit Singh", album: "Aashiqui 2", image: "https://upload.wikimedia.org/wikipedia/en/a/a2/Aashiqui_2_album_cover.jpg", link: "https://www.youtube.com/watch?v=7vRHbptPmGE" },
            { title: "Tujh Mein Rab Dikhta Hai", artist: "Roop Kumar Rathod", album: "Rab Ne Bana Di Jodi", image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Rab_Ne_Bana_Di_Jodi.jpg", link: "https://www.youtube.com/watch?v=owF1bKST_Tg" }
        ]
    }
};

function showRecommendations(mood) {
    const recommendationsDiv = document.getElementById("song-recommendations");
    recommendationsDiv.innerHTML = ""; // Clear any previous recommendations

    if (moodData[mood]) {
        moodData[mood].songs.forEach(song => {
            const songCard = document.createElement("div");
            songCard.classList.add("song-card");

            songCard.innerHTML = `
                <img src="${song.image}" alt="${song.title} album cover">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
                <a href="${song.link}" target="_blank">Listen on YouTube</a>
            `;
            recommendationsDiv.appendChild(songCard);
        });
    } else {
        recommendationsDiv.innerHTML = "<p>No recommendations available for this mood.</p>";
    }
}

function getRandomVibe() {
    const moods = Object.keys(moodData);
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    showRecommendations(randomMood);
}
