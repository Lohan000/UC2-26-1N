let age = 18
let highschool = true
let extracurse = false

function entercollege(ensinoMedioConcluido, idade, cursandoOutraFaculdade){
    if (ensinoMedioConcluido && !cursandoOutraFaculdade && (idade >= 18)){
            return `Você pode estudar nessa Faculdade!!! :)`
    } else {
        return `Você não entrou seu beta `
    }

}
console.log(entercollege(highschool, age, extracurse))