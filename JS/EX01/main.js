//Criar uma função para calcular

function calcularSoma (){

//Variavel Valor A

let valorA = parseInt(document.getElementById("inputValorA").value)     //-> "10"

//Variavel Valor B

let valorB = parseInt(document.getElementById("inputValorB").value)

//Variavel Resultado

let resultadoSoma = valorA + valorB


//alert( "O resultado é: " + resultadoSoma)

document.getElementById("textoResultado").innerText = "Resultado é: " + resultadoSoma

}

//Função que irá comparar o tipo de dados que recebe para poder calcular

function compararOpe(){

//guardar o dado numa variavel
let tipoOpe = document.getElementById("tipoOperation").value

//Comparação

if(tipoOpe === "+"){
    calcularSoma();
}
if(tipoOpe === "-"){
    calcularSubtracao()
}

}