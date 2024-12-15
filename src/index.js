const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {
  console.log(`Server stated!!! in http://localhost:${port}`);
});
