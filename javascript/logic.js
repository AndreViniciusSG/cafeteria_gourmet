let btn = document.querySelector('.eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAtribute('type', 'text')

    }else{
        inputSenha.setAtribute('type', 'password')
    }

})