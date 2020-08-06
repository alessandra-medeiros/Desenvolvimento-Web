function calculo() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var nome = document.getElementById('nome').value;
    var conta;
    
    conta = Math.round (peso / (altura * 2));
    
    if (conta < 18.5) {
        document.getElementById('resultado').innerHTML = ("Olá, " + nome + "!" +
                                                          "<br>Seu IMC está abaixo do peso ideal." +
                                                          "<br>IMC: " + conta);
    } else if (conta >= 18.5 && conta <= 25) {
        document.getElementById('resultado').innerHTML = ("Olá, " + nome + "!" +
                                                          "<br>Seu IMC está no peso ideal!" +
                                                          "<br>IMC: " + conta);
    } else if (conta >= 25 && conta <= 30) {
        document.getElementById('resultado').innerHTML = ("Olá, " + nome + "!" +
                                                          "<br>Seu IMC está acima do peso ideal." +
                                                          "<br>IMC: " + conta);
    } else if (conta > 30) {
        document.getElementById('resultado').innerHTML = ("Olá, " + nome + "!" +
                                                          "<br>Seu IMC está em nível de obesidade." +
                                                          "<br>IMC: " + conta);
    }
}