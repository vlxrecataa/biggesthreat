import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="h-[55rem] flex items-center justify-center relative overflow-hidden">
      
      <motion.section 
        className="w-full max-w-lg z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "50px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="w-full rounded-3xl overflow-hidden backdrop-blur-2xl bg-black/30 shadow-2xl border border-white/10 relative"
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="p-6 space-y-6">
            <motion.div 
              className="flex justify-between items-center"
              variants={fadeUpVariants}
              custom={0}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-white text-sm font-medium">Available to chat</span>
              </div>
            </motion.div>

            <motion.div 
              className="text-center space-y-2"
              variants={fadeUpVariants}
              custom={1}
            >
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <p className="text-zinc-400 text-sm">We'd love to hear from you</p>
            </motion.div>

            <form className="space-y-4">
              <motion.div
                variants={fadeUpVariants}
                custom={2}
              >
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition text-white placeholder-zinc-500"
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div
                variants={fadeUpVariants}
                custom={3}
              >
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition text-white placeholder-zinc-500"
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div
                variants={fadeUpVariants}
                custom={4}
              >
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition text-white placeholder-zinc-500"
                  placeholder="How can we help you today?"
                />
              </motion.div>
              
              <motion.div 
                className="flex justify-end"
                variants={fadeUpVariants}
                custom={5}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-black rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-black transition flex items-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </motion.button>
              </motion.div>
            </form>

            <motion.div 
              className="pt-4 border-t border-white/10 space-y-3"
              variants={fadeUpVariants}
              custom={6}
            >
              <ContactInfo icon={<MapPin className="h-5 w-5" />} text="123 Green Street, Cyan City" />
              <ContactInfo icon={<Mail className="h-5 w-5" />} text="hello@greencyan.com" />
              <ContactInfo icon={<Phone className="h-5 w-5" />} text="(123) 456-7890" isLast={true} />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

function ContactInfo({
  icon,
  text,
  isLast = false,
}: {
  icon: React.ReactNode;
  text: string;
  isLast?: boolean;
}) {
  return (
    <motion.div 
      className={`flex items-center space-x-3 py-2 ${!isLast ? "border-b border-white/10" : ""}`}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
        {icon}
      </div>
      <span className="text-zinc-300 text-sm">{text}</span>
    </motion.div>
  );
}

export default Contact;