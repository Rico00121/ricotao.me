'use client'

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from './ThemeToggle';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  // 控制菜单弹出时禁止页面滚动
  if (typeof window !== "undefined") {
    document.body.style.overflow = open ? "hidden" : "";
  }

  return (
    <>
      {/* 汉堡按钮 */}
      <button
        className="md:hidden p-2 z-50 relative"
        onClick={() => setOpen(!open)}
        aria-label="Open Menu"
      >
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* 遮罩和菜单 */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* 半透明遮罩 */}
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          onClick={() => setOpen(false)}
        />
        {/* 菜单内容：顶部下拉 */}
        <nav
          className={`fixed top-0 left-0 w-screen h-screen z-[9999] bg-white dark:bg-[#1a1b26] shadow-lg transform transition-transform duration-300
            ${open ? "translate-y-0" : "-translate-y-full"}
            flex flex-col justify-center items-center space-y-8`}
        >
          <a href="#about" className="text-lg font-medium" onClick={() => setOpen(false)}>About</a>
          <a href="#experience" className="text-lg font-medium" onClick={() => setOpen(false)}>Experience</a>
          <a href="#skills" className="text-lg font-medium" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" className="text-lg font-medium" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="text-lg font-medium" onClick={() => setOpen(false)}>Contact</a>
          <a href="https://rico00121.github.io/blog/" target="_blank" rel="noopener noreferrer" className="block py-2" onClick={() => setOpen(false)}>Blog</a>
          
          <ThemeToggle />
        </nav>
      </div>
    </>
  );
}
