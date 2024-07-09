const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: { type: String, required: [true, "Last name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  dateOfBirth: { type: Date, required: [true, "Date of birth is required"] },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: [true, "Gender is required"],
  },
  enrollmentDate: { type: Date, default: Date.now },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  parentContact: {
    name: String,
    phone: String,
    email: String,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
