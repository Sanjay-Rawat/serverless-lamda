const express = require("express");
const {
  getAllCustomers,
  createCustomers,
  getCustomers,
  updateCustomers,
} = require("./service");
const routes = express.Router();

routes.post("/", createCustomers);
routes.get("/", getAllCustomers);
routes.get("/:id", getCustomers);
routes.put("/", updateCustomers);
module.exports = { routes };
