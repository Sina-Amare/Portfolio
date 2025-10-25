"use client";
import { motion } from "framer-motion";

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
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background layers with new palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-amber-50 to-brand-primary z-0" />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 70% 30%, rgba(63, 181, 163, 0.1), transparent 60%),
                      linear-gradient(to bottom right, #f8f6f1, #e8e3d7)`,
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold text-brand-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thoughts on{" "}
            <span className="bg-gradient-to-r from-brand-accent to-brand-highlight bg-clip-text text-transparent">
              Technology
            </span>{" "}
            & Design
          </motion.h2>
          <motion.p
            className="text-xl text-brand-textSecondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Exploring the intersection of engineering, design, and innovation through thoughtful
            analysis and insights.
          </motion.p>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-brand-accent/20 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply brightness-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-brand-textSecondary mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-secondary mb-4 group-hover:text-brand-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-brand-textSecondary mb-6 leading-relaxed">{post.excerpt}</p>
                <button className="text-brand-accent font-medium flex items-center group-hover:text-brand-highlight transition-colors">
                  Continue Reading
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 rounded-3xl p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-display font-bold text-brand-secondary mb-4">
            Stay Updated
          </h3>
          <p className="text-brand-textSecondary max-w-2xl mx-auto mb-6">
            Subscribe to my newsletter to receive insights on technology, design, and innovation
            directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full border border-brand-accent/30 bg-white/70 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
            <button className="px-8 py-4 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-highlight transition-colors duration-300 shadow-lg hover:shadow-brand-accent/30">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
