const ask = require('readline-sync')

function createAccount(){
    let username = ask.question('Insert username:')
    let password = ask.question('Insert password: ', {hideEchoBack:
    true, mask: '*'})


    accounts.push({
    username: username,
    password: password
    })
}


function login(){
    let username = ask.question('Insert username:')
    let password = ask.question('Insert password: ', {hideEchoBack:
    true, mask: '*'})
    for(let user of accounts){
        if(user.username === username && user.password === password){
            return true
        }
    }
    return false
}
const accounts = []