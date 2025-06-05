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