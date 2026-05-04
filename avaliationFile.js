const ask = require("readline-sync")
function createUser(nome, idade, cidade, hobbies){
    return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies){
    return hobbies.slice(0, -1).join (', ') + ' e ' + hobbies.slice(-1)
    
}

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





// ---------------------------------------------------------------------------------
let usuarios = []


let user1 = createUser('Lohan', 16, 'Sao Leo', ['futebol', 'video games', 'series'])
usuarios = adicionarUsuario(usuarios, user1)
//--------------------------------------------------------------------
console.log(user1)
console.log(formatarHobbies(user1[3]))
console.log(gerarDescricao(user1))
console.log(gerarDescricao(user1))
console.log(gerarRelatorio(usuarios))


