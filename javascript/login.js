function logar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(login == "andrevinicius_santos@hotmail.com" && senha == "12345678"){
        alert("Login efetuado com sucesso.");
        location.href = "inicio.html";

    }else{
        alert("Usuário ou senha incorretos.")
    }

}