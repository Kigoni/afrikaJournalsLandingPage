// import React from 'react';
import { BookOpen, FileText, BookOpenCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Journals",
    description: "A diverse collection of African journals from various disciplines, hosted on our platform.",
    icon: BookOpen,
    link: "https://afrijour.web.app/analytics",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80"
  },
  {
    title: "Articles",
    description: "Insightful and scholarly works authored by African researchers, showcasing groundbreaking studies and innovations across diverse fields.",
    icon: FileText,
    link: "https://afrijour.web.app/journals",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80"
  },
  {
    title: "Afrika Blog",
    description: "Stay informed with our Grants & Updates, explore the latest trends in academic research, and catch up on essential news shaping the scholarly community.",
    icon: BookOpenCheck,
    link: "https://afrijour.web.app/news",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
  }
];

export default function JournalSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-[#dff7f7] overflow-hidden">
  {/* Background decorative elements */}
  {/* If you want to completely remove decorative background gradients, delete the divs below */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_25%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.05),transparent_25%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.05),transparent_25%)]" />
  
  <div className="container relative mx-auto px-4">
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
     <h2 className="text-black text-5xl font-bold text-center mb-6">
  <span className="underline decoration-cyan-400 decoration-2">African</span>{" "}
  <span className="underline decoration-purple-400 decoration-2">Research</span>{" "}
  <span className="underline decoration-cyan-400 decoration-2">Excellence</span>
</h2>



      <p className="text-black max-w-2xl mx-auto text-lg">
        Discover groundbreaking research and scholarly works from across the African continent
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}