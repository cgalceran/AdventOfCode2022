import { readFile } from 'node:fs';

readFile('AOCinputDay7.text', 'utf8', (err, input) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(input);
});

const currentPath = [];
const map = {};

function parseInput(input) {
    const data = input.split("\n");

    for (let i = 0; i < data.length; i++) {
        const line = data[i];
        if (line.includes("$ cd")) {
            if (line.includes("..")) {
                currentPath.pop();
                continue;
            }
            currentPath.push(line.replace("$ cd ", ""))
            continue;
        }

        const parts = line.split(" ");
        const fileSize = Number(parts[0]);

        if (!Number.isNaN(fileSize)) {
            let accumulator = [];
            for (let j = 0; j < currentPath.length; j++) {
                accumulator.push(currentPath[j]);
                map[accumulator.join('/')] = map[accumulator.join('/')] ?? 0;
                map[accumulator.join('/')] += fileSize;
            }
        }

    };

    const totalDiskSize = 70000000;
    const target = 30000000 - (totalDiskSize - map['/']);

    console.log("part 1", Object.values(map).filter(v => v <= 100000).reduce((a, b) => a + b, 0));
    console.log("part 2", Object.values(map).filter(v => v >= target).sort((a, b) => a - b)[0]);




};



