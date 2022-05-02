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
SELECT employee.employ_id, employee.first_name, employee.last_name, role.title, department.dept_name, role.salary
FROM employee
JOIN role ON employee.role_id = role.role_id
JOIN department ON department.dept_id  = role.department_id;