"use client";
import React, { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Sun } from "lucide-react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthNames = [
    "Tháng Giêng", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu",
    "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Một", "Tháng Chạp",
  ];

  const weeks = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  const renderDays = () => {
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 sm:h-32 border-b border-r border-stone-100 bg-stone-50/30"></div>);
    }

    for (let d = 1; d <= totalDays; d++) {
      const isToday = d === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
      const isGoodDay = d % 7 === 0 || d % 5 === 0;

      days.push(
        <div
          key={d}
          className={`h-24 sm:h-32 border-b border-r border-stone-100 p-2 sm:p-4 transition-colors hover:bg-amber-50/50 cursor-pointer group flex flex-col justify-between ${
            isToday ? "bg-amber-50/30" : ""
          }`}
        >
          <div className="flex justify-between items-start">
            <span
              className={`text-lg font-bold ${isGoodDay ? "text-amber-600" : "text-stone-900"} ${
                isToday ? "bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center -m-1" : ""
              }`}
            >
              {d}
            </span>
            <span className="text-[10px] sm:text-xs text-stone-400 font-medium">{(d % 30) + 1}</span>
          </div>

          {isGoodDay && (
            <div className="flex items-center gap-1 text-[10px] text-amber-700 font-bold uppercase overflow-hidden whitespace-nowrap">
              <Sun size={10} />
              <span className="hidden sm:inline">Hoàng Đạo</span>
            </div>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-serif font-bold flex items-center gap-3">
            <CalendarIcon className="text-amber-600" />
            Lịch Vạn Niên
          </h2>
          <p className="text-stone-500 mt-1">Năm Nhâm Thân 2026 - Kim Mệnh</p>
        </div>

        <div className="flex items-center gap-4 bg-white px-6 py-2 rounded-full border border-stone-200 shadow-sm">
          <button onClick={prevMonth} className="hover:text-amber-600 p-1">
            <ChevronLeft size={20} />
          </button>
          <span className="font-serif font-bold text-lg min-w-[140px] text-center">
            {monthNames[month]} {year}
          </span>
          <button onClick={nextMonth} className="hover:text-amber-600 p-1">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-stone-200 shadow-2xl shadow-stone-900/5 overflow-hidden">
        <div className="grid grid-cols-7 border-b border-stone-200 bg-stone-50">
          {weeks.map((w) => (
            <div
              key={w}
              className="py-4 text-center text-xs font-bold uppercase tracking-widest text-stone-400 border-r border-stone-200 last:border-r-0"
            >
              {w}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 border-l border-stone-100">{renderDays()}</div>
      </div>
    </div>
  );
}
