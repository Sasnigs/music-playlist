const featureContent = document.querySelector('.album-container')
const randomIndex = Math.floor(Math.random() * playlist.length);
const randomPlaylist = playlist[randomIndex]
featureContent.innerHTML = `
  <div class="playlist-box">
    <img src="${randomPlaylist.playlistImage}" width="400px" alt="">
    <p class="album-title">${randomPlaylist.playlistTitle}</p>
  </div>

  <div class="album-right">
    ${randomPlaylist.playlistSongs.map(song => `
      <div class="songs-box">
        <img src="${randomPlaylist.playlistImage}" width="100px" alt="">
        <div class="song-details">
          <p class="song-title">${song.songTitle}</p>
          <p class="song-artist">${song.songArtist}</p>
          <p class="song-album">${song.songAlbum}</p>
          <p class="song-duration">${song.songDuration}</p>
        </div>
      </div>
    `).join('')}
  </div>
`;