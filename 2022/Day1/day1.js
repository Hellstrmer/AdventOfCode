const path = require('path');
const fs = require('fs');
const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim();

const sortToArray = (input) => {
    let arr = input.split('\n');
    let numberArr = []
    let Numberarr = Number(arr[0]);
    //console.log(arr[9])
    const emptyarr = [];
    const empty = '/\S/';

    for (let i = 0; i < arr.length; i++) {
        numberArr.push(Number(arr[i]))
    } return numberArr;
} 

const addArr = (input) => {
    let value = 0;
    let valueArr = []
    //console.log(input[13])
    //console.log(input.length)
    for (let i = 0; i < input.length; i++) {
        value += input[i]
        if (input[i] === 0 ) {
            valueArr.push(value);
            value = 0;
        } else if(i === input.length-1) {
            valueArr.push(input[i]);
            value = 0;
            //console.log(input[i]);
        } 
    } return valueArr;
}

const findBiggest = (input) => {
    let startValue = 0;
    let biggestNumber = 0;
    let secondBiggest = 0;
    let thirdBiggest = 0;
    let total = 0;
    let arr = [];
    //const sortedValues = input.toSorted((a, b) => a - b);
    function compareNumbers(a, b) {
        return a - b;
      }
      input.sort(compareNumbers)

    //console.log("input" + input)
    for (let i = 0; i < input.length; i++) {
        if(input[i] > arr[i-1] ) {
            arr.push(input[i]);
            // thirdBiggest = secondBiggest;
            // secondBiggest = biggestNumber
            // biggestNumber = input[i]
            startValue = input[i];
            //console.log(startValue)
        } else {
            arr.unshift(input[i])
            startValue = input[i];
        }
    } //return biggestNumber;
    //console.log(input)
    console.log(input[input.length-1])
    console.log(input[input.length-2])
    console.log(input[input.length-3])
    return total = input[input.length-1] + input[input.length-2] + input[input.length-3];
    //console.log(biggestNumber, secondBiggest, thirdBiggest);
}

const done = findBiggest(addArr(sortToArray(input)));
//console.log(addArr(sortToArray(input)))
console.log(done)
