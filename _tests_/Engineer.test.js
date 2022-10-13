const Engineer = require('../lib/Engineer');

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Clark", 88, "chou8395@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "chou8395";
    const employee = new Engineer("Clark", 88, "chou8395@gmail.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})

test("set gitHub", () => {
    const testValue = "chou8395";
    const employee = new Engineer("Clark", 88, "chou8395@gmail.com", testValue);
    expect(employee.github).toBe(testValue);
})
