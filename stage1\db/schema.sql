DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees;

CREATE TABLE department (
--code here
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250)UNIQUE NOT NULL 
);

CREATE TABLE role (
--code here
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(department_id).
    REFERENCES department(id)
);


CREATE TABLE employee (
--code here
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250)UNIQUE NOT NULL,
    last_name VARCHAR(250)UNIQUE NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(role_id)
    REFERENCES role(id)
);