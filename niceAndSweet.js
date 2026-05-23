const ask = require('readline-sync')


function createacharacter(){
    let name = ask.question("Say your name soul...:")
    let class1 = Number(ask. question(`What type of class do you want ${name}?
1 - Guardian
2 - Warrior
3 - Abomination`))
    switch (class1){
        case 1:
            console.clear()
            console.log("It looks you like to defend what is yours...")
            ask.question("Press ENTER to continue...")
            class1 = {
                classname: "Guardian",
                health:120,
                defense:15,
                potions:4,
                Attack: guardianAttack
            } 
            break
        case 2:
            console.clear()
            console.log("Attack, Attack, ATTACK UNTIL DEATH!")
            ask.question("Press ENTER to continue...")
            class1 = {
                classname: "Warrior",
                health: 100,
                defense: 10,
                potions: 3,
                Attack: WarriorAttack
                
            }
            choosen = [name, class1]
            return choosen
            break
        case 3:
            console.clear()
            console.log("You should not have existed, You are a Error to the world Anomality...")
            ask.question("Press ENTER to continue...")
            class1 = {
                classname: "Abomination",
                health:150,
                defense:4,
                potions:2,
                Attack: AbominationAttack
            }
            choosen = [name, class1]
            return choosen
        default:
            console.clear()
            console.log("Invalid...")
            break    
    }   

 }

let enemies = [
    {
    name: "Basic Goblin",
        health: 40,
        minDamage: 5,
        maxDamage: 10
    },

    {
        name: "Elite Orc",
        health: 60,
        minDamage: 8,
        maxDamage: 15

    },

    {
        name: "Weak Orc",
        health:30,
        minDamage: 4,
        maxDamage: 7
    },
    
    {
        name: "Crazy but fragile Orc",
        health: 20,
        minDamage: 1,
        maxDamage:90

    },

    {
        name: "Full Tanky Orc",
        health: 100,
        minDamage: 5,
        maxDamage: 5

    }

]

function generateEnemies(){
    let numero = Manth.floor(Math.random() * 5)
    return enemies[numero]
}

console.log(createacharacter())