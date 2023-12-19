const path = require('path');
const fs = require('fs');
const input = fs
	.readFileSync(path.join(__dirname, 'example.txt'), 'utf8')
	.toString()
	.trim();


//sorted to an array
const sortedInput = input.split('\n');

//console.log(typeof(sortedInput[0]))

//Find special signs in the array of inputs
const findSign = (input) => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    //console.log(format)
    let arr = []
    for (let i = 0;i < input.length; i++) {
        arr[i]=[]
        for ( let j = 0; j < input[i].length;j++) {       
                if (input[i][j].match(format)) {
                    arr[i].push(j)
                }
        }
    } return arr
}

const findNumbers = (input) =>{
    let arr = []
    const match = 0;
    const digits = (/\d/)
    //console.log(signs[8])

    for (let i = 0; i < input.length; i++) {
        arr[i]=[]
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j].match(digits)) {
                arr[i].push(j)               
            }           
        }
    } return arr
}

const findMatch = (input, signs) => {
    //console.log(Number(signs[5]) + 1 )
    for (let i = 0; i < input.length; i++) {
        console.log(signs[i])
        for (let j = 0; j < input[i].length; j++) {
            
        if (input[i][j] === Number(signs[i]) +1 ) {
            //console.log(Number(signs[j]) +1)
            //console.log(input[i])
        }
    }
}
}
const special = findSign(sortedInput);
const numbers = findNumbers(sortedInput)
const match = findMatch(numbers, special)
console.log(special)
//console.log(numbers)