document.getElementById('converterBtn').addEventListener('click', function() {
    var celsius = parseFloat(prompt('Digite a temperatura em graus Celsius (˚C):'));
    
    if (!isNaN(celsius)) {
      var kelvin = celsius + 273.15;
      var fahrenheit = (celsius * 9/5) + 32;
      
      document.getElementById('output').innerHTML = `
        <p>Temperatura em Celsius: ${celsius} ˚C</p>
        <p>Temperatura em Kelvin: ${kelvin.toFixed(2)} ˚K</p>
        <p>Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)} ˚F</p>
      `;
    } else {
      alert('Por favor, insira um valor numérico válido.');
    }
  });
  

