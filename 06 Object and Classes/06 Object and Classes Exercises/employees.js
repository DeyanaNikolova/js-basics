function employees(listOfEmployees) {

    for (let employee of listOfEmployees) {
        let employeeData = {
            name: employee,
            personalNumber: employee.length
        }; 
   
    console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

// solution 2:
// class Employees {
//     constructor(name, personalNumber) {
//         this.name = name;
//         this.personalNumber = personalNumber;
//     }
// }

// let employees = [];

// for (let element of array) {
//     let name = element;
//     let personalNumber = element.length;
//     let employee = new Employees(name, personalNumber);
//     employees.push(employee);
// }
// for (let employee of employees) {
//     console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
// }