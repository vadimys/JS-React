function onCheckSum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if (num1 && num2 && Number(num1) > 0 && Number(num2) > 0 && num1 !== num2) {
        let min = Number(num1);
        let max = Number(num2);
        let sum = 0;

        if (min > max) {
            max = min;
            min = Number(num2);
        }

        for (let i = min; i <= max; i++) {
            sum += i;
        }

        alert(`Our sum is ${sum}!`);
        console.log(sum);
    } else {
        alert('Incorrect data! Please, retry!');
    }
}

function showElements() {
    const arr = [1, 2, 3, 4, 5];
    let output = '';

    for (let i = 0; i < arr.length; i++) {
        output += (i === arr.length - 1) ? arr[i] : arr[i] + ', ';
    }

    alert(`Our array numbers are ${output}!`);
    console.log(output);
}

function getShowMaxNumber() {
    const arr = [-1, 22, 3, 44, 5];
    const max = Math.max(...arr);

    alert(`Our array MAX value ${max}!`);
    console.log(max);
}

function onCheckNumbers() {
    const onError = () => {
        if (value && confirm('Incorrect format of data! Please, retry!\n' +
            'NOTE: Comma should be divider!')) {
            onCheckNumbers();
        }
    };
    const needAmount = 8;
    let value = prompt(
        `Please, fill any ${needAmount} numbers!\n` +
        'NOTE: Comma should be divider!\n' +
        'EXAMPLE: 1,-5,0,30,-75,7,-2,0');

    if (value) {
        let correct = 0, incorrect = 0;

        value = value.split(',');
        value.forEach((data) => {
            const num = parseInt(data);

            !isNaN(num) ? correct++ : incorrect++;
        });

        if (correct === needAmount) {
            let plus = 0, minus = 0, zero = 0;

            value.forEach((data) => data < 0 ? minus++ : (data > 0 ? plus++ : zero++));
            alert(`Positive numbers amount: ${plus}!\nNegative numbers amount: ${minus}!\nZero numbers amount: ${zero}!`);
        } else {
            onError();
        }
        console.log(value);
    } else {
        onError();
    }
}

function showMultiplier() {
    let num = document.getElementById('multi').value;

    if (num && Number(num) > 0 && Number(num) < 9) {
        num = Number(num);

        let output = '';

        for (let i = 1; i <= 9; i++) {
            output += `${num} X ${i} = ${num * i}\n`
        }
        alert(output);
    } else {
        alert('Incorrect data! Please, retry!');
    }
}

function showResult() {
    const arr = [2, 5, 9, 15, 0, 4];
    let result = '';

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 3 && arr[i] < 10) {
            result += (i === arr.length - 1) ? arr[i] : arr[i] + ', ';
        }
    }

    alert(`Numbers more than 3 and less then 10 are: "${result}"`);
}

function startCalculation() {
    const signs = ['*', '/', '+', '-'];
    const num1 = prompt(`Please, fill any FIRST number`);
    const num2 = prompt(`Please, fill any SECOND number`);
    let signValue = prompt(`Please, fill one SIGN ${signs}`);

    const calculate = () => {
        if (signs.indexOf(signValue) !== -1) {
            let result = 0;

            switch (signValue) {
                case signs[0]:
                    result = Number(num1) * Number(num2);
                    break;
                case signs[1]:
                    result = Number(num1) / Number(num2);
                    break;
                case signs[2]:
                    result = Number(num1) + Number(num2);
                    break;
                case signs[3]:
                    result = Number(num1) - Number(num2);
                    break;
            }

            if (confirm(`Our result: ${result}`)) {
                if (confirm(`Do you want to retry?`)) {
                    startCalculation();
                }
            }
        } else {
            if (confirm('Incorrect sign! Please, fill correct!')) {
                signValue = prompt(`Please, fill one SIGN ${signs}`);
                calculate();
            }
        }
    };

    if (!isNaN(Number(num1) && !isNaN(Number(num2)))) {
        calculate();
    } else {
        if (confirm('Incorrect data! Please, retry!')) {
            startCalculation();
        }
    }
}
