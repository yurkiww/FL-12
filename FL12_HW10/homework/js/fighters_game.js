function Fighter(name, damage, hp, strength, agility) {

    let totalHP = hp;
    let wins = 0;
    let losses = 0;

    let myFighter = {
        name: name,
        damage: damage,
        hp: hp,
        strength: strength,
        agility: agility
    };



    let getName = function () {
        return myFighter.name;
    };
    let getDamage = function () {
        return myFighter.damage;
    };
    let getStrength = function () {
        return myFighter.strength;
    };
    let getHealth = function () {
        return myFighter.hp;
    };
    let getAgility = function () {
        return myFighter.agility;
    };



    let logCombatHistory = function () {
        console.log(`Fighter name: ${name}, Wins: ${wins}, Losses: ${losses}`);
    };

    let heal = function (healPoints) {

        let increasedHealth = getHealth() + healPoints;
        if (increasedHealth < totalHP) {
            myFighter.hp = totalHP;
        } else {
            myFighter.hp = increasedHealth;
        }

        return myFighter.hp;
    };

    let dealDamage = function (damagePoints) {

        let decreasedHealth = myFighter.hp - damagePoints;
        if (decreasedHealth < 0) {
            myFighter.hp = 0;
        } else {
            myFighter.hp = decreasedHealth;
        }

        return decreasedHealth;
    };

    let attack = function (defender) {

        let attackChance = Math.random() * 100;
        let currentAttackChance = defender.getStrength() + defender.getAgility();

        if (attackChance < currentAttackChance) {
            defender.dealDamage(damage);
            console.log(`${name} deals ${damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${name} attack missed`);
        }
    };

    const addWin = function () {
        return wins++;
    };

    const addLoss = function () {
        return losses++;
    };

    return {
        getName,
        getDamage,
        getHealth,
        getStrength,
        getAgility,
        attack,
        heal,
        logCombatHistory,
        dealDamage,
        addWin,
        addLoss
    };
}





function battle(fighterOne, fighterTwo) {

    while (fighterOne.getHealth() > 0 && fighterTwo.getHealth() > 0) {
        fighterOne.attack(fighterTwo);
        if (fighterTwo.getHealth() > 0) {
            fighterTwo.attack(fighterOne);
            if (fighterOne.getHealth() === 0) {
                fighterTwo.addWin();
                fighterOne.addLoss();
                console.log(`${fighterTwo.getName()} wins!`);
            }
        } else {
            fighterOne.addWin();
            fighterTwo.addLoss();
            console.log(`${fighterOne.getName()} wins!`);
        }
    }
}


const FighterMax = new Fighter({
    name: "Maximus",
    damage: 20,
    hp: 100,
    strength: 30,
    agility: 25
});

console.log(FighterMax.getName());
console.log(FighterMax.getDamage());
console.log(FighterMax.getStrength());
console.log(FighterMax.getAgility());
console.log(FighterMax.getHealth());