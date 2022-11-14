const express = require("express");
const errorMiddleware = require("./middleware/error.middleware");
const apiRoutes = require("./routers/app.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.use("/api", apiRoutes);

module.exports = app;
