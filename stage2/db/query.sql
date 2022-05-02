-- Select All Departments with department id
SELECT dept_name, dept_id
FROM department;

--Select All Roles (title, role id, dept name and salary)
SELECT role.title, role.role_id, department.dept_name, role.salary
FROM role
INNER JOIN role.department_id ON department.dept_id = dept_name;

--Select All Employees, (employee id, first name, last name, job title, department, salary and manager)
SELECT employee.employ_id, employee.first_name, employee.last_name, role.title, department.dept_name, role.salary
FROM department
INNER JOIN role.department_id ON department.dept_id = dept_name
INNER JOIN employee.role_id ON role.role_id = title
INNER JOIN employee.role_id ON role.role_id = salary;


