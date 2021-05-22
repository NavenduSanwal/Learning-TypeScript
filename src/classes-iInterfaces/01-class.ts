class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      console.log('From getter: ');
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  // generally with same as getter
  set mostRecentReport(value: string) {
    if (!value) throw new Error('Enter valid value.');

    // it could be alias for addReport method
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      console.log('Cannot add Max');
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log('printing Reports: ');

    console.log(this.reports);
  }
}

const accounting2 = new AccountingDepartment('D102', []);
console.log('accounting: ', accounting2);

// getter and setter are used as properties; not as functions, called with ()
// console.log(accounting2.mostRecentReport); // will throw error as defined iin the getter

accounting2.addReport('Some error ....');
accounting2.addReport('Latest error ....');
console.log(accounting2.mostRecentReport);

// set value with setter, empty value will throw error as defined in setter
// accounting2.mostRecentReport = '';
accounting2.mostRecentReport = 'Year End Report';
console.log(accounting2.mostRecentReport);

accounting2.printReports();

accounting2.addEmployee('Max');
accounting2.addEmployee('Ad');
accounting2.printEmployeeInfo();
