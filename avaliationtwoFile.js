const ask = require("readline-sync")

function createUser(nome, idade, cidade, hobbies){
    return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies){
    return hobbies.slice(0, -1).join (', ') + ' e ' + hobbies.slice(-1)
    // let hobbiesFormatados = hobbies.join(", ");
    // return hobbies.join(", ");
}
// ['andar de moto', 'jogar futebol', 'sair de noite']
// ['andar de moto, jogar futebol, sair de noite']

function gerarDescricao(usuario){
    return `${usuario[0]} tem em ${user1[1]} anos, mora em ${user1[2]} e gosta de fazer: ${user1[3]} e gosta de 
    ${formatarHobbies(usuario[3])} `
}

function adicionarUsuario(usuarios, usuario){
    let usuarioAtualizado = [...usuarios, usuario]
    return usuarioAtualizado
}

function gerarRelatorio(usuarios){
    return `Total de usuarios: ${usuarios.length}`
}







//meu modo:
// function gerarDescricao(usuario){
//     console.log(`${user1[0]} tem ${user1[1]} anos, mora em ${user1[2]} e gosta de fazer: ${user1[3]}`)
// }

// const users = []
// function logInUser(users, user){
//     addedAllUsers = users.push(user)
//     return addedAllUsers

// }

// function generateDoc(users){
//     console.log(`Total de usuários: ${users.length}`)
// }


// ---------------------------------------------------------------------------------
let usuarios = []

// criação do usuario ---------------------------------------------------------------=
// let user1 = createUser('Lohan', 16, 'Sao Leo', ['futebol', 'video games', 'anime'])
// let nome = ask.question('Digite seu nome:')
// let idade = Number(ask.question('Digite sua idade:'))
// let cidade = ask.question('Digite sua cidade: ')
// let primeroHobby = ask.question('Digite seu hobby: ')
// let segundoHobby = ask.question('Digite seu secundo Hobby:')
// let user1 = createUser = ()
let user1 = createUser('Lohan', 16, 'Sao Leo', ['futebol', 'video games', 'anime'])
usuarios = adicionarUsuario(usuarios, user1)
//--------------------------------------------------------------------
console.log(user1)
console.log(formatarHobbies(user1[3]))
console.log(gerarDescricao(user1))
// logInUser(users, user1)
// console.log(generateDoc(addedAllUsers))
console.log(gerarDescricao(user1))
console.log(gerarRelatorio(usuarios))
// let hobbiesDoUser1 = formatarHobbies(user1[3])
// console.log(hobbiesDoUser1)














// // primeira Parte:
// function guy(nome, idade, cidade, hobbies){
// //     // usuario = [nome, idade, cidade]
// //     // hobbies = [hobbies]
// //     // usuario.push(hobbies)
// //     // return usuario
//     return [nome, idade, cidade, hobbies]
// // }


// // Segunda Parte:


// //refazer - receber um array por parametro e retornar este array formatado como uma string
// function formatarHobbies(usuario[]){    
    
//     console.log(`${usuario}`)
// }
// /*
// // Terceira Parte:
// usuario = ["Lohan", "16", "São leo", "jogos"]

// function gerarDescricao(usuario){
//     console.log(`${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de: ${usuario[3]}`)
//  }

// // Quarta Parte:

// const usuarios = []

// function adicionarUsuario(usuarios, usuario){
//     usuarios.push(usuario)
//     return usuarios 
//  }
// adicionarUsuario(usuarios, usuario)

// function gerarRelatorio(usuarios){
//     relatorio = usuarios.length
//     return relatorio
// }
// gerarRelatorio(usuarios)

// */



// //--------------------------------------------------------------
// console.log(guy("Lohan", "16", "São leo", ['jogos', 'comida', 'futebol']))

// console.log(formatarHobbies(hobbies))

// // gerarDescricao(usuario)

// // console.log(`Total de usuários:${relatorio}` )}
