
const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// GET: Lấy danh sách nhân viên
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách nhân viên",
      error: error.message,
    });
  }
});

// GET: Lấy chi tiết nhân viên theo MongoDB ID
router.get("/:id", async (req, res) => {
  try {
    if (!/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
      return res.status(400).json({ message: "ID nhân viên không hợp lệ" });
    }

    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Không tìm thấy nhân viên" });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy thông tin nhân viên",
      error: error.message,
    });
  }
});

// POST: Thêm nhân viên
router.post("/", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({
      message: "Thêm nhân viên thành công",
      employee,
    });
  } catch (error) {
    res.status(error.code === 11000 ? 409 : 400).json({
      message:
        error.code === 11000
          ? "Mã nhân viên đã tồn tại"
          : "Không thể thêm nhân viên",
      error: error.message,
    });
  }
});

// PUT: Cập nhật nhân viên
router.put("/:id", async (req, res) => {
  try {
    if (!/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
      return res.status(400).json({ message: "ID nhân viên không hợp lệ" });
    }

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!employee) {
      return res.status(404).json({ message: "Không tìm thấy nhân viên" });
    }

    res.status(200).json({
      message: "Cập nhật nhân viên thành công",
      employee,
    });
  } catch (error) {
    res.status(400).json({
      message: "Không thể cập nhật nhân viên",
      error: error.message,
    });
  }
});

// DELETE: Xóa nhân viên
router.delete("/:id", async (req, res) => {
  try {
    if (!/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
      return res.status(400).json({ message: "ID nhân viên không hợp lệ" });
    }

    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Không tìm thấy nhân viên" });
    }

    res.status(200).json({ message: "Xóa nhân viên thành công" });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi xóa nhân viên",
      error: error.message,
    });
  }
});

module.exports = router;
