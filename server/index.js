const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const EmpModel = require("./models/Employee.model.js");

const app = express();

app.use(cors());
app.use(express.json());

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/EmployeeDB")
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

app.post("/register",async (req, res) => {
  await EmpModel.create(req.body).then((result) =>
    res.json(result).catch((err) => res.json(err))
  );
});



app.listen(3001, async () => {
  console.log("Server is running");
  await connect();
});
