function solve(input) {

    let couner = 0;
    let guestCollection = {};

    while (input[0] !== 'Stop') {
        let commands = input.shift().split('-');

        if (commands[0] == 'Like') {
            let guest = commands[1];
            let likedMeal = commands[2];

            if (!guestCollection.hasOwnProperty(guest)) {
                guestCollection[guest] = { likedMeal: [] }
                if (!guestCollection[guest].likedMeal.includes(likedMeal)) {

                    guestCollection[guest].likedMeal.push(likedMeal);
                }
            } else {
                if (!guestCollection[guest].likedMeal.includes(likedMeal)) {

                    guestCollection[guest].likedMeal.push(likedMeal);
                }
            }
        } else if (commands[0] == 'Dislike') {
            let guest = commands[1];
            let dislikedMeal = commands[2];

            if (!guestCollection.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            } else {
                if (!guestCollection[guest].likedMeal.includes(dislikedMeal)) {
                    console.log(`${guest} doesn't have the ${dislikedMeal} in his/her collection.`);
                } else {
                    let index = guestCollection[guest].likedMeal.indexOf(dislikedMeal);

                    guestCollection[guest].likedMeal.splice(index, 1);
                    console.log(`${guest} doesn't like the ${dislikedMeal}.`)
                    couner++;
                }
            }
        }
    }

    for (let guest of Object.entries(guestCollection)) {
        let currGuest = guest[0];
        let meal = guestCollection[currGuest].likedMeal;
        console.log(`${currGuest}: ${meal.join(', ')}`);
    }
    console.log(`Unliked meals: ${couner}`);
}


solve(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"])
console.log("+++++++++++++")
solve(["Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"])
console.log('======');
solve(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])
