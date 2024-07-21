function solve(arr) {
    let tokens = arr.shift().split('|');

    let health = 100;
    let coins = 0;
    let counter = 0;

    for (let element of tokens) {
        counter++;

        let rooms = element.split(' ')
        rooms[0];
        number = Number(rooms[1]);

        if (rooms[0] == 'potion') {
            let sum = 0;
            if (number > 100 - health) {
              sum = 100 - health;

                health += sum;
            } else {
                sum = number;
                health += number;
            }
            console.log(`You healed for ${sum} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (rooms[0] == 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;

            if (health > 0) {
                console.log(`You slayed ${rooms[0]}.`);
            } else if(health <= 0){
                console.log(`You died! Killed by ${rooms[0]}.`);
                console.log(`Best room: ${counter}`);
                break;
            } 
        }
    }
    if(health > 0){
        console.log('You\'ve made it!');
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
   
}


solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

console.log('------');

solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);