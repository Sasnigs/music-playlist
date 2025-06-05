// import playlist from './data.json';
const playlistCards = document.querySelector('.playlist-cards')

playlist.forEach(item =>{
    playlistCards.innerHTML += `
    <div class="cards" data-id=${item.playlistId}>
            <img style="border-radius: 5px 5px 0px 0px;" src="${item.playlistImage}" alt="playlist-image" width="250px">
            <p class="playlist-title">${item.playlistTitle}</p>
            <p class="creator-name">${item.playlistCreator}</p>
            <p><i class="fa-regular fa-heart"></i> ${item.playlistLikeCount}</p>
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
               <img src="${data.playlistImage}" alt="" width="200px">
                <div>
                    <p style="font-size: xx-large; font-weight: 100;">${data.playlistTitle}</p>
                    <p style="font-size: x-large; font-weight: lighter;">${data.playlistCreator}</p>
                </div>
            </div>
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
    `
}




