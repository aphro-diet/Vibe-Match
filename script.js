const vibeData = {
    Happy: {
        colors: ['#FFD700', '#FF69B4', '#FFB6C1'],
        songs: [
            { name: 'Happy - Pharrell Williams', url: 'https://www.youtube.com/watch?v=y6Sxv-sUYtM' },
            { name: 'Can’t Stop the Feeling - Justin Timberlake', url: 'https://www.youtube.com/watch?v=ru0K8uYEZWw' }
        ],
        quotes: [
            "Happiness is not by chance, but by choice.",
            "Choose joy every day."
        ]
    },
    Sad: {
        colors: ['#708090', '#A9A9A9', '#4682B4'],
        songs: [
            { name: 'Let Her Go - Passenger', url: 'https://www.youtube.com/watch?v=RBumgq5yVrA' },
            { name: 'Someone Like You - Adele', url: 'https://www.youtube.com/watch?v=hLQl3WQQoQ0' }
        ],
        quotes: [
            "Tears are the silent language of grief.",
            "Sometimes, you have to let go to see if there was anything worth holding on to."
        ]
    },
    // Add other vibes as needed...
};

function generateVibe(vibe) {
    const data = vibeData[vibe];
    
    // Color suggestions
    const colorContainer = document.getElementById('colorSuggestions');
    colorContainer.innerHTML = '';
    data.colors.forEach(color => {
        const box = document.createElement('div');
        box.className = 'color-box';
        box.style.backgroundColor = color;
        colorContainer.appendChild(box);
    });

    // Songs suggestions
    const songList = document.getElementById('songList');
    songList.innerHTML = '';
    data.songs.forEach(song => {
        const link = document.createElement('a');
        link.href = song.url;
        link.target = '_blank';
        link.textContent = song.name;
        songList.appendChild(link);
    });

    // Quotes suggestions
    const quoteList = document.getElementById('quoteList');
    quoteList.innerHTML = '';
    data.quotes.forEach(quote => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<p>"${quote}"</p>`;
        quoteList.appendChild(card);
    });
}
