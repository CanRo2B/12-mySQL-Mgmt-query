const { prompt } =  require("inquirer");
const db = require("../12-mySQL-Mgmt-query/connection.js");
require("console.table");

mainMenu();

// Inquirer here
function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View ALL Employees",
                    // value: "VIEW_EMPLOYEES"
                }, {
                    name: "View All Departments",
                    // value: "VIEW_DEPARTMENTS"
                }, {
                    name: "View All Roles",
                    // value: "VIEW_ROLES"
                }, {
                    name: "Add Employee",
                    // value: "ADD_EMPLOYEE"
                }, {
                    name: "Add Department",
                    // value: "ADD_DEPARTMENT"
                }, {
                    name: "Update Employee Role",
                    // value: "UPDATE_ROLE"
                },  {
                    name: "Quit",
                    // value: "QUIT"
                }
            ]
        }
]).then(res => {
        console.log(res.choice)
        // let choices = res.choices;
       if (res.choice === "View ALL Employees"){
           findAllEmployees();
       }
       if (res.choice === "View All Departments") {
           findDepartments();
       }
       if (res.choice === "View All Roles") {
           findRoles();
       }
       if (res.choice === "Add Employee") {
           addEmployee();
        }
       if (res.choice === "Add Department") {
            addDepartment();
       }
    
        // Now we call the appropriate function depending on what the user chooses
        // How would we organize this? 
        // if conditional, ideas can be either a switch case  or when 
    })
}
                // View Employees
                // View Departments
                // View Roles
                // Add Employee
                // Add Department
                // Update Employee role
// Conditional statement here- call corresponding function

async function viewEmployees() {
    let employees = await db.findAllEmployees();
    console.table(employees); 
}

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("/n");
        console.table(employees)
    })
    .then(() => mainMenu());
}

function quit() {
    console.log("Goodbye!");
    process.exit();
};


const findAllEmployees = () => {
    console.log("test")
    db.query(`SELECT employee.employ_id AS ID, employee.first_name AS "First Name", employee.last_name AS "Last Name", role.title AS Title, department.dept_name AS Department, role.salary AS Salary
    FROM employee
    JOIN role ON employee.role_id = role.role_id
    JOIN department ON role.department_id = department.dept_id;`, function(err, results){
        console.table(results);
    })
};

const findDepartments = () => {
    db.query(`SELECT dept_name AS Department, dept_id AS ID
    FROM department;`, function(err, results){
        console.table(results);
    });
};

const findRoles = () => {
    db.query(`SELECT role.title, role.role_id, department.dept_name, role.salary
    FROM role
    JOIN department ON role.department_id = department.dept_id;`, function(err, results){
        console.table(results);
    });
    mainMenu();
};

const addDepartment = () => {
    prompt ([ 
        {
        type: "input",
        name: "newDepartment",
        message: "Enter a Department name:"
        }
    ])
    .then (res => { 
        let newDept = res.newDepartment
        console.log(newDept);
        db.query(`INSERT INTO department(dept_name) 
        VALUES ("${newDept}")`);
        console.log(`${newDept} department added.`);
        console.log("\n");
        console.table(results);
    mainMenu();
})
};

const addEmployee = () => {
    db.query(``);
}