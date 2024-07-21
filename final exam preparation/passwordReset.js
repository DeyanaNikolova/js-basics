function solve(input) {
    let text = input.shift();
    let newPassword = '';
    while (input[0] !== 'Done') {
        let [command, ...items] = input.shift().split(' ');

        if (command === 'TakeOdd') {
            text.split();
            for (let i = 0; i < text.length; i++) {
                let ch = text[i];
                if (i % 2 !== 0) {
                    newPassword += ch;
                }
            }
            text=newPassword
            console.log(text);

        } else if (command === 'Cut') {
            let index = Number(items[0]);
            let length = Number(items[1]);

            //let cutted = text.slice(index, index + length);
            let cutted = text.split('').splice(index, length).join('');
            text = text.replace(cutted, '');
            console.log(text);

        } else if (command === 'Substitute') {
            let substring = items[0];
            let substitute = items[1];

            if (text.includes(substring)) {

                while (text.includes(substring)) {
                    text = text.replace(substring, substitute);
                }
                console.log(text);
            }else{
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${text}`);
}
solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);

solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])

