import random


#

def info():
    print('숫자야구 안내를 시작합니다')
    print('start 함수에 투구 횟수와 몇회를 정할 수 있습니다')
    print('ex) start(3, 9) : 3개의 볼을 던짐, 9회까지')
    print('입력 방식 : 1 2 3')
    print('스페이스로 볼을 구분합니다.')


def start(count: int, repetition: int):
    question = random.sample(range(1, 9), count)

    for i in range(1, repetition + 1):
        print(f'{i}회를 시작합니다. 숫자를 입력해주세요')
        answer = list(map(int, input().split(' ')))
        result = is_end(question, answer)

        if result.get('end'):
            print(f"정답입니다. {answer}")
            break
        else:
            print(f"{result.get('result')}")


def is_end(param_question: list, param_answer: list):
    check = []
    for index, value in enumerate(param_answer):
        if param_question[index] == value:
            check.append('O')
        elif value in param_question:
            check.append('V')
        else:
            check.append('X')

    return {'end': True if check.count('O') == 3 else False,
            'result': check}


if __name__ == '__main__':
    info()
    start(3, 9)
