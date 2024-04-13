const path = require('path');
const fs = require('fs');
const input = fs
	.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').trim().split('\n')


const partOne = (input) => {
    let firstDigit = [];
    let fD = 0;
    let lD = 0;
    let lastDigit = [];
    let resultArr = [];
    let result = 0;
    

    input.forEach((inp) => {
        const regex = /\d/g;

        for (let i = 0; i < inp.length; i++){
            if(inp[i].match(regex)){
               firstDigit.push(inp[i]);

               break;
            }
        }
        for (let j = inp.length -1; j >= 0; j--){
            //console.log(inp[j])
            if(inp[j].match(/\d/g)){
                lastDigit.push(inp[j]);
                break;
             }
        }
    })
    let res = 0;
    for(let i = 0; i < firstDigit.length; i++){
        res = Number(firstDigit[i] + lastDigit[i]);
        //console.log(res)
        result += res;

        
    }
console.log("first " + firstDigit.length);
 console.log("first " + lastDigit.length);
 console.log(result);
 
}

const partTwo = (input) => {
    let newArr = []
    let firstDigit = [];
    let firstDigit2 = [];
    let fD = 0;
    let lD = 0;
    let lastDigit = [];
    let resultArr = [];
    let t = 0;
    let result = 0;
    const regex = /\d/g;
    let digits = {
        dig: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        num: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    };
    let res1;
    

    input.forEach((inp) => {
        //console.log(inp)        
        for(let i = 0; i < digits.dig.length; i++){
            //console.log(inp)
            //console.log(digits.dig[i])
            
            if(inp.match(digits.dig[i] || inp.match(digits.num[i]))){
                //newArr = inp.replaceAll(digits.dig[i], digits.num[i])
                //console.log(inp[i]);
                //console.log(inp.indexOf(inp.match(digits.dig[i])))
                
                if(t >= inp.indexOf(inp.match(digits.dig[i]))){

                
                firstDigit2.push(inp.indexOf(inp.match(digits.dig[i])))
                console.log(inp.match(digits.dig[i]))
                t = inp.indexOf(inp.match(digits.dig[i]))
            }
                //newArr.push(digits.num[i])
            } 
            //console.log(inp.match(digits.dig[i]))
           //newArr.push(inp.replaceAll(digits.dig[i], digits.num[i])); 
           //break;          
           //console.log(newArr)
        }        
        //console.log(newArr)
        

        for (let i = 0; i < inp.length; i++){
            if(inp[i].match(regex)){
                firstDigit.push(inp[i]);
 
                break;
            
        }
    }
        for (let j = inp.length -1; j >= 0; j--){
            //console.log(inp[j])
            if(inp[j].match(/\d/g)){
                lastDigit.push(inp[j]);
                break;
             }
        }
    })
    let res = 0;
    for(let i = 0; i < firstDigit.length; i++){
        res = Number(firstDigit[i] + lastDigit[i]);
        //console.log(res)
        result += res;

        
    }
// console.log("first " + firstDigit.length);
//  console.log("first " + lastDigit.length);
//  console.log(result);
console.log(firstDigit2);
 
}

//partOne(input);
partTwo(input);