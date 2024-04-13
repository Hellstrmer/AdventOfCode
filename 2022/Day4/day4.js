const path = require('path');
const fs = require('fs');
const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8').trim().split('\n')

const partOne = (input) => {
    let data = sort1(input)
}

const sort1 = (input) => {
    let result = 0;
    let result2 = 0;

    const firstElf = {
        first: [],
        second: []
    }

    const secondElf = {
        first: [],
        second: []
    }
    input.forEach((d, b) => {
        let keyStart = d.slice(0, (input[b].indexOf(','))).trim();
        let keyEnd = d.slice((input[b].indexOf(',') +1)).trim();
        let elf1Start = Number(d.slice(0, (input[b].indexOf('-'))).trim())
        let elf1End = Number(d.slice(input[b].indexOf('-') +1, input[b].indexOf(',')).trim())
        let elf2Start = d.slice(input[b].indexOf(',') +1)
        let elf3Start = Number(elf2Start.slice(0, elf2Start.indexOf('-')))
        let elf2End = Number(elf2Start.slice(elf2Start.indexOf('-') +1).trim())
        firstElf.first.push(elf1Start)
        firstElf.second.push(elf1End)
        secondElf.first.push(elf3Start)
        secondElf.second.push(elf2End)
    })

 for (let i = 0; i < firstElf.first.length; i++) {
    if (secondElf.first[i] >= firstElf.first[i] && secondElf.second[i] <= firstElf.second[i]) {
        result = result + 1
        result2 = result2 + 1
    } else if (firstElf.first[i] >= secondElf.first[i] && firstElf.second[i] <= secondElf.second[i]) {
        result = result + 1
        result2 = result2 + 1    
    } else if (firstElf.first[i] >= secondElf.first[i] && firstElf.first[i] <= secondElf.second[i]) {            
        result2 = result2 + 1
    } else if (secondElf.first[i] >= firstElf.first[i] && secondElf.first[i] <= firstElf.second[i]) {            
        result2 = result2 + 1  
    } else if (firstElf.second[i] <= secondElf.second[i] && firstElf.second[i] >= secondElf.first[i]) {            
        result2 = result2 + 1
    }else if (secondElf.second[i] <= firstElf.second[i] && secondElf.second[i] >= firstElf.first[i]) {            
        result2 = result2 + 1
    }
 } 
    console.log(result)
    console.log(result2)
}

test = partOne(input);
