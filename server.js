require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const phoneRepair = require("./routes/phonerepair");


const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/phonerepair", phoneRepair);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
