function calcularTroco() {
     
     var total = parseFloat(document.getElementById("total").value);
    var pago = parseFloat(document.getElementById("pago").value);
     var troco = document.getElementById("troco");

  
    if (isNaN(total) || isNaN(pago)) {
      troco.innerHTML = "Por favor, insira valores válidos.";
      return;
    }
  
    if (pago < total) {
      troco.innerHTML = "Valor pago insuficiente.";
      return;
    }
  
    var valorTroco = pago - total;
    troco.innerHTML = "Troco: R$ " + valorTroco.toFixed(2);
  }
  