import { readFile } from 'node:fs';

readFile('AOCinputDay3.text', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(data);
});


function getIntersection(elf1, elf2, elf3) {
    let letter;
    for (let character of elf1) {
        if (elf2.includes(character) && elf3.includes(character) != false) {
            letter = character;
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

    const Chunks = 3 // items per chunk    
    const result = rucksack.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / Chunks)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])

    for (let elfgroup of result) {
        // Pass each group of Elves thru functions to find intersection and calculate priority
        sum += getPriority(getIntersection(elfgroup[0], elfgroup[1], elfgroup[2]));

    }
    return console.log(sum);
};

// Answer is 2639