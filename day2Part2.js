import { readFile } from 'node:fs';

readFile('AOCinputDay2.text', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(data);
});

function run() {
    let example = `A Y
B X
C Z
`
    parseInput(example);
}


function parseInput(data) {
    let matchPoints = {
        Z: 6, // win
        Y: 3, // draw
        X: 0, // lose
    }
    let choicePoints = {
        R: 1,
        P: 2,
        S: 3,
    }
    let combinations = {
        "A X": "S",
        "A Y": "R",
        "A Z": "P",
        "B X": "R",
        "B Y": "P",
        "B Z": "S",
        "C X": "P",
        "C Y": "S",
        "C Z": "R",
    }
    let matches = data.split('\n');
    let sum = 0;
    for (const match of matches) {
        if (match !== "") {
            sum += choicePoints[combinations[match]];
            sum += matchPoints[match[2]];
        }
    }
    console.log(sum);
}