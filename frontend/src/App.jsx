
import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/employees";

const emptyForm = {
  employeeId: "",
  fullName: "",
  gender: "Nam",
  dateOfBirth: "",
  department: "",
  position: "",
  email: "",
  phone: "",
  hireDate: "",
  status: "Dang lam viec",
};

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toISOString().slice(0, 10);
}

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [keyword, setKeyword] = useState("");

  async function loadEmployees() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Không thể tải danh sách nhân viên");
      }

      setEmployees(data);
    } catch (err) {
      setError(
        `Không thể kết nối Backend: ${err.message}. Hãy kiểm tra Backend cổng 5000.`
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function handleEdit(employee) {
    setForm({
      employeeId: employee.employeeId || "",
      fullName: employee.fullName || "",
      gender: employee.gender || "Nam",
      dateOfBirth: formatDate(employee.dateOfBirth),
      department: employee.department || "",
      position: employee.position || "",
      email: employee.email || "",
      phone: employee.phone || "",
      hireDate: formatDate(employee.hireDate),
      status: employee.status || "Dang lam viec",
    });

    setEditingId(employee._id);
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;
      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Không thể lưu nhân viên");
      }

      setMessage(
        data.message ||
          (editingId
            ? "Cập nhật nhân viên thành công"
            : "Thêm nhân viên thành công")
      );

      resetForm();
      await loadEmployees();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(employee) {
    const confirmed = window.confirm(
      `Bạn có chắc muốn xóa nhân viên ${employee.fullName} (${employee.employeeId})?`
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/${employee._id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Không thể xóa nhân viên");
      }

      setMessage(data.message || "Xóa nhân viên thành công");

      if (editingId === employee._id) resetForm();

      await loadEmployees();
    } catch (err) {
      setError(err.message);
    }
  }

  const filteredEmployees = employees.filter((employee) => {
    const text = [
      employee.employeeId,
      employee.fullName,
      employee.department,
      employee.position,
      employee.email,
    ]
      .join(" ")
      .toLowerCase();

    return text.includes(keyword.trim().toLowerCase());
  });

  const workingCount = employees.filter(
    (employee) => employee.status === "Dang lam viec"
  ).length;

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">HR</div>
          <div>
            <h1>HR Management</h1>
            <p>HỆ THỐNG QUẢN LÝ NHÂN SỰ</p>
          </div>
        </div>
        <span className="connection"><span /> MongoDB Atlas</span>
      </header>

      <section className="page-heading">
        <div>
          <p className="eyebrow">HUMAN RESOURCES</p>
          <h2>Quản lý nhân viên</h2>
          <p className="subtitle">
            Quản lý thông tin nhân sự tập trung và hiệu quả.
          </p>
        </div>
        <button
          className="secondary-button"
          type="button"
          onClick={loadEmployees}
        >
          ↻ Làm mới dữ liệu
        </button>
      </section>

      <section className="stats">
        <article className="stat-card">
          <span className="stat-label">Tổng nhân viên</span>
          <strong>{employees.length}</strong>
          <span className="stat-note">Nhân viên trong hệ thống</span>
        </article>
        <article className="stat-card">
          <span className="stat-label">Đang làm việc</span>
          <strong>{workingCount}</strong>
          <span className="stat-note">Nhân viên đang hoạt động</span>
        </article>
        <article className="stat-card">
          <span className="stat-label">Phòng ban</span>
          <strong>{new Set(employees.map((e) => e.department).filter(Boolean)).size}</strong>
          <span className="stat-note">Phòng ban có nhân viên</span>
        </article>
      </section>

      {message && <div className="alert success">{message}</div>}
      {error && <div className="alert error">{error}</div>}

      <section className="content-grid">
        <section className="panel form-panel">
          <div className="panel-heading">
            <div>
              <h3>{editingId ? "Cập nhật nhân viên" : "Thêm nhân viên"}</h3>
              <p>Nhập thông tin nhân viên bên dưới.</p>
            </div>
            <span className="panel-symbol">{editingId ? "✎" : "+"}</span>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Mã nhân viên *
              <input
                name="employeeId"
                value={form.employeeId}
                onChange={handleChange}
                placeholder="VD: NV005"
                required
                disabled={Boolean(editingId)}
              />
            </label>

            <label>
              Họ và tên *
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Nhập họ và tên"
                required
              />
            </label>

            <div className="form-row">
              <label>
                Giới tính
                <select name="gender" value={form.gender} onChange={handleChange}>
                  <option value="Nam">Nam</option>
                  <option value="Nu">Nữ</option>
                  <option value="Khac">Khác</option>
                </select>
              </label>

              <label>
                Ngày sinh
                <input
                  type="date"
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              Phòng ban *
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="VD: IT"
                required
              />
            </label>

            <label>
              Chức vụ
              <input
                name="position"
                value={form.position}
                onChange={handleChange}
                placeholder="Nhập chức vụ"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
            </label>

            <label>
              Số điện thoại
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
              />
            </label>

            <div className="form-row">
              <label>
                Ngày vào làm
                <input
                  type="date"
                  name="hireDate"
                  value={form.hireDate}
                  onChange={handleChange}
                />
              </label>

              <label>
                Trạng thái
                <select name="status" value={form.status} onChange={handleChange}>
                  <option value="Dang lam viec">Đang làm việc</option>
                  <option value="Tam nghi">Tạm nghỉ</option>
                  <option value="Da nghi viec">Đã nghỉ việc</option>
                </select>
              </label>
            </div>

            <div className="form-actions">
              <button className="primary-button" type="submit" disabled={saving}>
                {saving
                  ? "Đang lưu..."
                  : editingId
                    ? "Lưu cập nhật"
                    : "＋ Thêm nhân viên"}
              </button>
              <button
                className="secondary-button"
                type="button"
                onClick={resetForm}
              >
                Làm mới form
              </button>
            </div>
          </form>
        </section>

        <section className="panel table-panel">
          <div className="panel-heading">
            <div>
              <h3>Danh sách nhân viên</h3>
              <p>{filteredEmployees.length} nhân viên được tìm thấy</p>
            </div>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Tìm theo mã, tên, phòng ban..."
              aria-label="Tìm kiếm nhân viên"
            />
          </div>

          {loading ? (
            <div className="empty-state">Đang tải dữ liệu nhân viên...</div>
          ) : filteredEmployees.length === 0 ? (
            <div className="empty-state">
              {error ? "Không tải được dữ liệu. Hãy kiểm tra Backend." : "Không tìm thấy nhân viên."}
            </div>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Nhân viên</th>
                    <th>Phòng ban / Chức vụ</th>
                    <th>Liên hệ</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee._id}>
                      <td>
                        <div className="employee-cell">
                          <div className="avatar">
                            {(employee.fullName || "?").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <strong>{employee.fullName}</strong>
                            <span>{employee.employeeId}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="department-cell">
                          <strong>{employee.department}</strong>
                          <span>{employee.position || "Chưa cập nhật"}</span>
                        </div>
                      </td>
                      <td>
                        <div className="department-cell">
                          <span>{employee.email || "Chưa có email"}</span>
                          <span>{employee.phone || "Chưa có số điện thoại"}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`status ${employee.status === "Dang lam viec" ? "active" : "inactive"}`}>
                          {employee.status === "Dang lam viec"
                            ? "Đang làm việc"
                            : employee.status === "Tam nghi"
                              ? "Tạm nghỉ"
                              : employee.status === "Da nghi viec"
                                ? "Đã nghỉ việc"
                                : employee.status}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          <button
                            className="edit-button"
                            type="button"
                            onClick={() => handleEdit(employee)}
                            aria-label={`Sửa ${employee.fullName}`}
                          >
                            Sửa
                          </button>
                          <button
                            className="delete-button"
                            type="button"
                            onClick={() => handleDelete(employee)}
                            aria-label={`Xóa ${employee.fullName}`}
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="table-footnote">
            Dữ liệu được tải trực tiếp từ Backend và MongoDB Atlas.
          </p>
        </section>
      </section>

      <footer className="footer">
        <span>HR Management System</span>
        <span>React · Express · MongoDB Atlas</span>
      </footer>
    </main>
  );
}

export default App;
