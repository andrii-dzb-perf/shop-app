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
        res.send(result.map(({ user_id, user_name }) => ({
            id: user_id,
            name: user_name
        })));
    });
});

app.get('/api/user-products/:id', (req, res) => {
    const sql = `SELECT
                    cast(concat('[', group_concat('{', json_quote('id'), ':', product_id, ',', json_quote('title'), ':', json_quote(product_title), ',', json_quote('description'), ':', json_quote(product_description), '}'), ']') as json) as user_products
                FROM
                    Users
                INNER JOIN UserProducts
                    ON Users.user_id = UserProducts.up_user
                INNER JOIN Products
                    ON UserProducts.up_product = Products.product_id
                    WHERE user_id = ${req.params.id};`
    connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.send(result[0].user_products);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
