const path = require('path');
const fs = require('fs');
const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').trim().split('\n')
const partOne = (input) => {
 const path = input.shift().trim()
 input.shift();
 const obj = {}

const pathAnswer = {
    right: 'R',
    left: 'L',
}

// sort all data to Answer, left and right
input.forEach(d => {
    let key1 = d.slice(0, d.indexOf('=')).trim();
    let key2 = d.slice(d.indexOf('('));
    let key3 = d.slice(d.indexOf(','));

    let left = (key2.slice(key2.indexOf('(') + 1, key2.indexOf(',')));
    let right = (key3.slice(key2.indexOf(key2) + 2, key3.indexOf(')')));

    obj[key1] = {
        name: key1,
        left: left,
        right: right,
    }
});

const sequence = path
let index = 0;
const moves = [];
const start = 'AAA'
const goal = 'ZZZ';
let goalFound = false;
moves.push(start)
let nodeName;
let leftName;
let rightName;


while(!goalFound) {
    nodeName = moves[moves.length -1];
    leftName = obj[nodeName].left;
    rightName = obj[nodeName].right;

    if(nodeName == goal) {
        goalFound = true;
        break;
    }

    if (sequence[index] == pathAnswer.left) {
        moves.push(leftName)
    } else if (sequence[index] == pathAnswer.right) {
        moves.push(rightName)
    }

    if (index < sequence.length -1) {
        index++;

    } else {
        index = 0;
    }
}
console.log(moves.length - 1)

}
test = partOne(input);
//console.log(test)