import { readFileSync } from 'node:fs';


let text = readFileSync('AOCinputDay1.text', 'utf8').toString().split("\n");
// .then(data => console.log(data.toString().split("\n")));

function splitter(arra, sep) {
    let arr = [new Array()];

    for (let i = 0; i < arra.length; i++) {
        if (arra[i] === sep) {
            arr.push([])
        } else {
            arr[arr.length - 1].push(arra[i]);
        }
    }
    return arr;
}

let elvesCalories = splitter(text, "");

let countCalories = elvesCalories.map(e => e.map(Number));

let eachelf = countCalories.map(e => e.reduce((a, b) => a + b, 0));

console.log(Math.max(...eachelf));


// Answer is 69528































