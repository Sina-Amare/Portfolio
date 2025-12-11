"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { GlassCard } from "@/components/ui/GlassCard";
import InteractiveTerminal from "@/components/ui/InteractiveTerminal";
import { HackAnimation, ParticleExplosion } from "@/components/effects/EasterEggAnimations";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  // Store submitted data for persistent terminal output
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Store form data before clearing (for terminal output)
    const dataToSend = { ...formData };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmittedData(dataToSend);
        setTicketId(Math.random().toString(36).substring(2, 8).toUpperCase());
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Contact form error:", result.error);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
      href: "https://github.com/Sina-Amare",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sina-amareh-909987286/",
    },
    {
      icon: <FaTelegram />,
      label: "Telegram",
      href: "https://t.me/sinaam_00",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:sinaamareh0263@gmail.com",
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
            <span className="text-cyan-400">$</span> ssh contact@sinaamareh.dev
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
            {/* Terminal Connection - Interactive */}
            <InteractiveTerminal
              title="terminal — contact"
              command="ssh contact@sinaamareh.dev"
              hintCommand="help"
              secretCommands={{
                nmap: <HackAnimation target="sinaamareh.dev" />,
                curl: (
                  <div className="space-y-3">
                    <ParticleExplosion emoji="📨" count={12} />
                    <div className="font-mono text-sm space-y-1">
                      <div className="text-gray-400">HTTP/1.1 200 OK</div>
                      <div className="text-[#50fa7b]">Content-Type: application/awesome</div>
                      <div className="text-cyan-400">{`{"status": "ready_to_connect", "response_time": "<24h"}`}</div>
                    </div>
                  </div>
                ),
                traceroute: (
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-gray-500">traceroute to hire-sina (127.0.0.1)</div>
                    <div>
                      <span className="text-cyan-400">1</span> visitor.portfolio 0.1ms
                    </div>
                    <div>
                      <span className="text-cyan-400">2</span> contact.form 0.5ms
                    </div>
                    <div>
                      <span className="text-cyan-400">3</span> email.send 1.2ms
                    </div>
                    <div className="text-[#50fa7b]">
                      <span className="text-cyan-400">4</span> hired.success ∞ 🎉
                    </div>
                  </div>
                ),
                uptime: (
                  <div className="font-mono text-sm">
                    <span className="text-[#50fa7b]">↑</span> 2 years, 365 days of coding
                    <br />
                    <span className="text-gray-400">Load average: passion, creativity, coffee</span>
                  </div>
                ),
                help: (
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-gray-400 mb-2">📡 Available commands:</div>
                    <div className="text-cyan-400">
                      {" "}
                      nmap <span className="text-gray-500">- 🔓 Scan for openings</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      curl <span className="text-gray-500">- 📨 Test connection</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      traceroute <span className="text-gray-500">- 🛤️ Path to hire</span>
                    </div>
                    <div className="text-cyan-400">
                      {" "}
                      uptime <span className="text-gray-500">- ⏰ System uptime</span>
                    </div>
                    <div className="text-gray-500 text-xs mt-3 border-t border-gray-700 pt-2">
                      💡 Each terminal has unique secrets. Try &quot;help&quot; in About and Skills
                      too!
                    </div>
                  </div>
                ),
              }}
            >
              <div className="font-mono text-sm space-y-2 mb-4">
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
            </InteractiveTerminal>

            {/* Social Links - About.md Style */}
            <div
              className="rounded-xl overflow-hidden border border-cyan-500/20 p-6"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(10,14,20,0.98) 100%)",
                boxShadow: "0 0 40px rgba(6,182,212,0.08)",
              }}
            >
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                <span className="text-cyan-400">$</span> list --connections
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-4 bg-white/5 border border-cyan-500/10 rounded-lg hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="text-xl text-gray-500 group-hover:text-cyan-400 transition-colors">
                          {social.icon}
                        </div>
                        <div className="font-mono text-sm">
                          <span className="text-cyan-400/60">$</span>
                          <span className="text-gray-400 group-hover:text-gray-200 ml-1">
                            open {social.label.toLowerCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Email Direct */}
            <GlassCard variant="subtle" className="p-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl text-cyan-400">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-1">Direct Email:</div>
                  <a
                    href="mailto:sinaamareh0263@gmail.com"
                    className="text-sm font-mono text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    sinaamareh0263@gmail.com
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
                  <label htmlFor="name" className="block text-xs font-mono text-gray-500 mb-2">
                    <span className="text-cyan-400">class</span> ContactRequest:{" "}
                    <span className="text-purple-400">name</span>: str
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 text-gray-300 placeholder-gray-600 font-mono text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-500 mb-2">
                    <span className="text-purple-400">email</span>: EmailStr
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 text-gray-300 placeholder-gray-600 font-mono text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-500 mb-2">
                    <span className="text-purple-400">subject</span>: str
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 text-gray-300 placeholder-gray-600 font-mono text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-2">
                    <span className="text-purple-400">message</span>: str
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 text-gray-300 placeholder-gray-600 font-mono text-sm transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-mono text-sm font-semibold text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#50fa7b] shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4),0_0_60px_rgba(80,250,123,0.2)]"
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

                {submitStatus === "success" && submittedData && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 bg-[#0d1117] border border-[#50fa7b]/30 rounded-lg overflow-hidden"
                  >
                    {/* Terminal header */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#161b22] border-b border-gray-800">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[10px] text-gray-500 font-mono">
                        POST /api/v1/contact
                      </span>
                    </div>

                    {/* Terminal content */}
                    <div className="p-4 font-mono text-xs space-y-2">
                      {/* Request */}
                      <div className="text-gray-500">
                        <span className="text-green-400">$</span> submit_request \
                      </div>
                      <div className="text-gray-400 pl-4">
                        --from "{submittedData.name} &lt;{submittedData.email}&gt;" \
                      </div>
                      <div className="text-gray-400 pl-4">
                        --subject "{submittedData.subject}" \
                      </div>
                      <div className="text-gray-400 pl-4">
                        --message "{submittedData.message.substring(0, 50)}..."
                      </div>

                      {/* Response */}
                      <div className="mt-3 pt-3 border-t border-gray-800 space-y-1">
                        <div className="text-[#50fa7b]">HTTP/1.1 200 OK</div>
                        <div className="text-gray-500">Content-Type: application/json</div>
                        <div className="mt-2 text-purple-400">
                          {"{"}
                          <br />
                          &nbsp;&nbsp;"status": <span className="text-[#50fa7b]">"success"</span>,
                          <br />
                          &nbsp;&nbsp;"ticket_id":{" "}
                          <span className="text-yellow-400">"{ticketId}"</span>,<br />
                          &nbsp;&nbsp;"from":{" "}
                          <span className="text-cyan-400">"{submittedData.name}"</span>,<br />
                          &nbsp;&nbsp;"eta_response": <span className="text-purple-400">"24h"</span>
                          <br />
                          {"}"}
                        </div>
                      </div>

                      {/* Success footer */}
                      <div className="mt-3 pt-3 border-t border-gray-800 text-[#50fa7b]">
                        ✓ Request delivered — I'll respond within 24 hours!
                      </div>
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
