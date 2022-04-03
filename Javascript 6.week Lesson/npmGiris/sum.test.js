const {sum, cikarma} = require('./sum');


test('1 + 2 = 3 olmalıdır', () => {
    expect(sum(1, 2)).toBe(3);
});

test('5 - 3 = 2 olmalıdır', () => {
    expect(cikarma(3,5)).toBe(2)
});

