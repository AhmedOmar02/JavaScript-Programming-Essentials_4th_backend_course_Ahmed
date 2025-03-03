const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'java' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'social' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'JavaScript' },
    //... More employee records can be added here
];


function displayEmployees() {
    const employee = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = employee;
}

function calculateTotalSalaries() {
    var total = employees.reduce((temp, e) => temp + e.salary, 0);
    alert(`Total Salaries: $${total}`);
}

function displayHREmployees() {
    const HRemployees = employees.filter(e => e.department === 'HR');
    const details = HRemployees.map(e => `<p>${e.id}: ${e.name}: ${e.name} - ${e.department} - $${e.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = details;

}
function findEmployeeById(id) {

    const e_byID = employees.find(e => e.id == id);
    if (e_byID) {
        document.getElementById('employeesDetails').innerHTML = `<p>${e_byID.id}: ${e_byID.name}: ${e_byID.name} - ${e_byID.department} - $${e_byID.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>no employee with ${id} id was found</p>`;
    }

}
function findEmployeeBySpec(str) {
    const e_byspec = employees.find(e => e.specialization === str);
    if (e_byspec) {
        document.getElementById('employeesDetails').innerHTML = `<p>${e_byspec.id}: ${e_byspec.name}: ${e_byspec.name} - ${e_byspec.department} - $${e_byspec.salary}- $${e_byspec.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>no employee with ${e_byspec} spec was found</p>`;
    }
}