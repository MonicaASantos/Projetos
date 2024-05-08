function verificarAno() {
    var ano = document.getElementById("ano").value;
    var resultado = document.getElementById("resultado");
  
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
      resultado.innerHTML = ano + " é um ano bissexto.";
    } else {
      resultado.innerHTML = ano + " não é um ano bissexto.";
    }
  }
  