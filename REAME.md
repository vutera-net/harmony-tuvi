# Product Requirements Document (PRD)
**Tên sản phẩm:** Harmony TuVi - Web App Phong Thủy, Tử Vi & Xem Ngày
**Nền tảng:** Web Application (Mobile-first Responsive)

---

## 1. Tổng quan dự án (Project Overview)
**Mục tiêu:** Xây dựng một ứng dụng web hiện đại, kết hợp các yếu tố Tử vi Đông Phương (Bát tự, Cân xương), Phong thủy ứng dụng và Lịch xem ngày tốt xấu. Sản phẩm hướng tới việc mang lại trải nghiệm cá nhân hóa, giao diện trực quan, tính thẩm mỹ cao và dễ sử dụng cho người dùng Việt Nam.

**Vấn đề giải quyết:** Phần lớn các trang web tử vi hiện nay tại Việt Nam có giao diện cũ, nhồi nhét thông tin, khó sử dụng trên thiết bị di động, và thiết kế kém bắt mắt. Ứng dụng này sẽ đơn giản hóa các khái niệm học thuật, trình bày dữ liệu dạng đồ họa trực quan và cải thiện UX.

## 2. Nghiên cứu thị trường & Bối cảnh (Market & Context)
- **Thị trường hiện tại:** Nhu cầu tra cứu tử vi, ngày tốt xấu và phong thủy là rất lớn, đặc biệt vào các dịp lễ tết, khởi sự kinh doanh hay xây dựng.
- **Đối thủ cạnh tranh:** AItuvi (ứng dụng AI), Tuvi.vn, Lịch Ngày Tốt, Huyenbi.net.
- **Phân tích USP (Unique Selling Proposition):** 
  - Thay vì chỉ cung cấp văn bản đơn thuần, ứng dụng sẽ biểu diễn các chỉ số bằng biểu đồ (VD: Radar chart ngũ hành).
  - Áp dụng UI/UX hiện đại: Dark mode vũ trụ hoặc Light mode thiền định (Spiritual UI). Cấu trúc "Progressive Disclosure" (hiển thị thông tin từng bước tránh ngợp dữ liệu).

## 3. Kiến trúc Tính năng (Feature Architecture)

### 3.1. Nhóm tính năng cốt lõi (Core Features)

**A. Tử vi cá nhân & Bát tự (Tứ trụ)**
- Form nhập liệu mượt mà: Tên, Giới tính, Giờ, Ngày, Tháng, Năm sinh (Dương lịch/Âm lịch).
- Đổi ngày Dương lịch sang Âm lịch tự động.
- Sinh lá số Bát Tự (Thiên Can, Địa Chi cho 4 trụ).
- Biểu đồ phân tích rập khuôn Ngũ Hành (Kim, Mộc, Thủy, Hỏa, Thổ đang Khuyết hay Vượng).
- Luận giải cơ bản về tính cách và vận mệnh.

**B. Cân xương đoán số**
- Tính toán "Lượng Chỉ" tự động dựa trên ngày giờ sinh.
- Hiển thị kết quả bằng giao diện trực quan (hình ảnh cán cân, hoặc animation đồng tiền).
- Đoạn văn bình giải tổng quan về mức độ thuận lợi, tài lộc trong cuộc đời theo kết quả Lượng Chỉ.

**C. Xem ngày tốt xấu & Lịch Vạn Niên**
- Giao diện lịch tháng (Calendar view) kết hợp ngày Âm/Dương.
- Đánh dấu các ngày Hoàng Đạo/Hắc Đạo bằng icon màu sắc rực rỡ.
- Xem chi tiết ngày: Giờ đẹp, Hướng xuất hành tốt, Tuổi xung khắc.
- **Tính năng lọc:** Tìm ngày tốt theo mục đích (vd: chỉ lọc ngày tốt để Khai trương, Cưới hỏi, Động thổ trong tháng).

**D. Phong thủy ứng dụng & Hướng nhà**
- Dựa vào năm sinh và giới tính, tính cung phi (Bát Trạch).
- La bàn phong thủy điện tử (ảo) minh họa các hướng: Sinh Khí, Thiên Y, Diên Niên, Phục Vị (Tốt) & Tuyệt Mệnh, Ngũ Quỷ, Lục Sát, Họa Hại (Xấu).
- Ứng dụng thực tế: Gợi ý hướng kê giường ngủ, hướng bàn làm việc.

### 3.2. Tính năng tương tác (Engagement Features)

**E. Xem tuổi kết hôn / Đối tác**
- Nhập thông tin của 2 đối tượng.
- Hệ thống phân tích đối chiếu Thiên can, Địa chi, Ngũ hành nạp âm.
- Đưa ra "Điểm tương hợp" (%) và lời khuyên.

**F. Tử vi hàng ngày (Daily Horoscope) - Mở rộng**
- Lời khuyên ngắn hạn và thông điệp may mắn ngẫu nhiên (lucky numbers, màu sắc may mắn trong ngày).

## 4. Yêu cầu Giao diện & Trải nghiệm Người dùng (UI/UX)
- **Aesthetics (Thẩm mỹ):** 
  - Phong cách "Mystical Modern" (Giao diện tối - Dark mode với các ánh sáng Neon gradient biểu tượng vũ trụ/chiêm tinh).
  - HOẶC "Zen Minimal" (Giao diện sáng - Background beige/off-white, Typography thanh lịch kết hợp font serif cho tiêu đề).
- **Typography:** Sử dụng font chữ hiện đại, sang trọng như *Inter, Playfair Display* hoặc *Cormorant Garamond* để tạo điểm nhấn truyền thống nhưng vẫn cao cấp.
- **Animations:** Micro-animations khi hover, chuyển trang mượt mà bằng Framer Motion. Animation load dữ liệu hình Bát Quái hoặc Vòng xoay Ngũ Hành.
- **Mobile First:** Thiết kế dành cho màn hình cảm ứng, bottom sheet navigation, các nút lớn dễ chạm.

## 5. Yêu cầu Kỹ thuật (Technical Specifications)
- **Frontend Framework:** Next.js (App Router) - Bắt buộc để tối ưu SEO và Core Web Vitals.
- **Language:** TypeScript - Đảm bảo tính chặt chẽ của mã nguồn và dễ bảo trì.
- **Tối ưu SEO:** Sử dụng Metadata API của Next.js, Server Component để render nội dung tử vi giúp Google Index tốt nhất.
- **Styling:** TailwindCSS.
- **Deployment:** Vercel hoặc các nền tảng hỗ trợ Next.js SSR.
- **Database Architecture (MVP):** Hoạt động hoàn toàn Client-side (Local Storage) để người dùng không cần đăng nhập vẫn lưu được profile. Đối với bản v2, có thể dùng Supabase/Firebase.

## 6. Lộ trình phát triển (Phased Implementation)
- **Giai đoạn 1 (Foundation):** 
  - Setup core Layout & UI design system (Vite + React / Tailwind).
  - Tính năng Lịch Vạn Niên (Xem ngày tốt xấu).
  - Tính năng Cân Xương Đoán Số.
- **Giai đoạn 2 (SEO & Migration):**
  - Chuyển đổi mã nguồn sang Next.js (App Router) và TypeScript.
  - Fix duplicate files, tối ưu Server-side Rendering và meta data.
  - Xây dựng Tính năng xác định Hướng nhà cơ bản (Bát Trạch).
- **Giai đoạn 3 (Premium UX & Personalization) - HIỆN TẠI ĐÃ HOÀN THÀNH:**
  - Cá nhân hóa người dùng: Sử dụng LocalStorage (User Context) để lưu trữ tên, ngày sinh, đồng bộ qua các luồng (Lịch, Cân Xương, Bát Trạch).
  - Nâng cấp UI/UX: Áp dụng hiệu ứng mượt mà (Framer Motion) và La bàn xoay trực quan.
  - Hỗ trợ hoàn toàn Dark Mode theo ngôn ngữ thiết kế Zen.
  - Cập nhật luận giải chi tiết cho Cân Xương Đoán Số.
- **Giai đoạn 4 (Tiếp theo):**
  - Xây dựng module Bát Tự phức tạp và biểu đồ phân tích Ngũ Hành.
  - Tính năng Xem tuổi tương hợp đôi lứa.
  - Tích hợp nội dung tử vi hàng ngày.

---
*Dự án hiện tại đã đạt độ ổn định và trải nghiệm người dùng cao, hoàn thành Phase 3 và sẵn sàng triển khai thực tế.*
