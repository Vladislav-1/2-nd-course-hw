/* Задание 1

Напишите функцию, которая возвращает меньшее из дух чисел.
Например, из двух чисел - 8 и 4 - функция должна вернуть значение 4. Если мы передаём два одинаковых значения, например 6 и 6, то функция должна вернуть это значение (в данном случае - 6). */

let firstNumber = Math.round(Math.random() * 100);
let secondNumber = Math.round(Math.random() * 100);

let returnLess = () => {
    console.log(`Сравниваются два числа: ${firstNumber} и ${secondNumber}.`);
    if (firstNumber < secondNumber) {
        return firstNumber;
    } else if (firstNumber > secondNumber) {
        return secondNumber;
    } else {
        return console.log(`В данном случае оба числа равны. Выводим число ${firstNumber}.`);
    }
}

console.log(`В данном случае меньшим числом яляется число ${returnLess()}.`);

console.log(`=============================================`);

/* Задание 2

Напишите функцию, которая принимает число и возвращает: строку "Число чётное", если число чётное; строку "Число нечётное", если чсило не чётное.
Подсказка: чётность проверяется с помощью условия n % 2 == 0. */

let checkParity = () => {
    let userNamber = Number(prompt(`Введите любое число: `));
    if (userNamber % 2 != 0) {
        return alert(`Число нечётное.`);
    } else {
        return alert(`Число чётное.`);
    }
}

checkParity();

console.log(`=============================================`);

/* Задание 3

Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа значением - так, чтобы потом это значение можно было использовать. */

console.log(``);

let outputSquareNumber = (anyNumber) => {
    let squareNumber = anyNumber ** 2;
    console.log(`Квадратом числа ${anyNumber} является ${squareNumber}.`);
}

outputSquareNumber(4);
outputSquareNumber(2);
outputSquareNumber(10);

console.log(``);

let outputNewSquareNumber = (anyNumber) => {
    return anyNumber ** 2;
}

let variable1 = outputNewSquareNumber(4);
let variable2 = outputNewSquareNumber(8);
let variable3 = outputNewSquareNumber(7);

console.log(`А вот, ${variable1} - уже можно использовать.`);
console.log(`${variable2} - тоже можно использовать.`);
console.log(`${variable3} - иже с ними можно использовать.`);

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
    if (userAge < 0 || isNaN(userAge)) {
        alert('Вы ввели неправильное значение!');
    } else if (0 <= userAge && userAge <= 12) {
        alert('Привет, друг!');
    } else if (userAge >= 13) {
        alert('Добро пожаловать!');
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

let checkNumbers = (firstNumber, secondNumber) => {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return res = 'Одно или оба значения не являются числом!';
    } else {
        return res = firstNumber * secondNumber;
    }
}

alert(checkNumbers(2, 3));
alert(checkNumbers('FSFAdszgd', 3));

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
    if (isNaN(n)) {
        return alert('Переданный параметр не является числом!');
    } else {
        return alert(`${n} в кубе равняется ${Math.pow(n, 3)}.`);
    }
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
    return (Math.PI * (Math.pow(this.radius, 2))).toFixed(0);
}

function getPerimeter() {
    return (2 * Math.PI * this.radius).toFixed(0);
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

alert(`Площадь круга равна ${circle1.getArea()}.`);
alert(`Периметр круга равен ${circle1.getPerimeter()}.`);

alert(`Площадь круга равна ${circle2.getArea()}.`);
alert(`Периметр круга равен ${circle2.getPerimeter()}.`);
