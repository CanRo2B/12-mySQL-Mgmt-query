const { prompt } =  require("inquirer");
const db = require("./db");
require("console.table");

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
                    value: "VIEW_EMPLOYEES"
                }, {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                }, {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                }, {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                }, {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                }, {
                    name: "Update Employee Role",
                    value: "UPDATE_ROLE"
                },  {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choices;
       if (value === "VIEW_EMPLOYEES"{
           
       })
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


findAllEmployees() => {
    db.query("SELECT ", function(err, results){
        console.table(results);
    })
}

findDepartments () => {
    db.query(`SELECT dept_name AS Department, dept_id AS ID
    FROM department;`, function(err, results){
        console.table(results);
    });
};

findRoles() => {
    db.query(``, function(err, results){
        console.table(results);
    }) ;
}