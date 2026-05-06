/*
function isEqual(num1, num2){
    // let condition = num1 === num2
    // if (condition) {
    if (num1 === num2) {
        return `${num1} e ${num2} são iguais`
    } else {
        return `${num1} e ${num2} são diferentes`
    }
}

// -------------------------------------------------

let firstNumber = 2
let secondNumber = 5

console.log(isEqual(firstNumber, secondNumber))

*/


// minha maneira anterior:
// num1 = 5
// num2 = 5
// right = num1 == num2
// if (right){
    // console.log("Correto")
// }



// Exercicio 3

function more(num5, num6){
    if (num5 > num6){
        return `o numero ${num5} é maior que ${num6}`
    } else if (num5 < num6){
        return `o numero ${num5} é menor que ${num6}`
    } else {
        return `os numeros ${num5} e ${num6} são iguais`
    }
}

console.log(more(6, 6))