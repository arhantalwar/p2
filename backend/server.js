const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser')
const { getVMdata } = require('./database.js')


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'arhant',
  password: 'tt',
  database: 'rent_my_linux',
});

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hi");
})

app.get("/makereq", (req, res) => {
    res.redirect("http://localhost:8888/")
})

// FOR ADDING USER TO THE DATABASE (THATS IT NOTHING MORE TO IT)

app.post('/api/addUser', (req, res) => {
  const { fname, lname, email, password } = req.body;
  const query = `INSERT INTO user_data (fname, lname, email, passwd) VALUES (?, ?, ?, ?)`;
  const values = [fname, lname, email, password];

  connection.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error adding user to database');
    } else {
      console.log('User added to database successfully!');
      res.status(200).send('User added to database successfully!');
    }
  });
});

// FOR ADDING VM INFO TO THE DATABASE (HOSTNAME, PORT AND STUFF....) 

app.post('/api/addVM', (req, res) => {
  const { hostname, port, username, passwd, rsakey } = req.body;
  const query = `INSERT INTO vm_data (hostname, port_no, username, passwd, rsa_key) VALUES (?, ?, ?, ?, ?)`;
  const values = [hostname, port, username, passwd, rsakey];

  connection.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error adding user to database');
    } else {
      console.log('User added to database successfully!');
    }
  });
});

// FOR USER LOGIN...

app.post('/api/login', (req, res) => {
  const { email, passwd } = req.body;
  const query = `SELECT * FROM user_data WHERE email = ? AND passwd = ?`;
  const values = [email, passwd];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving user data from database');
    } else {
      if (results.length === 0) {
        res.status(401).send('Invalid login credentials');
      } else {
        const user = results[0];
        res.status(200).send(`Welcome ${user.fname} ${user.lname}!`);
      }
    }
  });
});


// FOR FETCHING VM DATA AND SENDING...

app.get("/getVMdata", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    getVMdata((error, jsonData) => {
        if (error) {
            res.status(500).send('Error fetching data from database');
        } else {
            res.send(jsonData);
        }
    });
});


const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});