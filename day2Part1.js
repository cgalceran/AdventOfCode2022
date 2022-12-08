import { readFile } from 'node:fs';

readFile('AOCinputDay2.text', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(data);
});


function parseInput(data) {
    let matchPoints = {
        W: 6,
        D: 3,
        L: 0,
    }
    let choicePoints = {
        X: 1, // rock
        Y: 2, // paper
        Z: 3, // scissors
    }
    let combinations = {
        "A X": "D",
        "A Y": "W",
        "A Z": "L",
        "B X": "L",
        "B Y": "D",
        "B Z": "W",
        "C X": "W",
        "C Y": "L",
        "C Z": "D",
    }
    let matches = data.split('\n');
    let sum = 0;
    for (const match of matches) {
        if (match !== "") {
            sum += matchPoints[combinations[match]];
            sum += choicePoints[match[2]];
        }
    }
    console.log(sum);
}


