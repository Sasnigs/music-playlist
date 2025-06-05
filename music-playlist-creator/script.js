// import playlist from './data.json';
const playlistCards = document.querySelector('.playlist-cards')

playlist.forEach(item =>{
    playlistCards.innerHTML += `
    <div class="cards">
            <img style="border-radius: 5px 5px 0px 0px;" src="${item.playlistImage}" alt="playlist-image" width="250px">
            <p class="playlist-title">${item.playlistTitle}}</p>
            <p class="creator-name">${item.playlistCreator}</p>
            <p><i class="fa-regular fa-heart"></i> ${item.playlistLikeCount}</p>
    </div>
    `
})

const cards = document.querySelectorAll('.cards')
const modal = document.querySelector('.modal-overlay')

cards.forEach(card =>{
    card.addEventListener('click', () =>{
        modal.classList.add('show')
    })
})

modal.addEventListener('click', (e) => {
    if ( e.target === modal){
        modal.classList.remove('show')
    }
})
