/*
Задание 1
Преобразовать строку 'js' в верхний регистр.
*/

let userString = 'js';
userString = userString.toUpperCase();
console.log(userString);

/*
Задание 2
Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
*/

console.log('');
const products = ['яблоко', 'груша', 'слива', 'персик', 'абрикос', 'ЯблокО', 'Яблоня'];
let product = 'Я';
console.log(`Хочу заметить, что мы с Вами имеем замечательный массив: ${products}`);
console.log('');
console.log(`Ещё хочу заметить, что мы с Вами имеем замечательную строку: ${product}`);
console.log('');
let newArray = [];
const returnNnewArray = (arr, n) => {
	let a, b;
	n = n.toLowerCase();
	for (i = 0; i < arr.length; i++) {
		a = arr[i].toLowerCase().split('');
		if (a[0] == n) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

console.log(`А это - то, что мы с Вами получаем по условию задачи: ${returnNnewArray(products, product)}`);

/*
Задание 3
Округлить число 32.58884:

До меньшего целого.
До большего целого.
До ближайшего целого.
*/
console.log('');
let a = 32.58884;
a = Math.floor(a);
console.log(`Округляем число 32.58884 до меньшего целого числа: ${a}`);
console.log('');
a = 32.58884;
a = Math.ceil(a);
console.log(`Округляем число 32.58884 до большего целого числа: ${a}`);
console.log('');
a = 32.58884;
a = Math.round(a);
console.log(`Округляем число 32.58884 до ближайшего целого числа: ${a}`);

/*
Задание 4
Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
*/

const arrNumbers = [52, 53, 49, 77, 21, 32];
console.log('');
console.log(`Дано: массив чисел [52, 53, 49, 77, 21, 32].`);
console.log('');
let minNumber = Math.min(...arrNumbers);
console.log(`Минимальным значением из чисел является: ${minNumber}.`);
console.log('');
let maxNumber = Math.max(...arrNumbers);
console.log(`Максимальным значением из чисел является: ${maxNumber}.`);

/*
Задание 5
Создать функцию, которая выводит в консоль случайное число от 1 до 10.
*/

const printRandomNumber = () => {
	let randomNumber = Math.round(Math.random() * 10);
	console.log(`Поверьте мне на слово: это - ${randomNumber} - совершенно случайное число!`);
}

printRandomNumber();

/*
Задание 6
Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.
*/

const returnArrayRandomNumber = () => {
	let userNumber = Number(prompt('Введите любое положительное целое число от 10 до 100: '));
	let arr = [];
	let lengthArr = userNumber / 2;
	for (i = 0; i < lengthArr; i++) {
		let a = Math.round(Math.random() * (i + 1));
		arr.push(a);
	}
	console.log(`Вы ввели число ${userNumber}.`);
	console.log(``);
	console.log(`Длина массива равна: ${arr.length}.`);
	return arr;
}

console.log(`Массив случайных чтсел: [${returnArrayRandomNumber()}].`);

/*
Задание 7
Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
*/

function getRandomIntInclusive() {
	let firstUserNumber = Number(prompt('Введите ПЕРВОЕ целое число: '));
	let secondUserNumber = Number(prompt('Введите ВТОРОЕ целое число: '));
	if (firstUserNumber > secondUserNumber) {
		a = firstUserNumber;
		b = secondUserNumber;
	} else {
		a = secondUserNumber;
		b = firstUserNumber;
	}
	const minCeiled = Math.ceil(b);
  	const maxFloored = Math.floor(a);
  	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}
	
getRandomIntInclusive();

/*
Задание 8
Вывести в консоль текущую дату.
*/

let data = new Date();
console.log(data);

/*
Задание 9
Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.
*/

let currentDate = new Date();
let a = +currentDate;
let b = 73 * 24 * 60 * 60 * 1000;
let res = a + b;
let result = new Date(res);

alert(`Текущая дата: ${currentDate}.

Через 73 дня после текущей даты наступит: ${result}.`);

/*
Задание 10
Написать функцию, которая принимает дату и возвращает ее в формате:

Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды]
*/

const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг",
"пятница", "суббота"];
const months = ["января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря"];
const returnDate = () => {
	let currentDate = new Date();
	let myDdate = currentDate.getDate();
	let myMonth = currentDate.getMonth();
	let myYear = currentDate.getFullYear();
	let myDay = currentDate.getDay();
	let options = {hour: '2-digit', minute:'2-digit', second:'2-digit'};
	let myTaim = currentDate.toLocaleTimeString('ru-RU', options);
	return (`Дата: ${myDdate} ${months[myMonth]} ${myYear} — это ${days[myDay]}.
Время: ${myTaim}.`);
}

alert(returnDate());