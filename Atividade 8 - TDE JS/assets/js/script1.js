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