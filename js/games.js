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

/******************************************************************************************/

/*
Игра Переверни текст
*/

let turnTextOver = () => {
	let userText = prompt('Ведите любой текст, состоящий из нескольких слов: ');
	
	//alert(userText.split('').reverse().join(''));
	
	
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

const quiz = [{'question': 'Какого цвета небо?', 'options': ['1. Красного', '2. Синего', '3. Зеленого'], 'correctAnswer': 2}, {'question': 'Сколько дней в неделе?', 'options': ['1. Шесть', '2. Семь', '3. Восемь'], 'correctAnswer': 2}, {'question': 'Сколько у человека пальцев на одной руке?', 'options': ['1. Четыре', '2. Пять', '3. Шесть'], 'correctAnswer': 2}];

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
	if (x == 0) {
		y = 'вопросов';
	} else if (x == 1) {
		y = 'вопрос';
	} else if (x == 2 || x == 3) {
		y = 'вопроса';
	}
	alert(`Вы правильно ответили на ${x} ${y}.`);
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

1. Камень.
2. Ножницы.
3. Бумага.

Введите соответствующую цифру: `));
    
    let choosingComputer = getRandomInt(0, 3);
    
    let x = arrayGameElements[playersChoice - 1];
    let y = arrayGameElements[choosingComputer];
    
    alert(`Ваш выбор:

${x}

Выбор Вашего соперника:

${y}`);
    
    
    if(x == 'камень' && y == 'ножницы') {
    alert(`Камень побеждает ножницы!

Вам присуждается полная и безоговорочная ПОБЕДА!`);
    } else if (x == 'камень' && y == 'бумага') {
        alert(`Бумага побеждает камень!

Вам присуждается полное и безоговорочное ПОРАЖЕНИЕ!`);
    } else if (x == 'камень' && y == 'камень') {
        alert(`Выборы совпали, это - НИЧЬЯ!`);
    } else if (x == 'ножницы' && y == 'камень') {
        alert(`Камень побеждает ножницы!

Вам присуждается полное и безоговорочное ПОРАЖЕНИЕ!`);
    } else if (x == 'ножницы' && y == 'ножницы') {
        alert(`Выборы совпали, это - НИЧЬЯ!`);
    } else if (x == 'ножницы' && y == 'бумага') {
        alert(`Ножницы побеждают бумагу!

Вам присуждается полная и безоговорочная ПОБЕДА!`);
    } else if (x == 'бумага' && y == 'камень') {
        alert(`Бумага побеждает камень!

Вам присуждается полная и безоговорочная ПОБЕДА!`);
    } else if (x == 'бумага' && y == 'ножницы') {
        alert(`Ножницы побеждают бумагу!

Вам присуждается полное и безоговорочное ПОРАЖЕНИЕ!`);
    } else if (x == 'бумага' && y == 'бумага') {
        alert(`Выборы совпали, это - НИЧЬЯ!`);
    }
    
}
