const express = require("express");
const { Database } = require("./database");
const routes = require("./src/routes");
const cors = require("cors");

const app = express();
app.use(express.json());

const corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));

app.use("/api", routes);

//database conecction
Database.DBConecction();

app.get("/", (req, res) => {
    res.send("<h1>Hola mundo</h1>");
});

app.listen(5000, () => {});
