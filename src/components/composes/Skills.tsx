import { 
  FaAws, 
  FaJava, 
  FaPython, 
  FaDocker, 
  FaReact, 
} from "react-icons/fa";
import { 
  SiKotlin, 
  SiFlask, 
  SiJavascript, 
  SiMysql, 
  SiPostgresql,
  SiKubernetes,
  SiSpring,
  SiReactivex,
} from "react-icons/si";

{/* 硬技能展示 */}
export default function Skills() {
  return (
    <section className="mb-24" id="skills">
      <h2 className="text-3xl font-bold mb-8">Technologies I Work With</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {/* Cloud & Infrastructure */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <FaAws size={48} className="text-[#FF9900]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">AWS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <SiKubernetes size={48} className="text-[#326CE5]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">Kubernetes</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <FaJava size={48} className="text-[#007396]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">Java</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <SiKotlin size={48} className="text-[#7F52FF]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">Kotlin</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <SiSpring size={48} className="text-[#6DB33F]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">Spring</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <FaPython size={48} className="text-[#4B8BBE] dark:text-[#3776AB]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">Python</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <SiFlask size={48} className="text-[#465362] dark:text-[#FFFFFF]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">Flask</span>
        </div>

        {/* Web Technologies */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <SiJavascript size={48} className="text-[#F7DF1E]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">JavaScript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <SiReactivex size={48} className="text-[#B7178C]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">RxJs</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <FaReact size={48} className="text-[#61DAFB]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">React</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <SiMysql size={48} className="text-[#4479A1]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">MySQL</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <SiPostgresql size={48} className="text-[#336791]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">PostgreSQL</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <FaDocker size={48} className="text-[#2496ED]" />
          </div>
          <span className="text-gray-600 dark:text-gray-300">Docker</span>
        </div>    
      </div>
    </section>
  );
} 