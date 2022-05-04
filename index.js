const inquirer =  require("inquirer");
const connection = require("../12-mySQL-Mgmt-query/connection.js");
const db = require("../12-mySQL-Mgmt-query/connection.js");
require("console.table");

mainMenu();

// Inquirer here
function mainMenu() {
    inquirer.prompt([
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
                    name: "Add Role",
                },  {
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
        if (res.choice === "Add Role") {
            addRole();
        }
       if (res.choice === "Add Department") {
            addDepartment();
       }
    })


const findAllEmployees = () => {
    db.query(`SELECT employee.employ_id AS ID, employee.first_name AS "FIRST NAME", employee.last_name AS "LAST NAME", role.title AS TITLE, department.dept_name AS Department, role.salary AS Salary
    FROM employee
    JOIN role ON employee.role_id = role.role_id
    JOIN department ON role.department_id = department.dept_id;`, function(err, results){
        console.log("\n");
        console.table(results);
        mainMenu();
    })
};

const findDepartments = () => {
    db.query(`SELECT dept_name AS DEPARTMENT, dept_id AS ID
    FROM department;`, function(err, results){
        console.log("\n");
        console.table(results);
        mainMenu();
    });
    
};

const findRoles = () => {
    db.query(`SELECT role.title AS TITLE, role.role_id AS "ROLE ID", department.dept_name AS DEPARTMENT, role.salary AS SALARY
    FROM role
    JOIN department ON role.department_id = department.dept_id;`, function(err, results){
        console.log("\n");
        console.table(results);
        mainMenu();
    });
   
};

const addDepartment = () => {
    inquirer.prompt ([ 
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
        console.table(res);
    mainMenu();
})
};

const addRole = () => {
    const findDepartments = [];
    db.query("SELECT dept_name FROM department", (err, result) => {
        if (err) throw err;
        let findDepartments = result.map((result) => result.dept_name)
        // result.forEach(department => {
        //     let deptObj = {
        //         name: department.name,
        //         value: department.dept_id
        //     }
        //     findDepartments.push(deptObj);
        // });
        const deptQuestions = [
        {
            type: "input",
            name: "title",
            message: "Please enter the name of the new ROLE:"
        },  {
            type: "input",
            name: "salary",
            message: "Please enter the Salary value for the new department"
        },  {
            type: "list",
            name: "dept_name",
            message: "What department would you like to add the ROLE to:",
            choices: findDepartments
            
            }
    ];
    inquirer.prompt(deptQuestions)
    .then(res => {
        db.query = `INSERT INTO role (title, salary, department_id) VALUES (?, ? , ? )`;
        [response.title, response.salary, response.department], (err, res) => {
        if (err) throw err;
        console.log(`Added ${res.title} role at  ${res.dept_name}`);
        mainMenu();
        }
    })
    });
}



const addEmployee = () => {
    db.query(``);
}
}