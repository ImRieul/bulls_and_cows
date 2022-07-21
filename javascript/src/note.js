let result = Array(3).fill(0);

// function randomBall() {
//   let random_num = Math.floor(Math.random() * 9) + 1
//   if (result.findIndex((x) => x === random_num) === -1) {
//     return random_num
//   }
//   else {
//     return randomBall()
//   }
// }

function randomBall() {
  return random_num = Math.floor(Math.random() * 9) + 1
}

function inArray(val, arr) {
  return arr.findIndex((x) => x === val) !== -1
}

function randomBall2(numRandom, paramCount, paramArray) {
  return paramArray === undefined? Array(paramCount).fill(0).map((value, index, forArray) => {
    inArray(numRandom, forArray)? randomBall2(randomBall(), paramCount, forArray)
    : forArray[index] = numRandom
    return numRandom
  })
  : paramArray.filter((x) => x !== 0).map(() => {
    inArray(numRandom, paramArray)? randomBall2(randomBall(), paramCount, paramArray)
    : paramArray[paramArray.findIndex((x) => x === 0)] = numRandom
    return numRandom
  })
}

function setResult() {
  result.forEach(() => {
    result[result.findIndex((x) => x === 0)] = randomBall()
  })
}

setResult()
console.log(result);

console.log(randomBall2(randomBall(), 3))

// export {randomBall, setResult, result}