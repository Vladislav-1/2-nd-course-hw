let guessNumber = () => {

    let hiddenNumber = Math.round(Math.random() * 100);
    let i = 0;
    while (true) {
        let numberUser = Number(prompt('Угадайте число от 1 до 100'));
        if (hiddenNumber === numberUser) {
            alert(`Вы ввели число ${numberUser}.
Вы угадали загаданное число!
Вы это сделали на ${i} ходу!`);
            break;
        } else if (hiddenNumber > numberUser) {
            alert(`Вы ввели число ${numberUser}.
Ваше число меньше загаданного! Продолжайте отгадывать!`);
        } else if (hiddenNumber < numberUser) {
            alert(`Вы ввели число ${numberUser}.
Ваше число больше загаданного! Продолжайте отгадывать!`);
        } else {
            alert(`Пожалуйста, введите число от 1 до 100!`);
        }
        i += 1;
    }
}

let simpleArithmetic = () => {

    let firstNumber = Math.round(Math.random() * 100);
    if (firstNumber > 10 && firstNumber < 21) {
        firstNumber = firstNumber - 10;
    } else if (firstNumber > 20 && firstNumber < 31) {
        firstNumber = firstNumber - 20;
    } else if (firstNumber > 30 && firstNumber < 41) {
        firstNumber = firstNumber - 30;
    } else if (firstNumber > 40 && firstNumber < 51) {
        firstNumber = firstNumber - 40;
    } else if (firstNumber > 50 && firstNumber < 61) {
        firstNumber = firstNumber - 50;
    } else if (firstNumber > 60 && firstNumber < 71) {
        firstNumber = firstNumber - 60;
    } else if (firstNumber > 70 && firstNumber < 81) {
        firstNumber = firstNumber - 70;
    } else if (firstNumber > 80 && firstNumber < 91) {
        firstNumber = firstNumber - 80;
    } else if (firstNumber > 90 && firstNumber < 101) {
        firstNumber = firstNumber - 90;
    }

    let secondNumber = Math.round(Math.random() * 100);
    if (secondNumber > 10 && secondNumber < 21) {
        secondNumber = secondNumber - 10;
    } else if (secondNumber > 20 && secondNumber < 31) {
        secondNumber = secondNumber - 20;
    } else if (secondNumber > 30 && secondNumber < 41) {
        secondNumber = secondNumber - 30;
    } else if (secondNumber > 40 && secondNumber < 51) {
        secondNumber = secondNumber - 40;
    } else if (secondNumber > 50 && secondNumber < 61) {
        secondNumber = secondNumber - 50;
    } else if (secondNumber > 60 && secondNumber < 71) {
        secondNumber = secondNumber - 60;
    } else if (secondNumber > 70 && secondNumber < 81) {
        secondNumber = secondNumber - 70;
    } else if (secondNumber > 80 && secondNumber < 91) {
        secondNumber = secondNumber - 80;
    } else if (secondNumber > 90 && secondNumber < 101) {
        secondNumber = secondNumber - 90;
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    if (getRandomInt(1, 5) == 1) {
        result = firstNumber + secondNumber;
        show = '+';
    } else if (getRandomInt(1, 5) == 2) {
        result = firstNumber - secondNumber;
        show = '-';
    } else if (getRandomInt(1, 5) == 3) {
        result = firstNumber * secondNumber;
        show = '*';
    } else {
        res = firstNumber / secondNumber;
        result = Number(res.toFixed(1));
        show = '/';
    }

    let userNumber = Number(prompt(`Вычислите результат действия ${firstNumber} ${show} ${secondNumber} и введите его*:
_______________
* если действие - ДЕЛЕНИЕ, то введите ДРОБНЫЙ результат, округлив его до одного знака после точки!!!`));

    if (userNumber == result) {
        alert(`Ваш ответ ${userNumber}.
И это - правильное решение!
Сегодня Вы - самое сильное звено нашей игры!!!)))))`);
    } else {
        alert(`Ваш ответ ${userNumber}.
Это - неправильное решение!
Правильный ответ: ${result}!
Сегодня Вы - самое слабое звено нашей игры!!!(((((`);
    }
}