const { v4: uuidv4 } = require("uuid");
const { excute_query } = require("./db-connection");

const getAllCustomers = (req, res) => {
  let query = "select * from Customers";
  excute_query(query)
    .then((CustomersData) => {
      res.status(200).json({ Customers: CustomersData });
    })
    .catch((error) => {
      res.status(501).json({ message: error });
    });
};

const createCustomers = (req, res) => {
  let Customers = req.body;
  let query = `INSERT INTO Customers (id,email, firstName, lastName, age)VALUES ('${uuidv4()}','${
    Customers.email
  }', '${Customers.firstName}','${Customers.lastName}',${Customers.age})`;
  excute_query(query)
    .then((response) => {
      res
        .status(201)
        .json({ message: "New Customers Created", Customers: Customers });
    })
    .catch((error) => {
      console.log(error);
      res.status(501).json({ message: "Something went wrong" });
    });
};

const getCustomers = (req, res) => {
  let query = `select * from Customers where id='${req.params.id}'`;
  excute_query(query)
    .then((CustomersData) => {
      res.status(200).json({ Customers: CustomersData || [] });
    })
    .catch((error) => {
      res.status(501).json({ message: error });
    });
};

const updateCustomers = (req, res) => {
  let Customers = req.body;
  let id = req.headers.user["id"];
  let query = `Update Customers set email='${Customers.email}', firstName='${Customers.firstName}', lastName='${Customers.lastName}', age=${Customers.age} where id='${id}'`;
  excute_query(query)
    .then((response) => {
      res.status(201).json({
        message: "Successfully Updated",
        Customers: { id: id, ...Customers },
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(501).json({ message: "Something went wrong" });
    });
};
module.exports = {
  getAllCustomers,
  createCustomers,
  getCustomers,
  updateCustomers,
};
