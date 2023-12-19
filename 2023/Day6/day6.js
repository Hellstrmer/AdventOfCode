const path = require('path');
const fs = require('fs');
const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8').trim().split('\n')

const partOne = (input) => {
    let data = sort1(input)
    let answer = form(data)
    return answer;
}

const partTwo = (input) => {
    let data = sort2(input)
    let answer = form2(data)
    return answer;
}

const sort1 = (input) => {
    let times = []
    input.forEach(d => {
        let time = d.slice(d.indexOf(':') + 1).trim()
        times.push(time.replace(/\s+/g, ' ').trim().split(' ').map(Number));

    });
    //omvandla datan till objekt
    const obj = {
        time: times[0],
        distance: times[1],
    }
    return obj;
}

const sort2 = (input) => {
    let times = []
    input.forEach(d => {
        let time = d.slice(d.indexOf(':') + 1).trim()
        times.push(time.replace(/\s+/g, '').trim().split(' '));

    });
    //omvandla datan till objekt
    const obj = {
        time: times[0],
        distance: times[1],
    }
    return obj;
}

const form = (obj) => {
    // Formel för uträkning = (time-input) * input
    let answer = []
    let length = [];
    let inputs = 0;
    let multi = 1;
    for (let i = 0; i < obj.time.length; i++) {
        answer[i] = []
        for (let j = 0; j < obj.time[i]; j++) {
            inputs = (obj.time[i] - j) * j
            if (inputs > obj.distance[i]) {
                answer[i].push(inputs)
            }
        } length.push(answer[i].length)
        multi = multi * length[i]

    } return multi;
}

const form2 = (obj) => {
    // Formel för uträkning = (time-input) * input
    let answer = []
    let length = [];
    let inputs = 0;
    let multi = 1;

    for (let j = 0; j < obj.time; j++) {
        inputs = (obj.time - j) * j
        if (inputs > obj.distance) {
            answer.push(inputs)
        }
    } length.push(answer.length)
    multi = multi * length

    return multi;
}


test = partOne(input);
test2 = partTwo(input)
console.log(`Svar på del 1 är ${test}`)
console.log(`Svar på del 2 är ${test2}`)