
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, "Mã nhân viên là bắt buộc"],
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, "Họ tên là bắt buộc"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Nam", "Nu", "Khac"],
      default: "Khac",
    },
    dateOfBirth: {
      type: Date,
    },
    department: {
      type: String,
      required: [true, "Phòng ban là bắt buộc"],
      trim: true,
    },
    position: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    hireDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Dang lam viec", "Tam nghi", "Da nghi viec"],
      default: "Dang lam viec",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
