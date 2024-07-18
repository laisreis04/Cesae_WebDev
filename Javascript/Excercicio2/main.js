// Criar uma função que verifique os numeros pares

function parNumbers(){

//Iniciar os valores das variaveis
let inicio = document.getElementById("rangeInicio").value;
let fim = document.getElementById("rangeFinal").value;

//Variavel para guardar todos os numeros pares
let numeroPares = ""

//for(inicialização; comparação; incremento )
for(var i = inicio; i <= fim; i++){

    //Qual a condição (if)
    if(i % 2 === 0){
       //numeroPares += i + " "
       numeroPares = numeroPares + i + " " //espaço criado para separa os numeros
    }
}

let numerosPares = i
document.getElementById("isNumPar").innerText = "Os numeros pares são: " + numeroPares


}

//Exercício fazer numeros impares