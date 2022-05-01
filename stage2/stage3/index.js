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
                },
                // View Employees
                // View Departments
                // View Roles
                // Add Employee
                // Add Department
                // Update Employee role
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choices;
        // Now we call the appropriate function depending on what the user chooses
        // How would we organize this? 
        // if conditional, ideas can be either a switch case  or when 
    })
}

// Conditional statement here- call corresponding function

// async function viewEmployees() {
    // let employees = await db.findAllEmployees();
    // console.table(employees); 
// }

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