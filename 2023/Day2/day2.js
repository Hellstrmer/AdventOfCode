const path = require('path');
const fs = require('fs');
//const { type } = require('os');
const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim();

//console.log(input[0])

const sortToArray = (input) => {
    let arr = input.split('\n');
    //console.log(arr[1][1])
    let words = arr[0].split(':')
    words.shift()

    //let correct = words.split(',')

    //console.log(arr)
    let totalB = []
    let totalG = []
    let totalR = []
     for (let i = 0; i< arr.length; i++) {   
        totalB[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'b') {
                totalB[i].push(arr[i][j - 2]);
            }   
        }           
    } 
    for (let i = 0; i< arr.length; i++) {   
        totalG[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'g') {
                totalG[i].push(arr[i][j - 2]);
            }   
        }           
    } 
    for (let i = 0; i< arr.length; i++) {   
        totalR[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'r') {
                totalR[i].push(arr[i][j - 2]);
            }   
        }           
    } 
    //console.log(typeof(totalR[1]));
    const resultRed = totalR
    .filter((subarray) => subarray.some((element) => element !== ' '))
    .map((subarray) => subarray.filter((element) => element !== ' '));

    //console.log(resultRed);

const add = (input) => {
    const sums = []
    for (const row of input) {
        let total = 0;
        for (const num of row) {
            total += parseInt(num);
        }
        sums.push(total);
    } return sums;
} 
//console.log(totalR);
const numberOfBlue = add(totalB);
const numberOfGreen = add(totalG);
const numberOfRed = add(resultRed);

//console.log(numberOfBlue, numberOfGreen, numberOfRed);

const equal = (input, equalValues) => {
    const ok = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] < equalValues){
            ok.push(input.indexOf(input[i]) + 1)
            //console.log(input.indexOf(input[i]) + 1)
        }
    } return ok;
}

const okBlue = equal(numberOfBlue, 14);
const okGreen = equal(numberOfGreen, 13);
const okRed = equal(numberOfRed, 12);

//  console.log(okBlue);
//  console.log(okGreen);
//  console.log(okRed);

 let doneArr = []
 doneArr.push(okBlue);
 doneArr.push(okGreen);
 doneArr.push(okRed);

 console.log(doneArr)

 function findCommonValues(arrays) {
    // Initialize an empty set to store the common values
    const commonValues = new Set();
  
    // Iterate over the first array to identify potential common values
    for (const value of arrays[0]) {
      // Check if the value is present in all subsequent arrays
      let isCommon = true;
      for (let i = 1; i < arrays.length; i++) {
        if (!arrays[i].includes(value)) {
          isCommon = false;
          break;
        }
      }
  
      // If the value is common, add it to the set
      if (isCommon) {
        commonValues.add(value);
      }
    }
  
    // Convert the set back to an array
    return [...commonValues];
  }
  const commonValues = findCommonValues(doneArr);
console.log(commonValues); // Output: [1, 2, 5]


}


const sorted = sortToArray(input);

//console.log(sorted)