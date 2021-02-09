const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const multiparty = require('multiparty');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 5000;
const host = "localhost";

const connection = mysql.createConnection({
    host,
    user: "root",
    database: "shopdb",
    password: "secret",
    connectionLimit: 10,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploaded_images', express.static('uploaded_images')); 

connection.connect(function(err){
    if (err) {
        return console.error("Error: " + err.message);
    }
    console.log("Connected to MySQL");
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
                    cast(concat('[', group_concat('{', json_quote('id'), ':', product_id, ',', json_quote('image'), ':', json_quote(IFNULL(product_image, false)), ',', json_quote('title'), ':', json_quote(product_title), ',', json_quote('description'), ':', json_quote(product_description), '}'), ']') as json) as user_products
                FROM
                    Users
                INNER JOIN UserProducts
                    ON Users.user_id = UserProducts.up_user
                INNER JOIN Products
                    ON UserProducts.up_product = Products.product_id
                    WHERE user_id = ${req.params.id}`;
    connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.send(result[0].user_products);
    });
});

app.post('/api/user-products/add', (req, res) => {
    const { title, description, userId } = req.body;
    const sql = `INSERT INTO Products (product_title, product_description) VALUES ('${title}', '${description}')`;
    connection.query(sql, (err, result, fields) => {
        if (err) throw err;
        const { insertId } = result;
        const sql = `INSERT INTO UserProducts (up_user, up_product) VALUES ('${userId}', '${insertId}')`;
        connection.query(sql, (err, result, fields) => {
            if (err) throw err;
            res.send({ productId: insertId });
        });
    });
});

app.post('/api/user-products/add-image/:id', (req, res) => {
    const uploadedImagesPath = `http://${host}:${port}/uploaded_images/`;
    const form = new multiparty.Form();
    form.parse(req, function(err, field, file) {
        if (!err) {
            const uniqueName = uuidv4() +  '-' + field.name[0];
            fs.rename(file.image[0].path, `public/uploaded_images/${uniqueName}`, function(err) {
                if (err) throw err;
                const sql = `UPDATE Products SET product_image = '${uploadedImagesPath}${uniqueName}' WHERE (product_id = ${req.params.id})`;
                connection.query(sql, (err, result, fields) => {
                    if (err) throw err;
                    res.send('Product is added!');
                });
            }); 
        }
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
