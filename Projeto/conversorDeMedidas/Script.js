document.getElementById('converterBtn').addEventListener('click', function() {
    var distanciaEmMetros = parseFloat(prompt("Digite a distância em metros (m):"));

    if (isNaN(distanciaEmMetros)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpar resultado anterior, se houver

    // Converter para outras unidades
    var km = distanciaEmMetros / 1000;
    var hm = distanciaEmMetros / 100;
    var dam = distanciaEmMetros / 10;
    var dm = distanciaEmMetros * 10;
    var cm = distanciaEmMetros * 100;
    var mm = distanciaEmMetros * 1000;

    // Exibir resultado
    resultado.innerHTML += "<p>" + distanciaEmMetros + " metros é equivalente a:</p>";
    resultado.innerHTML += "<p>" + km + " quilômetros</p>";
    resultado.innerHTML += "<p>" + hm + " hectômetros</p>";
    resultado.innerHTML += "<p>" + dam + " decâmetros</p>";
    resultado.innerHTML += "<p>" + dm + " decímetros</p>";
    resultado.innerHTML += "<p>" + cm + " centímetros</p>";
    resultado.innerHTML += "<p>" + mm + " milímetros</p>";
});