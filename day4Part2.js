import { readFile } from 'node:fs';

readFile('AOCinputDay4.text', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(data);
});

let range = 0;

function parseInput(data) {
    let ranges = data.split('\n').filter(e => e).map(e => e.split(','));
    ranges.forEach(element => {
        let startFirstSection = Number(element[0].split('-')[0]);
        let endFirstSection = Number(element[0].split('-')[1]);
        let startSecondSection = Number(element[1].split('-')[0]);
        let endSecondSection = Number(element[1].split('-')[1]);
        if ((startFirstSection <= startSecondSection && endFirstSection >= endSecondSection) ||
            (startFirstSection >= startSecondSection && endFirstSection <= endSecondSection) ||
            (startFirstSection <= endSecondSection && startSecondSection <= endFirstSection)

            // 2                3                       8                   7
        ) { range++ };
    });

    console.log(range);

};

// Answer is 794





// Example to test

// function run() {
//     let example =
//         `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`
//     parseInput(example);
// };


// run();


// .234.....  2-4
// .....678.  6-8

// .23......  2-3
// ...45....  4-5

// ....567..  5-7
// ......789  7-9

// .2345678.  2-8
// ..34567..  3-7

// .....6...  6-6
// ...456...  4-6

// .23456...  2-6
// ...45678.  4-8