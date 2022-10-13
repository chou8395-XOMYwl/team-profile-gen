const Intern = require("../lib/Intern");

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Clark", 88, "chou8395@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "University of Richmond";
    const employee = new Intern("Clark", 88, "chou8395@gmail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});

test("set school", () => {
    const testValue = "University of Richmond";
    const employee = new Intern("Clark", 88, "chou8395@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
})