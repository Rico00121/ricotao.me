import Image from "next/image";
import AnimatedTitle from "../AnimatedTitle";
import WavingHand from '../WavingHand';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mb-24 min-h-[calc(100vh-6rem)]">
      {/* 头像：移动端小一点，PC端正常 */}
      <div className="flex-shrink-0 order-1 md:order-2 mb-8 md:mb-0">
        <Image
          src="/avatar-3.jpg" 
          alt="personal photo"
          width={320}
          height={320}
          className="rounded-full object-cover w-40 h-40 md:w-80 md:h-80 mx-auto"
          priority
        />
      </div>

      {/* 文字介绍：移动端在下，PC端在左 */}
      <div className="flex-1 order-2 md:order-1 w-full md:w-auto text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I&apos;m{' '}
          <AnimatedTitle />
          <WavingHand />
        </h1>
        <div className="sr-only">
          Hi, I&apos;m a Software Engineer, Technical Consultant, and Problem Solver
        </div>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          A professional full stack developer with full life cycle experience in software development.
        </p>
        {/* 社交链接 */}
        <div className="flex justify-center md:justify-start gap-6 mt-8 md:mt-12">
          <a href="https://www.linkedin.com/in/ruikang-tao" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
            <SiLinkedin className="w-8 h-8 text-gray-700 dark:text-white/90" />
          </a>
          <a href="https://github.com/rico00121" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
            <SiGithub className="w-8 h-8 text-gray-700 dark:text-white/90" />
          </a>
        </div>
      </div>
    </div>
  );
} 