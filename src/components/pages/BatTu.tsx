"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateBatTu, BatTuResult, NguHanh } from "@/lib/battu-logic";
import RadarChart from "../RadarChart";
import { Sparkles, Calendar, Clock, RefreshCw } from "lucide-react";

export default function BatTu() {
  const [dateStr, setDateStr] = useState("1995-05-15");
  const [timeStr, setTimeStr] = useState("08:30");
  const [result, setResult] = useState<BatTuResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    // Optionally load from localStorage if we had a user profile
    const savedProfile = localStorage.getItem("tuvi_profile");
    if (savedProfile) {
      try {
        const p = JSON.parse(savedProfile);
        if (p.year && p.month && p.day) {
          setDateStr(`${p.year}-${String(p.month).padStart(2, '0')}-${String(p.day).padStart(2, '0')}`);
        }
      } catch (e) {}
    }
  }, []);

  const handleCalculate = () => {
    if (!dateStr || !timeStr) return;
    setIsCalculating(true);
    
    // Simulate thinking for UX
    setTimeout(() => {
      const [y, m, d] = dateStr.split("-").map(Number);
      const [hr, min] = timeStr.split(":").map(Number);
      const dateObj = new Date(y, m - 1, d, hr, min);
      
      const res = calculateBatTu(dateObj);
      setResult(res);
      setIsCalculating(false);
    }, 600);
  };

  const hanhColors: Record<string, string> = {
    Kim: "bg-zinc-200 text-zinc-800 border-zinc-300",
    Mộc: "bg-green-100 text-green-800 border-green-300",
    Thủy: "bg-blue-100 text-blue-800 border-blue-300",
    Hỏa: "bg-red-100 text-red-800 border-red-300",
    Thổ: "bg-amber-100 text-amber-800 border-amber-300",
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 mx-auto bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20"
        >
          <Sparkles className="text-amber-500" size={32} />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Bát Tự Tứ Trụ</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Phân tích lá số Tử Bình qua 4 trụ (Năm, Tháng, Ngày, Giờ) để tìm ra sự mất cân bằng trong Ngũ Hành, từ đó có phương pháp cải vận phù hợp.
        </p>
      </div>

      <div className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-md p-8 rounded-[2rem] border-2 border-stone-100 dark:border-stone-700 shadow-xl shadow-stone-900/5 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2 flex items-center gap-2">
              <Calendar size={16} /> Ngày sinh (Dương lịch)
            </label>
            <input
              type="date"
              value={dateStr}
              onChange={(e) => setDateStr(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2 flex items-center gap-2">
              <Clock size={16} /> Giờ sinh
            </label>
            <input
              type="time"
              value={timeStr}
              onChange={(e) => setTimeStr(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
            />
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
            <Sparkles size={18} />
          )}
          {isCalculating ? "ĐANG LẬP LÁ SỐ..." : "AN LÁ SỐ BÁT TỰ"}
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
            {/* Tứ Trụ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "TRỤ GIỜ", data: result.hour },
                { label: "TRỤ NGÀY", data: result.day },
                { label: "TRỤ THÁNG", data: result.month },
                { label: "TRỤ NĂM", data: result.year },
              ].map((tru, idx) => (
                <motion.div
                  key={tru.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border border-stone-100 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 shadow-sm text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-100/50 dark:to-stone-900/50 pointer-events-none" />
                  <div className="text-xs font-bold tracking-widest text-stone-500 mb-4">{tru.label}</div>
                  
                  <div className="space-y-4 relative z-10">
                    <div>
                      <div className="text-2xl font-serif font-bold text-amber-500 mb-1">{tru.data.can}</div>
                      <div className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full inline-block border ${hanhColors[tru.data.canHanh]} bg-opacity-20`}>
                        {tru.data.canHanh}
                      </div>
                    </div>
                    
                    <div className="w-8 h-px bg-stone-800 mx-auto" />
                    
                    <div>
                      <div className="text-2xl font-serif font-bold text-stone-200 mb-1">{tru.data.chi}</div>
                      <div className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full inline-block border ${hanhColors[tru.data.chiHanh]} bg-opacity-20`}>
                        {tru.data.chiHanh}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Radar & Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl border border-stone-100 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
                <h3 className="text-lg font-serif font-bold mb-6 text-amber-500">Bản Đồ Ngũ Hành</h3>
                <RadarChart data={result.nguHanhCount} />
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-stone-100 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 shadow-sm h-full">
                  <h3 className="text-lg font-serif font-bold mb-6 text-amber-500">Phân Tích Vượng Khuyết</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">Ngũ Hành Thiếu (Khuyết)</h4>
                      {result.khuyet.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {result.khuyet.map(h => (
                            <span key={`k-${h}`} className={`px-3 py-1 rounded-lg text-sm font-medium border ${hanhColors[h]} bg-opacity-20`}>
                              Khuyết {h}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-stone-500 text-sm">Bát tự tương đối đầy đủ các hành, không bị khuyết.</p>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">Ngũ Hành Thừa (Vượng)</h4>
                      {result.vuong.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {result.vuong.map(h => (
                            <span key={`v-${h}`} className={`px-3 py-1 rounded-lg text-sm font-medium border ${hanhColors[h]} bg-opacity-20`}>
                              Vượng {h}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-stone-500 text-sm">Không có hành nào quá vượng, các khí khá cân bằng.</p>
                      )}
                    </div>

                    <div className="p-4 bg-stone-900/50 rounded-xl border border-stone-800">
                      <h4 className="text-sm font-bold text-amber-500 mb-2">Lời khuyên cải vận (Dụng Thần)</h4>
                      <p className="text-sm text-stone-400 leading-relaxed">
                        {result.khuyet.length > 0 
                          ? `Bản mệnh đang khuyết ${result.khuyet.join(", ")}. Trong cuộc sống hàng ngày nên bổ sung các yếu tố thuộc hành này qua màu sắc trang phục, hướng làm việc hoặc nghề nghiệp để cân bằng năng lượng.`
                          : `Lá số khá cân bằng. Tuy nhiên, hành ${result.vuong.join(", ")} đang hơi vượng, nên hạn chế các màu sắc/hoạt động thuộc hành này để tránh năng lượng bị thái quá, sinh ra xung khắc.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
