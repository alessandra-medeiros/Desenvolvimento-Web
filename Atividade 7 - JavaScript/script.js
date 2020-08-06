//Exercício 1: parte 01:
var n = prompt('Digite um número para comparar: ');
n = parseFloat(n);

if(n > 10)
    alert (n + ' é maior que 10.')
else if(n < 10)
    alert (n + ' é menor que 10.')
else
    alert (n + ' é igual a 10.')


//Exercício 1: parte 02:
var v1 = parseFloat(prompt('Digite o primeiro valor:'));
var v2 = parseFloat(prompt('Digite o segundo valor:'));
alert(v1 + ' + ' + v2 + ' = ' + (v1+v2));


//Exercício 1: parte 03:
var operador = parseInt(prompt('Escolha uma operação:\n 1 = Adição (+)\n 2 = Subtração (-)\n 3 = Multiplicação (*)\n 4 = Divisão (/)'));
var v3 = parseFloat(prompt('Digite o primeiro valor:'));
var v4 = parseFloat(prompt('Digite o segundo valor:'));

switch (operador){
    case 1:
        alert(v3 + ' + ' + v4 + ' = ' + (v3+v4))
        break;
    case 2:
        alert(v3 + ' - ' + v4 + ' = ' + (v3-v4))
        break;
    case 3:
        alert(v3 + ' * ' + v4 + ' = ' + (v3*v4))
        break;
    case 4:
        alert(v3 + ' / ' + v4 + ' = ' + (v3/v4))
        break;
    default:
        alert('Operador incorreto.')
}


//Exercício 1: parte 04:
var nome = prompt('Informe um nome:');
var x = parseInt(prompt('Informe um número qualquer:'));

for(var i = 0; i < x; i++){
    alert(nome);
}


//Exercício 1: parte 05:
var array = [];
array[0] = prompt('Informe seu nome:');
array[1] = prompt('Informe seu endereço:');
array[2] = prompt('Informe seu e-mail:');

for(var i = 0; i < 3; i++){
    alert(array[i]);
}

var objeto = {}
objeto.nome = prompt('Informe seu nome:');
objeto.endereco = prompt('Informe seu endereço:');
objeto.email = prompt('Informe seu e-mail:');

for(x in objeto){
    alert(objeto[x]);
}


//Exercício 2: Calculadora:
var calcular = document.querySelector("#calcular");

calcular.addEventListener("click", function(){
    event.preventDefault();
    console.log("Click");
    console.log(document.querySelector("#operador").value);
    var operador = document.querySelector("#operador").value
    
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    
    if (operador == "soma")
        var resultado = v1 + v2;
    else if(operador == "subtracao")
        var resultado = v1 - v2;
    else if(operador == "multiplicacao")
        var resultado = v1 * v2;
    else
        var resultado = v1 / v2;
    
    document.getElementById("resultado").value = resultado;
});