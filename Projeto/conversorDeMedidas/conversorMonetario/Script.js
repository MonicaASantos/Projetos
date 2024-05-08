
function converter() {
    var cotacao = document.getElementById("cotacao").value;
    var valorReais = prompt("Quantos reais você tem na carteira?");
    
    if (valorReais === null || valorReais === "") {
        alert("Por favor, informe um valor válido.");
        return;
    }
    
    valorReais = parseFloat(valorReais);
    
    if (isNaN(valorReais)) {
        alert("Por favor, informe um valor numérico válido.");
        return;
    }
    
    var valorDolares = valorReais / cotacao;
    document.getElementById("resultado").innerHTML = "Com R$ " + valorReais.toFixed(2) + " você consegue comprar US$ " + valorDolares.toFixed(2);
}