DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
--Why do we need to put the command "USE" here?
USE employees_db;
-- We insert the entries into the department
CREATE TABLE department
    (dept_name)
VALUES
    ("Operations"),
    ("Engineering"),
    ("Human Resource"),
    ("Sales"),
    ("Accounting");

INSERT INTO role
    (title, salary, department_id)
VALUES
("Laundry", 40000, 1),
("Housekeeping", 45000, 1),
("Front Desk", 30000, 1),
("Valet", 25000, 1),
("Hospitality", 25000, 1),
("Apprentice", 25000, 2),
("Engineer", 35000, 2),
("Engineer Supervisor", 45000, 2),
("HR Specialist", 48000, 3),
("HR Supervisor", 75000, 3),
("Sales Consultant", 50000, 4),
("Marketing Analyst", 75000, 4),
("Sales Supervisor", 90000, 4),
("Sales Manager", 150000, 4),
("Sales Assistant", 30000, 4),
("Accountant", 75000, 5),
("Accountant Supervisor", 150000, 5),
("Assistant Accountant", 40000, 5);

    -- ("Senior Developer", 100000, 1),
    -- ("HR Business Partner", 200000, 2),
    -- ("Operations Manager", 110000, 3),
    -- ("Lawyer", 90000, 5);

INSERT INTO employee
    (first_name, last_name, role_id)

VALUES
    ("Pam", "Joyce", 1),
    ("Sally", "Lloyd", 3),
    ("Nancy", "Johnson", 2),
    ("John", "Jason", 3),
    ("Joe", "DiMaggio", 1),
    ("Jimmy", "Shoe", 2),
    ("Frank", "Bean", 4),
    ("Patrick", "Mahomes", 4),
    ("Dustin", "Hoffman", 5),
    ("Mary", "Barker", 5),
    ("Joseph", "Fellows", 5),
    ("Rick", "Rogers", 6),
    ("Nikki", "Farms", 6),
    ("Maria", "Torres", 7)
    ("Laura", "Brown", 9),
    ("Jesse", "James", 7),
    ("Curtis", "Allen", 8),
    ("Shelby", "Rodriguez", 9),
    ("Kelly", "Torrey", 10),
    ("Nolan", "Ryan", 11),
    ("JB", "Scott", 12),
    ("Pax", "Springer", 12),
    ("Bobby", "Jones", 13),
    ("Clayton", "Kershaw", 14),
    ("Mookie", "Bettes", 16),
    ("Kiki", "Hernandez", 16),
    ("Will", "Smith", 17),
    ("Dave", "Roberts", 18),
    ("Dan", "Sutton", 18),
    ("Chris", "Taylor", 2),
    ("Victoria", "Hill", 2),
    ("Franny", "Labamba", 3),    
    ("George", "Jones", 5),
    ("Michael", "Irvin", 7),
    ("Joc", "Peterson", 5),
    ("Andrew", "Heaney", 7),
    ("Kara", "Lux", 15);


-- VALUES
--     ("Tony", "Stark", 1),
--     ("Rocket", "Racoon", 2),
--     ("Carol", "Danvers", 3),
--     ("Matt", "Murdock", 4);