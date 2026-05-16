const ask = require('readline-sync')
let registerusers = []

function cadastrarAluno(aluno, notas, media, situacao){
        user = [aluno, notas, media, situacao]
        console.log(`Aluno: ${aluno} adicionado`)
        registerusers.push(user)
    return    
}

function calcularMedia(nota1, nota2, nota3){
    resultadonota = (nota1 + nota2 + nota3) /3
    console.log(resultadonota)
    return resultadonota
}

function verificarSituacao(result){
    if (result => 7){
    return "Aprovado"

   }  else if ((result >= 5) && (result< 7)){
    return "Recuperação"

   } else {
    return "Reprovado"
   }
   
}
function mostrarAlunos(array){
    console.log(array)
}

function sistema(number){
    switch (number) {
        case '1':
            console.clear()
            let name = ask.question("Qual é o seu nome? ")
            let note1 = Number(ask.question("Qual é a sua primeira nota? "))
            let note2 = Number(ask.question("Qual é a sua segunda nota? "))
            let note3 = Number(ask.question("Qual é a sua terceira nota? "))
            let notasgerais = `${note1}, ${note2}, ${note3}`
            console.log(notasgerais)
            let media = calcularMedia(note1, note2, note3)
            console.log(media)
            let situaçao = verificarSituacao(media)
            cadastrarAluno(name,notasgerais,media,situaçao )
            break
            case '2':
            mostrarAlunos(regist)
            break
        }
}   

function main(){
    while (true){
    show = ask.question(`O que voce quer fazer?
1 - Cadastrar o usuario
2 - Ver os usuarios
3 - encerrar o sistema`)
    sistema(show)

}

}

main()
