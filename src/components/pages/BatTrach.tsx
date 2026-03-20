"use client";
import React, { useState, useEffect } from "react";
import { Compass, Info, Sparkles, MapPin } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { motion, AnimatePresence } from "framer-motion";

type CungPhi = "Khảm" | "Khôn" | "Chấn" | "Tốn" | "Càn" | "Đoài" | "Cấn" | "Ly";

export default function BatTrach() {
  const { profile } = useUser();
  const [year, setYear] = useState<number>(1990);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState<{ cung: CungPhi; huong: string; mo_ta: string } | null>(null);

  useEffect(() => {
    if (profile) {
      if (profile.birthDate) {
        setYear(new Date(profile.birthDate).getFullYear());
      }
      setGender(profile.gender || "male");
    }
  }, [profile]);

  const calculateBatTrach = () => {
    // Basic calculation for Bát Trạch (Simplified for demo)
    // Cung phi is calculated based on year sum
    const yearString = year.toString();
    const sum = yearString.split("").reduce((acc, char) => acc + parseInt(char), 0);
    const remainder = sum % 9;
    
    let cung: CungPhi = "Khảm";
    
    if (gender === "male") {
      const maleCungMap: Record<number, CungPhi> = { 1: "Khảm", 2: "Khôn", 3: "Chấn", 4: "Tốn", 5: "Khôn", 6: "Càn", 7: "Đoài", 8: "Cấn", 0: "Ly" };
      cung = maleCungMap[remainder] || "Khảm";
    } else {
      const femaleCungMap: Record<number, CungPhi> = { 1: "Cấn", 2: "Càn", 3: "Đoài", 4: "Cấn", 5: "Tốn", 6: "Ly", 7: "Khảm", 8: "Khôn", 0: "Chấn" };
      cung = femaleCungMap[remainder] || "Cấn";
    }

    const directionMap: Record<CungPhi, { huong: string; mo_ta: string }> = {
      "Khảm": { huong: "Đông Nam, Đông, Nam, Bắc", mo_ta: "Người thuộc Đông Tứ Mệnh. Hướng tốt nhất là Đông Nam (Sinh Khí)." },
      "Khôn": { huong: "Tây Bắc, Đông Bắc, Tây, Tây Nam", mo_ta: "Người thuộc Tây Tứ Mệnh. Hướng tốt nhất là Đông Bắc (Sinh Khí)." },
      "Chấn": { huong: "Nam, Bắc, Đông Nam, Đông", mo_ta: "Người thuộc Đông Tứ Mệnh. Hướng tốt nhất là Nam (Sinh Khí)." },
      "Tốn": { huong: "Bắc, Nam, Đông, Đông Nam", mo_ta: "Người thuộc Đông Tứ Mệnh. Hướng tốt nhất là Bắc (Sinh Khí)." },
      "Càn": { huong: "Tây, Tây Nam, Tây Bắc, Đông Bắc", mo_ta: "Người thuộc Tây Tứ Mệnh. Hướng tốt nhất là Tây (Sinh Khí)." },
      "Đoài": { huong: "Tây Bắc, Đông Bắc, Tây, Tây Nam", mo_ta: "Người thuộc Tây Tứ Mệnh. Hướng tốt nhất là Tây Bắc (Sinh Khí)." },
      "Cấn": { huong: "Tây Nam, Tây, Tây Bắc, Đông Bắc", mo_ta: "Người thuộc Tây Tứ Mệnh. Hướng tốt nhất là Tây Nam (Sinh Khí)." },
      "Ly": { huong: "Đông, Đông Nam, Bắc, Nam", mo_ta: "Người thuộc Đông Tứ Mệnh. Hướng tốt nhất là Đông (Sinh Khí)." },
    };

    setResult({ cung, ...directionMap[cung] });
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-stone-900/10">
          <Compass className="text-amber-400" size={32} />
        </div>
        <h2 className="text-4xl font-serif font-bold mb-4">La Bàn Bát Trạch</h2>
        <p className="text-stone-500">Xác định cung phi, mệnh quái và tìm hướng nhà, hướng bếp đại cát.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border-2 border-stone-200">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Info size={18} className="text-amber-600" />
            Thông tin chủ sự
          </h3>
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">Năm sinh (Dương lịch)</label>
              <input 
                type="number" 
                value={year || ""}
                onChange={(e) => setYear(parseInt(e.target.value) || 0)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">Giới tính</label>
              <div className="flex gap-4">
                <button 
                  onClick={() => setGender("male")}
                  className={`flex-1 py-3 rounded-xl border transition-all ${gender === "male" ? 'bg-stone-900 text-white border-stone-900' : 'bg-white border-stone-200 text-stone-600'}`}
                >Nam</button>
                <button 
                  onClick={() => setGender("female")}
                  className={`flex-1 py-3 rounded-xl border transition-all ${gender === "female" ? 'bg-stone-900 text-white border-stone-900' : 'bg-white border-stone-200 text-stone-600'}`}
                >Nữ</button>
              </div>
            </div>
            <button 
              onClick={calculateBatTrach}
              className="w-full btn-zen py-4 text-sm font-bold tracking-widest flex items-center justify-center gap-2 group"
            >
              Tra Cứu Hướng <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center min-h-[400px]">
          {result ? (
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="relative inline-block mb-8">
                <motion.div 
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  className="w-56 h-56 rounded-full border-2 border-stone-200 flex flex-col items-center justify-center bg-white shadow-2xl relative overflow-hidden"
                >
                   {/* Compass Markings */}
                   <div className="absolute inset-0 border-[1px] border-stone-100 rounded-full scale-95 border-dashed"></div>
                   <div className="absolute top-2 font-bold text-[10px] text-red-500">N</div>
                   <div className="absolute bottom-2 font-bold text-[10px] text-stone-400">S</div>
                   <div className="absolute right-2 font-bold text-[10px] text-stone-400">E</div>
                   <div className="absolute left-2 font-bold text-[10px] text-stone-400">W</div>
                   
                   <motion.div 
                    animate={{ rotate: result.cung === "Khảm" ? 0 : result.cung === "Ly" ? 180 : 90 }} 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                   >
                      <div className="w-1 h-32 bg-gradient-to-b from-red-500 via-stone-200 to-stone-400 rounded-full relative">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rotate-45"></div>
                      </div>
                   </motion.div>

                   <div className="z-10 bg-white/80 backdrop-blur-md p-4 rounded-full flex flex-col items-center shadow-lg border border-stone-100">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Cung Phi</span>
                      <span className="text-4xl font-serif font-bold text-amber-600 leading-none">{result.cung}</span>
                   </div>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">Các hướng tốt:</h4>
                  <p className="text-amber-700 font-bold text-lg">{result.huong}</p>
                  <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full mt-3"></div>
                </div>
                
                <p className="text-stone-600 leading-relaxed px-4">
                  {result.mo_ta} Với mệnh này, bạn nên đặt hướng bàn làm việc hoặc hướng nhà về các cung Tài Lộc để đón nhận vượng khí.
                </p>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 flex items-start gap-3 text-left">
                  <MapPin className="text-amber-600 shrink-0" size={18} />
                  <p className="text-amber-800 text-xs font-medium leading-relaxed">
                    Lời khuyên: Kê giường ngủ hướng về cung Phục Vị giúp tâm trí tĩnh lặng, giấc ngủ sâu và bình an.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4 opacity-30">
              <Compass size={100} className="mx-auto text-stone-300" />
              <p className="font-serif italic text-lg">Vui lòng nhập thông tin để xem hướng nhà...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
