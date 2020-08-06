setInputFilter(document.getElementById("g1"), function(value) {
    return /^-?\d*[.]?\d*$/.test(value); });

setInputFilter(document.getElementById("g2"), function(value) {
    return /^-?\d*[.]?\d*$/.test(value); });

function calculoOld() {
    var g1 = parseFloat(document.getElementById('g1').value);
    var g2 = parseFloat(document.getElementById('g2').value);
    var conta;
    
    conta = Math.round ((g1 + (g2 * 2)) / 3);
    
    if (conta < 6 && conta >= 0) {
        document.getElementById('resultado').innerHTML = (conta +
                                                         "<br> Volte um semestre e tente novamente...");
    } else if (conta >= 6 && conta <= 10) {
        document.getElementById('resultado').innerHTML = (conta +
                                                         "<br> Parabéns!");
    } else {
        document.getElementById('resultado').innerHTML = ("Números inválidos.");
    }
}