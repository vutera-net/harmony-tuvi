import Calendar from "@/components/pages/Calendar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch Vạn Niên 2026 - Xem Ngày Tốt Xấu Hoàng Đạo | Harmony TuVi",
  description: "Tra cứu ngày lành tháng tốt, giờ hoàng đạo cho đại sự khai trương, cưới hỏi, động thổ.",
};

export default function Page() {
  return <Calendar />;
}
