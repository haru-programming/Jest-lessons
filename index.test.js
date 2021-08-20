import { addString, toNumber, filterOrange } from "./index";


//Q1

describe("addString", () => {
    test('adds "a" + "b" to equal "ab"', () => {
        expect(addString("a", "b")).toBe("ab");
    });

    test('adds "a" + 1 to equal a1', () => {
        expect(addString("a", 1)).toBe("a1");
    });

    test('adds 1 + 1 to equal -1', () => {
        expect(addString(1, 1)).toBe(-1);
    });
})


//Q2

describe("toNumber", () => {
    test('converts "123" to equal 123', () => {
        expect(toNumber("123", 10)).toBe(123);
    });

    test('converts "7日" to equal 7', () => {
        expect(toNumber("7日", 10)).toBe(7);
    });
})


//Q3

const fruit = ["orange", "apple", "peach"];

test('Check if the array contains orange', () => {
    expect(filterOrange(fruit)).toContain("orange");
});
