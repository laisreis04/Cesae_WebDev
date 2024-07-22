// Criar uma funçãi que verifique os numeros pares

function numeroPar(){

    //Variaveis
    let inicio = document.getElementById("rangeInicio").value
    let fim = document.getElementById("rangeFim").value

    let numerosPares = " "

    //For(inicialização; comparação; incremento)

    for(var i = inicio; i < fim; i++){

        //Qual a condição do retorno

        if(i % 2 === 0){
            numerosPares += i + " "
        }
    }


    document.getElementById("textoNumerosPares").innerText = "Numeros pares são: " + numerosPares

}