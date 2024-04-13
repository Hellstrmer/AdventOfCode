const path = require('path');
const fs = require('fs');
const input = fs
    .readFileSync(path.join(__dirname, 'example.txt'), 'utf8').trim().split('\n')

//console.log(input[0].length)

const partOne = (input) => {
    let data = sort1(input)
    //return data;
}

const partTwo = (input) => {
    let data = sort2(input)
    // let answer = form2(data)
     return data;
}

const sort1 = (input) => {
    halfArr = []
    firstArr = []
    secondArr = []
    let key;
    for (let i = 0; i < input.length; i++) {
        //console.log(input[i])
        halfArr.push((input[i].length - 1) / 2)
        key = input.slice(0, (input[i].length - 1) / 2)
    }
    input.forEach((d, b) => {
        let keyStart = d.slice(0, ((input[b].length - 1) / 2));
        let keyEnd = d.slice(((input[b].length - 1) / 2));
        firstArr.push(keyStart)
        secondArr.push(keyEnd)
    })

    let found = []
    let result;
    let char = 0;
    const regexUp = new RegExp("^[A-Z]+$")
    const regexDown = new RegExp("^[a-z]+$")
    const leng = secondArr.length;

    for (let i = 0; i < secondArr.length; i++) {
        for (let j = 0; j < secondArr[i].length; j++) {
            if (result = firstArr[i].match(secondArr[i][j])) {

                if (secondArr[i][j].match(regexUp)) {                 
                    char = char + secondArr[i].charCodeAt(j) - 38
                    found.push(result)
                    break;

                }
                if (secondArr[i][j].match(regexDown)) {
                    char = char + secondArr[i].charCodeAt(j) - 96
                    break;

                }
            }
        }
    } return char;
}


const sort2 = (input) => {
    //console.log(input)
    let group = []
    let secondArr = []
    let count = 0;
    let arrNumb = 0;
    let key;
    for (let i = 0; i < input.length; i++) {
        if (count === 0) {
        group[arrNumb] = []
        }
        count += 1
        if (count <= 3) {
            group[arrNumb].push(input[i])            
        }
        if (count === 3) {
            count = 0;
            arrNumb += 1;            
        }

    } //console.log(group)

    let found = [];
    let found2 = [];
    let answer = [];
    let result;
    let result2;
    let result3;
    let char = 0;
    let indexj = 0;
    console.log(group[0][0])
    for (let i = 0; i < group.length; i++) {        
        for (let j = 0; j < group[i].length; j++) {               
            for (let k = 0; k < group[i][j].length; k++) {
                
                    if (result = group[i][1].match(group[i][0][k])) {
                        found.push(group[i][0][k])                       
                    }
                    if (result2 = group[i][2].match(group[i][1][k])) {
                        found2.push(group[i][1][k])                       
                    }                                           
                }       
               
                }

        } console.log(found) 

        for (let i = 0; i < found.length; i++) {

            //if (result3 = found2.match(found[i]))
            for (let j= 0; j < found2.length; j++) {
                if (found[i] === found2[j]) {
                    // if (found[i] !== '')
                    answer.push(found[i])
                }
            }
            
        }
    //} return char;
        //console.log(answer)
}





test = partOne(input);
test2 = partTwo(input);
//console.log(`Svar på del 1 är ${test}`)
//console.log(`Svar på del 2 är ${test2}`)