import { inArray, input, randomSample } from "./note.js"

function info() {
  console.log('숫자야구 안내를 시작합니다');
  console.log('start  함수에 투구 횟수와 몇회를 정할 수 있습니다.');
  console.log('ex) start(3, 9) : 3개의 볼을 던짐, 9회까지');
  console.log('입력 방식 : 1 2 3');
  console.log('스페이스로 볼을 구분합니다.');
}

function isEnd(param_question, param_answer) {
  return param_answer.map((value, index) => {
    if (param_question[index] === value) {
      return 'O'
    }
    else if (inArray(value, param_question)) {
      return 'V'
    }
    else {
      return 'X'
    }
  })
}

function start(count, repetition) {
  const question = randomSample(count);

  Array(repetition).fill(0).forEach((value, index) => {
    console.log(`${index}회를 시작합니다. 숫자를 입력해주세요`);
    let answer = input().split(' ');
    let result = isEnd(question, answer);
    console.log(result)

    if (result.fliter((x) => x === 'O').length === 3) {
      console.log(`정답입니다. ${answer}`);
    }
    else {
      console.log(result);
    }
  })
}

start(3, 9);