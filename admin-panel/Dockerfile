# Sử dụng image Node.js chính thức
FROM node:17

# Thiết lập thư mục làm việc trong container
WORKDIR /admin-panel

# Sao chép package.json và package-lock.json (nếu có) vào container
COPY package*.json ./

# Cài đặt các dependencies từ package.json
RUN npm install

# Sao chép tất cả các tệp còn lại vào container
COPY . .



# Mở cổng 3033 trên container để có thể truy cập từ bên ngoài
EXPOSE 3033

# Chạy ứng dụng khi container được khởi động
CMD npm run start
