import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minLength: [3, "Please enter atleast 3 character"],
    maxLength: [10, "Please do not enter more than 10 character"],
  },

  lname: {
    type: String,
    required: true,
    minLength: [3, "Please enter atleast 3 character"],
    maxLength: [10, "Please do not enter more than 10 character"],
  },

  number: {
    type: Number,
    required: true,
    minimum: 5,
  },
  chatId: {
    type: String,
 
  },
  email: {
    type: String,
    unique: [true, "email already exists in database!"],
    required: [
      true,
      "email field is not provided. Cannot create user without email ",
    ],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "{VALUE} is not a valid email!",
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [3, "password must be greater than 3 digit"],
  },
});

const AdminModel = mongoose.model("User", AdminSchema);

export default AdminModel;
