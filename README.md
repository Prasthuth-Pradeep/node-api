
<!-- Local setup -->
-- INSTALL MySql
-- Create a database
-- Create a table in new database as below
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        age INT
    );

    INSERT INTO users (name, email, age) VALUES 
    ('John Doe', 'john.doe@example.com', 25),
    ('Jane Smith', 'jane.smith@example.com', 30),
    ('Alice Johnson', 'alice.johnson@example.com', 28),
    ('Bob Brown', 'bob.brown@example.com', 35),
    ('Charlie Green', 'charlie.green@example.com', 22),
    ('Eve White', 'eve.white@example.com', 27),
    ('Frank Black', 'frank.black@example.com', 40),
    ('Grace Blue', 'grace.blue@example.com', 23),
    ('Hank Yellow', 'hank.yellow@example.com', 32),
    ('Ivy Purple', 'ivy.purple@example.com', 29);

-- create new file named '.env' and update as below
    DB_HOST='127.0.0.1'
    DB_USER='root'
    DB_PASSWORD='your_password'
    DB_NAME='your_database_name'
-- Do npm i
-- Do npm start

API List
[GET][listUser] (http://localhost:3000/user)
[GET][listUserById] (http://localhost:3000/user/1)
[POST][createUser] (http://localhost:3000/user) [ body: { "name":"test 8", "email":"test@gmail.com", "age": 28 }]
[PUT][updateUser] (http://localhost:3000/user/1) [ body: { "id": 1, "name": "John Doe Update", "email": "john.doe@example.com", "age": 25 }]
[DELETE][deleteUser] (http://localhost:3000/user/2)


<!-- Installing dependiencies -->
[express] (https://www.npmjs.com/package/express)
npm i express@5.0.1

[mySql2] (https://www.npmjs.com/package/mysql2)
npm i mysql2

[nodemon] (https://www.npmjs.com/package/nodemon)
npm i nodemon

[dotenv] (https://www.npmjs.com/package/dotenv)
npm i dotenv