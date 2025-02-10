/* Задание 1. Скрытие и показ текста */

const headingEl = document.querySelector('.heading');
const buttonHiddenEl = document.querySelector('.button-hidden');

let i = 0;
buttonHiddenEl.addEventListener('click', () => {
    i++;
    if (i % 2 != 0) {
        headingEl.style.display = 'none';
        buttonHiddenEl.style = 'background: rgba(200,255,200,1.0);';
        buttonHiddenEl.textContent = `Показать`;
    } else {
        headingEl.style = 'display: block;';
        buttonHiddenEl.style = 'background: rgba(255,200,200,1.0);';
        buttonHiddenEl.textContent = `Скрыть`;
    }
})

/* Задание 2. Изменение стиля элемента */

const paragraphEl = document.querySelector('.paragraph');
const changeColorButton = document.querySelector('.change-color-button');

changeColorButton.addEventListener('click', () => {
    paragraphEl.style = 'color: rgba(0,0,255,1.0);';
})

/* Задание 3. Динамическое изменение текста */

const buttonTextEl = document.querySelector('.button-text');
buttonTextEl.addEventListener('click', () => {
    headingEl.textContent = 'Привет, мир!';
});

/* Задание 4. Поиск и изменение элементов по классу */

const descriptionEl = document.querySelectorAll('.description');
const changeText = () => {
    descriptionEl.forEach(text => text.textContent = 'Изменённый текст');
}
setTimeout(changeText, 1000);

/* Задание 5. Работа с querySelectorAll */

const descriptionSecondElem = document.querySelectorAll('.descriptionSecond');
const changeNewText = () => {
    descriptionSecondElem.forEach(text => text.textContent = 'Новый текст');
}
setTimeout(changeNewText, 2500);

/* Задание 6. Добаление нового элемента в DOM */

const addItemButtonEl = document.querySelector('.add-item-button');
addItemButtonEl.addEventListener('click', () => {
    const newP = document.createElement('p');
    newP.textContent = 'Новый абзац';
    document.body.appendChild(newP);
});

/* Задание 7. Удаление элемента */

const newDescriptionElem = document.querySelector('.newDescription');
const deleteFirstElement = document.querySelector('.delete-first-element');
deleteFirstElement.addEventListener('click', () => {
    newDescriptionElem.remove();
});