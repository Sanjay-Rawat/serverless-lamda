const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const { user, host, database, password } = process.env;
console.log(user);
const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

function excute_query(query) {
  return new Promise((resovle, reject) => {
    connection.query(query, (err, res) => {
      if (err) reject(err);
      resovle(res);
    });
  });
}

module.exports = {
  excute_query,
};
