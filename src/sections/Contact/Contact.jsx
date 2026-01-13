import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        relative
        py-16 sm:py-24
        px-3 sm:px-6
        mx-2 sm:mx-4 lg:mx-12
        rounded-3xl
        bg-gradient-to-b from-white/80 via-white/50 to-transparent
        dark:from-gray-900/80 dark:via-gray-900/50 dark:to-transparent
        border border-gray-300/30 dark:border-gray-700/40
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.1)]
        text-center
        overflow-hidden
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-20 left-1/2 -translate-x-1/2
            w-[260px] sm:w-[420px]
            h-[260px] sm:h-[420px]
            bg-blue-500/10
            blur-[110px]
            rounded-full
          "
        />
      </div>

      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let’s Connect
      </motion.h2>

      {/* Info */}
      <div
        className="
          inline-flex flex-col sm:flex-row
          items-center gap-2 sm:gap-4
          mb-6 sm:mb-8
          px-3 py-2 sm:px-4 sm:py-3
          rounded-2xl
          bg-white/30 dark:bg-gray-800/30
          border border-gray-300/20 dark:border-gray-700/30
          text-xs sm:text-base
        "
      >
        <a href="mailto:ritik409kumar@gmail.com" className="hover:text-blue-600 transition">
          📧 ritik409kumar@gmail.com
        </a>
        <span className="hidden sm:block text-gray-400">|</span>
        <a href="tel:+919798904589" className="hover:text-green-600 transition">
          📞 +91 9798904589
        </a>
      </div>

      <p className="max-w-xl mx-auto text-sm sm:text-lg mb-8 sm:mb-12">
        Have a project in mind or just want to say hi?  
        I’d love to hear from you.
      </p>

      {/* Form */}
      <motion.form
        action="https://formspree.io/f/mldobyrd"
        method="POST"
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-2xl
          mx-auto
          p-5 sm:p-8
          rounded-2xl
          bg-white/80 dark:bg-gray-800/60
          border border-gray-300/30 dark:border-gray-700/30
          backdrop-blur-xl
          shadow-lg
        "
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="name" placeholder="Your Name" required />
          <input className="input" name="email" placeholder="Your Email" required />
          <input className="input" name="phone" placeholder="Phone Number" />
          <input className="input" name="subject" placeholder="Subject" />
        </div>

        <select name="reason" className="input mt-4 text-gray-500">
          <option value="">Reason for contact</option>
          <option value="project">Project Collaboration</option>
          <option value="freelance">Freelance</option>
          <option value="query">General Inquiry</option>
        </select>

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="input mt-4"
        />

        <motion.button
          type="submit"
          className="
            mt-6
            w-full sm:w-auto
            px-10 py-3
            rounded-xl
            bg-gradient-to-r from-blue-600 to-blue-500
            text-white font-medium
            shadow-lg
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {sent ? "Message Sent ✅" : "Send Message"}
        </motion.button>

        {sent && (
          <motion.p
            className="mt-4 text-green-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message sent successfully!
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
}
