const { z } = require('zod');

const AddressSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
});

const ParentContactSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
});

const StudentSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
  dateOfBirth: z.string().refine(date => !isNaN(Date.parse(date)), { message: "Date of birth is required" }),
  gender: z.enum(["Male", "Female", "Other"], { message: "Gender is required" }),
  enrollmentDate: z.string().refine(date => !isNaN(Date.parse(date)), { message: "Invalid date" }).optional().default(() => new Date().toISOString()),
  address: AddressSchema.optional(),
  parentContact: ParentContactSchema.optional(),
});

const UserSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(50).optional(), // Optional because unique is handled by database
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['student', 'teacher', 'admin']).optional(), // Optional because enum and required is handled by database
});

const TeacherSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50),
  dateOfBirth: z.string().refine(date => !isNaN(Date.parse(date)), { message: "Date of birth is required" }),
  gender: z.enum(['Male', 'Female', 'Other']),
  hireDate: z.date().optional(),
  subject: z.string().min(2, 'Subject must be at least 2 characters').max(50),
  contact: z.object({
    phone: z.string().max(20).optional(),
    email: z.string().email().optional(),
  }).optional(),
});

module.exports = {UserSchema, StudentSchema, TeacherSchema}