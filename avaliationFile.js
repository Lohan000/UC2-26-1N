const ask = require('readline-sync')
// let produtos = []

// function cadastrarProduto(id, nome, preco, verificationprice, estoque){
    
//     produtos.push(id, nome, preco, verificationprice, estoque)
// }

// function buscarProdutoPorId(){

// }

// function buscarProdutoPorNome(){

// }
// function mostrarProdutos(){

// }



function cadastrarAluno(aluno, notas, media, situacao){
    alunogeral = [aluno, notas, media, situacao]
    regist.push(alunogeral)
    return    
}
()
function calcularMedia(nota1, nota2, nota3){
    resultadonota = (nota1 + nota2 + nota3) /3
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
function mostrarAlunos(idk){
    
}

function sistema(number){
    switch (number) {
        case '1':
            let name = ask.question("Qual é o seu nome? ")
            let note1 = Number(ask.question("Qual é a sua primeira nota? "))
            let note2 = Number(ask.question("Qual é a sua segunda nota? "))
            let note3 = Number(ask.question("Qual é a sua terceira nota? "))
            calcularMedia(note1, note2, note3)
            break
            case '2':
            return `${regist}`
            break
        }
}   

let regist = []

let show = ask.question(`O que você quer fazer?
1 - Cadastrar o usuario
2 - ver os usuarios`)
