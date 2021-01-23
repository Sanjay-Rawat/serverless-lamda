const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Authenticator } = require("./Middleware/auth.middleware");
const { routes } = require("./user/routes");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/customer", Authenticator, routes);
// app.listen(5000); //FOR_LOCAL_TESTING
module.exports = app;
