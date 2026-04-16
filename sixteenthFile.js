const ask = require('readline-sync')
// =========================================
/*


   █████████                                                   
  ███░░░░░███                                                  
 ░███    ░███  ████████  ████████   ██████   █████ ████  █████ 
 ░███████████ ░░███░░███░░███░░███ ░░░░░███ ░░███ ░███  ███░░  
 ░███░░░░░███  ░███ ░░░  ░███ ░░░   ███████  ░███ ░███ ░░█████ 
 ░███    ░███  ░███      ░███      ███░░███  ░███ ░███  ░░░░███
 █████   █████ █████     █████    ░░████████ ░░███████  ██████ 
░░░░░   ░░░░░ ░░░░░     ░░░░░      ░░░░░░░░   ░░░░░███ ░░░░░░  
                                              ███ ░███         
                                             ░░██████          
                                              ░░░░░░        
                                              
                                              
*/
// =========================================
// Instruções:
// - Leia cada enunciado com atenção
// - Implemente a solução logo abaixo de cada exercício
// - NÃO pule exercícios
// - Pesquise na internet métodos que você não conhece
// =========================================


// =========================================
// EXERCÍCIO 1
// Crie um array com pelo menos 6 filmes.
// Peça para o usuário digitar um número.
// Mostre o filme que está na posição informada.
// =========================================
/*
let list1 = ["Rubber, O Pneu Assassino", "Christine - O Carro Assassino", "Sofá Assassino",  "e Slaxx - Calça Assassina (2020)", "minecraft", "Panico"]
question1 = ask.question("Digite um número para olhar um filme aleatorio de 1 a 6: ");

console.log(`Filme Escolhido: ${list1[question1 - 1]}`);
*/

// =========================================
// EXERCÍCIO 2
// Crie um array com 8 tipos de bebidas.
// Mostre quantos elementos existem nele.
// =========================================

/*
let listArray = ["Guarana", "Coca", "Pepsi", "Fanta", "Sprite", "Sukita", "Grapette", "Fruki"]

console.log(`Existem ${listArray.length} elementos`)
*/

// =========================================
// EXERCÍCIO 3
// Crie um array com 5 Pokémons.
// Peça para o usuário digitar o nome de um Pokémon.
// Verifique se ele está no array.
// =========================================
/*
let pokemon = ["Pikachu", "Charmander", "Probopass", "UHaFnir", "Garbodor"]
let pokemonquestion = ask.question("Pergunte para ver se o seu pokemon está no meu inventário")

console.log(`Seu pokemon ${pokemonquestion} está no meu inventario? ${pokemon.includes(pokemonquestion)}`)
*/

// =========================================
// EXERCÍCIO 4
// Crie um array vazio.
// Peça ao usuário 3 nomes de jogos.
// Adicione ao array.
// Mostre o array final.
// =========================================
/*
let list2 = []
let content = ask.question("Me da 3 nomes de jogos: ")
list2.push(content)

console.log(`Conteúdo: ${content}`)
*/

// =========================================
// EXERCÍCIO 5
// Crie um array com 5 séries.
// Remova a última série.
// Mostre o array atualizado.
// =========================================
/*
let list3 = ["Breaking Bad", "Stranger Things", "The Office", "Game of Thrones", "Black Mirror" ]
list3.pop()

console.log(`${list3}`)
*/
// =========================================
// EXERCÍCIO 6
// Crie um array com 6 comidas.
// Remova 2 comidas a partir de uma posição específica.
// Mostre o array resultante.
// =========================================
/*
let food = ["Cachorro quente", "Pastel", "Carnemoida", "Carne", "Pão de queijo", "Amendoim"]
food.splice(2, 2) 

console.log(`${food}`)
*/

// =========================================
// EXERCÍCIO 7
// Crie um array com nomes de bandas.
// Mostre todas as bandas no console,
// separadas por " - ".
// =========================================

/*
let band1 = ["The Beatles", "Rolling Stones", "Queen", "Metallica", "Legião Urbana", "Charlie Brown Jr."]

console.log(band1.join(" - "))
*/

// =========================================
// EXERCÍCIO 8
// Crie um array com preços de produtos.
// Mostre no console o primeiro e o último preço do array.
// =========================================
/*
let products = ["Montardela R$1,20", "Pão R$1,50", "Queijo R$1,85", "Magarina R$2,00"]
products.splice(1,2)

console.log(products)
*/
// =========================================
// EXERCÍCIO 9
// Crie um array com nomes de personagens de jogos.
// Ordene os nomes em ordem alfabética.
// =========================================
/*
let characters = ["Mario", "Sonic", "Red", "Gold"]

characters.sort()

console.log(`${characters}`)
*/
// =========================================
// EXERCÍCIO 10
// Crie um array com nomes de filmes repetidos.
// Mostre o tamanho do array.
// =========================================

/*
let films = ["Minecraft", "Sonic"]
films.push("Minecraft", "Sonic")

console.log(`${films}`)
*/



// =========================================
// EXERCÍCIO 11
// Crie dois arrays:
// - um com filmes
// - outro com séries
// Junte os dois em um único array.
// =========================================
/*
let film = ["Minecraft", "Sonic",]
let series = ["Breaking Bad", "Stranger Things", "The Office", "Game of Thrones", "Black Mirror" ]
let special = film + series

console.log(`${special}`)
*/

// =========================================
// EXERCÍCIO 12
// Crie um array com episódios de uma série.
// Inverta a ordem dos episódios.
// =========================================
/*
let starWars = ["starWars1", "starWars2", "starWars3", "starWars4" ];
starWars.reverse()
console.log(starWars)
*/
// =========================================
// DESAFIO EXTRA (NÃO OBRIGATÓRIO)
// Crie um sistema simples de catálogo de filmes:
// - Use pelo menos 3 métodos diferentes (map, filter, reduce, find, etc.)
// - Exemplo de ideias:
//   * Filtrar filmes por gênero
//   * Encontrar um filme específico
//   * Calcular média de notas dos filmes
// =========================================

