function solve(input) {
    let string = input.shift();


    while (input[0] !== 'Finish') {
        let [command, ...rest] = input.shift().split(' ');
        if (command === 'Replace') {
            let currChar = rest[0];
            let newChar = rest[1];

            string = string.split(currChar);
            string = string.join(newChar);
            console.log(string)

        } else if (command === 'Cut') {
            let startIndex = Number(rest[0]);
            let endIndex = Number(rest[1]);

            if (startIndex >= 0 && startIndex < string.length
                && endIndex > startIndex && endIndex < string.length) {

                let left = string.slice(0, startIndex);
                let right = string.slice(endIndex + 1);
                string = left + right;
                console.log(string);
            } else {
                console.log("Invalid indices!");
            }
        } else if (command === 'Make') {
            let result;
            if (rest[0] === 'Upper') {
                result = string.toUpperCase();
            } else {
                result = string.toLowerCase();
            }
            string = result;
            console.log(string);

        }else if (command == 'Check') {
            let str = rest[0];
            if (string.includes(str)) {
                console.log(`Message contains ${str}`);
            }else {
                console.log(`Message doesn't contain ${str}`);
            }
        } else if (command === 'Sum') {
            let startIndex = Number(rest[0]);
            let endIndex = Number(rest[1]);
            let result = 0;

            if (startIndex >= 0 && startIndex < string.length
                && endIndex > startIndex && endIndex < string.length) {
                let subStr = string.substring(startIndex, endIndex + 1);

                for (let i = 0; i < subStr.length; i++) {
                    let char = subStr[i];
                    let num = char.charCodeAt(0);
                    result += num;
                }
                console.log(result);
            } else {
                console.log('Invalid indices!');
            }
        }
    }
}
solve(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])
