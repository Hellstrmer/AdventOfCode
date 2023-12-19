const path = require('path');
const fs = require('fs');
const { log } = require('console');
const input = fs
	.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').trim().split('\n')

const partOne = (input) => {
    let data = []
    let dataWin = []
    let match = [];
    let winNumb = [];
    let youNumb = [];

    const digit = new RegExp('^[0-9]+$');

    input.forEach((d, b) => {
        let key = d.slice(d.indexOf(':') +2);
        let winning = key.slice(0, key.indexOf('|') - 1)
        console.log(winning)
        winNumb = winning.replace(/\s+/g, ' ').trim().split( ' ').map(Number);

        let you = key.slice(key.indexOf('|') + 1);
        youNumb = you.replace(/\s+/g, ' ').trim().split( ' ').map(Number);
        if(winning[b].match(digit)) {

        }

        data.push(youNumb);
        dataWin.push(winNumb);

}); 
//console.log(dataWin)
//console.log(data)
// for (let i = 0; i < data.length; i++) {
//     match[i] = [];

//     for (let j = 0; j < Math.min(data[i].length, dataWin[i].length); j++) {
//         console.log(dataWin[i][j])
//         console.log(data[i][j])
//         if(data[i][j] == dataWin[i][j]) {
//             //console.log(data[i].indexOf(17))
//             //console.log(data.indexOf(data[i][j]))
//             match[i].push(dataWin[i][j])
//         }
//      }
 
// } return match;

//const matchingNumbers = [];
    let points = 0;
for (let num of data) {
    // console.log(num)
    // console.log(dataWin)
    if (dataWin.includes(num)) {
        //console.log(dataWin)
        points +=1;
    }
}
return points;

// for (let i = 0; i < data.length; i++) {
//     match[i] = [];
//   for (let j = 0; j < data[i].length; j++) {
//     for (let k = 0; k < dataWin.length; k++) {
//       for (let l = 0; l < dataWin[k].length; l++) {
//         console.log(data[i].indexOf(31))
//         console.log(dataWin[k].indexOf(31))
//         if (data[i][j] === dataWin[k][l]) {
            
//           match[i].push(data[i][j]);
//         }
//       }
//     }
//   }
// } return match

//console.log(matchingNumbers); // Output: [3]

}

test = partOne(input);
//console.log(test)