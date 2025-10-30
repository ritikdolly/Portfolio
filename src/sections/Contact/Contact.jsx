import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <motion.section
      id="contact"
      className="py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6"
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 10px rgba(37,99,235,0.7)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Have a question, project idea, or collaboration in mind?  
          Fill out the form below and I’ll get back to you soon!
        </motion.p>

        <motion.form
          action="https://formspree.io/f/mldobyrd"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-gray-900/70 p-8 rounded-2xl shadow-lg backdrop-blur-sm relative"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Name, Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          {/* Phone, Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="text"
              name="subject"
              placeholder="Subject / Topic"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          {/* Dropdown for Inquiry Type */}
          <motion.select
            name="reason"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">Select reason for contact</option>
            <option value="project">Project Collaboration</option>
            <option value="freelance">Freelance Work</option>
            <option value="query">General Inquiry</option>
            <option value="feedback">Feedback</option>
          </motion.select>

          {/* Budget Input (optional) */}
          <motion.input
            type="text"
            name="budget"
            placeholder="Estimated Budget (optional)"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            whileFocus={{ scale: 1.02 }}
          />

          {/* Message Box */}
          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            required
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(37,99,235,0.6)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            {sent ? "Sent ✅" : "Send Message"}
          </motion.button>

          {/* Confirmation Message */}
          {sent && (
            <motion.p
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-green-600 dark:text-green-400 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center mt-14 space-x-8 text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
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
                rotate: 10,
                y: -5,
                textShadow: "0 0 12px rgba(37,99,235,0.8)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={item.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
