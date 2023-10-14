
function clicar() {
    var qtd = document.querySelector(".quant").value;
    var preco = document.querySelector(".preco").value;

     var result = parseInt(qtd) * parseInt(preco);
     document.querySelector(".resultado").innerHTML = result;
 }           
