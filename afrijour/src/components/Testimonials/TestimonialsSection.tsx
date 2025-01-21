import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#dff7f7]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-black text-4xl font-bold text-center mb-16"
        >
          What Our Users Say
        </motion.h2>

        <div className="relative h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="absolute w-full transition-all duration-500"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                pointerEvents: currentIndex === index ? 'auto' : 'none'
              }}
            >
              <TestimonialCard
                testimonial={testimonial}
                isVisible={currentIndex === index}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
