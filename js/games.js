/*
Игра Угадай число
*/

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

/******************************************************************************************/

/*
Игра Простая арифметика
*/

let simpleArithmetic = () => {
    let result, show, res;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let firstNumber = getRandomInt(1, 11);
    let secondNumber = getRandomInt(1, 11);
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
* если действие - ДЕЛЕНИЕ с дробным результатом, то введите ДРОБНЫЙ результат, округлив его до одного знака после точки!!!`));

    if (userNumber == result) {
        alert(`Ваш ответ ${userNumber}.
И это - ПРАВИЛЬНОЕ решение!
Сегодня Вы - самое СИЛЬНОЕ звено нашей игры!!!)))))`);
    } else {
        alert(`Ваш ответ ${userNumber}.
Это - НЕПРАВИЛЬНОЕ решение!
Правильный ответ: ${result}!
Сегодня Вы - самое СЛАБОЕ звено нашей игры!!!(((((`);
    }
}

/******************************************************************************************/

/*
Игра Переверни текст
*/

let turnTextOver = () => {
    let userText = prompt('Ведите любой текст, состоящий из нескольких слов: ');
    let splitText = userText.split(' ');
    let newArr = [];
    for (i = 0; i < splitText.length; i++) {
        let a = splitText[i].split('').reverse().join('');
        newArr.push(a);
    }
    let reverseText = newArr.reverse().join(' ');
    alert(reverseText);
}

/******************************************************************************************/

/*
Игра Простая викторина
*/

const quiz = [{ 'question': 'Какого цвета небо?', 'options': ['1. Красного', '2. Синего', '3. Зеленого'], 'correctAnswer': 2 }, { 'question': 'Сколько дней в неделе?', 'options': ['1. Шесть', '2. Семь', '3. Восемь'], 'correctAnswer': 2 }, { 'question': 'Сколько у человека пальцев на одной руке?', 'options': ['1. Четыре', '2. Пять', '3. Шесть'], 'correctAnswer': 2 }];
const simpleQuiz = () => {
    confirm(`Пожалуйста, примите участие в нашей небольшой викторине!
Вам предстоит ответить на три наших вопроса. Вы готовы?`);
    let x = 0;
    let y;
    for (i = 0; i < quiz.length; i++) {
        let questions = Number(prompt(`Вопрос № ${i + 1}:
${quiz[i].question}
Выберите правильный вариант ответа из предложенных ниже и введите его номер.
${quiz[i]['options']} `));
        alert(`Ваш ответ: ${questions}`);
        if (questions === quiz[i]['correctAnswer']) {
            x += 1;
        }
    }
    alert(`Ваших правильных ответов: ${x} из 3.`);
}

/******************************************************************************************/

/*
Игра Камень, ножницы, бумага
*/

const arrayGameElements = ['камень', 'ножницы', 'бумага'];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
const rockScissorsPaper = () => {
    alert(`Дамы и господа!
Вашему вниманию представляется игра всех времён и народов:

КАМЕНЬ, НОЖНИЦЫ, БУМАГА

Будьте ввнимательны и осторожны!
Ваш соперник не прощает ошибок!`);

    let playersChoice = Number(prompt(`Итак!
Сделайте Ваш выбор:

Цифра 1 - это "Камень".
Цифра 2 - это "Ножницы".
Цифра 3 - это "Бумага".

Введите соответствующую цифру: `));

    if (playersChoice === 1 || playersChoice === 2 || playersChoice === 3) {
        let choosingComputer = getRandomInt(0, 3);
        let user = arrayGameElements[playersChoice - 1];
        let computer = arrayGameElements[choosingComputer];
        alert(`Ваш выбор:
${user}

Выбор Вашего соперника:
${computer}`);
        if (user === 'камень' && computer === 'ножницы') {
            return alert(`Камень побеждает ножницы!

Вам присуждается полная и безоговорочная ПОБЕДА!`);
        }
        if (user === 'камень' && computer === 'бумага') {
            return alert(`Бумага побеждает камень!

Вам присуждается полное и безоговорочное ПОРАЖЕНИЕ!`);
        }
        if (user === 'камень' && computer === 'камень') {
            return alert(`Выборы совпали, это - НИЧЬЯ!`);
        }
        if (user === 'ножницы' && computer === 'камень') {
            return alert(`Камень побеждает ножницы!

Вам присуждается полное и безоговорочное ПОРАЖЕНИЕ!`);
        }
        if (user === 'ножницы' && computer === 'ножницы') {
            return alert(`Выборы совпали, это - НИЧЬЯ!`);
        }
        if (user === 'ножницы' && computer === 'бумага') {
            return alert(`Ножницы побеждают бумагу!

Вам присуждается полная и безоговорочная ПОБЕДА!`);
        }
        if (user === 'бумага' && computer === 'камень') {
            return alert(`Бумага побеждает камень!

Вам присуждается полная и безоговорочная ПОБЕДА!`);
        }
        if (user === 'бумага' && computer === 'ножницы') {
            return alert(`Ножницы побеждают бумагу!

Вам присуждается полное и безоговорочное ПОРАЖЕНИЕ!`);
        }
        if (user === 'бумага' && computer === 'бумага') {
            return alert(`Выборы совпали, это - НИЧЬЯ!`);
        }
    } else {
        alert(`К сожалению, Вы промахнулись и нажали не на ту клавишу!
Попробуйте поторить Ваш выбор!`);
    }
}

/******************************************************************************************/

/*
Игра Генератор случайных цветов
*/

const randomColorGenerator = () => {
    let numberColor1 = getRandomInt(0, 256);
    let numberColor2 = getRandomInt(0, 256);
    let numberColor3 = getRandomInt(0, 256);
    const mainEl = document.querySelector('.main');
    const aboutGamesEl = document.querySelector('.about-games');
    const miniGamesEl = document.querySelector('.mini-games');
    const randomColorGeneratorButtonEl = document.querySelector('.randomColorGeneratorButton');
    randomColorGeneratorButtonEl.addEventListener('click', () => {
        mainEl.style = `background: rgb(${numberColor1}, ${numberColor2}, ${numberColor3});`;
        aboutGamesEl.style = `background: rgb(${numberColor1}, ${numberColor2}, ${numberColor3});`;
        miniGamesEl.style = `background: rgb(${numberColor1}, ${numberColor2}, ${numberColor3});`;
    });
}
