"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateTuongHop, TuongHopResult } from "@/lib/tuong-hop-logic";
import { getYearCanChi } from "@/lib/lunar-logic";
import { Heart, User, RefreshCw, Sparkles } from "lucide-react";

export default function TuongHop() {
  const [year1, setYear1] = useState(1995);
  const [gender1, setGender1] = useState<"male" | "female">("male");
  
  const [year2, setYear2] = useState(1997);
  const [gender2, setGender2] = useState<"male" | "female">("female");
  
  const [result, setResult] = useState<TuongHopResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setResult(calculateTuongHop(year1, gender1, year2, gender2));
      setIsCalculating(false);
    }, 600);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-500";
    if (score >= 60) return "text-amber-600 dark:text-amber-500";
    if (score >= 40) return "text-orange-500 dark:text-orange-400";
    return "text-red-600 dark:text-red-500";
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-amber-500";
    if (score >= 40) return "bg-orange-400";
    return "bg-red-500";
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 mx-auto bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20"
        >
          <Heart className="text-amber-500" size={32} />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-stone-900 dark:text-white">Xem Tuổi Tương Hợp</h1>
        <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-sm md:text-base">
          Phân tích sự hòa hợp giữa hai người dựa trên Thiên Can, Địa Chi và Cung Phi Bát Trạch để mang lại cái nhìn sâu sắc về nhân duyên.
        </p>
      </div>

      <div className="bg-white/90 dark:bg-stone-800/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border-2 border-stone-100 dark:border-stone-700 shadow-xl shadow-stone-900/5 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Người 1 */}
          <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/30">
            <h3 className="text-lg font-bold text-amber-600 dark:text-amber-500 flex items-center gap-2 mb-6">
              <User size={18} /> Người Thứ Nhất
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">Năm sinh</label>
                <input
                  type="number"
                  min="1900"
                  max={currentYear}
                  value={year1}
                  onChange={(e) => setYear1(Number(e.target.value))}
                  className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                {year1 >= 1900 && year1 <= currentYear && (
                  <p className="text-xs text-amber-600 dark:text-amber-500 mt-1 font-medium">
                    {getYearCanChi(year1)}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">Giới tính</label>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setGender1("male")}
                    className={`flex-1 py-3 rounded-xl border font-bold transition-all text-sm ${gender1 === "male" ? "bg-stone-900 dark:bg-amber-500/10 border-stone-900 dark:border-amber-500 text-white dark:text-amber-500" : "bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-500"}`}
                  >
                    Nam
                  </button>
                  <button 
                    onClick={() => setGender1("female")}
                    className={`flex-1 py-3 rounded-xl border font-bold transition-all text-sm ${gender1 === "female" ? "bg-stone-900 dark:bg-amber-500/10 border-stone-900 dark:border-amber-500 text-white dark:text-amber-500" : "bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-500"}`}
                  >
                    Nữ
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Người 2 */}
          <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/30">
            <h3 className="text-lg font-bold text-amber-600 dark:text-amber-500 flex items-center gap-2 mb-6">
              <User size={18} /> Người Thứ Hai
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">Năm sinh</label>
                <input
                  type="number"
                  min="1900"
                  max={currentYear}
                  value={year2}
                  onChange={(e) => setYear2(Number(e.target.value))}
                  className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-stone-900 dark:text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                {year2 >= 1900 && year2 <= currentYear && (
                  <p className="text-xs text-amber-600 dark:text-amber-500 mt-1 font-medium">
                    {getYearCanChi(year2)}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">Giới tính</label>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setGender2("male")}
                    className={`flex-1 py-3 rounded-xl border font-bold transition-all text-sm ${gender2 === "male" ? "bg-stone-900 dark:bg-amber-500/10 border-stone-900 dark:border-amber-500 text-white dark:text-amber-500" : "bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-500"}`}
                  >
                    Nam
                  </button>
                  <button 
                    onClick={() => setGender2("female")}
                    className={`flex-1 py-3 rounded-xl border font-bold transition-all text-sm ${gender2 === "female" ? "bg-stone-900 dark:bg-amber-500/10 border-stone-900 dark:border-amber-500 text-white dark:text-amber-500" : "bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-500"}`}
                  >
                    Nữ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          disabled={isCalculating}
          className="w-full btn-zen py-4 text-sm font-bold tracking-widest flex items-center justify-center gap-2"
        >
          {isCalculating ? (
            <RefreshCw className="animate-spin" size={18} />
          ) : (
            <Heart size={18} />
          )}
          {isCalculating ? "ĐANG PHÂN TÍCH NHÂN DUYÊN..." : "XEM TƯƠNG HỢP"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {result && !isCalculating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Tổng Điểm */}
            <div className="bg-white/90 dark:bg-stone-800/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border-2 border-stone-100 dark:border-stone-700 shadow-xl shadow-stone-900/5 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Heart size={300} />
              </div>
              
              <h2 className="text-xs font-black tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-4">Kết Quả Độ Hòa Hợp</h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className={`text-7xl md:text-8xl font-serif font-bold leading-none ${getScoreColor(result.totalScore)}`}>
                  {result.totalScore}
                </span>
                <span className="text-xl font-black text-stone-400 dark:text-stone-600 mb-4 tracking-tighter">/ 100</span>
              </div>
              
              <div className="w-full max-w-sm mx-auto h-3 bg-stone-100 dark:bg-stone-950 rounded-full overflow-hidden mb-8 border border-stone-200 dark:border-stone-700">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${result.totalScore}%` }}
                  transition={{ duration: 1.2, ease: "circOut" }}
                  className={`h-full shadow-lg ${getProgressBarColor(result.totalScore)}`} 
                />
              </div>

              <div className="p-6 bg-amber-50/50 dark:bg-stone-900/50 rounded-2xl border border-amber-100 dark:border-stone-800 relative z-10 shadow-inner">
                 <p className="text-base md:text-lg text-stone-800 dark:text-stone-200 max-w-2xl mx-auto leading-relaxed font-medium italic">
                  "{result.interpretation}"
                </p>
              </div>
            </div>

            {/* Chi tiết từng yếu tố */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Thiên Can", score: result.canScore, status: result.canText, desc: result.canDesc },
                { title: "Địa Chi", score: result.chiScore, status: result.chiText, desc: result.chiDesc },
                { title: "Cung Phi", score: result.cungScore, status: result.cungText, desc: result.cungDesc },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-stone-100 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 shadow-sm flex flex-col h-full"
                >
                  <h3 className="text-amber-600 dark:text-amber-500 font-black text-xs uppercase tracking-[0.2em] mb-4">{item.title}</h3>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black uppercase bg-stone-900 dark:bg-stone-950 text-white dark:text-stone-400 px-3 py-1.5 rounded-lg">
                      {item.status}
                    </span>
                    <span className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-200">
                      {item.score}<span className="text-xs text-stone-400 dark:text-stone-500 ml-0.5 tracking-tighter">đ</span>
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
