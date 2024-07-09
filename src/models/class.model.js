import { Schema, model } from 'mongoose';

const classSchema = new Schema({
  className: {
    type: String,
    required: [true, 'Class name is required'],
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
    required: [true, 'Teacher ID is required'],
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student',
  }],
  subject: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Class = model('Class', classSchema);

export default Class;
