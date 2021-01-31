// 1. Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
const arr1 = [1, 5, 7, 8, 9, 0, -5, -55, 105, 0, 5, 299, 6, 7];

console.log(Math.max(...arr1));

// 2. Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”].
//    Створити новий масив де будуть тільки Стрінгові значення.
const arr2 = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0, '!'];

console.log(arr2.filter(value => typeof value === 'string'));

// 3. Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking.
const arr3 = [
    {
        name: "Yura",
        age: 55,
        hobby: ["football", "ski", "hiking"],
        type: "Admin"
    }, {
        name: "Yulian",
        age: 28,
        hobby: ["films", "games", "hiking"],
        type: "user"
    }, {
        name: "Taras",
        age: 38,
        hobby: ["hunting", "TV", "javascript"],
        type: "user"
    }];

const userTyped = arr3.filter(value => value.type === 'user');
const hikingTyped = [];

arr3.forEach(value => {
    value.hobby.forEach((data) => {
        if (data === 'hiking') {
            hikingTyped.push(value);
        }
    });
});

console.log(userTyped);
console.log(hikingTyped);

// 4. https://restcountries.eu/rest/v2/all – АПІ endpoint для країн.
// Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.
// api url
async function getData() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    let str = '';

    data.forEach((value, index) => {
        str += (index + 1) + '. ' + value.name.toUpperCase() + '-' + value.capital.toUpperCase() + '<br>';
    });

    document.getElementById("info").innerHTML = str;
}
