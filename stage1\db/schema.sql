DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(250) NOT NULL 
);

CREATE TABLE role (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id)
    REFERENCES department(dept_id)
);


CREATE TABLE employee (
    employ_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250)NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY(role_id)
    REFERENCES role(role_id)
);

-- DROP DATABASE IF EXISTS employees_db;
-- CREATE DATABASE employees_db;
-- USE employees_db;
-- CREATE TABLE department (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) NOT NULL
-- );
-- CREATE TABLE role (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(30) NOT NULL,
--   salary DECIMAL,
--   department_id INT,
--   FOREIGN KEY (department_id)
--   REFERENCES department(id)
-- );
-- CREATE TABLE employee (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   role_id INT,
--   FOREIGN KEY (role_id)
--   REFERENCES role(id)
-- );