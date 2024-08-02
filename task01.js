
export const calc = () => {
    const num = prompt('Введите два числа через запятую', '');
    if (num === null) {
        return;
    }

    const numArr = num.split(',');
    const number = numArr.map(item => +item);

    if (number.length > 2 || number.length < 2) {
        alert('Вы ввели не корректное значение, введите два числа');
        calc();
        return;
    }

    number.forEach(item => {
        if (!item) {
            alert('Вы ввели не корректное значение');
            calc();
        }
    });

    const calculation = prompt('Введите операцию вычисления', '');
    switch (calculation) {
        case '+':
            alert(number[0] + number[1]);
            return;
        case '*':
            alert(number[0] * number[1]);
            return;
        case '-':
            alert(number[0] - number[1]);
            return;
        case '/':
            alert(number[0] / number[1]);
            return;
        default:
            alert('Вы ввели не верное значение');
            return;
    }
};



