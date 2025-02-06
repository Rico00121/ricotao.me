import {
  FaAws,
  FaDocker,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiKotlin,
  SiFlask,
  SiKubernetes,
  SiSpring,
  SiReactivex,
  SiNextdotjs,
} from "react-icons/si";
import SkillIcon from './SkillIcon';

{/* 硬技能展示 */ }
export default function Skills() {
  return (
    <section className="mb-24" id="skills">
      <h2 className="text-3xl font-bold mb-8">Technologies I Work With</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <SkillIcon icon={FaAws} name="AWS" color="text-[#FF9900]" />
        <SkillIcon imageSrc="/azure.png" name="Azure" />
        <SkillIcon imageSrc="/ali-cloud.svg" name="Alibaba Cloud" />
        <SkillIcon icon={SiKubernetes} name="Kubernetes" color="text-[#326CE5]" />
        <SkillIcon imageSrc="/terraform.svg" name="Terraform" />
        <SkillIcon icon={FaDocker} name="Docker" color="text-[#2496ED]" />
        <SkillIcon icon={SiSpring} name="Spring" color="text-[#6DB33F]" />
        <SkillIcon imageSrc="/java.svg" name="Java" />
        <SkillIcon icon={SiKotlin} name="Kotlin" color="text-[#7F52FF]" />
        <SkillIcon imageSrc="/redis.svg" name="Redis" />
        <SkillIcon imageSrc="/emqx.svg" name="EMQX" />
        <SkillIcon imageSrc="/mysql.svg" name="MySQL" />
        <SkillIcon imageSrc="/postgresql.svg" name="PostgreSQL" />
        <SkillIcon icon={FaGithub} name="Github Actions" />
        <SkillIcon imageSrc="/jenkins.svg" name="Jenkins" />
        <SkillIcon imageSrc="/pactflow.png" name="PactFlow" />
        <SkillIcon imageSrc="/datadog.svg" name="Dotadog" />
        <SkillIcon imageSrc="/blackduck.png" name="Black Duck" />
        <SkillIcon icon={SiFlask} name="Flask" color="text-[#465362] dark:text-[#FFFFFF]" />
        <SkillIcon imageSrc="/python.svg" name="Python" />
        <SkillIcon icon={SiNextdotjs} name="Next.js" />
        <SkillIcon imageSrc="/javascript.svg" name="Javascript" />
        <SkillIcon imageSrc="/typescript.svg" name="Typescript" />
        <SkillIcon icon={FaReact} name="React" color="text-[#61DAFB]" />
        <SkillIcon imageSrc="/angular.svg" name="Angular" />
        <SkillIcon icon={SiReactivex} name="RxJs" color="text-[#B7178C]" />
      </div>
    </section>
  );
} 