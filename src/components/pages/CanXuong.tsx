"use client";
import React, { useState, useEffect } from "react";
import { calculateCanXuong } from "@/lib/lunar-logic";
import { Scale, Info, Sparkles, UserCheck } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CanXuong() {
  const { profile } = useUser();
  const [formData, setFormData] = useState({
    year: 1990,
    month: 1,
    day: 1,
    hour: 0,
  });
  const [result, setResult] = useState<{ luong: number; chi: number; total: string; reading?: string } | null>(null);

  useEffect(() => {
    if (profile && profile.birthDate) {
      const date = new Date(profile.birthDate);
      setFormData(prev => ({
        ...prev,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }));
    }
  }, [profile]);

  const hours = [
    "Tý (23h-01h)", "Sửu (01h-03h)", "Dần (03h-05h)", "Mão (05h-07h)",
    "Thìn (07h-09h)", "Tỵ (09h-11h)", "Ngọ (11h-13h)", "Mùi (13h-15h)",
    "Thân (15h-17h)", "Dậu (17h-19h)", "Tuất (19h-21h)", "Hợi (21h-23h)",
  ];

  const handleCalculate = () => {
    const res = calculateCanXuong(formData.year, formData.month, formData.day, formData.hour);
    setResult(res);
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-stone-900/10">
          <Scale className="text-amber-400" size={32} />
        </div>
        <h2 className="text-4xl font-serif font-bold mb-4">Cân Xương Đoán Số</h2>
        <p className="text-stone-500">Dựa vào ngày giờ sinh để luận giải mức độ sang hèn, phúc lộc trong đời.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border-2 border-stone-200">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="text-amber-600">
              <Info size={18} />
            </span>
            Thông tin ngày sinh
          </h3>
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">
                Năm sinh (Âm lịch)
              </label>
              <input
                type="number"
                value={formData.year || ""}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setFormData({ ...formData, year: isNaN(val) ? 0 : val });
                }}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
              />
            </div>
            <button
              onClick={handleCalculate}
              className="w-full btn-zen py-4 text-sm font-bold tracking-widest flex items-center justify-center gap-2 group"
            >
              Luận Giải <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="relative inline-block mb-8">
                  <div className="w-40 h-40 rounded-full border-4 border-amber-200 flex flex-col items-center justify-center bg-white shadow-2xl shadow-amber-500/10">
                    <span className="text-5xl font-serif font-bold text-amber-600 leading-none">{result.total}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mt-2">Lượng Chỉ</span>
                  </div>
                </div>
                <h4 className="text-2xl font-serif font-bold italic mb-4">
                  "{result.luong} Lượng {result.chi} Chỉ"
                </h4>
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100/50 italic text-stone-600 text-sm leading-relaxed">
                  {result.reading}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                className="text-center space-y-4"
              >
                <Scale size={80} className="mx-auto text-stone-300" />
                <p className="font-serif italic text-lg">Đang chờ luận giải vận mệnh...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
