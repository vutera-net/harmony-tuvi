"use client";
import React, { useState } from "react";
import { ArrowRight, Sparkles, Moon, Sun, Scale, Compass, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { profile, saveProfile } = useUser();
  const [showSetup, setShowSetup] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const handleSave = () => {
    if (nameInput) {
      saveProfile({ name: nameInput, birthDate: "1990-01-01", gender: "male" });
      setShowSetup(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="text-center mb-20 relative pt-10">
        <div className="absolute top-0 right-0 p-4">
           {profile ? (
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-stone-100 shadow-sm">
                <span className="text-sm font-medium">Chào, {profile.name}</span>
                <Sparkles size={16} className="text-amber-500" />
             </div>
           ) : (
             <button 
               onClick={() => setShowSetup(true)}
               className="text-stone-400 hover:text-amber-600 transition-colors"
             >
               <UserCircle2 size={24} />
             </button>
           )}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles size={14} />
          <span>Vận trình 2026 rực rỡ</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-950 mb-6 leading-[1.1]">
          {profile ? `Hữu duyên, ${profile.name}` : "Thấu hiểu Vận Mệnh"}<br />
          <span className="gold-gradient">Kiến tạo Bình An</span>
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ứng dụng phong thủy, tử vi theo triết lý Zen hiện đại. Đưa ra những lời khuyên sâu sắc, giúp bạn đón lành tránh dữ và cân bằng dòng năng lượng trong cuộc sống.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/can-xuong" className="btn-zen flex items-center justify-center gap-2 group">
            Xem tử vi trọn đời <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/bat-trach" className="px-8 py-3 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors">
            Khám phá Phong thủy
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <FeatureCard href="/calendar" icon={<Moon className="text-amber-600" />} title="Lịch Vạn Niên" desc="Tra cứu ngày lành tháng tốt, giờ hoàng đạo cho đại sự." />
        <FeatureCard href="/can-xuong" icon={<Scale className="text-amber-600" />} title="Cân Xương Đoán Số" desc="Luận đoán sang hèn qua lượng chỉ ngày giờ sinh." />
        <FeatureCard href="/bat-trach" icon={<Compass className="text-amber-600" />} title="Bát Trạch" desc="Tối ưu hướng nhà, hướng bếp cho gia chủ thịnh vượng." />
        <FeatureCard href="/" icon={<Sun className="text-amber-600" />} title="Tử Vi Hàng Ngày" desc="Thông điệp tâm linh và năng lượng tích cực mỗi sáng." />
      </section>

      <AnimatePresence>
        {showSetup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl"
            >
              <h3 className="text-3xl font-serif font-bold mb-2">Chào bạn mới</h3>
              <p className="text-stone-500 mb-8 whitespace-pre-wrap">Hãy cho chúng tôi biết tên để trải nghiệm cá nhân hóa hơn.</p>
              
              <div className="space-y-6">
                <input 
                  type="text"
                  placeholder="Họ tên của bạn"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 focus:border-amber-500 outline-none transition-all text-lg"
                />
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowSetup(false)}
                    className="flex-1 py-4 text-stone-400 font-medium"
                  >
                    Bỏ qua
                  </button>
                  <button 
                    onClick={handleSave}
                    className="flex-[2] btn-zen py-4 text-sm font-bold tracking-widest"
                  >
                    Bắt đầu
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc, href }: { icon: React.ReactNode; title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="p-8 rounded-3xl border transition-all group block text-left" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
      <div className="w-12 h-12 rounded-2xl bg-stone-50 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </Link>
  );
}
