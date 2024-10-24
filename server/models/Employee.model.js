const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const EmpModel = mongoose.model("employee" , EmployeeSchema)
module.exports = EmpModel;
