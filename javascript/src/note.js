import * as readline from 'node:readline';
// import readline from 'readline-promise'
// import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


function inArray(value, array) {
  return array.findIndex((x) => x === value) !== -1
}

function inputString(testValue) {
  // const rl = require('readline').createInterface({
  const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    terminal : true
  });

  let result = [];
  
  rl.on('line', (line) => {
    testValue(line)
    rl.close();
  })

  // rl.question('just input data\n', (answer) => {
  //   testValue(answer);
  //   rl.close();
  // })

  // const rl = readline.createInterface({ input, output });
  // const result = await rl.question('input string');
  // rl.close();
  // testValue(result)
}

function test() {
  let result = '';
  inputString(function(testValue) {
    result = testValue;
  })
  return result;
}

function randomNumber() {
  return Math.floor(Math.random() * 9) + 1
}

function randomNotExist(array) {
  let number = randomNumber()
  return inArray(number, array)? randomNotExist(array) : number
}

function randomSample(count) {
  let result = []
  Array(count).fill(0).forEach(() => {
    result.push(randomNotExist(result))
  })  
  return result;
}

// console.log(randomSample(3))
// console.log(`input value : ${inputString()}`)
// console.log(`input data : ${test()}`)


inputString(function(str) {
  console.log('input data :', str);
})


// test();


// export {inArray, input, randomNumber, randomNotExist, randomSample}