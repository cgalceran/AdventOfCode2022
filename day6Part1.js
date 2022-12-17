import { readFile } from 'node:fs';

readFile('AOCinputDay6.text', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(data);
});



function parseInput(data) {
    for (let index = 0; index < data.length; index++) {
        let result = charRepeats(window(data, index));
        if (result == true) {
            console.log(index + 4);
            break;
        }

    }

};

function window(string, start) {
    return string.slice(start, start + 4);
};

function charRepeats(str) {
    return !/(\w).*\1/i.test(str);
};

// Answer is 