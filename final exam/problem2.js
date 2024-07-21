function solve(input) {
    let pattern = /(!)(?<command>[A-Z]{1}[a-z]{2,})\1:(\[)(?<str>[A-Za-z]{8,})(\])/g;
    let n = Number(input.shift());
    let command;
   // let str;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let str = input[i];
        let match = pattern.exec(str);
        
        if (match !== null) {
            command = match.groups['command'];
            str = match.groups['str'];

            for (let i = 0; i < str.length; i++) {
                const char = str[i];
                result.push(char.charCodeAt(0))
            }
            console.log(`${command}: ${result.join(' ')}`);

        } else {
            console.log('The message is invalid');
        }
    }
}
solve(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])
solve(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"])
