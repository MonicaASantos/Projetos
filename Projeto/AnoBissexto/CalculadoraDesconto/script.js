function calcularDesconto() {
    var precoOriginal = parseFloat(prompt("Insira o preço original:"));
    var smartwatch = parseFloat(prompt("Insira o produto"));
    
    if (isNaN(precoOriginal)) {
      alert("Por favor, insira um valor válido.");
      return;
    }
    var desconto = precoOriginal * 0.1;
    var precoComDesconto = precoOriginal - desconto;
    alert("Preço com desconto: R$ " + precoComDesconto.toFixed(2));
  }
  