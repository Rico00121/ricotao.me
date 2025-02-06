import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="mb-24" id="contact">
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 h-full">
        {/* 联系表单 */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-8">Send me a message</h3>
          <form className="flex-1 flex flex-col space-y-8" action="https://formspree.io/f/your-form-id" method="POST">
            <div>
              <label htmlFor="name" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 联系方式 */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
          <div className="flex-1 flex flex-col space-y-4">
            <a href="mailto:ruikang.tao21@gmail.com" 
               className="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full">
              <SiGmail className="w-8 h-8 text-gray-700 dark:text-white/90" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-gray-600 dark:text-gray-300">ruikang.tao21@gmail.com</div>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/ruikang-tao" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full">
              <SiLinkedin className="w-8 h-8 text-gray-700 dark:text-white/90" />
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-gray-600 dark:text-gray-300">linkedin.com/in/ruikang-tao</div>
              </div>
            </a>

            <a href="tel:+33 07 48 51 05 35" 
               className="flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full">
              <FaPhoneAlt className="w-8 h-8 text-gray-700 dark:text-white/90" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-gray-600 dark:text-gray-300">+33 07 48 51 05 35</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 