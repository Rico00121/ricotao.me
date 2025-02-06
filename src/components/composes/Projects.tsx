import Image from "next/image";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Cloud-Native Application",
      description: "A microservices-based application deployed on AWS",
      imageSrc: "/sock-shop.jpg",
      tags: ["AWS", "Kubernetes", "Docker"],
      url: "https://github.com/Rico00121/sct-final-project",
    },
    {
      title: "Coldpilot",
      description: "IoT-based application for monitoring and controlling temperature and humidity in a warehouse",
      imageSrc: "/projects/project2.jpg",
      tags: ["Python", "React", "PostgreSQL"],

    },
  ];

  return (
    <section className="mb-24" id="projects">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        Here are some of my notable projects that showcase my skills and experience
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
} 