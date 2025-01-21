import { motion } from 'framer-motion';
import { StarRating } from './StarRating';
import type { Testimonial } from './types/testimonial';
import Image from 'next/image'; // Import Next.js Image component

interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisible: boolean;
}

export function TestimonialCard({ testimonial, isVisible }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto"
    >
      <StarRating rating={testimonial.rating} />
      
      {/* Escaped the quotation marks */}
      <p className="mt-4 text-gray-600 italic">&quot;{testimonial.content}&quot;</p> 

      <div className="mt-6 flex items-center gap-4">
        {/* Used Next.js Image component for better optimization */}
        <Image
          src={testimonial.avatar}
          alt={testimonial.name} // Alt text for accessibility
          width={48} // Specify width for the image
          height={48} // Specify height for the image
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
