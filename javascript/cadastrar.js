function cadastrar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmsenha = document.getElementById('confirmsenha').value;

    if(senha == confirmsenha){
        alert("Cadastro realizado com sucesso!.");

        location.href = "login.html";

    }else{
        alert("Senhas incorretas.")
    }

}