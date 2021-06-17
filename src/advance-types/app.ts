type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployee extends Employee, Admin {}

const manager: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

// Union & Intersection

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
