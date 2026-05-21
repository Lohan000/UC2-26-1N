const ask = require('readline-sync')

function createAccount(){
    let username = ask.question('Insert username:')
    let password = ask.question('Insert password: ', {hideEchoBack: true, mask: '*'})
}

use.push({})