import { removeItem, addToCard, addAndRemoveQnd } from "../cart";
import removeItemParameters from "./useToTest/removeItem.test";
import addToCardParameters from "./useToTest/addToCard.test";
import addAndRemoveQndParameters from "./useToTest/addAndRemoveQnd.test";


describe('removeItem', () => {
    test('expeted remove the object after the function', () => {
        expect(removeItem(removeItemParameters[0], removeItemParameters[1])).not.toContain(removeItemParameters[2]);
    });
});

describe('addToCard', () => {
    test('expeted add the object after the function', () => {
        expect(addToCard(addToCardParameters[0][0], addToCardParameters[0][1])).toContain(addToCardParameters[0][2]);
        expect(addToCard(addToCardParameters[1][0], addToCardParameters[1][1])).toContain(addToCardParameters[1][2]);
    });
});

describe('addAndRemoveQnd', () => {
    test('expeted remove the amount after the function', () => {
        expect(addAndRemoveQnd(addAndRemoveQndParameters[0][1], addAndRemoveQndParameters[0][2], addAndRemoveQndParameters[0][3])).toContain(addAndRemoveQndParameters[0][4]);
        expect(addAndRemoveQnd(addAndRemoveQndParameters[1][1], addAndRemoveQndParameters[1][2], addAndRemoveQndParameters[1][3])).toContain(addAndRemoveQndParameters[1][4]);
        expect(addAndRemoveQnd(addAndRemoveQndParameters[2][1], addAndRemoveQndParameters[2][2], addAndRemoveQndParameters[2][3])).toContain(addAndRemoveQndParameters[2][4]);
    });
});