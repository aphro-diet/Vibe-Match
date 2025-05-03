const vibeData = {
  Happy: {
    image: 'https://via.placeholder.com/300x200?text=Happy',
    colors: ['#FFD700', '#FF69B4', '#FFB6C1'],
    songs: [
      { name: 'Happy - Pharrell Williams', url: 'https://www.youtube.com/watch?v=y6Sxv-sUYtM' },
      { name: 'Can’t Stop the Feeling - Justin Timberlake', url: 'https://www.youtube.com/watch?v=ru0K8uYEZWw' }
    ]
  },
  Sad: {
    image: 'https://via.placeholder.com/300x200?text=Sad',
    colors: ['#708090', '#A9A9A9', '#4682B4'],
    songs: [
      { name: 'Let Her Go - Passenger', url: 'https://www.youtube.com/watch?v=RBumgq5yVrA' },
      { name: 'Someone Like You - Adele', url: 'https://www.youtube.com/watch?v=hLQl3WQQoQ0' }
    ]
  },
  Friends: {
    image: 'https://via.placeholder.com/300x200?text=Friends',
    colors: ['#4CAF50', '#81C784', '#AED581'],
    songs: [
      { name: 'Count on Me - Bruno Mars', url: 'https://www.youtube.com/watch?v=yJYXItns2ik' },
      { name: 'Best Day of My Life - American Authors', url: 'https://www.youtube.com/watch?v=Y66j_BUCBMY' }
    ]
  },
  Aesthetic: {
    image: 'https://via.placeholder.com/300x200?text=Aesthetic',
    colors: ['#D8BFD8', '#E6E6FA', '#F5E1FD'],
    songs: [
      { name: 'Sweater Weather - The Neighbourhood', url: 'https://www.youtube.com/watch?v=GCdwKhTtNNw' },
      { name: 'Electric Feel - MGMT', url: 'https://www.youtube.com/watch?v=MmZexg8sxyk' }
    ]
  },
  Romantic: {
    image: 'https://via.placeholder.com/300x200?text=Romantic',
    colors: ['#FFC0CB', '#FF69B4', '#FFB6C1'],
    songs: [
      { name: 'Perfect - Ed Sheeran', url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g' },
      { name: 'All of Me - John Legend', url: 'https://www.youtube.com/watch?v=450p7goxZqg' }
    ]
  },
  Dark: {
    image: 'https://via.placeholder.com/300x200?text=Dark',
    colors: ['#2C2C2C', '#1A1A1D', '#0D0D0D'],
    songs: [
      { name: 'Heathens - Twenty One Pilots', url: 'https://www.youtube.com/watch?v=UprcpdwuwCg' },
      { name: 'Lovely - Billie Eilish ft. Khalid', url: 'https://www.youtube.com/watch?v=V1Pl8CzNzCw' }
    ]
  },
  Calm: {
    image: 'https://via.placeholder.com/300x200?text=Calm',
    colors: ['#ADD8E6', '#B0E0E6', '#E0FFFF'],
    songs: [
      { name: 'Weightless - Marconi Union', url: 'https://www.youtube.com/watch?v=UfcAVejslrU' },
      { name: 'Bloom - The Paper Kites', url: 'https://www.youtube.com/watch?v=8inJtTG_DuU' }
    ]
  }
};

function generateVibe(vibe) {
  const board = document.getElementById('vibeBoard');
  const vibeInfo = vibeData[vibe];
  
  const card = document.createElement('div');
  card.className = 'card';
  
  const image = document.createElement('img');
  image.src = vibeInfo.image;
  card.appendChild(image);
  
  const title = document.createElement('h3');
  title.textContent = vibe;
  card.appendChild(title);
  
  const colorContainer = document.createElement('div');
  colorContainer.className = 'colors';
  vibeInfo.colors.forEach(color => {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorContainer.appendChild(colorBox);
  });
  card.appendChild(colorContainer);
  
  const songList = document.createElement('div');
  vibeInfo.songs.forEach(song => {
    const songLink = document.createElement('a');
    songLink.href = song.url;
    songLink.target = '_blank';
    songLink.textContent = song.name;
    songList.appendChild(songLink);
  });
  card.appendChild(songList);
  
  board.appendChild(card);
}
