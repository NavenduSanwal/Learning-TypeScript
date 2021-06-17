interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

// type ElevatedEmployee = Admin & Employee;
interface ElevatedEmployee extends Employee, Admin {}

const manager: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};
