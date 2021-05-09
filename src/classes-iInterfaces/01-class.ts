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

// Inheritance

// can't extend from multiple class
// if constructor is not defined, it picks up base class constructor
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

const it = new ITDepartment('D202', ['Jane']);
console.log('it: ', it);
it.describe();

it.addEmployee('Jane');
it.addEmployee('Sam');

it.printEmployeeInfo();

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting2 = new AccountingDepartment('D102', []);
console.log('accounting: ', accounting2);

accounting2.addReport('Some error ....');
accounting2.printReports();
