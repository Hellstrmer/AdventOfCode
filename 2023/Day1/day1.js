const path = require('path');
const fs = require('fs');

const charToNumb = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}
console.log(charToNumb.seven)

const input = fs
	.readFileSync(path.join(__dirname, 'data1.txt'), 'utf8')
	.toString()
	.trim();

  const onlyNumbers = (input) => {
    let numbers = input.replace(/\D/g, "");
    return Number(numbers.slice(0,1) + numbers.slice(-1));
    //console.log(Number(numbers.slice(0,1) + numbers.slice(-1)));
  }

const add = (ack, numb) => {
  return ack + Number(numb);
}

  function partOne() {
    const arr = input.split('\n');
    console.log(arr.map(onlyNumbers).reduce(add));
  }

  partOne()

  const partTwo = () => {
    const arr = input.split('\n');
    const dig = Object.keys(charToNumb);
    const ordered = Number(arr.slice(0,1) + arr.slice)
    console.log(dig)
  }

  partTwo()






  const data = [
    [1, 2, 3, 3, 5],
    [1, 2, 4, 5],
    [1, 2, 1, 5]
  ];
  
  function removeDuplicates(data) {
    const uniqueValues = new Set();
    for (const value of data[0]) {
      uniqueValues.add(value);
    }
  
    for (let i = 1; i < data.length; i++) {
      const array = data[i];
      for (let j = array.length - 1; j >= 0; j--) {
        if (!uniqueValues.has(array[j])) {
          array.splice(j, 1);
        }
      }
    }
  
    return data;
  }
  
  const modifiedData = removeDuplicates(data);
  console.log(modifiedData);
  