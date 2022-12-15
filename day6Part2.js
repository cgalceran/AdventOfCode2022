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
            console.log(index + 14);
            break;
        }

    }

};

// Answer is 3051


function window(string, start) {
    return string.slice(start, start + 14);
};

function charRepeats(str) {
    return !/(\w).*\1/i.test(str);
};

// Example to test

// function run() {
//     let example =
//         `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`;
//     for (let index = 0; index < example.length; index++) {
//         let result = charRepeats(window(example, index));
//         if (result == true) {
//             console.log(index + 14);
//             break;
//         }

//     }


// };