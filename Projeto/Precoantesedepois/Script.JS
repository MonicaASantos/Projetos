function calcularPreco() {
    var precoAntes = parseFloat(document.getElementById("precoAntes").value);
    var percentual = parseFloat(document.getElementById("percentual").value);
    var precoDepoisElement = document.getElementById("precoDepois");
  
    if (isNaN(precoAntes) || isNaN(percentual)) {
      precoDepoisElement.innerHTML = "Por favor, insira valores válidos.";
      return;
    }
  
    var precoDepois = precoAntes + (precoAntes * percentual / 100);
    precoDepoisElement.innerHTML = "Preço Depois do Reajuste: R$ " + precoDepois.toFixed(2);
  }
  