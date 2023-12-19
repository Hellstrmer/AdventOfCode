const path = require('path');
const fs = require('fs');
const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim();

    let colors = {};
    let sum = 0;
    let powersum = 0;
    let data = input.split('\n');

    data.forEach((d) => {
        let key = d.slice(0,d.indexOf(':'));
        colors[key] = [[],[],[]];
        str = '';
        //console.log(colors)
        for (let i = d.indexOf(':')+1; i < d.length; i++) {
            //console.log(d[i])
            str += d[i];
            str = check(key,str);
        }
        //console.log(str)
        if (str.includes('red')) {
                str = str.replace(/\D/g, '');
                colors[key][0].push(str);
                //console.log(`red ${str}`)
            } else if (str.includes('green')) {
                str = str.replace(/\D/g, '');
                colors[key][1].push(str);
                //console.log(`green ${str}`)
            } else if (str.includes('blue')) {
                str = str.replace(/\D/g, '');
                colors[key][2].push(str);
                //console.log(`blue ${str}`)
        }
        
        if (!colors[key][0].some(value => {return value > 12}) &&
            !colors[key][1].some(value => {return value > 13}) &&
            !colors[key][2].some(value => {return value > 14})) {
                sum += parseInt(key.replace(/\D/g, ''));
        }
         let power = parseInt(Math.max(...colors[key][0])) * parseInt(Math.max(...colors[key][1])) * parseInt(Math.max(...colors[key][2]));
         powersum += power;
        
        });


        console.log(`The sum of IDs is ${sum}`);
        //console.log(`The sum of powers is ${powersum}`);

function check(key,str) {
if (str[str.length-1] === "," || str[str.length-1] === ";") {
    if (str.includes('red')) {
        str = str.replace(/\D/g, '');
        colors[key][0].push(str);
    } else if (str.includes('green')) {
        str = str.replace(/\D/g, '');
        colors[key][1].push(str);
    } else if (str.includes('blue')) {
        str = str.replace(/\D/g, '');
        colors[key][2].push(str);
    }
    str = '';
}
return str;
}    