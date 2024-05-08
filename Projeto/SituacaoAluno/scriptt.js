function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var resultado = document.getElementById("resultado");
  
    if (isNaN(nota1) || isNaN(nota2)) {
      resultado.innerHTML = "Por favor, insira valores válidos para as notas.";
      return;
    }
  
    var media = (nota1 + nota2) / 2;
    resultado.innerHTML = "Média: " + media.toFixed(1);
  
    if (media >= 7) {
      resultado.innerHTML += "<br>Aluno aprovado!";
    } else {
      resultado.innerHTML += "<br>Aluno reprovado.";
    }

}
