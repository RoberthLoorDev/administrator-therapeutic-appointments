const express = require("express");
const { Database } = require("./database");
const routes = require("./src/routes");

const app = express();
app.use(express.json());

app.use("/api", routes);

//database conecction
Database.DBConecction();

app.get("/", (req, res) => {
    res.send("<h1>Hola mundo</h1>");
});

console.log("Hola mundo");

app.listen(5000, () => {});
