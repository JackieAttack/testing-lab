const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test("Test returnTwo is returning 2", () => {
    expect(returnTwo()).toBe(2)
})

test("Testing greeting is working", () => {
    expect(greeting('James')).toBe("Hello, James.");
    expect(greeting('Jill')).toBe("Hello, Jill.");
})

test("Testing add function is adding correctly", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
})
