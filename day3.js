


/// in progress



function run() {
    let example =
        `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`
    parseInput(example);
};



function parseInput(data) {

    let rucksack = data.split('\n');
    for (let compartment of rucksack) {
        let length = compartment.length;
        console.log(compartment.slice(0, length / 2));
        console.log(compartment.slice(length / 2, length));
    }

    console.log(rucksack);

};

run();