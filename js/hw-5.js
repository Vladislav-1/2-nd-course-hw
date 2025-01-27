/* Задание 1

Дан массив: [1, 5, 4, 10, 0, 3].
Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу. */

const arr = [1, 5, 4, 10, 0, 3];

i = 0;
while (i < arr.length) {
    if (arr[i] != 10) {
        console.log(arr[i]);
    } else {
        console.log(arr[i]);
        break;
    }
    i++;
}

/* Задание 2
Дан массив: [1, 5, 4, 10, 0, 3].
Найдите индекс значения 4 в этом массиве. */

const setNumbers = [1, 5, 4, 10, 0, 3];

for (i = 0; i < setNumbers.length; i++) {
    if (setNumbers[i] == 4) {
        console.log(`Индекс элемента массива со значением "4" в данном массиве равен ${i}.`);
    }
}

/* Задание 3
Дан массив чисел: [1, 3, 5, 10, 20].
С помощью метода join выведите элементы массива через пробел(пустую строку ' '). */

const collectionNumbers = [1, 3, 5, 10, 20];

alert(collectionNumbers.join(' '));

/* Задание 4
С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]. */

const multidimensionalArray = [];

const firstArray = [];

for (y = 0; y < 3; y++) {
    for (i = 0; i < 1; i++) {
        let a = Math.round(Math.random() * 100);
        firstArray.push(a);
    }
    multidimensionalArray.push(firstArray);
}

console.log(multidimensionalArray);

const multidimensionalArray2 = [];

const secondArray = [];

for (y = 0; y < 3; y++) {
    let a = 1;
    secondArray.push(a);
    multidimensionalArray2.push(secondArray);
}

console.log(multidimensionalArray2);

/* Задание 5
Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2. */

const strangeArray = [1, 1, 1];

for (i = 0; i < 3; i++) {
    strangeArray.push(2);
}

console.log(strangeArray);

/* Задание 6
Дан массив: [9, 8, 7, 'a', 6, 5].
С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив. */

const trainingArray = [9, 8, 7, 'a', 6, 5];

const deleteLetter = (arr) => {
    arr.sort();
    arr.pop();
    alert(arr);
}

deleteLetter(trainingArray);

/* Задание 7
Дан массив: [9, 8, 7, 6, 5].
Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал». */

const pricolArray = [9, 8, 7, 6, 5];

const findOutNumber = (arr) => {
    let userNumber = Number(prompt('Угадайте число от 0 до 10: '));
    const filteredArr = arr.filter(arr => arr == userNumber);
    if (userNumber == filteredArr) {
        alert('ВЫ УГАДАЛИ!');
    } else {
        alert('ВЫ НЕ УГАДАЛИ!');
    }
}

findOutNumber(pricolArray);

/* Задание 8
Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.
Для этого задания вам пригодится метод reverse(). Он располагает элементы массива в порядке, обратном исходному. */

let myString = 'abcdef';
let a = myString.split('');
let b = a.reverse();
let c = b.join('');
console.log(c);

/* Задание 9
Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]. */

const interestingArray = [[1, 2, 3], [4, 5, 6]];

let newInterestingArray = [];
let bigInterestingArray = [];

for (i = 0; i < interestingArray.length; i++) {
    newInterestingArray = interestingArray[i].join();
    bigInterestingArray.push(newInterestingArray);
}

bigInterestingArray = bigInterestingArray.join(',');
bigInterestingArray = bigInterestingArray.split(',');

console.log(bigInterestingArray);

/* Задание 10
Создайте массив с произвольными числами (диапазон от 1 до 10).
Переберите его с помощью цикла for.
В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
Следующий элемент массива можно получить с помощью индекса: i + 1. Обратите внимание, что у последнего элемента нет следующего. */

const superArrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < superArrey.length; i++) {
    if (superArrey[i + 1]) {
        sum = superArrey[i] + superArrey[i + 1];
        console.log(`Итерация № ${i + 1}:`);
        console.log(`${superArrey[i]} + ${superArrey[i + 1]} = ${sum}`);
        console.log('');
    }
}

/* Задание 11
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел. */

let arrNumber = [1, 2, 3, 4];

const returnSquares = (arr) => {
    const newArr = [];
    for (i = 0; i < arr.length; i++) {
        let a = arr[i] ** 2;
        newArr.push(a);
    }
    return newArr;
}

returnSquares(arrNumber);

/* Задание 12
Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов. */

const arrayStrings = ['у', 'попа', 'была', 'собака'];

const returnLengthStrings = (arr) => {
    const newArr = [];
    for (i = 0; i < arr.length; i++) {
        let a = arr[i];
        a = a.length;
        newArr.push(a);
    }
    return newArr;
}

returnLengthStrings(arrayStrings);

/* Задание 13
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения. */

const arrayIntegers = [1, 2, 3, 4, 5];

const returnNegativeNumbers = (arr) => {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        let a = (arr[i] - arr[i] * 2);
        newArr.push(a);
    }
    return newArr;
}

returnNegativeNumbers(arrayIntegers);

/* Задание 14
Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями. */

let randomArray = [];
let newRandomArray = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for (i = 0; i < 10; i++) {
    let a = getRandomInt(0, 10);
    randomArray.push(a);
    if (a % 2 == 0 && a != 0) {
        newRandomArray.push(a);
    }
}

console.log(`Исходный массив: ${randomArray}`);
console.log(`Массив с чётными значениями: ${newRandomArray}`);

/* Задание 15
Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль. */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let sixElements = [];
for (i = 0; i < 6; i++) {
    a = getRandomInt(1, 10);
    sixElements.push(a);
}

const findArithmeticMean = (arr) => {
    let result = 0;
    for (i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result / arr.length;
}

console.log('');
console.log(`Массив из шести элементов: ${sixElements}.`);
console.log(`Средним арифметическим всех элементов массива будет: ${findArithmeticMean(sixElements)}.`);