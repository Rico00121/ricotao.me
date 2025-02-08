'use client';

import { SiGmail, SiLinkedin } from 'react-icons/si';
import { FaPhoneAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      alert('Send successfully!');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Send failed', error);
      alert('Send failed, please try again later');
    }
  };

  return (
    <section className="mb-24" id="contact">
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 h-full">
        {/* 联系表单 */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-2">Send me a message</h3>
          <form 
            className="flex-1 flex flex-col space-y-8" 
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="contact_number" value={Date.now().toString()} />
            <div>
              <label htmlFor="user_name" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
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