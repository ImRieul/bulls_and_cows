function inArray(value, array) {
  return array.findIndex((x) => x === value) !== -1
}

function input() {
  const rl = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
  });

  let result = ''
  
  rl.on('line', (line) => {
    result = line;
    console.log(line)
    rl.close();
  })

  rl.on('close', () => {
    process.exit();
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

console.log(randomSample(3))
console.log(input())

// export {inArray, randomNumber, randomNotExist, randomSample}