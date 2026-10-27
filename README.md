# HỆ THỐNG QUẢN LÝ NHÂN SỰ

**HR Management System – Cloud Deployment**

## 1. Thông tin sinh viên

| Thông tin | Nội dung |
|---|---|
| Họ và tên | Lư Quế Đông |
| MSSV | 2310043 |
| Lớp | DH23TIN10 |
| Tên dự án | Hệ thống quản lý nhân sự |
| Lĩnh vực | Phát triển ứng dụng web và triển khai điện toán đám mây |

## 2. Giới thiệu dự án

Hệ thống quản lý nhân sự được xây dựng nhằm hỗ trợ quản lý thông tin hồ sơ nhân viên thông qua giao diện web. Ứng dụng sử dụng kiến trúc Frontend – Backend – Database, trong đó dữ liệu được lưu trữ trên MongoDB Atlas và ứng dụng được đóng gói bằng Docker để triển khai trên nền tảng đám mây Render.

Hệ thống hướng đến việc đơn giản hóa quá trình quản lý hồ sơ nhân viên, giúp người dùng thao tác thuận tiện, tra cứu thông tin nhanh chóng và cập nhật dữ liệu tập trung.

### Mục tiêu

- Xây dựng giao diện web quản lý nhân sự.
- Phát triển API phục vụ các thao tác dữ liệu nhân viên.
- Kết nối và lưu trữ dữ liệu trên MongoDB Atlas.
- Sử dụng Git và GitHub để quản lý mã nguồn.
- Đóng gói Frontend và Backend thành Docker image.
- Lưu trữ Docker image trên Docker Hub.
- Triển khai ứng dụng trên Render và kiểm tra khả năng hoạt động trên môi trường đám mây.

## 3. Chức năng hệ thống

Các chức năng chính của hệ thống bao gồm:

- **Xem danh sách nhân viên:** Hiển thị danh sách hồ sơ nhân viên.
- **Xem chi tiết nhân viên:** Xem thông tin của từng nhân viên.
- **Thêm nhân viên:** Tạo hồ sơ nhân viên mới.
- **Tìm kiếm nhân viên:** Tra cứu nhân viên theo thông tin được hỗ trợ trên giao diện.
- **Cập nhật nhân viên:** Chỉnh sửa thông tin hồ sơ đã lưu.
- **Xóa nhân viên:** Xóa hồ sơ nhân viên được lựa chọn.
- **Lưu trữ dữ liệu:** Sử dụng MongoDB Atlas để lưu trữ dữ liệu trên đám mây.
- **Kiểm tra trạng thái API:** Cung cấp endpoint health check để kiểm tra trạng thái Backend và kết nối cơ sở dữ liệu.

## 4. Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| React | Xây dựng giao diện người dùng |
| Vite | Công cụ phát triển và build Frontend |
| Node.js | Môi trường chạy Backend |
| Express.js | Xây dựng REST API |
| MongoDB Atlas | Cơ sở dữ liệu NoSQL trên đám mây |
| Mongoose | Kết nối và thao tác với MongoDB |
| Git | Quản lý phiên bản mã nguồn |
| GitHub | Lưu trữ repository và lịch sử commit |
| Docker | Đóng gói ứng dụng thành container |
| Docker Hub | Lưu trữ và phân phối Docker image |
| Render | Triển khai ứng dụng trên nền tảng đám mây |
| Nginx | Phục vụ Frontend và chuyển tiếp API nếu được cấu hình trong image Frontend |

## 5. Kiến trúc hệ thống

Hệ thống gồm ba thành phần chính:

1. **Frontend:** Giao diện React, được build bằng Vite và phục vụ qua Nginx trong Docker image Frontend.
2. **Backend:** Ứng dụng Node.js và Express cung cấp REST API để xử lý các yêu cầu quản lý nhân viên.
3. **Database:** MongoDB Atlas lưu trữ dữ liệu nhân viên.

Luồng xử lý cơ bản:

```text
Người dùng
    |
    v
Frontend React + Vite
    |
    v
Nginx / API Proxy
    |
    v
Backend Node.js + Express
    |
    v
MongoDB Atlas
```

Trong môi trường triển khai, Frontend cần được cấu hình để gửi yêu cầu API đến Backend có thể truy cập được. Nếu sử dụng Nginx reverse proxy, đường dẫn `/api/` cần được chuyển tiếp đúng đến Backend.

## 6. Cấu trúc dự án

```text
2310043_LuQueDong/
├── backend/
│   ├── models/
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── nginx.conf.template
├── README.md
└── .gitignore
```

**Chức năng các thư mục và tệp:**

- `backend/models/`: Định nghĩa cấu trúc dữ liệu và model.
- `backend/routes/`: Khai báo các API quản lý nhân viên.
- `backend/server.js`: Khởi tạo Express, kết nối MongoDB Atlas và chạy máy chủ.
- `backend/.env.example`: Mẫu các biến môi trường cần thiết.
- `backend/Dockerfile`: Định nghĩa cách đóng gói Backend.
- `frontend/src/`: Mã nguồn giao diện React.
- `frontend/Dockerfile`: Định nghĩa các bước build và đóng gói Frontend.
- `frontend/nginx.conf.template`: Cấu hình Nginx và chuyển tiếp yêu cầu API nếu được sử dụng.
- `.gitignore`: Loại trừ các tệp không nên đưa vào Git.

## 7. Các đường link tài nguyên

| STT | Tài nguyên | Đường dẫn |
|---:|---|---|
| 1 | GitHub Repository | https://github.com/luquedong229-dotcom/2310043_LuQueDong |
| 2 | Docker Hub – Backend | https://hub.docker.com/r/dong2310043/backend |
| 3 | Docker Hub – Frontend | https://hub.docker.com/r/dong2310043/frontend |
| 4 | Render Frontend App | https://web-2310043.onrender.com |
| 5 | Render Backend API | Chưa xác định URL Backend thực tế |
| 6 | MongoDB Atlas | https://cloud.mongodb.com/ |

**Lưu ý:** Link Frontend là địa chỉ đã được cung cấp, nhưng ứng dụng trước đó gặp lỗi kết nối Backend. Không nên xem hệ thống đã hoạt động hoàn chỉnh cho đến khi kiểm tra được API và các chức năng CRUD.

## 8. Cài đặt môi trường phát triển

### 8.1. Yêu cầu

Cài đặt các công cụ sau trước khi thực hiện:

- Node.js và npm.
- Git.
- Docker Desktop nếu cần chạy bằng Docker.
- Tài khoản MongoDB Atlas.
- Trình soạn thảo mã nguồn như Visual Studio Code.

### 8.2. Tải mã nguồn

Mở Terminal hoặc Git Bash và chạy:

```bash
git clone https://github.com/luquedong229-dotcom/2310043_LuQueDong.git
cd 2310043_LuQueDong
```

### 8.3. Cấu hình Backend

Chuyển đến thư mục Backend:

```bash
cd backend
npm install
```

Tạo file `.env` trong thư mục `backend`, dựa trên `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
CLIENT_URL=http://localhost:5173
```

Thay các phần trong dấu ngoặc nhọn bằng thông tin kết nối MongoDB Atlas thực tế. Không sử dụng nguyên chuỗi minh họa.

**Lưu ý bảo mật:**

- Không đưa file `.env` lên GitHub.
- Không công khai mật khẩu MongoDB hoặc connection string có thông tin xác thực.
- Đảm bảo địa chỉ IP và quyền truy cập cơ sở dữ liệu trong MongoDB Atlas được cấu hình phù hợp.

Khởi động Backend:

```bash
npm run dev
```

Theo cấu hình mặc định của dự án, Backend sử dụng cổng `5000`.

### 8.4. Chạy Frontend

Mở một Terminal khác tại thư mục gốc dự án:

```bash
cd frontend
npm install
npm run dev
```

Mở địa chỉ Local được Vite hiển thị trong Terminal, thông thường là:

```text
http://localhost:5173
```

Để Frontend hoạt động đầy đủ, cần bảo đảm địa chỉ API được cấu hình đúng với Backend đang chạy.

## 9. API Backend

Backend sử dụng Express để cung cấp các endpoint quản lý nhân viên.

Các endpoint dự kiến theo cấu hình `server.js`:

| Phương thức | Endpoint | Chức năng |
|---|---|---|
| GET | `/` | Kiểm tra máy chủ API |
| GET | `/api/health` | Kiểm tra trạng thái Backend và kết nối database |
| GET | `/api/employees` | Lấy danh sách nhân viên |
| GET | `/api/employees/:id` | Lấy chi tiết nhân viên nếu được triển khai |
| POST | `/api/employees` | Thêm nhân viên |
| PUT | `/api/employees/:id` | Cập nhật nhân viên |
| DELETE | `/api/employees/:id` | Xóa nhân viên |

Các endpoint CRUD cần được triển khai tương ứng trong `backend/routes/employeeRoutes.js`. Phương thức, đường dẫn và định dạng dữ liệu cụ thể phụ thuộc vào mã nguồn thực tế của tệp route.

### Kiểm tra Backend

Kiểm tra trang chủ:

```text
http://localhost:5000/
```

Kết quả mong đợi:

```json
{
  "message": "HR Management API is running"
}
```

Kiểm tra health check:

```text
http://localhost:5000/api/health
```

Khi Backend kết nối MongoDB thành công, kết quả mong đợi có dạng:

```json
{
  "status": "OK",
  "database": "connected"
}
```

## 10. Docker Hub – Backend

### Thông tin image

- Repository: https://hub.docker.com/r/dong2310043/backend
- Image chính: `dong2310043/backend:latest`
- Tag phiên bản: `dong2310043/backend:1.0`
- Cổng Backend: `5000`
- Health check endpoint: `/api/health`

### Tải image

```bash
docker pull dong2310043/backend:latest
```

### Chạy container

Từ thư mục gốc của dự án, sau khi đã tạo `backend/.env`:

```bash
docker run -d \
  --name hr-backend \
  -p 5000:5000 \
  --env-file ./backend/.env \
  dong2310043/backend:latest
```

Kiểm tra container:

```bash
docker ps
```

Xem log:

```bash
docker logs hr-backend
```

Kiểm tra API:

```text
http://localhost:5000/api/health
```

Nếu container đã tồn tại, có thể dừng và xóa container cũ trước khi chạy lại:

```bash
docker stop hr-backend
docker rm hr-backend
```

### Build và đẩy Backend image lên Docker Hub

Từ thư mục gốc dự án:

```bash
docker login
docker build -t dong2310043/backend:latest ./backend
docker push dong2310043/backend:latest
```

Nếu cần tạo tag phiên bản `1.0`:

```bash
docker tag dong2310043/backend:latest dong2310043/backend:1.0
docker push dong2310043/backend:1.0
```

## 11. Docker Hub – Frontend

### Thông tin image

- Repository: https://hub.docker.com/r/dong2310043/frontend
- Image chính: `dong2310043/frontend:latest`
- Tag phiên bản: `dong2310043/frontend:1.0`
- Cổng Nginx trong container: `80`
- Cổng truy cập trên máy tính: `3001`

### Tải image

```bash
docker pull dong2310043/frontend:latest
```

### Chạy container

```bash
docker run -d \
  --name hr-frontend \
  -p 3001:80 \
  dong2310043/frontend:latest
```

Mở trình duyệt:

```text
http://localhost:3001
```

Kiểm tra log:

```bash
docker logs hr-frontend
```

### Build và đẩy Frontend image lên Docker Hub

```bash
docker login
docker build -t dong2310043/frontend:latest ./frontend
docker push dong2310043/frontend:latest
```

Tạo tag phiên bản `1.0` nếu cần:

```bash
docker tag dong2310043/frontend:latest dong2310043/frontend:1.0
docker push dong2310043/frontend:1.0
```

**Lưu ý quan trọng:** Nếu Frontend dùng Nginx reverse proxy, biến `BACKEND_URL` phải trỏ đến địa chỉ Backend có thể truy cập từ container. `host.docker.internal` chỉ phù hợp với một số tình huống phát triển cục bộ; không nên dùng làm địa chỉ Backend trên Render.

## 12. Triển khai Backend trên Render

### 12.1. Tạo dịch vụ Backend

1. Truy cập https://dashboard.render.com/.
2. Chọn tạo Web Service.
3. Chọn triển khai image từ Docker Hub.
4. Nhập image:

```text
docker.io/dong2310043/backend:latest
```

5. Cấu hình cổng dịch vụ là `5000` nếu Render yêu cầu khai báo cổng.

### 12.2. Cấu hình biến môi trường

Trong phần Environment của dịch vụ Backend, khai báo:

| Key | Giá trị |
|---|---|
| `PORT` | `5000` |
| `MONGODB_URI` | Connection string MongoDB Atlas thực tế |
| `CLIENT_URL` | `https://web-2310043.onrender.com` |

Không đưa mật khẩu hoặc connection string thật vào README hay GitHub.

### 12.3. Kiểm tra triển khai

Mở Logs của dịch vụ Backend. Kiểm tra xem máy chủ có khởi động thành công và kết nối MongoDB Atlas hay không.

Sau khi triển khai, sao chép URL Backend thực tế được Render cung cấp và kiểm tra:

```text
https://<backend-url>/
https://<backend-url>/api/health
```

Thay `<backend-url>` bằng tên miền thật của dịch vụ Backend.

**Backend Render URL:** Chưa được xác nhận trong tài liệu này.

## 13. Triển khai Frontend trên Render

### 13.1. Tạo dịch vụ Frontend

1. Truy cập https://dashboard.render.com/.
2. Mở dịch vụ Frontend hiện có hoặc tạo dịch vụ mới.
3. Chọn triển khai Docker image.
4. Sử dụng image:

```text
docker.io/dong2310043/frontend:latest
```

5. Đảm bảo dịch vụ phục vụ HTTP trên cổng `80` của container.

### 13.2. Cấu hình Backend URL

Trong Environment của Frontend, thiết lập:

| Key | Giá trị |
|---|---|
| `BACKEND_URL` | URL Backend Render thực tế, bắt đầu bằng `https://` |

Ví dụ định dạng:

```text
BACKEND_URL=https://<backend-url>
```

Đây chỉ là mẫu cấu hình; cần thay bằng URL thực tế. Không thêm `/api/employees` vào cuối giá trị `BACKEND_URL` khi Nginx được cấu hình để chuyển tiếp nguyên đường dẫn `/api/`.

Sau khi lưu cấu hình, triển khai lại dịch vụ và kiểm tra Logs.

### 13.3. Link Frontend

Ứng dụng Frontend đã được cung cấp tại:

https://web-2310043.onrender.com

Cần kiểm tra thực tế giao diện và các chức năng quản lý nhân viên sau khi Backend hoạt động.

## 14. Xử lý lỗi thường gặp

### 14.1. Frontend báo `Unexpected token '<'`

Lỗi thường xuất hiện khi Frontend mong đợi JSON nhưng nhận được HTML, chẳng hạn trang lỗi 404, trang lỗi máy chủ hoặc trang HTML của ứng dụng.

Cách kiểm tra:

1. Kiểm tra trạng thái Backend trên Render.
2. Mở URL Backend và `/api/health`.
3. Mở endpoint `/api/employees` để kiểm tra phản hồi API.
4. Kiểm tra cấu hình `BACKEND_URL` của Frontend.
5. Kiểm tra Nginx có chuyển tiếp `/api/` đến đúng Backend hay không.
6. Kiểm tra Logs để xác định lỗi chính xác.

### 14.2. Nginx báo `host not found in upstream "host.docker.internal"`

Nguyên nhân có thể do cấu hình Nginx trỏ đến địa chỉ không phân giải được trong môi trường Render.

Cách xử lý:

- Cấu hình `BACKEND_URL` bằng URL Backend Render thực tế.
- Kiểm tra `frontend/nginx.conf.template`.
- Build lại image nếu cần thay đổi cấu hình mặc định được đóng gói trong image.
- Push image mới lên Docker Hub và triển khai lại dịch vụ Frontend.

### 14.3. Backend không kết nối được MongoDB Atlas

Kiểm tra:

- `MONGODB_URI` có đúng định dạng `mongodb://` hoặc `mongodb+srv://` hay không.
- Username, mật khẩu và tên database có chính xác không.
- Cấu hình Network Access và Database Access của MongoDB Atlas.
- Logs của Backend để xác định lỗi kết nối.

Không chia sẻ connection string chứa mật khẩu trong báo cáo công khai.

### 14.4. Docker container không chạy

Kiểm tra danh sách container:

```bash
docker ps -a
```

Xem log Backend:

```bash
docker logs hr-backend
```

Xem log Frontend:

```bash
docker logs hr-frontend
```

Kiểm tra cổng đã được sử dụng hay chưa và xác nhận image đúng với cấu hình dự án.

## 15. Quản lý mã nguồn GitHub

Repository:

https://github.com/luquedong229-dotcom/2310043_LuQueDong

Kiểm tra trạng thái:

```bash
git status
```

Thêm và commit thay đổi:

```bash
git add .
git commit -m "Update HR Management System"
git push origin main
```

Trước khi commit, cần kiểm tra `.gitignore` để đảm bảo các tệp `.env`, thông tin đăng nhập, token và dữ liệu nhạy cảm không được đưa lên repository.

## 16. Bảo mật hệ thống

- Không commit file `.env` lên GitHub.
- Không công khai mật khẩu MongoDB Atlas hoặc thông tin đăng nhập.
- Sử dụng biến môi trường để lưu thông tin cấu hình nhạy cảm.
- Chỉ cấp quyền truy cập cơ sở dữ liệu phù hợp với nhu cầu triển khai.
- Cấu hình CORS để cho phép những nguồn Frontend cần thiết.
- Kiểm tra và xử lý dữ liệu đầu vào trước khi thao tác với database.
- Không đưa thông tin xác thực vào mã nguồn Frontend.
- Khi thông tin đăng nhập đã bị lộ, cần đổi mật khẩu hoặc thu hồi thông tin xác thực cũ.

## 17. Kết quả triển khai

Các tài nguyên của dự án được tổ chức như sau:

| Thành phần | Trạng thái tài liệu |
|---|---|
| Mã nguồn GitHub | Có repository |
| Docker image Backend | Có đường dẫn Docker Hub |
| Docker image Frontend | Có đường dẫn Docker Hub |
| Frontend Render | Có URL |
| Backend Render | Cần bổ sung URL thật và xác nhận trạng thái |
| MongoDB Atlas | Có trang quản lý |

Để xác nhận hệ thống hoạt động hoàn chỉnh, cần kiểm tra kết nối Backend với MongoDB Atlas, phản hồi JSON của API, chức năng CRUD nhân viên và khả năng truy cập Frontend trên Render.

## 18. Kết luận

Dự án Hệ thống quản lý nhân sự minh họa quy trình xây dựng và triển khai một ứng dụng web sử dụng React, Node.js, Express và MongoDB Atlas. Việc sử dụng GitHub, Docker, Docker Hub và Render hỗ trợ quản lý mã nguồn, đóng gói ứng dụng và triển khai các thành phần lên môi trường đám mây.

Thông qua dự án, sinh viên có cơ hội thực hành phát triển REST API, kết nối cơ sở dữ liệu, xây dựng giao diện web, quản lý phiên bản, đóng gói container và xử lý các vấn đề cấu hình khi triển khai ứng dụng thực tế.

---

**Sinh viên thực hiện:** Lư Quế Đông  
**MSSV:** 2310043  
**Lớp:** DH23TIN10
