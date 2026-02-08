import Image from "next/image";

export default function About() {
  return (
    <section className="mb-24" id="about">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;m Ruikang Tao, a scholarship student in the EIT Digital Master&apos;s program, currently pursuing my second year in Computer Science at 
            Aalto University, Finland, specializing in Cloud and Network Infrastructures with a minor in Innovation and Entrepreneurship.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Currently working as an Observability Engineer at Verda, a leading AI cloud infrastructure company in Helsinki, where I focus on 
            monitoring and optimizing large-scale GPU clusters and distributed AI workloads.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My journey includes two years as a Software Engineer at Thoughtworks and a cloud engineering internship at KONE, where I developed 
            expertise in cloud infrastructure, DevOps practices, and distributed systems while strengthening my communication and teamwork skills.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Passionate about technology and excellence, I thrive on tackling complex challenges in cloud infrastructure and AI systems, 
            always seeking to drive innovation and project success.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/about-me-3.jpg"
            alt="About me image"
            width={240}
            height={240}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
} 