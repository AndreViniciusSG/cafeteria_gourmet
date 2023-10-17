var quant, total

function var_total() {
    var quant = document.getElementById("quantidade").value;
    total = parseInt(quant) * 89;
    document.getElementById("total").value = total;
}
