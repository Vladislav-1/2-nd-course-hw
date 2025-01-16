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

/* ============================================= */

/* Задание 1

Напишите функцию, которая возвращает меньшее из дух чисел.
Например, из двух чисел - 8 и 4 - функция должна вернуть значение 4. Если мы передаём два одинаковых значения, например 6 и 6, то функция должна вернуть это значение (в данном случае - 6). */

let firstNumber = Math.round(Math.random() * 100);
let secondNumber = Math.round(Math.random() * 100);

let returnLess = () => {
    console.log(`Сравниваются два числа: ${firstNumber} и ${secondNumber}.`);
    if (firstNumber < secondNumber) {
        console.log(`В данном случае меньшим числом яляется число ${firstNumber}.`);
    } else if (firstNumber > secondNumber) {
        console.log(`В данном случае меньшим числом яляется число ${secondNumber}.`);
    } else {
        console.log(`В данном случае оба числа равны. Выводим число ${firstNumber}.`);
    }
}

returnLess();

console.log(`=============================================`);

/* Задание 2

Напишите функцию, которая принимает число и возвращает: строку "Число чётное", если число чётное; строку "Число нечётное", если чсило не чётное.
Подсказка: чётность проверяется с помощью условия n % 2 == 0. */

let z = Math.round(Math.random() * 100);
console.log(`У нас есть число ${z}.`);

let checkParity = () => {
    z % 2 != 0 ? console.log(`Число нечётное.`) : console.log(`Число чётное.`);
}

checkParity();

console.log(`=============================================`);

/* Задание 3

Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа значением - так, чтобы потом это значение можно было использовать. */

let anyNumber = Math.round(Math.random() * 100);

let outputSquareNumber = () => {
    let squareNumber = Number(anyNumber ** 2);
    console.log(`Квадратом числа ${anyNumber} является ${squareNumber}.`);
}

outputSquareNumber();

let outputNewSquareNumber = () => {
    return Number(anyNumber ** 2);
}

let variable = outputNewSquareNumber();

console.log(`Вот, ${variable} - уже можно использовать.`);

console.log(`=============================================`);

/* Задание 4

Создайте функцию, которая:
Спрашивает у пользователя, сколько ему лет.
Если пользоатель введёт отрицательное число - выведет на экран "Вы ввели неправильное значение".
Если пользоатель введёт число от 0 до 12 - выведет на экран "Привет, друг!".
Если пользователь введёт число больше или равно 13 - выедет на экран "Добро пожаловать!".

Подсказка: можете выполнить это задание с помощью оператора if else.
*/

let askHowOld = () => {
    let userAge = Number(prompt("Пожалуйста, укажите Ваш возраст: "));
    console.log(`Ваш возраст ${userAge}.`);
    if (userAge < 0 || Number.isNaN(userAge)) {
        console.log('Вы ввели неправильное значение!');
    } else if (0 <= userAge && userAge <= 12) {
        console.log('Привет, друг!');
    } else if (userAge >= 13) {
        console.log('Добро пожаловать!');
    }
}

askHowOld();

console.log(`=============================================`);

/* Задание 5

Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму:

Проверяет, являются ли переданные параметры корректными числами.
Подсказка: используйте преобразование типов и isNaN().

Если нет - возвращает строку "Одно или оба значения не являются числом!".
Если оба параметра - числа, то возвращает произведение данных чисел.
 */

let checkNumbers = () => {
    let firstNumber = Number(prompt('Пожалуйста, введите первое число: '));
    let secondNumber = Number(prompt('Пожалуйста, введите второе число: '));
    Number.isNaN(firstNumber) || Number.isNaN(secondNumber) ? console.log('Одно или оба значения не являются числом!') : console.log(`Произведение числа ${firstNumber} на число ${secondNumber} равно ${firstNumber * secondNumber}.`);
}

checkNumbers();

console.log(`=============================================`);

/* Задание 6

Напишите функцию, которая выполняет следующий алгоритм:

Запрашивает у пользователя число.
Проверяет, является ли введённое значение числом.
Если значение не является числом, возвращает строку "Переданный параметр не является числом!".
Если значение является числом, возвращает строку "n в кубе равняется <получившееся значение>", где n - введённое число, а <получившееся значение> - число, возведённое в куб.
Проверьте работу функции с числами от 0 до 10.
*/

let checkUserNumber = () => {
    let n = Number(prompt('Пожалуйста, введите любое не отрицательное число: '));
    Number.isNaN(n) ? console.log('Переданный параметр не является числом!') : console.log(`${n} в кубе равняется ${Math.pow(n, 3)}.`);
}

checkUserNumber();

console.log(`=============================================`);

/* Задание 7

Создайте два объекта, circle1 и circle2, каждый из которых имеет свойство radius.
Оба объекта должны иметь:

Метод getArea, который возвращает площадь круга, вычисляемую через радиус.
Метод getPerimeter, который возвращает периметр окружности.
*/

function getArea() {
    let areaCircle = 3.14 * (Math.pow(this.radius, 2));
    console.log(`Площадь круга равна ${areaCircle}.`);
}

function getPerimeter() {
    let perimeterCircle = (2 * 3.14 * this.radius).toFixed(0);
    console.log(`Периметр круга равен ${perimeterCircle}.`);
}

const circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 20,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

circle1.getArea();
circle1.getPerimeter();

circle2.getArea();
circle2.getPerimeter();