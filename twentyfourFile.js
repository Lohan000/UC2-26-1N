function juntar(array) {
    let all = ''

    for (let word of array) {
        all = all + " " + word
    }

    return all
}


const newArray = ["Oi", "Sumido", "tudo", "bem?", "Saudades", "kk"]
console.log(juntar(newArray)) 


/*
function juntar(array){
    let all = array.join(" ")
    return all
}
console.log(juntar(newArray))
*/