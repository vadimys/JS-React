/*1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
    Функція яка виведе всю інформацію про тварину.
    Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день).
    Функція яка зможе змінити назву тварини на більш детальну.*/

const animal = {
    name: 'Bars',
    weight: 100,
    age: 12,
    avSpeed: 20,
    getFullInfo() {
        return `Name: ${this.name}\n Weight: ${this.weight}\n Age: ${this.age}\n AverageSpeed: ${this.avSpeed}\n`;
    },
    set name(value) {
        this.name = value;
    },
    getDaysByDistance(distance) {
        const timePerDay = 12;
        const fullTime = distance / this.avSpeed;

        return fullTime / timePerDay;
    }
};

/*2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу
фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.*/

const someObject = {
    name: '',
    sideA: 200,
    sideB: 340,
    set name(value) {
        this.name = value;
    },
    set sideC(value) {
        this.sideC = value;
    },
    get area() {
        return this.sideA * this.sideB;
    },
    get perimeter() {
        return (this.sideA + this.sideB) * 2;
    },
    setMeterValues(side) {
        this.sideA /= 100;
        this.sideB /= 100;
        this.sideC /= 100;
    }
};

/*3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
{
    tomato: {
        count: 5,
            price: 50,
            buy: false,
            outOfstore: true
    } , ...
}
Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
    Виводимо список покупок які ми купили.
    Додаємо функцію яка дозволить купити продукт.
    Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
    Додаємо можливість збільшувати кількість товару.
    Додаємо можливість зменшувати кількість товару(менше 0 бути не може).*/

const shopper = {
    list: {
        Eggs: {
            count: 10,
            price: 3.5,
            buy: true,
            outOfStore: false,
        },
        Milk: {
            count: 1,
            price: 40,
            buy: false,
            outOfStore: false,
        },
        Spinach: {
            count: 2,
            price: 30,
            buy: false,
            outOfStore: true,
        },
        Bread: {
            count: 1,
            price: 15,
            buy: false,
            outOfStore: false,
        },
        Bacon: {
            count: 5,
            price: 60,
            buy: true,
            outOfStore: false,
        },
        Cheese: {
            count: 4,
            price: 180,
            buy: true,
            outOfStore: false,
        },
        Beer: {
            count: 40,
            price: 25,
            buy: true,
            outOfStore: false,
        }
    },
    get bought() {
        const output = [];

        for (let item in this.list) {
            const data = this.list[item];

            if (data.buy) {
                output.push(item);
            }
        }

        return output;
    },
    set bought(value) {
        for (let item in this.list) {
            if (item === value) {
                this.list[item].buy = true;
            }
        }
    },
    increaseAmount(value) {
        for (let item in this.list) {
            if (item === value) {
                this.list[item].count++;
            }
        }
    },
    decreaseAmount(value) {
        for (let item in this.list) {
            if (item === value) {
                const data = this.list[item];

                if (data.count !== 0) {
                    this.list[item].count--;
                }
            }
        }
    },
    showItems() {
        const out = [];
        const inShop = [];

        for (let item in this.list) {
            const data = this.list[item];

            if (data.outOfStore) {
                out.push(item);
            } else {
                inShop.push(item);
            }
        }

        return [...inShop, ...out];
    }
};

/*4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}].
Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.*/
