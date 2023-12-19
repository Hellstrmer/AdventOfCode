const path = require('path');
const fs = require('fs');
const input = fs
    .readFileSync(path.join(__dirname, 'example.txt'), 'utf8').trim().split('\n')

//console.log(input[0].length)

const partOne = (input) => {
    let data = sort1(input)
    // let answer = form(data)
    // return answer;
}

const partTwo = (input) => {
    // let data = sort2(input)
    // let answer = form2(data)
    // return answer;
}

const sort1 = (input) => {
    halfArr = []
    firstArr = []
    secondArr = []
    let key;
    for (let i = 0; i < input.length; i++) {
        //console.log(input[i])
        halfArr.push((input[i].length -1)/ 2)
        key = input.slice(0, (input[i].length -1)/ 2)

    } 
    input.forEach((d, b) => {
        let keyStart = d.slice(0, ((input[b].length -1) / 2));
        let keyEnd = d.slice(((input[b].length -1) / 2));
        firstArr.push(keyStart)
        secondArr.push(keyEnd)
        //console.log('Start ' + keyStart.length)
        //console.log('End ' + keyEnd.length)

        })
        //  console.log(firstArr)
        //  console.log(secondArr)

        let found = []
        let result;
        let char;
        for (let i = 0; i < secondArr.length; i++) {
            for (let j = 0; j < secondArr[i].length; j++) {
                if (result = firstArr[i].match(secondArr[i][j])) {
                        char = secondArr[i].charCodeAt(j) - 96
                        console.log(char)
                        found.push(result)
                    if (i < secondArr.length -2) {
                        i = i + 1
                    } 
                }
            }
        } console.log(found)
}

 








//     //omvandla datan till objekt
//     const obj = {
//         time: times[0],
//         distance: times[1],
//     }
//     return obj;
// }

// const sort2 = (input) => {
//     let times = []
//     input.forEach(d => {
//         let time = d.slice(d.indexOf(':') + 1).trim()
//         times.push(time.replace(/\s+/g, '').trim().split(' '));

//     });
//     //omvandla datan till objekt
//     const obj = {
//         time: times[0],
//         distance: times[1],
//     }
//     return obj;
// }

// const form = (obj) => {
//     // Formel för uträkning = (time-input) * input
//     let answer = []
//     let length = [];
//     let inputs = 0;
//     let multi = 1;
//     for (let i = 0; i < obj.time.length; i++) {
//         answer[i] = []
//         for (let j = 0; j < obj.time[i]; j++) {
//             inputs = (obj.time[i] - j) * j
//             if (inputs > obj.distance[i]) {
//                 answer[i].push(inputs)
//             }
//         } length.push(answer[i].length)
//         multi = multi * length[i]

//     } return multi;
// }

// const form2 = (obj) => {
//     // Formel för uträkning = (time-input) * input
//     let answer = []
//     let length = [];
//     let inputs = 0;
//     let multi = 1;

//     for (let j = 0; j < obj.time; j++) {
//         inputs = (obj.time - j) * j
//         if (inputs > obj.distance) {
//             answer.push(inputs)
//         }
//     } length.push(answer.length)
//     multi = multi * length

//     return multi;
// }


test = partOne(input);
test2 = partTwo(input)
//console.log(`Svar på del 1 är ${test}`)
//console.log(`Svar på del 2 är ${test2}`)