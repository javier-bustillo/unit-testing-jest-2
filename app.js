
const fromEuroToDollar = function (valueInEuro) {

    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar;
}

const fromEuroToYen = function (valueInEuro) {

    let valueInYen = valueInEuro * 127.9;

    return valueInYen;
}
const fromEuroToPound = function (valueInEuro) {

    let valueInPound = valueInEuro * 0.8;

    return valueInPound;
}
const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3))

module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound };