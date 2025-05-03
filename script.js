function generateRecommendations() {
    const mood = document.getElementById("mood").value;
    const recommendationsDiv = document.getElementById("recommendations");
    let recommendationsHTML = `<h2>Recommendations for ${mood.charAt(0).toUpperCase() + mood.slice(1)} Mood</h2>`;
    
    // Song recommendations for different moods
    const songs = {
        birthday: [
            { name: "Birthday - Katy Perry", img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Katy_Perry_Birthday.png/220px-Katy_Perry_Birthday.png", link: "https://www.youtube.com/watch?v=CEUg7OplvIQ" },
            { name: "Happy Birthday - Stevie Wonder", img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Stevie_Wonder_Happy_Birthday.jpg/220px-Stevie_Wonder_Happy_Birthday.jpg", link: "https://www.youtube.com/watch?v=F6FHehF5XyE" }
        ],
        sad: [
            { name: "Someone Like You - Adele", img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Adele_-_Someone_Like_You.png/220px-Adele_-_Someone_Like_You.png", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
            { name: "The Night We Met - Lord Huron", img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Lord_Huron_-_The_Night_We_Met.png/220px-Lord_Huron_-_The_Night_We_Met.png", link: "https://www.youtube.com/watch?v=2xoGjpL9QQg" }
        ],
        happy: [
            { name: "Happy - Pharrell Williams", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Pharrell_Williams_-_Happy.png/220px-Pharrell_Williams_-_Happy.png", link: "https://www.youtube.com/watch?v=y6Sxv-sUYtM" },
            { name: "Good as Hell - Lizzo", img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Lizzo_Good_as_Hell.png/220px-Lizzo_Good_as_Hell.png", link: "https://www.youtube.com/watch?v=8M1q1ST9_8g" }
        ],
        energetic: [
            { name: "Uptown Funk - Mark Ronson ft. Bruno Mars", img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Uptown_Funk%21_%28song%29.png/220px-Uptown_Funk%21_%28song%29.png", link: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
            { name: "Can't Stop the Feeling! - Justin Timberlake", img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Justin_Timberlake_-_Can%27t_Stop_the_Feeling%21.png/220px-Justin_Timberlake_-_Can%27t_Stop_the_Feeling%21.png", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" }
        ],
        romantic: [
            { name: "Perfect - Ed Sheeran", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Ed_Sheeran_-_Perfect.png/220px-Ed_Sheeran_-_Perfect.png", link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
            { name: "All of Me - John Legend", img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/John_Legend_-_All_of_Me.png/220px-John_Legend_-_All_of_Me.png", link: "https://www.youtube.com/watch?v=450p7goxZqg" }
        ]
    };

    const selectedSongs = songs[mood] || [];
    let songHTML = "";
    selectedSongs.forEach(song => {
        songHTML += `
            <div class="song">
                <h3>${song.name}</h3>
                <img src="${song.img}" alt="${song.name}">
                <a href="${song.link}" target="_blank">Listen on YouTube</a>
            </div>
        `;
    });

    recommendationsDiv.innerHTML = recommendationsHTML + `<div class="song-container">${songHTML}</div>`;
}
