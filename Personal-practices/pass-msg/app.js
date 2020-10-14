const submitBtn = document.querySelector('.submitBtn')
let msgContent = document.querySelector('.message-content')

const getInputValue = () => {
  let message = document.getElementById('message').value;
  if (!message) {
    alert('Digite algo na caixa de Mensagens para Enviar !')
  } else {
    msgContent.innerHTML = message

  }
}

submitBtn.addEventListener('click', getInputValue)