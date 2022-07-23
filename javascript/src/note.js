import * as readline from 'node:readline';
// import readline from 'readline-promise'
// import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


function inArray(array, value) {
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

function randomNumber(start, end) {
  start = start < 0 || 0
  return Math.floor(Math.random() * end) + start
}

function randomNotExist(start, end, array) {
  let number = randomNumber(start, end);
  return inArray(array, number)? randomNotExist(start, end, array) : number
}

function randomSample(start, end, count) {
  let result = []
  Array(count).fill(0).forEach(() => {
    result.push(randomNotExist(start, end, result))
  })  
  return result;
}

// console.log(randomSample(1, 9, 3))
// console.log(`input value : ${inputString()}`)
// console.log(`input data : ${test()}`)


inputString(function(str) {
  console.log('input data :', str);
})


// test();


// export {inArray, input, randomNumber, randomNotExist, randomSample}