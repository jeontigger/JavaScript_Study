const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
};
const  a = 5, b = 4;
const plusResult = calculator.plus(a, b);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(minusResult, b);
const divideResult = calculator.divide(plusResult, timesResult);