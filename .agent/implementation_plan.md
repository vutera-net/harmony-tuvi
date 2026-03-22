# Implementation Plan - Phase 5: Giai đoạn 5: Tinh chỉnh & Đồng bộ
Phase 4 đã hoàn thành việc xây dựng module Bát Tự Tứ Trụ và Xem Tuổi Tương Hợp. 

## Proposed Changes

### 1. Đồng bộ Giao Diện & Trải Nghiệm (UI/UX Sync) - [HOÀN THÀNH]
- [x] **Màu Ngũ Hành**: Đổi màu của mệnh Kim sang xám bạc/ánh kim (tránh nhầm lẫn màu vàng/nâu của Thổ). Chỉnh sửa tại `RadarChart.tsx` và `BatTu.tsx`.
- [x] **Lịch Vạn Niên (`calendar/page.tsx`)**: Đổi màu hoặc style ngày Hắc Đạo (ví dụ tông đỏ nhạt `rose`) để khác biệt hoàn toàn với ngày bình thường. 
- [x] **Trang Chủ (`Home.tsx`)**: Đưa tính năng Bát Tự và Xem Tuổi Hợp vào UI menu/Dashboard chính.
- [x] **Layouting Bát Tự & Hợp Tuổi (`BatTu.tsx`, `TuongHop.tsx`)**: Tiêu chuẩn hóa phong cách `backdrop-blur-md` trên toàn bộ các trang để nhìn tinh tế hệt như La Bàn Hướng Nhà.
- [x] **Cân bằng tương phản**: Fix lỗi mờ chữ ở Light mode và các thẻ Ngũ hành ở Dark mode.

### 2. Thuật toán La Bàn Bát Trạch - [HOÀN THÀNH]
- [x] Sửa lỗi toán học tính **Cung Phi** trong `lunar-logic.ts` (áp dụng công thức mod 9 chuẩn phong thủy).
- [x] Đảm bảo la bàn xoay chuẩn góc phong thủy theo Cung Phi mới.

### 3. Tối ưu Hệ Thống & Nhãn Hiệu - [HOÀN THÀNH]
- [x] Rebranding dự án từ Harmony TuVi sang **An Mệnh**.
- [x] Cập nhật toàn bộ LocalStorage key sang `anmenh_profile`.
- [x] Đồng bộ các tệp `.agent/` theo nhãn hiệu mới.
