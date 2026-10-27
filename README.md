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

- **GitHub Repository:** https://github.com/luquedong229-dotcom/2310043_LuQueDong
- **Docker Hub Backend:** https://hub.docker.com/r/dong2310043/backend
- **Docker Hub Frontend:** https://hub.docker.com/r/dong2310043/frontend
- **Render App:** Bổ sung sau khi triển khai Frontend.
- **Render API:** Bổ sung sau khi triển khai Backend.
- **MongoDB Atlas:** https://cloud.mongodb.com/

## 7. Docker Hub – Backend

- Repository: https://hub.docker.com/r/dong2310043/backend
- Image: `dong2310043/backend:latest`
- Version: `dong2310043/backend:1.0`
- Port: `5000`
- Health check: `/api/health`

Pull image:

```bash
docker pull dong2310043/backend:latest
```

Run container:

```bash
docker run -d --name hr-backend -p 5000:5000 --env-file ./backend/.env dong2310043/backend:latest
```

## 8. Docker Hub – Frontend

- Repository: https://hub.docker.com/r/dong2310043/frontend
- Image: `dong2310043/frontend:latest`
- Version: `dong2310043/frontend:1.0`
- Port: `80`
- Local URL: http://localhost:3001

Pull image:

```bash
docker pull dong2310043/frontend:latest
```

Run container:

```bash
docker run -d --name hr-frontend -p 3001:80 dong2310043/frontend:latest
```

**Lưu ý:** Khi chạy Frontend trên môi trường triển khai, cần cấu hình `BACKEND_URL` trỏ đến Backend có thể truy cập được. `host.docker.internal` chỉ phù hợp cho thử nghiệm cục bộ trên Docker Desktop.

## 9. Lưu ý bảo mật

- Không commit file `.env` lên GitHub.
- Không công khai mật khẩu, token hoặc chuỗi kết nối MongoDB có thông tin xác thực.
- Chỉ chia sẻ các biến môi trường cần thiết qua cấu hình bảo mật của môi trường triển khai.

## 10. Render Deployment

- Frontend App: https://web-2310043.onrender.com
- Backend API: <URL_BACKEND_RENDER_THẬT>