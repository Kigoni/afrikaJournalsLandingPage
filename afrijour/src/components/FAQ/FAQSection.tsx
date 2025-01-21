import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FAQAccordion from "./FAQAccordion";
// import QAForm from './QAForm';

const faqs = [
  {
    question: "How can I explore African Journals?",
    answer:
      "You can access African journals through our extensive Journal Directory. Simply search by discipline or browse through our categories to find the journals relevant to your field of interest. Our platform is designed to make finding and accessing research publications easy and intuitive.",
  },
  {
    question: "What are Partner Repositories, and how do they work?",
    answer:
      "Partner Repositories are collaborative platforms that host a wide range of African research publications. Afrika Journals partners with these repositories to ensure comprehensive access to scholarly articles and papers from across the continent. Through our platform, you can seamlessly access research hosted on these partner repositories.",
  },
  {
    question: "How does Afrika Journals's indexing system benefit researchers?",
    answer:
      "Our indexing system categorizes and organizes journals and articles, making it easier for researchers to find relevant content quickly. By improving the discoverability of African research, our indexing system helps users efficiently access the information they need for their studies and academic work.",
  },
  {
    question: "What role do Reviewers play on Afrika Journals?",
    answer:
      "Reviewers are integral to maintaining the quality and credibility of the research featured on Afrika Journals. They are experts in their fields who conduct rigorous peer reviews to ensure that the academic content meets the highest standards of excellence before it is published on our platform.",
  },
];

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-[#CCD6EB] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_25%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.05),transparent_25%)] " />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.05),transparent_25%)]" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            We encourage our students, researchers, and professors to ask us any
            questions regarding our journals. Our skilled mentors are ready to
            answer all your questions 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FAQAccordion faqs={faqs} />
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <QAForm />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
