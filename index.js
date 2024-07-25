const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username: "shivam jha",
        district: "Darbhanga",
        status: "java developer "
    },
    {
        username: "Draweshwar kumar",
        district: "Patna",
        status: "MERN developer"
    },
    {
        username: "pankaj kumar",
        district: "Chapra",
        status: "Bodybuilder"
    },
];
app.get("/posts",(req, res) =>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res) =>{
    res.render("new.ejs");
});

app.post("/posts",(req, res) =>{
    let {username,district,status} = req.body;
    posts.push({username,district,status});
    res.send("post request working")
});

app.listen(port, () =>{
    console.log(`app is listening on the port ${port}`);
});
