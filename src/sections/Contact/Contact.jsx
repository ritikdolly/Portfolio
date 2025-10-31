import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
    },
    exit: { opacity: 0, y: -100, scale: 0.95, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      className="relative py-32 px-6 sm:px-10 mx-6 sm:mx-12 rounded-[36px]
                 bg-gradient-to-b from-white/60 via-white/30 to-transparent 
                 dark:from-gray-900/60 dark:via-gray-900/30 dark:to-transparent
                 border border-gray-300/30 dark:border-gray-700/40
                 backdrop-blur-3xl shadow-[0_12px_60px_rgba(0,0,0,0.1)]
                 text-center overflow-hidden"
    >
      {/* Floating Apple-style glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                        bg-blue-500/10 blur-[140px] rounded-full" />
      </motion.div>

      {/* Header */}
      <motion.h2
        className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-6 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.05,
          textShadow: "0 0 20px rgba(59,130,246,0.5)",
        }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-lg mb-14 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Have a project in mind or just want to say hi?  
        I’d love to hear from you — drop your message below!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        action="https://formspree.io/f/mldobyrd"
        method="POST"
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/60 dark:bg-gray-800/50 
                   border border-gray-300/30 dark:border-gray-700/30
                   rounded-[28px] p-10 backdrop-blur-2xl 
                   shadow-[0_12px_45px_rgba(0,0,0,0.1)] 
                   transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 
                       focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
            whileFocus={{ scale: 1.03 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 
                       focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
            whileFocus={{ scale: 1.03 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            className="p-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 
                       focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            whileFocus={{ scale: 1.03 }}
          />
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject / Topic"
            className="p-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 
                       focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            whileFocus={{ scale: 1.03 }}
          />
        </div>

        <motion.select
          name="reason"
          className="w-full mt-6 p-4 rounded-xl bg-transparent border text-gray-400  border-gray-300 dark:border-gray-700 dark:text-gray-450 
                     focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          whileFocus={{ scale: 1.03 }}
        >
          <option value="">Select reason for contact</option>
          <option value="project">Project Collaboration</option>
          <option value="freelance">Freelance Work</option>
          <option value="query">General Inquiry</option>
          <option value="feedback">Feedback</option>
        </motion.select>

        <motion.textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full mt-6 p-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-700 
                     focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          required
          whileFocus={{ scale: 1.03 }}
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="mt-8 w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-500
                     text-white font-medium rounded-2xl shadow-lg 
                     hover:from-blue-700 hover:to-blue-600 transition-all"
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 35px rgba(37,99,235,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {sent ? "Message Sent ✅" : "Send Message"}
        </motion.button>

        {sent && (
          <motion.p
            className="text-green-600 dark:text-green-400 font-medium mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully!
          </motion.p>
        )}
      </motion.form>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center mt-16 space-x-8 text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: false }}
      >
        {[
          {
            href: "https://github.com/ritikdolly",
            icon: "fa-brands fa-github",
          },
          {
            href: "https://linkedin.com/in/ritik-kumar-0a2728192/",
            icon: "fa-brands fa-linkedin",
          },
          {
            href: "mailto:ritik409kumar@gmail.com",
            icon: "fa-solid fa-envelope",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            whileHover={{
              scale: 1.3,
              rotate: 3,
              y: -5,
              textShadow: "0 0 15px rgba(37,99,235,0.8)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={item.icon}></i>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Contact;
