"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background layers with new palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-amber-50 to-brand-primary z-0" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(214, 185, 140, 0.1), transparent 70%),
                      linear-gradient(to bottom right, #f8f6f1, #e8e3d7)`,
        }}
      />

      {/* Ambient floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-brand-highlight/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          {/* Left side - Contact information */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-display font-bold text-brand-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's{" "}
              <span className="bg-gradient-to-r from-brand-accent to-brand-highlight bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-brand-textSecondary mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have a project in mind or want to discuss potential opportunities? I'd love to hear
              from you. Reach out using the form, or connect through any of the channels below.
            </motion.p>

            <div className="space-y-8">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-brand-accent/20 p-4 rounded-2xl mr-6 backdrop-blur-sm border border-brand-accent/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 00-2-2H5a2 0 0-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-secondary mb-1">Email</h3>
                  <p className="text-brand-textSecondary">hello@sina-amareh.dev</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="bg-brand-accent/20 p-4 rounded-2xl mr-6 backdrop-blur-sm border border-brand-accent/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-secondary mb-1">Location</h3>
                  <p className="text-brand-textSecondary">San Francisco, California</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="bg-brand-accent/20 p-4 rounded-2xl mr-6 backdrop-blur-sm border border-brand-accent/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-secondary mb-1">Connect</h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="#"
                      className="text-brand-textSecondary hover:text-brand-accent transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-brand-textSecondary hover:text-brand-accent transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="text-brand-textSecondary hover:text-brand-accent transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white/30 backdrop-blur-xl p-8 rounded-3xl border border-brand-accent/30 shadow-2xl shadow-brand-accent/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-display font-bold text-brand-secondary mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-textSecondary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 bg-white/50 border-brand-accent/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-300 text-brand-secondary"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brand-textSecondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 bg-white/50 border border-brand-accent/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-300 text-brand-secondary"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-brand-textSecondary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-5 py-4 bg-white/50 border-brand-accent/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-300 text-brand-secondary"
                    placeholder="How can I help?"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-textSecondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-5 py-4 bg-white/50 border border-brand-accent/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-300 text-brand-secondary resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-brand-accent to-brand-highlight text-white font-medium rounded-2xl hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
