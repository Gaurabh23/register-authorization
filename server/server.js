const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET" , "POST"],
    credentials: true,
}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password:"welcome123",
    database:"newLogin"
});
app.post("/register", (req, res) =>{

    const username = req.body.username; 
    const password = req.body.password;

    db.query(
    "INSERT INTO user (username, password) VALUES(?, ?)", 
    [username, password],
    (err, result) => {
    console.log(err);
    }
    );

    res.send('My api')
});

app.listen(3001, ()=> {
    console.log("running on port");
});