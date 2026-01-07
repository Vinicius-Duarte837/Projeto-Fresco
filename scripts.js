function menuMobile(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mudouTamanho(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }
}

function getYear(){
    let res = document.getElementById("year")
    let data = new Date()
    let ano = data.getFullYear()
    res.innerHTML = ano
}

//Autoformatação do telefone no contato
const telInput = document.getElementById('itel')

telInput.addEventListener('input', (e) => {
    const value = e.target.value.replace(/\D/g, '')
    let formatedValue = ''
    if (value.length > 0){
        formatedValue = '(' + value.substring(0,2)
    }
    if (value.length >= 3){
        formatedValue += ') ' + value.substring(2,7)
    }
    if (value.length >= 8){
        formatedValue += '-' + value.substring(7,11)
    }

    e.target.value = formatedValue
})

function validarForm(){
    let inputNome = document.getElementById('inome')
    let inputEmail = document.getElementById('iemail')
    let inputMsg = document.getElementById('imsg')
    let inputUni = document.getElementById('iunidade')
    let erroNome = document.getElementById('erro-nome')
    let erroEmail = document.getElementById('erro-email')
    let erroMsg = document.getElementById('erro-msg')
    let erroUni = document.getElementById('erro-uni')

    if (inputNome.value == 0){
        inputNome.style.borderColor = 'red'
        erroNome.style.display = 'block'
    }
    if(inputEmail.value == 0){
        inputEmail.style.borderColor = 'red'
        erroEmail.style.display = 'block'
    }
    if(inputMsg.value == 0){
        inputMsg.style.borderColor = 'red'
        erroMsg.style.display = 'block'
    }

    inputNome.addEventListener('invalid', function(event){
        event.preventDefault()
    })
    inputEmail.addEventListener('invalid', function(event){
        event.preventDefault()
    })
    inputMsg.addEventListener('invalid', function(event){
        event.preventDefault()
    })
    inputUni.addEventListener('invalid', function(event){
        event.preventDefault()
        inputUni.style.borderColor = 'red'
        erroUni.style.display = 'block'
    })
}