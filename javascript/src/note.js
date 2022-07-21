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

function inArray(val, arr) {
  return arr.findIndex((x) => x === val) !== -1
}

function randomNumber() {
  return random_num = Math.floor(Math.random() * 9) + 1
}

function randomSimple(array) {
  number = randomNumber()
  return inArray(number, array)? randomSimple(array) : number
}

function randomBall2(count) {
  return Array(count).fill(0).map(function() {
    return randomSimple(this)
  }, [])
}

function randomBall(numRandom, paramCount, paramArray) {
  return paramArray === undefined? Array(paramCount).fill(0).map((value, index, mapArray) => {
    inArray(numRandom, mapArray)? randomBall(randomNumber(), paramCount, mapArray)
    : mapArray[index] = numRandom
    return numRandom
  })
  : paramArray.filter((x) => x !== 0).map((value, index, mapArray) => {

    if (inArray(numRandom, mapArray)) {
      randomBall(randomNumber(), paramCount, mapArray)
    }
    else {
      mapArray[index] = numRandom
    }

    // inArray(numRandom, mapArray)? randomBall(randomNumber(), paramCount, mapArray)
    // : mapArray[paramArray.findIndex((x) => x === 0)] = numRandom
    return numRandom
  })
}

function setResult() {
  result.forEach(() => {
    result[result.findIndex((x) => x === 0)] = randomNumber()
  })
}

setResult()
// console.log(randomBall(randomNumber(), 3))
// for (i=0;i<50;i++) {
  // console.log(randomBall2(3))
// }

// export {randomBall, setResult, result}