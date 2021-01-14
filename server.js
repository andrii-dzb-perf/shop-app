const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shopdb",
  password: "secret",
  connectionLimit: 10,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    console.log("Подключение к серверу MySQL успешно установлено");
 });

app.get('/api/users', (req, res) => {
    connection.query("SELECT * FROM users", (err, result, fields) => {
        if (err) throw err;
        res.send(result);
    });
});

// app.post('/api/world', (req, res) => {
//     console.log(req.body);
//     res.send(
//         `I received your POST request. This is what you sent me: ${req.body.post}`,
//     );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
