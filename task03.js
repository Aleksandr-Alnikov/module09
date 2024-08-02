export const randomNumber = () => {
    const num1 = +prompt('Введите первое число', '');
    const num2 = +prompt('Введите второе число', '');

    alert(Math.floor(Math.random() * (num2 - num1)) + num1);
};