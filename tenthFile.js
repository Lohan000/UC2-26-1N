const ask = require('readline-sync')


// LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT
// Utilize o pacote readline-sync para entrada de dados quando necessário.
// Resolva cada exercício separadamente.

// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome

/*
let name = ask.question("Nome Completo:");
let total = name.length

console.log(`Boa noite ${name}, seu números de caracteres no seu nome é: ${total}`);
*/

// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas

/*
let phrase = ask.question("Digite uma frase:");
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());
*/

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços

/*
const phraselol = ("Socorram-me! Subi no onibus em Marrocos!                        ")
const phraselol2 = phraselol.trim()
console.log(`Texto Original: ${phraselol}, O texto sem os espaços dsnecessários: ${phraselol2}, o tamanho antes: ${phraselol.length}, o tamanho depois: ${phraselol2.length}`)
*/

// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.

/*
let fruits = ("Uva , Amexa , Bergamorta , Laranja , Maçã")
let fruitsQuestion = ask.question("Qual são as suas cinco frutas favoritas?!!")
console.log(`Você gosta de alguma coisa que eu gosto: ${fruits.includes(fruitsQuestion)}`)
*/

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.
/*
let phrasetwt = ask.question("Faça uma frase:")
let phrasetwt2 = ask.question("qual Palavra se quer substituir da frase anterior?") 
let phrasetwt3 = ask.question("A nova palavra para a substituição:")
let phrasetwt4 = phrasetwt.replaceAll(phrasetwt2, phrasetwt3)
console.log(`${phrasetwt4}`)
*/

// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string
/*
let num = ask.question("Primeiro Valor")
let num2 = ask.question("Segundo Valor")

console.log(`${num} mais ${num2} igual a: ${num + num2}`)
*/

// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof

/*
let num3 = ask.question("Digita qualquer valor")
let num4 = typeof(num3)
console.log(`${num3} e seu valor ${typeof(num3)}`)
*/

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase
/*
let words = ask.question("Digita uma palavra: ")
let words2 = ask.question("Digite uma palavra: ")
let words3 = words + words2
let words4 = words3.length
console.log(`${words3} e o tamnho dessa frase ${words4}`)
*/


// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.

/*
let special = ask.question("Digite uma frase: ").toUpperCase()
let special2 = ask.question("Uma letra: ").toUpperCase()
let special3 = special.toUpperCase()
let special4 = special3.replaceAll((special2, "*")

console.log(special4)
*/