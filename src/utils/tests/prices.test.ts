import { removeComma, someAllPrice } from "../prices";

describe('removeComma', () => {
    test('expeted remove the comma after the function', () => {
        expect(removeComma('500.00')).toBe(500);
        expect(removeComma('5.00')).toBe(5);
        expect(removeComma('13.58')).toBe(13);
        expect(removeComma('1000.00')).toBe(1000);
    });
});

describe('someAllPrice', () => {
    test('expeted remove the comma after the function', () => {
        expect(someAllPrice([{
            price: '8000',
            amount: 5
        }])).toBe(40000);
        expect(someAllPrice([{
            price: '100',
            amount: 4
        }, {
            price: '500',
            amount: 1
        }, {
            price: '1000',
            amount: 10
        }])).toBe(10900);
    });
});
