const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let list = [
    '1 - Sort the words ascending \n',
    '2 - Sort the words descending \n',
    '3 - Display numbers from smallest to largest \n',
    '4 - Display numbers from largest to smallest \n',
    '5 - Display words in ascending order by the number of letters in a word \n',
    '6 - Show only unique words \n',
    '7 - Show all uniques values \n',
];

let output = 'Please choose the operation: \n' + list.join().replaceAll(',', '') + 'Select value (1-7): ';
let input;
let words = [];
let numbers = [];

function getUserInput(n) {
    let isEven = (n % 2 == 1);
         
    rl.question(isEven ? 'Please input the sentence: ' : output, (answer) => {

            if (answer.toLowerCase() === 'exit') {
                console.log("I will miss you...")
                rl.close;

            } else if (isEven) {
                readline.cursorTo(process.stdout, 0, 0)
                readline.clearLine(process.stdout, 0)

                console.log(`Your input is: ${answer}`)
                input = answer.trim().split(' ');
                getUserInput(n + 1);

            } else {
                handler(answer);
                getUserInput(n + 1);
            }
        });
}

function separateData(input) {
    numbers = [];
    words = [];

    for (let i = 0; i < input.length; i++) {
        if (!input[i].match(/^[a-zA-Z]+$/)) {
            numbers.push(input[i]);
        } else {
            words.push(input[i]);
        }
    }
}

function handler(operation) {
    separateData(input);

    switch (operation) {
        case '1':
            sortASC(words);
            break;

        case '2':
            sortDESC(words);
            break;

        case '3':
            sortASC(numbers);
            break;

        case '4':
            sortASC(numbers);
            break;

        case '5':
            sortAONL(words);
            break;

        case '6':
            sortUNIQ(words);
            break;

        case '7':
            sortUNIQ(input);
            break;

        default:
            console.log('Sorry, but there\'s no opeartion [Out_of_range]');
    }
}

function sortASC(input) {
    input.sort();
    console.log(input)
}

function sortDESC(input) {
    input.sort((a, b) => (a > b ? -1 : 1));
    console.log(input)
}

function sortAONL(input) {
    input.sort((a, b) => a.length - b.length);
    console.log(input)
}

function sortUNIQ(input) {
    console.log(input.filter((v, i, a) => a.indexOf(v) === i))
}

getUserInput(1);



