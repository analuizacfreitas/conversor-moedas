
function converter() {
    
    var valorEmReais = Number(document.getElementById('inputUser').value);
    var moedaEscolhida = document.getElementById('opcaoMoeda').value;

    div_resultado.innerHTML = `<br><p>Valor digitado (BRL): 
    R$${valorEmReais}</p>`

    if (moedaEscolhida == 'euro') {
        var cotacaoEuro = 6.54;
        div_resultado.innerHTML += `<p>Valor em Euro (EUR): 
        €${(valorEmReais * cotacaoEuro).toFixed(2)}</p>`
    } 
   if (moedaEscolhida == 'dolar') {
        var cotacaoDolar = 5.52;
        div_resultado.innerHTML += `<p>Valor em Dólar (USD): 
        $${(valorEmReais * cotacaoDolar).toFixed(2)}</p>`
    }
    if (moedaEscolhida == 'libra') {
        var cotacaoLibra = 7.59;
        div_resultado.innerHTML += `<p>Valor em Libra(GBP): 
        £${(valorEmReais * cotacaoLibra).toFixed(2)}</p>`
    }
}

