import ProjectItem from "./ProjectItem";

export default function Projects() {
  const projects = [
    {
      title: "Coldpilot",
      description: "IoT-based application for monitoring and controlling temperature and humidity in a warehouse",
      imageSrc: "/projects/coldpilot.png",
      tags: ["Python", "React", "PostgreSQL"],
    },
    {
      title: "Cloud-Native Application",
      description: "A microservices-based application deployed on AWS",
      imageSrc: "/projects/sock-shop.png",
      tags: ["AWS", "Kubernetes", "Docker"],
      url: "https://github.com/Rico00121/sct-final-project",
    },
    {
      title: "Tiny Editor",
      description: "IoT-based application for monitoring and controlling temperature and humidity in a warehouse",
      imageSrc: "/projects/tiny-editor.png",
      tags: ["Python", "React", "PostgreSQL"],
    },
    {
      title: "Smart Museum",
      description: "An AI tour guide application powered by TongyiQwen LLM. It allows visitors to easily access artifact information and engage in in-depth interactive Q&A with AI, providing a personalized and immersive museum experience.",
      imageSrc: "/projects/museum.png",
      tags: ["Python", "React", "PostgreSQL"],
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