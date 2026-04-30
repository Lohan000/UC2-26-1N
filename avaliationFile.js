
const ask = require("readline-sync")

// primeira Parte:
function guy(nome, idade, cidade, hobbies){
    // usuario = [nome, idade, cidade]
    // hobbies = [hobbies]
    // usuario.push(hobbies)
    // return usuario
    return [nome, idade, cidade, hobbies]
}


// Segunda Parte:


//refazer - receber um array por parametro e retornar este array formatado como uma string
function formatarHobbies(hobbies){    
    hobbies.sort()
    return hobbies
}

// Terceira Parte:
usuario = ["Lohan", "16", "São leo", "jogos"]

function gerarDescricao(usuario){
    console.log(`${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de: ${usuario[3]}`)
 }

// Quarta Parte:

const usuarios = []

function adicionarUsuario(usuarios, usuario){
    usuarios.push(usuario)
    return usuarios 
 }
adicionarUsuario(usuarios, usuario)

function gerarRelatorio(usuarios){
    relatorio = usuarios.length
    return relatorio
}
gerarRelatorio(usuarios)





//--------------------------------------------------------------
console.log(guy("Lohan", "16", "São leo", ['jogos', 'comida', 'futebol']))

console.log(formatarHobbies(hobbies))

gerarDescricao(usuario)

console.log(`Total de usuários:${relatorio}`)