function calcularReajuste() {
    var salarioAtual = parseFloat(document.getElementById("salarioAtual").value);
    var percentual = parseFloat(document.getElementById("percentual").value);
    var novoSalario = document.getElementById("novoSalario");
  
    if (isNaN(salarioAtual) || isNaN(percentual)) {
      novoSalario.innerHTML = "Por favor, insira valores válidos.";
      return;
    }
  
    var aumento = (salarioAtual * percentual) / 100;
    var salarioReajustado = salarioAtual + aumento;
  
    novoSalario.innerHTML = "Novo salário: R$ " + salarioReajustado.toFixed(2) + " (Aumento de R$ " + aumento.toFixed(2) + ")";
  }
  