const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Clark', 1, 'chou8395@gmail.com');
    expect(typeof(employee)).toBe("object");
});

test('set Email', () => {
    const testEmail = "chou8395@gmail.com"
    const employee = new Employee("Clark", 88, testEmail);
    expect(employee.email).toBe(testEmail);
});

test('sets name', () => {
    const name = "Clark";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('sets ID', () => {
    const testId = 88;
    const employee = new Employee("Clark", testId);
    expect(employee.id).toBe(testId);
});
