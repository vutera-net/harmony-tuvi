"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Compass, Calendar as CalendarIcon, Home as HomeIcon, Sparkles } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Trang chủ", icon: <HomeIcon size={20} />, exact: true },
    { path: "/calendar", label: "Xem ngày", icon: <CalendarIcon size={20} />, exact: false },
    { path: "/tu-vi", label: "Tử Vi", icon: <Sparkles size={20} />, exact: false },
    { path: "/bat-trach", label: "Hướng nhà", icon: <Compass size={20} />, exact: false },
  ];

  const isActive = (path: string, exact: boolean) =>
    exact ? pathname === path : pathname === path || pathname.startsWith(path + "/");

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <header className="sticky top-0 z-50 glass border-b px-6 py-4 flex justify-between items-center transition-colors">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--foreground)] flex items-center justify-center">
            <span className="text-amber-400 font-serif font-bold text-xl leading-none">A</span>
          </div>
          <h1 className="text-xl font-serif font-bold tracking-tight text-[var(--foreground)]">
            An <span className="text-amber-600">Mệnh</span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${isActive(item.path, item.exact) ? "text-amber-600 font-bold" : "text-stone-500 hover:text-amber-600"
                } transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="btn-zen text-xs uppercase tracking-widest hidden sm:block">
          Tải App
        </button>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 text-[var(--foreground)]">{children}</main>

      <div className="md:hidden fixed bottom-6 left-6 right-6 h-16 glass rounded-2xl flex items-center justify-around px-6 border shadow-xl shadow-stone-900/5 transition-colors">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center gap-1 ${isActive(item.path, item.exact) ? "text-amber-600" : "text-stone-400 hover:text-amber-600"
              } transition-colors`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>

      <footer className="py-12 px-6 border-t border-stone-200 flex flex-col items-center text-stone-500 text-sm">
        <p className="font-serif italic mb-4">"Gìn giữ nét đẹp văn hóa tâm linh Việt."</p>
        <div className="flex gap-6 mb-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#">Về chúng tôi</a>
          <a href="#">Điều khoản</a>
          <a href="#">Bảo mật</a>
        </div>
        <p>© 2026 An Mệnh. All rights reserved.</p>
      </footer>
    </div>
  );
}
