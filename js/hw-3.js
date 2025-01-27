/* Задание 1
Выведите в консоль 2 раза слово «Привет». */

for (i = 1; i < 3; i++) {
    console.log('Привет');
}

/* Задание 2
Выведите в консоль цифры от 1 до 5. */

for (i = 1; i <= 5; i++) {
    console.log(i);
}

/* Задание 3
Выведите в консоль числа от 7 до 22. */

for (i = 7; i <= 22; i++) {
    console.log(i);
}

/* Задание 4
Есть объект (назовем его obj), который содержит следующие пары ключ-значение:

"Коля" : '200'
"Вася" : '300'
"Петя" : '400'
Эти пары представляют собой имена сотрудников и их зарплаты в долларах. Ваша задача написать код, который будет проходиться по всем записям этого объекта и выводить информацию о каждом сотруднике в формате: "имя сотрудника" — зарплата "сумма" долларов.

Для итерации по объекту используйте цикл for-in. */

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (let key in obj) {
    console.log(`Сотрудник ${key} - зарплата ${obj[key]} долларов.`);
}

/* Задание 5
Дано число n=1000. Ваша задача — делить его на 2 до тех пор, пока результат деления не станет меньше 50.

Определите, какое число получится в результате.
Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную num. */

let i = 0;
let n = 1000;

while (n >= 50) {
    n = n / 2;
    i++;
}

console.log(`Получилось число ${n}.`);
console.log(`Для достижения результата потребовалось ${i} проходов цикла.`);

/* Задание 6
В вашей компании пятница является отчетным днем.

Нужно написать программу, которая:

считает дни месяца по датам,
определяет, какой день пятница,
выводит сообщение с напоминанием, что нужно подготовить еженедельный отчет.

Условия задачи:

Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7).
Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида: "Сегодня пятница, ...-е число. Необходимо подготовить отчет."
Исходите из того, что в нашем месяце 31 день. Должно вывестись от 4 до 5 сообщений с напоминаниями по разным датам. */

let fridayNumber = 3;
let a = 31;

console.log('Для января 2025 года:');
while (a > 0) {
    console.log(`Сегодня пятница, ${fridayNumber}-е число. Необходимо подготовить отчет.`);
    fridayNumber += 7;
    a -= 7;
}


/* Дополнительные задания
Задание 1
Дано число k = 100. Ваша задача — вычитать из него 7 до тех пор, пока результат вычитания не станет меньше 0. Определите, какое число получится в результате. Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную iterations. */

let k = 100;
let iterations = 0;

for (k = 100; k > 0; k = k - 7) {
    iterations++;
}

console.log(`Результатом вычислений стало число ${k}. Для его нахождения потребовалось ${iterations} итераций.`);

/* Задание 2
Создайте массив months с названиями всех месяцев года. Напишите программу, которая выводит название каждого месяца и его порядковый номер в году. */

const months = {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь',
}

for (let key in months) {
    console.log(`"${months[key]}" - порядковый номер этого месяца в году: ${key}.`);
}

/* Задание 3
Создайте объект, описывающий книгу, с такими свойствами как "название", "автор", "год издания", "жанр". Напишите код, который выводит все свойства этого объекта в консоль. */

const book = {
    "название": "Название",
    "автор": "Автор",
    "год издания": "Год издания",
    "жанр": "Жанр"
}

for (let key in book) {
    console.log(`${key} - ${book[key]}`);
}

/* Задание 4
Создайте массив из 10 случайных чисел. Напишите код, который находит минимальное число в массиве и выводит его в консоль. */

let a1 = Math.round(Math.random() * 100);
let a2 = Math.round(Math.random() * 100);
let a3 = Math.round(Math.random() * 100);
let a4 = Math.round(Math.random() * 100);
let a5 = Math.round(Math.random() * 100);
let a6 = Math.round(Math.random() * 100);
let a7 = Math.round(Math.random() * 100);
let a8 = Math.round(Math.random() * 100);
let a9 = Math.round(Math.random() * 100);
let a10 = Math.round(Math.random() * 100);

const randomNumber = [

    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10
]

console.log(randomNumber);
const res = Math.min(...randomNumber);
console.log(res);



