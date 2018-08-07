const express = require("express");

const mysql = require("mysql");

const app = express();

// 解决express跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ryr930514.lz',
    port: '3306',
    database: 'test',
});

app.get("/get", (req, res) => {

    const sql = 'SELECT * FROM db_imgs';

    connection.query(sql, (err, result) => {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.json(result);
    });
});

const port = 8988;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Server started on ${port}`);

    connection.connect((err) => {
        if (err) {
            console.log('[QUERY ERROR] - ', err.message);
            return;
        }
        console.log('[connection connect]  succeed!');
    });
})