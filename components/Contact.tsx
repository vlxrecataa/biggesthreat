import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 z-30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-white mb-8 text-center">
          Get in Touch
        </h2>
        
        <div className="p-[1px] bg-gradient-to-br from-white to-[#0c0d0d] rounded-lg relative overflow-hidden">
          
          <div className="z-[1] w-full h-full rounded-[9px] border border-[#202222] bg-gradient-to-br from-[#444444] to-[#0c0d0d] p-8 relative text-white backdrop-blur-sm">
            <div className="w-[620px] h-[75px] rounded-[100px] absolute bg-[#c7c7c7] opacity-40 shadow-[0_0_50px_#fff] blur-[10px] origin-[10%] top-4 -left-4 rotate-[40deg]">
            </div>
            {isSubmitted ? (
              <div className="text-center py-8">
                <p className="text-white text-xl mb-2">Message sent!</p>
                <p className="text-gray-300">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#1c1d1d] border border-[#3a3a3a] rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition text-white"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#1c1d1d] border border-[#3a3a3a] rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition text-white"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-[#1c1d1d] border border-[#3a3a3a] rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition text-white"
                  />
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-[#444444] to-[#222222] text-white rounded-md hover:from-[#555555] hover:to-[#333333] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0c0d0d] transition shadow-sm border border-[#3a3a3a]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>123 Green Street, Cyan City</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>hello@greencyan.com</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>(123) 456-7890</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;