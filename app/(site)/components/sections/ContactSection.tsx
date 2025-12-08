"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { GlassCard } from "@/components/ui/GlassCard";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/sina-amareh",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sina-amareh",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://twitter.com/sina_amareh",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:hello@sina-amareh.dev",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-number mb-12"
        >
          // 04. Contact
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Initialize <span className="gradient-text">Connection</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-cyan-400">$</span> ssh contact@sina-amareh.dev
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Connection Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Terminal Connection */}
            <GlassCard variant="terminal" className="p-6" glow>
              <div className="font-mono text-sm space-y-2 mb-6">
                <div className="text-gray-400">
                  <span className="text-[#50fa7b]">$</span> ssh contact@sina-amareh.dev
                </div>
                <div className="text-gray-500">
                  <span className="text-cyan-400">›</span> Establishing secure connection...
                </div>
                <div className="text-[#50fa7b]">
                  <span>✓</span> Connection established
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div>
                  <div className="text-gray-500 mb-2">System Info:</div>
                  <div className="space-y-1 pl-4">
                    <div className="text-gray-400 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      <span>Location: Remote</span>
                    </div>
                    <div className="text-gray-400 flex items-center gap-2">
                      <FaClock className="text-cyan-400" />
                      <span>Timezone: UTC+3:30</span>
                    </div>
                    <div className="text-gray-400">
                      <span className="text-cyan-400">└─</span> Status: Available for projects
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard variant="subtle" className="p-6">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 hover:bg-white/10 transition-all">
                      <div className="text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors mb-2 flex justify-center">
                        {social.icon}
                      </div>
                      <div className="text-xs font-mono text-gray-500 text-center">
                        {social.label}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* Email Direct */}
            <GlassCard variant="subtle" className="p-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl text-cyan-400">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-1">Direct Email:</div>
                  <a
                    href="mailto:hello@sina-amareh.dev"
                    className="text-sm font-mono text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    hello@sina-amareh.dev
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard variant="terminal" className="p-6 h-full">
              {/* Form Header */}
              <div className="mb-6 pb-4 border-b border-cyan-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></div>
                  <span className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                    Send Message
                  </span>
                </div>
                <code className="text-xs font-mono text-gray-600">
                  POST /api/v1/contact/message
                </code>
              </div>

              {/* Python-style Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-2">
                    <span className="text-cyan-400">class</span> ContactRequest:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='name: str = "Your Name"'
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 text-gray-300 placeholder-gray-600 font-mono text-sm transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='email: EmailStr = "you@example.com"'
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 text-gray-300 placeholder-gray-600 font-mono text-sm transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='subject: str = "Project Discussion"'
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 text-gray-300 placeholder-gray-600 font-mono text-sm transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='message: str = "Tell me about your project..."'
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 text-gray-300 placeholder-gray-600 font-mono text-sm transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#9333EA] to-[#06B6D4] rounded-lg font-mono text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Sending request...
                    </span>
                  ) : (
                    "$ submit_contact_request()"
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-[#50fa7b]/10 border border-[#50fa7b]/30 rounded-lg"
                  >
                    <div className="font-mono text-sm text-[#50fa7b]">
                      <span>✓</span> 200 OK - Message delivered successfully
                    </div>
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <GlassCard variant="subtle" className="p-6 text-center">
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-[#50fa7b]">›</span> Open to freelance projects and full-time
              opportunities • <span className="text-cyan-400">Response time:</span> Usually within
              24 hours
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
