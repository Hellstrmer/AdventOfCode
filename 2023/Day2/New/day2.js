const path = require('path');
const fs = require('fs');
const input = fs
	.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').trim().split('\n')

let re = []
    

const possible = {
    red: 12,
    green: 13,
    blue: 14
};

let game = {
    red: [],
    green: [],
    blue: []
};

const regex = {
    r: /(?:\d{0,3} red)/g,
    g: /(?:\d{0,3} green)/g,
    b: /(?:\d{0,3} blue)/g
}

let games = [];

for(let index = 0; index < Object.entries(game).length -1; index++){
    input.forEach((e) => {
        let r = []
        let test;
        //console.log(Object.values(regex)[0])
        test = e.match(Object.values(regex)[index]);    
        
        test.forEach(e => {        
            r.push(Number(e.substring(0, e.indexOf(" "))))
             
        });
       re.push(r);
    });
    
    // console.log(re)
    for (let i = 0; i < re.length; i++){
        game.green[i] = [];
        for(let j = 0; j < re[i].length; j++){
            game.green[i] = Number(game.green[i]) + Number(re[i][j])
        }
        
    }
}

console.log(game);

console.log(Object.entries(game).length)