import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold">RICOTAO.ME</div>
          {/* 在移动端显示汉堡菜单按钮 */}
          <div className="hidden">
            <button className="sm:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* 导航链接 */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            <a href="https://rico00121.github.io/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a>
            
            <ThemeToggle />
            
            <a 
              href="https://drive.google.com/drive/folders/1wFAM8sht5CZWxmehGYnEjV7Hk9mcciSO?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 dark:bg-blue-700 w-full sm:w-auto px-5 py-1.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 