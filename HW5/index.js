// 1. Напишіть функцію, що повертає куб числа.
function calculateCube(num) {
    return Math.pow(num, 3);
}
//2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.
function calculateSecond(first, second, third) {
    return (first + second) / third;
}
// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
function checkUADay(num) {
    const uaDays = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Субота', 'Неділя'];

    if (num > 0 && num <= 7) {
        return uaDays[num - 1];
    } else {
        return '';
    }
}
// 4. Реалізуйте функцію знаходження факторіала
function calculateFactorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
        result = result * i;
    }

    return result;
}
// 5. Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.
function calculateSeconds(hour, min, sec) {
    return hour * 3600 + min * 60 + sec;
}
/* 6. Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".*/
function convertSeconds(sec) {
    let outPut = new Date(sec * 1000).toISOString().substr(11, 8);
    const timeArr = outPut.split(':');

    if (timeArr[0] === '23' && timeArr[1] === '59' && timeArr[2] === '59') {
        outPut = 'Більше одного дня';
    }

    return outPut;
}
