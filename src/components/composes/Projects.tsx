import ProjectItem from "./ProjectItem";

export default function Projects() {
  const projects = [
    {
      title: "Coldpilot",
      description: "Coldpilot is an AI-powered cold room monitoring system that provides real-time temperature tracking, intelligent alerts, and energy optimization. It helps businesses ensure product safety, reduce losses, and improve operational efficience. ",
      imageSrc: "/projects/coldpilot.png",
      tags: ["React Native", "Spring Boot","EMQX", "Redis", "PostgreSQL", "Docker", "Kotlin", "Typescript"],
    },
    {
      title: "Cloud-Native Sock Shop",
      description: "Deployed the open-source Sock-Shop application on a self-built Kubernetes cluster using Terraform and AWS, ensuring scalability, high concurrency, and observability with Prometheus and EFK.",
      imageSrc: "/projects/sock-shop.png",
      tags: ["AWS", "Kubernetes", "Docker", "Terraform", "EFK", "Prometheus"],
      url: "https://github.com/Rico00121/sct-final-project",
    },
    {
      title: "Tiny Text Editor",
      description: "Built a lightweight text editor with a Java kernel and an Electron UI, featuring custom text operations and a seamless frontend-backend interaction system.",
      imageSrc: "/projects/tiny-editor.png",
      tags: ["Java", "Electron", "React"],
      url: "https://github.com/Rico00121/tiny-text-editor",
    },
    {
      title: "Smart Museum",
      description: "An AI tour guide application powered by TongyiQwen LLM. It allows visitors to easily access artifact information and engage in in-depth interactive Q&A with AI, providing a personalized and interactive experience.",
      imageSrc: "/projects/museum.png",
      tags: ["Python", "Flask", "UniApp", "Vue.js", "TinyDB"],
      url: "https://github.com/smart-guide-x/smart-museum",
    },
  ];

  return (
    <section className="mb-24" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-16 text-center max-w-2xl mx-auto">
          Here are some of my notable projects that showcase my skills and experience
        </p>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              {...project}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 