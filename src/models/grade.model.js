const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Student ID is required'],
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
  },
  grade: {
    type: String,
    required: [true, 'Grade is required'],
  },
  quarter: {
    type: String,
    enum: ['Q1', 'Q2', 'Q3', 'Q4'],
    required: [true, 'Quarter is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
