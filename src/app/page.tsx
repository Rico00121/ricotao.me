import Navbar from '@/components/composes/Navbar'
import Hero from '@/components/composes/Hero';
import About from '@/components/composes/About';
import Experience from '@/components/composes/Experience';
import Skills from '@/components/composes/Skills';
import Projects from '@/components/composes/Projects';
import Contact from '@/components/composes/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1b26] text-gray-900 dark:text-white p-4 sm:p-6 md:p-8">
      {/* 添加最大宽度容器 */}
      <div className="max-w-5xl mx-auto">
        {/* 导航栏 */}
        <Navbar />

        {/* 主要内容区域 */}
        <main className="max-w-4xl mx-auto px-4 pt-16">
          {/* 个人介绍区域 */}
          <Hero />

          {/* About Me 部分 */}
          <About />

          {/* Education & Experience 部分 */}
          <Experience />

          {/* Skills 部分 */}
          <Skills />

          {/* Projects 部分 */}
          <Projects />

          {/* Contact 部分 */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
