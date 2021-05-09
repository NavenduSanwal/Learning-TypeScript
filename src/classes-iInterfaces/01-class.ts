class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // public is necessary here ^^^^^, the properties are created and initialized
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'D102'; // cannot change readonly property
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees);
  }
}

const accounting = new Department('D101', 'Accounting');
console.log('accounting: ', accounting);
accounting.describe();

accounting.addEmployee('John');
accounting.addEmployee('Max');

// accounting.employees[2] = 'Peter'; // private property

accounting.printEmployeeInfo();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
