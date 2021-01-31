function onOrderResult() {
    let value = document.getElementById('orderAmount').value;

    if (value && Number(value) > 0) {
        value = Number(value);

        let discount = value < 500 ? 1 : (value >= 500 && value <= 1000) ? 5 : 10;
        const certGift = discount >= 10 ? '\n Also, please, take 200 UAN gift certificate!' : '';

        value = value - ((value * discount) / 100);

        alert(`Your order with discount ${discount}% - ${value} UAN!` + certGift);
    } else {
        alert('Incorrect data! Please, retry!');
    }
}

function startTest() {
    let result = 0;
    const questionAmount = 5;
    const data = [
        ['What is the capital of Chile?', 'Santiago'],
        ['What is the highest mountain in Britain?', 'Ben Nevis'],
        ['What is the smallest country in the world?', 'Vatican'],
        ['Alberta is a province of which country?', 'Canada'],
        ['How many countries still have the shilling as currency?', 'Four'],
        ['Which is the only vowel not used as the first letter in a US State?', 'E'],
        ['What is the largest country in the world?', 'Russia'],
        ['Where would you find the River Thames?', 'London'],
        ['What is the hottest continent on Earth?', 'Africa'],
        ['What is the longest river in the world?', 'Nile'],
        ['The Channel Tunnel is the longest rail tunnel in the world (True or False)', 'False'],
        ['A woman has walked on the Moon (True or False)', 'False'],
        ['According to Scottish law, it is illegal to be drunk in charge of a cow (True or False)', 'True'],
        ['Vietnamese is an official language in Canada (True or False)', 'False'],
        ['The setting for the ITV drama Midsomer Murders is a fictional English county called Midsomer (True or False)', 'True'],
        ['An emu can fly (True or False)', 'True'],
        ['President Theodore Roosevelt\'s son was called Kermit (True or False)', 'True'],
        ['Edinburgh is further East than Carlisle (True or False)', 'False'],
        ['The can-opener was not invented until 45 years after the tin can (True or False)', 'True'],
        ['There are McDonald\'s one every continent except one (True or False)', 'True'],
    ];

    for (let i = 0; i < questionAmount; i++) {
        const item = Math.ceil(Math.random() * (data.length - 1));
        const userAnswer = data[item][1].toLowerCase();
        const answer = prompt(data[item][0]);

        if (answer) {
            answer.toLowerCase();

            if (answer.indexOf(userAnswer) !== -1) {
                result++;
            }
        } else {
            return;
        }
    }

    alert(`Your won ${result} ` + 'point' + (result > 1 ? 's!' : '!') + (result === questionAmount ?
        '\n Also, please, take 1 bonus point!' : ''));

}

function checkNumber() {
    let value = document.getElementById('num').value;

    if (value && Number(value) >= 100 && Number(value) <= 999) {
        alert('You ' + (value.split('').some(x => value.indexOf(x) !== value.lastIndexOf(x)) ? '' : 'don\'t') +
            ' have similar numbers!');
    } else {
        alert('Incorrect data! Please, retry!');
    }
}

function onCheckKeyCode() {
    const signs = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
    let value = prompt('Fill digit from 0 to 9!')

    if (value && Number(value) >= 0 && Number(value) <= 9) {
        alert(`Your digit sign is " ${signs[value]} "`);
    } else {

        if (value && confirm('Incorrect data! Please, retry! Just a DIGIT from 0 to 9!')) {
            onCheckKeyCode();
        }
    }
}
