setInputFilter(document.getElementById("ap1"), function(value) {
    return /^-?\d*[.]?\d*$/.test(value); });

setInputFilter(document.getElementById("ap2"), function(value) {
    return /^-?\d*[.]?\d*$/.test(value); });

setInputFilter(document.getElementById("as"), function(value) {
    return /^-?\d*[.]?\d*$/.test(value); });


function calculoNew() {
    var ap1 = parseFloat(document.getElementById('ap1').value);
    var ap2 = parseFloat(document.getElementById('ap2').value);
    var as = parseFloat(document.getElementById('as').value);
    var conta;
    
    conta = ap1 + ap2 + as;
    
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