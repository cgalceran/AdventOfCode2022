import { readFile } from 'node:fs';

readFile('AOCinputDay3.text', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(data);
});


let compartmentLeft, compartmentRight;


// Get left side compartment from Rucksack
function getFirst(rucksack) {
    let length = rucksack.length;
    compartmentLeft = rucksack.slice(0, length / 2);
    return compartmentLeft;
}

// Get Right side compartment from Rucksack
function getSecond(rucksack) {
    let length = rucksack.length;
    compartmentRight = rucksack.slice(length / 2, length);
    return compartmentRight;
};


function getIntersection(compartmentLeft, compartmentRight) {
    let letter;
    for (let character of compartmentLeft) {
        if (compartmentRight.search(new RegExp(character)) != -1) {
            letter = compartmentRight[compartmentRight.search(new RegExp(character))];
        }
    };

    return letter;

};

const isUpperCase = (string) => /^[A-Z]*$/.test(string)

function getPriority(item) {
    if (isUpperCase(item)) {
        return item.charCodeAt() - 'A'.charCodeAt() + 27;;

    } else {
        return item.charCodeAt() - 'a'.charCodeAt() + 1;
    };
}


function parseInput(data) {
    let sum = 0;
    let rucksack = data.split('\n').filter(element => element);
    for (let compartment of rucksack) {
        sum += getPriority(getIntersection(getFirst(compartment), getSecond(compartment)));

    }
    return console.log(sum);
};

// Answer is 7811