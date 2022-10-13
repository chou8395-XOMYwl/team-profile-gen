const Manager = require('../lib/Manager');

test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Clark", 88, "chou8395@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("set office number", () => {
    const testValue = "88";
    const employee = new Manager("Clark", 88, "chou8395@gmail.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
})
