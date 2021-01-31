function setAge() {
    prepareForm(AGE_INPUT_ID, AGE_RESULT_ID, (value) => {
        return value > 0 ? `Hi there, I'm ${value} year` + (value > 1 ? 's' : '') + ' old' :
            'Are you alive? :)';
    });
}

function calculateAge() {
    prepareForm(YEAR_INPUT_ID, YEAR_RESULT_ID, (value) => {
        const currentData = new Date();
        const inputDate = new Date(value);
        let years = currentData.getFullYear() - inputDate.getFullYear();

        if (inputDate.getMonth() > currentData.getMonth() || (inputDate.getMonth() === currentData.getMonth() &&
            inputDate.getDay() < currentData.getDay())) {
            years--;
        }

        return `You are ${years} year` + (years > 1 ? 's' : '') + ' old';
    });
}

function onCircleArea() {
    prepareForm(RADIUS_ID, CIRCLE_AREA_ID, (value) => {
        return value > 0 ? (Math.pow(value, 2) * PI) : 'Incorrect radius value!';
    });
}

function prepareForm(inputId, outputID, textCallBack) {
    const input = document.getElementById(inputId);

    if (input) {
        const output = document.getElementById(outputID);

        if (output) {
            output.value = textCallBack(input.value);
            input.onfocus = () => output.value = '';
            console.log(output.value);
        } else {
            console.warn(`${outputID} element not found!`);
        }
    } else {
        console.warn(`${inputId} element not found!`);
    }
}

function onPerimeter(shouldClear = false) {
    const sideA = document.getElementById(SIDE_A_ID);
    const sideB = document.getElementById(SIDE_B_ID);

    if (sideA && sideB) {
        const output = document.getElementById(PERIMETER_RESULT_ID);

        if (output) {
            if (shouldClear) {
                sideA.value = '';
                sideB.value = '';
                output.value = '';
            } else {
                output.value = 2 * (parseFloat(sideA.value) + parseFloat(sideB.value));
                console.log(output.value);
            }
        } else {
            console.warn(`${PERIMETER_RESULT_ID} element not found!`);
        }
    } else {
        console.warn(`${SIDE_A_ID} or ${SIDE_B_ID} element not found! Please, check...`);
    }
}

function onDistance() {
    const speed = document.getElementById(SPEED_ID);
    const time = document.getElementById(DRIVE_TIME_ID);

    if (speed && time) {
        const output = document.getElementById(DISTANCE_ID);

        if (output) {
            output.value = parseFloat(speed.value * time.value).toFixed(1);
            time.onfocus = () => output.value = '';
            console.log(output.value);
        } else {
            console.warn(`${DISTANCE_ID} element not found!`);
        }
    } else {
        console.warn(`${SPEED_ID} or ${DRIVE_TIME_ID} element not found! Please, check...`);
    }
}

function onKmMi(isKmInput = true) {
    const km = document.getElementById(KM_ID);
    const mi = document.getElementById(MI_ID);

    if (km && mi) {
        if (isKmInput) {
            mi.value = parseFloat((km.value * MI_CF).toString()).toFixed(2);
        } else {
            km.value = parseFloat((mi.value * KM_CF).toString()).toFixed(2);
        }
        km.onfocus = () => mi.value = '';
        mi.onfocus = () => km.value = '';
    } else {
        console.warn(`${KM_ID} or ${MI_ID} element not found! Please, check...`);
    }
}

function onLitreCheck(isMoneyInput = true) {
    const amount = document.getElementById(AMOUNT_ID);
    const price = document.getElementById(PRICE_ID);

    if (amount && price) {
        const petrol = document.getElementById(PETROL_ID);
        const left = document.getElementById(LEFT_ID);
        const calculate = () => {
            let moneyLeft = '';
            let petrolAmount = '';
            const moneyAmount = parseFloat(amount.value);
            const petrolPrice = parseFloat(price.value);

            if (moneyAmount >= petrolPrice) {
                moneyLeft = moneyAmount % petrolPrice;
                petrolAmount = parseInt((moneyAmount / petrolPrice).toString());
            }

            left.value = moneyLeft;
            petrol.value = petrolAmount;
        };

        if (petrol && left) {
            if (isMoneyInput && parseFloat(price.value) > 0) {
                calculate()
            } else if (parseFloat(amount.value) > 0) {
                calculate();
            }
        } else {
            console.warn(`${PETROL_ID} or ${LEFT_ID} element not found! Please, check...`);
        }
    } else {
        console.warn(`${AMOUNT_ID} or ${PRICE_ID} element not found! Please, check...`);
    }
}
