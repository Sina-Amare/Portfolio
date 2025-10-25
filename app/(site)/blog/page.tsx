"use client";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Convergence of AI and Human-Centered Design",
      excerpt:
        "Exploring how artificial intelligence can enhance rather than replace human creativity in design processes.",
      date: "May 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442135722-5f11f06a1e72?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Building Sustainable Web Applications",
      excerpt:
        "Strategies for creating efficient, environmentally conscious web applications without sacrificing performance.",
      date: "April 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "The Art of Minimalist Coding",
      excerpt:
        "How simplicity and clarity in code can lead to more maintainable and robust software systems.",
      date: "April 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1547658719-da2b5116916?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Ethical Considerations in AI Development",
      excerpt:
        "A deep dive into the moral responsibilities of developers when building intelligent systems.",
      date: "March 22, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1677442135133-33d364e24d3d?w=800&h=400&fit=crop",
    },
  ];

  return (
    <Section background="cream" padding="lg">
      <Container>
        <motion.div
          className="col-span-12 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ink mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thoughts on{" "}
            <span className="bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
              Technology
            </span>{" "}
            & Design
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-textSecondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Exploring the intersection of engineering, design, and innovation through thoughtful
            analysis and insights.
          </motion.p>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 col-span-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="lg:col-span-6 group bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <div className="overflow-hidden rounded-xl md:rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply brightness-110"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center text-sm text-brand-textSecondary mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-ink mb-4 group-hover:text-gold transition-colors duration-300 max-w-[65ch]">
                  {post.title}
                </h3>
                <p className="text-brand-textSecondary mb-6 leading-relaxed max-w-[65ch]">
                  {post.excerpt}
                </p>
                <button className="text-gold font-medium flex items-center group-hover:text-teal transition-colors">
                  Continue Reading
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          className="mt-16 lg:col-span-12 bg-gradient-to-r from-gold/10 to-teal/10 rounded-xl md:rounded-2xl p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-display font-bold text-ink mb-4">Stay Updated</h3>
          <p className="text-brand-textSecondary max-w-2xl mx-auto mb-6">
            Subscribe to my newsletter to receive insights on technology, design, and innovation
            directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-xl border border-gold/30 bg-white/70 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            <button className="px-8 py-4 bg-gold text-white font-medium rounded-xl hover:bg-teal transition-colors duration-300 shadow-lg hover:shadow-gold/30">
              Subscribe
            </button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
