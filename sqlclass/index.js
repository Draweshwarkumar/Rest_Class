const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8080; 
const path =require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "massey@1035"
});

app.get("/user", (req,res) =>{
   let q = `SELECT * FROM user`;
   try {
    connection.query(q,(err, users) => {
        if (err) throw err;
        res.render("showusers.ejs",{users});
    });
} catch (err) {
    console.log(err);
    res.send("some error in DB");
}
})

app.get("/home", (req,res) =>{
    let q = `SELECT count(*) FROM user`;
    try {
            connection.query(q,(err, result) => {
                if (err) throw err;
                let count = result[0]["count(*)"];
                res.render("home.ejs",{count});
            });
        } catch (err) {
            console.log(err);
            res.send("some error in DB");
        }
 });

app.listen(port, ()=>{
    console.log(`server is listening to port no ${port}`)
});

// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();


// let createRandomuser = () => {
//     return[
//      faker.datatype.uuid(),
//      faker.internet.userName(),
//      faker.internet.email(),
//     faker.internet.password(),
//     ];  
//  };

// let data= [];
// for(let i=1;i<=100;i++){
//     data.push(createRandomuser());
// }

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//     ["123b", "123_newusere", "abc@gmail.come", "abce"],
//     ["123c", "123_newuserf", "abcb@gmail.comf", "abcdf"],
//     ["123d", "123_newuserg", "abcc@gmail.comg", "abcdg"]
// ];

