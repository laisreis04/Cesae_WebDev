
function calculadoraSoma(){

    // Guardar o valor A numa variavel
    var valorA = parseInt(document.getElementById("valorA").value);

    // Guardar o valor B numa variavel
let valorB = parseInt(document.getElementById("valorB").value);

let resultadoSoma = valorA + valorB

// Mostrar resultado
// alert(resultadoSoma)

// Mostrar o resultado em texto
document.getElementById("resultadoH1").innerText = "Resultado = " + resultadoSoma;

}

// Função Divisão

// Função Multiplicar

// Função Subtração




// Função - Avaliar o tipo de opreção atraves da comparação

function compararOpe(){

    // Guardar o input do user numa variavel
    let sinalOp = document.getElementById("tipoOp").value;

    if(sinalOp === "+"){
        calculadoraSoma();
    }

    // IF's de comparação

}
