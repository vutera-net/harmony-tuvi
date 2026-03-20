# Chat Summary - Dự án Harmony TuVi

## 1. Yêu cầu ban đầu (Initial User Request)
- Tạo một web app về mảng **Phong thủy – Tử vi – Xem ngày**.
- Các chức năng chính cần có: Luận mệnh theo tuổi, tử vi theo ngày, phong thủy ứng dụng đời sống, xem ngày tốt xấu, hướng nhà, tử vi cá nhân, xem tuổi kết hôn/đối tác (tích hợp Bát tự/Hành khắc) và Cân xương đoán số.
- Đề bài bao gồm: Nghiên cứu kỹ thị trường, phân tích đối thủ, tổng hợp UI/UX best practices, đề xuất các tính năng và sau đó viết **Product Requirements Document (PRD)**.

## 2. Các giai đoạn phát triển (Development Phases)

**Giai đoạn 1: Lên ý tưởng, PRD & Prototype ban đầu (Vite + React)**
- Thực hiện search web để nghiên cứu thị trường (các app như AItuvi, Tuvi.vn, Lịch Ngày Tốt...) và các best practices về UI/UX (ưu tiên tone màu Zen, Minimalist, hiệu ứng glassmorphism).
- Cập nhật file PRD chi tiết, lập Implementation Plan.
- Setup dự án ban đầu bằng **Vite, React và TailwindCSS**.
- Code các thuật toán cơ bản: bảng tính Can Chi, Cân Xương "Lượng Chỉ" (trong `src/lib/lunar-logic.js`).
- Xây dựng giao diện tĩnh cho: Trang chủ (Home), Lịch vạn niên (Calendar) và Tính năng Cân xương (CanXuong).

**Giai đoạn 2: Tối ưu hoá SEO và An toàn dữ liệu (Next.js + TypeScript)**
- Để tối ưu hóa việc tìm kiếm của Google (SEO), người dùng yêu cầu chuyển đổi codebase sang **Next.js (App Router)** và đổi cú pháp sang ngôn ngữ **TypeScript**.
- Cập nhật lại PRD, thiết lập lại toàn bộ cấu trúc thư mục (chuyển các trang vào `src/app/...`), đổi file logic thành `.ts` và các file giao diện thành `.tsx`.
- Thêm Next.js Metadata API cho từng trang để cải thiện Web Vitals và SEO điểm chuẩn.
- Sửa lỗi scripts trong `package.json` (từ `vite` sang `next dev`) và khởi động lại Server thành công.

**Giai đoạn 3: Kiểm thử tự động (Automated Testing) & Tính năng Bát Trạch**
- Sử dụng **Browser SubAgent** để chạy kiểm thử tự động toàn bộ flow người dùng: vào trang chủ, điều hướng sang lịch, và nhập dữ liệu vào chức năng Cân Xương.
- Fix lỗi Next.js Hydration (NaN check) để app chạy ổn định trên môi trường Product.
- **Tiếp tục hoàn thiện UI/UX**: Xây dựng tính năng cuối cùng của Phase 2 là **Bát Trạch** (Xem hướng nhà hợp tuổi dựa theo năm sinh và giới tính để luận ra Cung Phi - Mệnh Quái, các hướng Sinh Khí - Thiên Y - Diên Niên - Phục Vị).

**Giai đoạn 3: Tính năng Cấp Cao & Trải nghiệm UX Cao Cấp (Premium Experience)**
- Phân tích và đề xuất Phase 3 nhằm đưa ứng dụng lên mức độ hoàn thiện cao hơn.
- Áp dụng LocalStorage và `UserContext` để lưu thông tin cá nhân (Tên, Năm Sinh, Giới Tính), giúp cá nhân hóa lời chào ở Trang Chủ và tự động điền dữ liệu vào Cân Xương / Bát Trạch.
- Cải thiện thuật toán Âm Lịch (chuẩn bị khung xử lý chính xác hơn) và tăng độ chi tiết văn bản luận giải trong Cân Xương Đoán Số.
- Triển khai **La bàn Bát Trạch tương tác**: La bàn ảo có khả năng quay tương ứng với Cung Phi tính toán được nhờ sự hỗ trợ của `framer-motion`.
- Cập nhật toàn bộ Design System để hỗ trợ hoàn toàn **Dark Mode** tự động dựa theo theme của thiết bị.
- Tiến hành chạy Browser SubAgent để kiểm thử, phát hiện lỗi reference `motion` chưa import và đã xử lý thành công, xác nhận ứng dụng chạy mượt mà không còn bugs.

## 3. Kết quả hiện tại (Current Status)
Dự án **Harmony TuVi** hiện được đóng gói hoàn chỉnh bằng Next.js (TypeScript) với 4 module chức năng chính, hỗ trợ Personalization & Dark Mode:
- `/`: Trang chủ tổng quan các tính năng với thiết kế Zen thẩm mỹ, có Modal xác thực lấy Tên người dùng.
- `/calendar`: Lịch vạn niên chỉ ra ngày Hoàng Đạo/Hắc Đạo.
- `/can-xuong`: Công cụ tính toán Cân Xương Đoán Số (có hiệu ứng kết quả và luận giải dài).
- `/bat-trach`: La bàn Bát Trạch trực quan xem phong thủy chọn hướng nhà, hướng bếp.

Tất cả các tài liệu dự án (PRD, kế hoạch tiến độ, hướng dẫn code) đã được sao chép và tổng hợp vào thư mục `.agent/` này để dùng cho các cập nhật AI/Agent về sau.
