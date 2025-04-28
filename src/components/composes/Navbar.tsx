import ThemeToggle from '../ThemeToggle';
import HamburgerMenu from "@/components/HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1a1b26]/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">RICOTAO.ME</a>

        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          <a href="https://rico00121.github.io/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a>
          
          <ThemeToggle />
        </div>

        {/* 移动端汉堡菜单 */}
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar; 