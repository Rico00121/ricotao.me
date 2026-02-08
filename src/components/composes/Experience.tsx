export default function Experience() {
  return (
    <section className="mb-24">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-blue-600 dark:border-blue-500">
              <h3 className="text-xl font-semibold">Master of Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Specializing in Cloud and Network Infrastructures
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Minor in Innovation and Entrepreneurship
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Aalto University • Université de Rennes
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2024 - Jun 2026</p>
            </div>
            <div className="relative pl-6 border-l-2 border-blue-600 dark:border-blue-500">
              <h3 className="text-xl font-semibold">Bachelor of Software Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Specializing in Information Processing Science
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Honours Graduate
              </p>
              <p className="text-gray-500 dark:text-gray-400">University of Oulu</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2018 - Jun 2022</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-blue-600 dark:border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Verda</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400">Observability Engineer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jan 2026 - Present</p>

              <div className="flex flex-wrap gap-2 mt-2"> 
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Observability</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Monitoring</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">AI Infrastructure</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">GPU Clusters</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Cloud Platform</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Performance Optimization</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Distributed Systems</span>
              </div>
            </div>
            
            <div className="relative pl-6 border-l-2 border-blue-600 dark:border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">KONE</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400">Cloud Engineer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">May 2025 - Aug 2025</p>

              <div className="flex flex-wrap gap-2 mt-2"> 
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Cloud Infrastructure</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Serverless</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">AWS</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Infrastructure as Code</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">IoT</span>
              </div>
            </div>
            
            <div className="relative pl-6 border-l-2 border-blue-600 dark:border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Thoughtworks Inc.</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400">Software Engineer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jun 2022 - Aug 2024</p>

              <div className="flex flex-wrap gap-2 mt-2"> 
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Agile</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Test-Driven Development</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">DevOps</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Domain-Driven Design</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">CI/CD</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Clean Code</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Architectural Design</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Distributed System</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Microservices</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Empathy</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Problem solving</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Teamwork</span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">Communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 