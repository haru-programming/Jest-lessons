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

    test('converts "fruit" to equal NaN', () => {
        expect(toNumber("fruit", 10)).toBe(NaN);
    });
})


//Q3

describe("filterOrange", () => {

    test('if the array contains orange, return new array in orange', () => {
        const fruit = ["orange", "apple", "peach"];
        expect(filterOrange(fruit)).toContain("orange");
    });

    test('if the array not contains orange, return an empty array', () => {
        const fruit = ["grape", "apple", "peach"];
        expect(filterOrange(fruit)).toEqual([]);
    });
})
