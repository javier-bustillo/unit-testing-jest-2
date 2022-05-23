
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);


    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {

    const { fromEuroToDollar } = require('./app.js')


    const dollars = fromEuroToDollar(3.5)


    const expected = 3.5 * 1.2;


    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One euro should be 127.9 yens", function () {

    const { fromEuroToYen } = require('./app.js')


    const yen = fromEuroToYen(3.5)


    const expected = 3.5 * 127.9;


    expect(fromEuroToYen(3.5)).toBe(447.65000000000003);
})

test("One euro should be 0.8 pounds", function () {

    const { fromEuroToPound } = require('./app.js')


    const pound = fromEuroToPound(3.5)


    const expected = 3.5 * 0.8;


    expect(fromEuroToPound(3.5)).toBe(2.8000000000000003);
})