export const celsius = +prompt('Введите температуру', '');

export const getTemperature = (t) => {
    const k = t + 273;
    const f = t * 9 / 5 + 32;

    return alert(`Температура по Кельвину = ${k} \n температура по Ференгейту = ${f}`);
};