function onCalculateGrade() {
    const tableData = [];
    let avMark = 0;
    let gradeValue = '';
    let numOr0 = n => isNaN(n) ? 0 : n;
    const table = document.getElementById('studentsMarks');
    const grades = new Map([[60, 'F'], [70, 'D'], [80, 'C'], [90, 'B'], [100, 'A']]);

    for (let i = 1; i < table.rows.length; i++) {
        const row = table.rows[i];
        const cells = row.cells;

        tableData.push({
            name: cells[0].innerText,
            mark: document.getElementById(cells[0].innerText.toLowerCase()).value
        });
    }

    tableData.forEach((value) => avMark += numOr0(Number(value.mark)));
    avMark /= tableData.length;

    for (let [key, value] of grades) {
        if (avMark <= key && !gradeValue) {
            gradeValue = value;
        }
    }

    alert(`Students grade is "${gradeValue}" !`);
}

function onCalculateTask2() {
    let sum = 0;

    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    alert(`Sum: ${sum} !`);
}

function onDraw() {
    let tree = '';
    const max = 5;

    for (let i = 0; i < max; i++) {
        const points = (i % (i + 1)) + 1;

        for (let j = 0; j < points; j++) {
            tree += '*';
        }

        tree += '\n';
    }

    alert(tree);
}
