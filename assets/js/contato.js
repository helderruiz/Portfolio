const botaoEnviar = document.getElementById('form__botao-enviar')
botaoEnviar.addEventListener('click', clicar)

const enviado = document.getElementById('enviado')
const nome = document.getElementById('formGroupExampleInput')
const email = document.getElementById('exampleFormControlInput1')
const textArea = document.getElementById('exampleFormControlTextarea1')


function clicar() {
    if(nome.value.length == 0 || email.value.length == 0 || textArea.value.length == 0) {
        alert('Digite os campos acima!')
    } else {
        enviado.innerHTML = `<div id="enviado">Enviado com Sucesso</div>`
    }
}
