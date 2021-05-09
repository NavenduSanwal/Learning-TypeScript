class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ', this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');
console.log('accounting: ', accounting);
accounting.describe();

accounting.addEmployee('John');
accounting.addEmployee('Max');

// accounting.employees[2] = 'Peter'; // private property

accounting.printEmployeeInfo();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
