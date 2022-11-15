require("dotenv").config();
const port = process.env.PORT || 8080;

const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/endpoints");
const mongoose = require("mongoose");

//Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("Path: " + req.path + "\nMethod: " + req.method);
  next();
});

//Routes
app.use("/api", routes);

//DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection made");
    
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
