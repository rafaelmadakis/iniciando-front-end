const modalOverlay = document.querySelector('.modal-overlay'); // seleciona o modal-overlay
const cards = document.querySelectorAll('.card'); // selecuiona uma coleção de valores

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')

    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
     modalOverlay.classList.remove("active");
 })