function converterMoeda() {
    var dolares = parseFloat(document.getElementById("dolares").value);
    var resultadoElement = document.getElementById("resultado");
  
    if (isNaN(dolares)) {
      resultadoElement.innerHTML = "Por favor, insira um valor válido em dólares.";
      return;
    }
  
    var taxaConversao = 0.89; 
    var euros = dolares * taxaConversao;
  
    resultadoElement.innerHTML = "Euros: " + euros.toFixed(2) + " €";
  }
  