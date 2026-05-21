const ask = require('readline-sync')

const produtos = {

}

function registerProduct(){
    console.clear()
    let id = produtos.length + 1
    let name = ask.question('O nome do Produto: ')
    let saleprice = Number(ask.question('O preco de venda: '))
    let manufacturingprice = Number(ask.question('O preco de fabricacao: '))
    let stock = Number(ask.question('O estoque: '))
    produtos.produto = [name, saleprice, manufacturingprice, stock]

}

function searchProductById(id){
    for(product of produtos.produto){
        if (product[1] === id){
            return product
        }    
    }
    return null
}

function searchProductByName(name){
    for(product of produtos.produto){
        if (product[2] === name){
            return product
        }
    }
    return null
}

function showAllTheProducts(){
    for(product of produtos.produto){
        console.log(`
ID: ${product[0]}
Nome: ${product[1]}
Preço de Venda: ${product[2]}
Preço de Fabricação: ${product[3]}
Quantidade em Estoque: ${product[4]}
-------------------------------------
`)
    }
}

while(true){
    main = ask.question(`O que você quer?
1 - cadastrar Produto
2 - Procurar por Id
3 - Procurar por Nome
4 - Mostrar tudo
0 - sair
Escolha: `)
    switch (main){
        case `1`:
            console.clear()
            registerProduct()
            break
        case `2`:
            console.clear()
            let searchId = Number(ask.question("Fale o Id do produto: "))
            searchProductById(searchId)
            break
        case `3`:
            console.clear()
            let searchName = ask.question("Fale o Nome do produto:")
            searchProductByName(searchName)
            break
        case `4`:
            console.clear()
            showAllTheProducts()
            break
        case `0`:
            console.clear()
            process.exit()
            break
        default:
            console.clear()
            console.log(`opção invalida...`)
            break
    }
}
