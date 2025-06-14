// import playlist from './data.json';
const playlistCards = document.querySelector('.playlist-cards')

playlist.forEach(item =>{
    playlistCards.innerHTML += `
    <div class="cards" data-id=${item.playlistId}>
            <img style="border-radius: 5px 5px 0px 0px;" src="${item.playlistImage}" alt="playlist-image" width="250px">
            <p class="playlist-title">${item.playlistTitle}</p>
            <p class="creator-name">${item.playlistCreator}</p>
            <p>
            <i class="fa-regular fa-heart like-heart"></i> 
            <span class="like-count">${item.playlistLikeCount}</span>
            </p>
    </div>
    `
})
modalPlaylistCards()
function modalPlaylistCards(){
    const cards = document.querySelectorAll('.cards')
    const modal = document.querySelector('.modal-overlay')

    cards.forEach(card =>{
        card.addEventListener('click', () =>{
            const id = parseInt(card.dataset.id)
            const matchedPlayList = playlist.find( item => item.playlistId === id)
            fillModal(matchedPlayList)
            modal.classList.add('show')

        })
    })
    modal.addEventListener('click', (e) => {
        if ( e.target === modal){
            modal.classList.remove('show')
        }
    })
}
function fillModal(data){
    const modalContent = document.querySelector('.modal-content')
    modalContent.innerHTML = 
    `
    <div  class="modal-header">
              <div class="modal-header-left">
                    <img src="${data.playlistImage}" alt="" width="200px">
                    <button class="shuffle-btn">Shuffle</button>
              </div>
                <div>
                    <p style="font-size: xx-large; font-weight: 100;">${data.playlistTitle}</p>
                    <p style="font-size: x-large; font-weight: lighter;">${data.playlistCreator}</p>
                </div>
    </div>
    <div id="modal-bottom">
            ${data.playlistSongs.map(song => `
            <div class="song-card">
                <div class="song-details">
                    <img src="${data.playlistImage}" alt="" width="100px">
                    <div class="song-title">
                       <p>${song.songTitle}</p>
                       <p>${song.songArtist}</p>
                       <p>${song.songAlbum}</p>
                    </div>
                </div>
                <p>${song.songDuration}</p>
            </div>

                `
            ).join('')}
     </div>
    `;
    document.querySelector('.shuffle-btn').addEventListener('click', () => {
    const songList = document.getElementById("modal-bottom");
    const songs = Array.from(songList.children);
    songs.sort(() => Math.random() - 0.5);
    songList.innerHTML = "";
    songs.forEach(song => songList.appendChild(song));
  });
}
likesCount()

const playlistForm = document.querySelector('.playlist-form')
playlistForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const inputArray = playlistForm.querySelectorAll('input')
    const inputObject = {}
    inputArray.forEach(input =>{
        inputObject[input.name] = input.value
    })
    inputObject["playlistImage"] =  "https://picsum.photos/200"
    console.log(inputObject)
    playlist.push(inputObject)
    render(inputObject)
    // fillModal(inputObject)
    e.target.reset()
    playlistForm.innerHTML = 
    ` <div class="songs-input">
            <input type="text" class="Playlist-name" name="PlaylistName" placeholder="Playlist-name" required>
            <input type="text" class="Playlist-author" name="PlaylistAuthor" placeholder="Playlist-author" required>
            <input type="text" class="song-title" name="songTitle" placeholder="song-title" required>
            <input type="text" class="song-artist" name="songArtist" placeholder="song-artist" required>
            <input type="text" class="song-duration" name="songDuration" placeholder="song-duration" required>
         </div>
            <button type="submit">AddPlaylist</button>
             <button class="add-song-btn">Add Song</button>
    
   `
})
const addSong = document.querySelector('.add-song-btn')
addSong.addEventListener('click', () =>{
    const newSong = document.createElement('div')
    newSong.innerHTML += `
            <input type="text" class="song-title" name="songTitle" placeholder="song-title" required>
            <input type="text" class="song-artist" name="songArtist" placeholder="song-artist" required>
            <input type="text" class="song-duration" name="songDuration" placeholder="song-duration" required>
    `
    document.querySelector('.songs-input').appendChild(newSong)

})

function render(data){
    const newCard = document.createElement('div')
     newCard.innerHTML = `
    <div class="cards" data-id=${playlist.length +1}>
            <img style="border-radius: 5px 5px 0px 0px;" src="${data.playlistImage}" alt="playlist-image" width="250px">
            <p class="playlist-title">${data.PlaylistName}</p>
            <p class="creator-name">${data.PlaylistAuthor}</p>
            <p>
            <i class="fa-regular fa-heart like-heart"></i> 
            <span class="like-count">0</span>
            </p>
    </div>
    `;
    playlistCards.appendChild(newCard)
    likesCount()

}
function likesCount(){

const like = document.querySelectorAll('.like-heart');
like.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();

    const countElement = button.nextElementSibling;
    let count = parseInt(countElement.textContent.trim());

    if (button.classList.contains('liked')) {
      button.classList.remove('liked', 'fa-solid');
      button.classList.add('fa-regular');
      count--;
    } else {
      button.classList.add('liked', 'fa-solid');
      button.classList.remove('fa-regular')
      count++;
    }

    countElement.textContent = count;
  });
});

}









