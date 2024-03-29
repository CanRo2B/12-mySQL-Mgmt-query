-- Determine what needs to be joined

--The employees + roles + departments?
-- Select All Departments with department id
SELECT dept_name AS Department, dept_id AS ID
FROM department;

--Select All Roles (title, role id, dept name and salary)
SELECT role.title, role.role_id, department.dept_name, role.salary
FROM role
JOIN department ON role.department_id = department.dept_id;


--Select All Employees, (employee id, first name, last name, job title, department, salary and manager)
SELECT employee.employ_id AS ID, employee.first_name AS "First Name", employee.last_name AS "Last Name", role.title AS Title, department.dept_name AS Department, role.salary AS Salary
FROM employee
JOIN role ON employee.role_id = role.role_id
JOIN department ON role.department_id = department.dept_id;


