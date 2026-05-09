const ask = require('readline-sync')

function soma(Number1, Number2){
    return `${Number1} + ${Number2} = ${Number1 + Number2}`
}
function subtração(Number1, Number2){
    return `${Number1} - ${Number2} = ${Number1 - Number2}`
}
function vezes(Number1, Number2){
    return `${Number1} * ${Number2} = ${Number1 * Number2}`
}
function divisao(Number1, Number2){
    return `${Number1} / ${Number2} = ${Number1 / Number2}`
}
function restodadivisao(Number1, Number2){
    return `${Number1} % ${Number2} = ${Number1 % Number2}`
}

function funcoes(firstNumber, secondNumber, chooseMod){
    switch (chooseMod) {
        case 1:
            console.log(soma(firstNumber, secondNumber))
            break
        case 2:
            console.log(subtração(firstNumber, secondNumber))
            break
        case 3:
            console.log(vezes(firstNumber, secondNumber))
            break
        case 4:
            console.log(divisao(firstNumber, secondNumber))
            break
        case 5:
            console.log(restodadivisao(firstNumber, secondNumber))
            break
        default:
            console.log(`Erro`)
            break
    }

}




let firstNumber = Number(ask.question("Selecione o primeiro Numero"))
let secondNumber = Number(ask.question("Selecione o segundo Numero"))
let chooseMod = Number(ask.question(`Selecione a sua operaçao:
1) Soma
2) Subtraçao
3) Vezes
4) Divisao
5) Resto da Divisão
Selecione: `))

funcoes(firstNumber, secondNumber, chooseMod)