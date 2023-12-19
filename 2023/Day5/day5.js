const path = require('path');
const fs = require('fs');
const input = fs
    .readFileSync(path.join(__dirname, 'example.txt'), 'utf8').trim().split('\n')

    let seeds = []
    const first = input.shift();
    const str = first.slice(first.indexOf(':') +1 ).trim()
    seeds = (str.replace(/\s+/g, ' ').trim().split(' ').map(Number));

    //console.log(seeds[0])
const partOne = (input) => {
 console.log(input)
    const seedToSoil = {
        destination: [],
        source: [],
        range: [],
    }
    let values = []
    input.forEach(d => {
        
        values.push(d.replace(/\s+/g, ' ').trim().split(' ').map(Number));
    }); 
    console.log(values)


}

const partTwo = (input) => {

}

const sort1 = (input) => {
    let times = []
    // input.forEach(d => {
    //     let time = d.slice(d.indexOf(':') + 1).trim()
    //     times.push(time.replace(/\s+/g, ' ').trim().split(' ').map(Number));

    // });
    // //omvandla datan till objekt
    // const obj = {
    //     time: times[0],
    //     distance: times[1],
    // }
    // return obj;
}




test = partOne(input);
test2 = partTwo(input)
//console.log(`Svar på del 1 är ${test}`)
//console.log(`Svar på del 2 är ${test2}`)