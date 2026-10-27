# HỆ THỐNG QUẢN LÝ NHÂN SỰ

## 1. Thông tin sinh viên

- Họ và tên: Lư Quế Đông
- MSSV: 2310043
- Lớp: DH23TIN10

## 2. Mô tả dự án

Xây dựng hệ thống quản lý nhân sự trên nền tảng đám mây. Hệ thống hỗ trợ xem danh sách, xem chi tiết, thêm, tìm kiếm, cập nhật và xóa hồ sơ nhân viên. Dữ liệu được lưu trữ trên MongoDB Atlas.

## 3. Công nghệ sử dụng

- Frontend: React, Vite
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Quản lý mã nguồn: Git, GitHub
- Đóng gói ứng dụng: Docker
- Lưu trữ Docker image: Docker Hub
- Triển khai: Render

## 4. Cấu trúc dự án

```text
2310043_LuQueDong/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── README.md
└── .gitignore
```

## 5. Hướng dẫn chạy ứng dụng ở môi trường phát triển

### Backend

```bash
cd backend
npm install
npm run dev
```

Cần tạo file `.env` trong thư mục `backend` và cấu hình `PORT`, `MONGODB_URI`, `CLIENT_URL` trước khi chạy.

### Frontend

Mở một terminal khác:

```bash
cd frontend
npm install
npm run dev
```

Mở địa chỉ Local do Vite hiển thị trong terminal.

## 6. Các đường link tài nguyên

- GitHub Repository: https://github.com/luquedong229-dotcom/2310043_LuQueDong
- Docker Hub Backend: [Bổ sung sau khi tạo image]
- Docker Hub Frontend: [Bổ sung sau khi tạo image]
- Render App: [Bổ sung sau khi triển khai Frontend]
- Render API: [Bổ sung sau khi triển khai Backend]
- MongoDB Atlas: [Bổ sung link cluster hoặc trang quản lý phù hợp]

## 7. Lưu ý bảo mật

Không đưa file `.env`, mật khẩu, token hoặc chuỗi kết nối MongoDB chứa thông tin xác thực lên GitHub.
