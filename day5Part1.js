import { readFile } from 'node:fs';

readFile('AOCinputDay5.text', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(data);
});





function parseInput(data) {
    movementParser(data, createStack(data));

};


// Movements Parser


let crane = [];
let results = '';

function movementParser(input, stack) {
    input.split('\n').forEach(line => {
        if (line.includes("move")) {
            let instructions = line.split(' ');
            let quantity = instructions[1];
            let from = instructions[3];
            let to = instructions[5];
            for (let index = 0; index < quantity; index++) {
                crane = stack[from - 1].shift();
                stack[to - 1].unshift(crane);
            }
        };

    });
    for (let i = 0; i < stack.length; i++) {
        results += stack[i].shift()
    }
    console.log("Answer is:", results)
};


// Crate Parser and Stack Creator 

const stack = [[], []];
let counter = 1;
let firstCrate = true;

function createStack(input) {
    input.split('\n').filter(e => e).forEach(line => {
        if (!line.includes("move")) {
            counter = 1
            for (let index = 0; index < line.length; index += 4) {
                if (line[index + 1] !== ' ' && isNaN(Number(line[index + 1]))) {
                    stack[counter].push(line[index + 1]); //add crate
                }
                if (firstCrate) stack.push([]);
                counter++;
            };
            !firstCrate;
        };
    });
    return stack.filter(e => e != null && e != '' && e != []);
};


// Answer should be: RTGWZTHLD