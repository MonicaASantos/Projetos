document.getElementById('calculateBtn').addEventListener('click', function() {
    var productName = prompt('Qual é o produto que está sendo comprado?');
    var productPrice = parseFloat(prompt('Qual é o preço do produto que está sendo comprado?'));
    
    if (!isNaN(productPrice)) {
      var discount = productPrice * 0.1;
      var discountedPrice = productPrice - discount;
      var savings = discount.toFixed(2);
  
      document.getElementById('output').innerHTML = `
        <p>Produto: ${productName}</p>
        <p>Preço original: R$ ${productPrice.toFixed(2)}</p>
        <p>Desconto (10%): R$ ${savings}</p>
        <p>Preço com desconto: R$ ${discountedPrice.toFixed(2)}</p>
      `;
    } else {
      alert('Por favor, insira um preço válido.');
    }
  });
  