"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateTuongHop, TuongHopResult } from "@/lib/tuong-hop-logic";
import { Heart, User, RefreshCw, Star } from "lucide-react";

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
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-amber-500";
    if (score >= 40) return "text-orange-400";
    return "text-red-500";
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-amber-500";
    if (score >= 40) return "bg-orange-400";
    return "bg-red-500";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 mx-auto bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20"
        >
          <Heart className="text-amber-500" size={32} />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Xem Tuổi Tương Hợp</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Phân tích sự hòa hợp giữa hai người dựa trên Thiên Can, Địa Chi và Cung Phi Bát Trạch để mang lại cái nhìn sâu sắc về nhân duyên.
        </p>
      </div>

      <div className="glass p-6 md:p-8 rounded-3xl border mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Người 1 */}
          <div className="p-6 rounded-2xl border border-stone-800 bg-stone-900/30">
            <h3 className="text-lg font-bold text-amber-500 flex items-center gap-2 mb-6">
              <User size={18} /> Người Thứ Nhất
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">Năm sinh (Âm/Dương lịch đều tính theo năm)</label>
                <input
                  type="number"
                  min="1900"
                  max={currentYear}
                  value={year1}
                  onChange={(e) => setYear1(Number(e.target.value))}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">Giới tính</label>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setGender1("male")}
                    className={`flex-1 py-3 rounded-xl border font-medium transition-all ${gender1 === "male" ? "bg-amber-500/10 border-amber-500 text-amber-500" : "bg-stone-900 border-stone-800 text-stone-500"}`}
                  >
                    Nam
                  </button>
                  <button 
                    onClick={() => setGender1("female")}
                    className={`flex-1 py-3 rounded-xl border font-medium transition-all ${gender1 === "female" ? "bg-amber-500/10 border-amber-500 text-amber-500" : "bg-stone-900 border-stone-800 text-stone-500"}`}
                  >
                    Nữ
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Người 2 */}
          <div className="p-6 rounded-2xl border border-stone-800 bg-stone-900/30">
            <h3 className="text-lg font-bold text-amber-500 flex items-center gap-2 mb-6">
              <User size={18} /> Người Thứ Hai
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">Năm sinh</label>
                <input
                  type="number"
                  min="1900"
                  max={currentYear}
                  value={year2}
                  onChange={(e) => setYear2(Number(e.target.value))}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">Giới tính</label>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setGender2("male")}
                    className={`flex-1 py-3 rounded-xl border font-medium transition-all ${gender2 === "male" ? "bg-amber-500/10 border-amber-500 text-amber-500" : "bg-stone-900 border-stone-800 text-stone-500"}`}
                  >
                    Nam
                  </button>
                  <button 
                    onClick={() => setGender2("female")}
                    className={`flex-1 py-3 rounded-xl border font-medium transition-all ${gender2 === "female" ? "bg-amber-500/10 border-amber-500 text-amber-500" : "bg-stone-900 border-stone-800 text-stone-500"}`}
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
          className="w-full btn-zen py-4 text-sm tracking-widest flex items-center justify-center gap-2"
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
            <div className="glass p-8 rounded-3xl border text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Heart size={200} />
              </div>
              
              <h2 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-4">Độ Hòa Hợp</h2>
              <div className="flex items-center justify-center items-end gap-2 mb-4">
                <span className={`text-6xl font-serif font-bold leading-none ${getScoreColor(result.totalScore)}`}>
                  {result.totalScore}
                </span>
                <span className="text-xl font-bold text-stone-500 mb-2">/ 100</span>
              </div>
              
              <div className="w-full max-w-sm mx-auto h-2 bg-stone-800 rounded-full overflow-hidden mb-6">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${result.totalScore}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${getProgressBarColor(result.totalScore)}`} 
                />
              </div>

              <p className="text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed">
                {result.interpretation}
              </p>
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
                  className="glass p-6 rounded-2xl border"
                >
                  <h3 className="text-amber-500 font-bold text-lg mb-1">{item.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-stone-400 bg-stone-900 px-3 py-1 rounded-lg border border-stone-800">
                      {item.status}
                    </span>
                    <span className="text-lg font-serif font-bold text-stone-300">
                      {item.score} <span className="text-xs text-stone-500">điểm</span>
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">
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
