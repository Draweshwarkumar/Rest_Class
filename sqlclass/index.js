const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "massey@1035"
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
    ["123b", "123_newusere", "abc@gmail.come", "abce"],
    ["123c", "123_newuserf", "abcb@gmail.comf", "abcdf"],
    ["123d", "123_newuserg", "abcc@gmail.comg", "abcdg"]
];

try {
    connection.query(q, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

connection.end();



 let createRandomuser = () => {
    return{
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past()
    };  
 }
 