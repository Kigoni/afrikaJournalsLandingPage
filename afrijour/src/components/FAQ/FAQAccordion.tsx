import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full z-50">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="relative rounded-xl w-full overflow-visible bg-gradient-to-r p-[1px] from-cyan-500/20 to-purple-500/20 z-50"
        >
          <div className="bg-gray-900/80 rounded-xl">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-800/50"
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-cyan-800" />
              </motion.div>
            </button>

            <AnimatePresence mode="sync">
              {openIndex === index && (
                <motion.div
                  key={`content-${index}`}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="w-full px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}
