import Image from "next/image";

export default function About() {
  return (
    <section className="mb-24" id="about">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;m Ruikang Tao, a scholarship student in the EIT Digital Master&apos;s program, currently pursuing my first year in Computer Science at the
            University of Rennes, France, and will continue my second year at the University of Aalto, Finland.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Previously, I worked as a Software
            Engineer at Thoughtworks for two years, where I honed my technical expertise and developed strong soft skills, including clear
            communication of complex technical concepts and effective teamwork.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Passionate about technology and excellence, I thrive on
            tackling new challenges and driving project success.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/about-me.jpg"
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