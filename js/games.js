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