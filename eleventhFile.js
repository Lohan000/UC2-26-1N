const ask = require('readline-sync')

let list = ["vira lata", "de Casa", "borderline", "Caramelo", "Pitibu"]
let choose = Number(ask.question("Escolha um número de 0 a 4"))

console.log(list[choose])

