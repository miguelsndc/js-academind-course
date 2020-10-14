const modal = document.getElementById('modal');
const showModalBtn = modal.nextElementSibling;
const overlay = document.body.firstElementChild;


const toggleOverlay = () => {
  overlay.classList.toggle('overlay-invisible')
}

const showModal = () => {
  modal.classList.toggle('invisible')
  toggleOverlay();
}

showModalBtn.addEventListener('click', showModal)
overlay.addEventListener('click', toggleOverlay)
