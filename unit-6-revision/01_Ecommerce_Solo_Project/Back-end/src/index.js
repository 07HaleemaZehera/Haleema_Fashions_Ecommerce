const cors = require("cors");
const express = require("express");
const connect = require("./config/db");
const app = express();
const user = require("./controller/user.model");
app.use(express.json());
app.use(cors());
const { register, login } = require("./controller/auth.cont");
const products = require("./controller/Products");
const mens = require("./controller/men.controller");
const womens = require("./controller/women.controller");
const kids = require("./controller/kid.controller");
const admin = require("./controller/admin.controller");

app.post("/register", register);
app.post("/login", login);
app.use("/products", products);
app.use("/mens", mens);
app.use("/womens", womens);
app.use("/kids", kids);
app.use("/admin", admin);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("Database connected and running on 5000 ");
  } catch (err) {
    console.log(err.message);
  }
});

// mongodb+srv://moinjack788:moin_788@cluster0.p9u5k.mongodb.net/auth?retryWrites=true&w=majority
