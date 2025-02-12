"use client";

import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import JOS from "jos-animation";
import { useEffect, useState, FC, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from "next/link";
import Navbar from "@/components/navbar";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import Journal from "@/components/JournalSection/JournalSection";
import ConferenceSection from "@/components/Conference/ConferenceSection";
import ReportsSection from "@/components/ReportsSection/ReportsSection";
import { Toaster } from "react-hot-toast";
import FloatingButton from "@/components/FloatingButton/FloatingButton";
import { translations } from "@/data/content";
import { BarChart3, Database, Languages, Users } from "lucide-react";
import { BadgeCheck, Twitter, Facebook, Instagram, Github } from "lucide-react";
import TopButton from "@/components/TopButton";
import Chatbot from "@/components/Chatbot";
import FAQSection from "../components/FAQ/FAQSection";
import WorldMap from "@/components/WorldMap";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";

const stats = {
  languages: { current: 6, target: 8, growth: "+1%" },
  repositories: { current: 340, target: 400, growth: "+10%" },
  indexes: { current: 45, target: 50, growth: "-2%" },
  reviewers: { current: 80, target: 100, growth: "+8%" },
};

const statCards = [
  {
    icon: Languages,
    label: "Languages",
    value: stats.languages.current,
    target: stats.languages.target,
    growth: stats.languages.growth,
    color: "from-violet-500 to-violet-600",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    glowColor: "violet",
  },
  {
    icon: Database,
    label: "Repositories",
    value: stats.repositories.current,
    target: stats.repositories.target,
    growth: stats.repositories.growth,
    color: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    glowColor: "orange",
  },
  {
    icon: BarChart3,
    label: "Indexes",
    value: stats.indexes.current,
    target: stats.indexes.target,
    growth: stats.indexes.growth,
    color: "from-pink-500 to-pink-600",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    glowColor: "pink",
  },
  {
    icon: Users,
    label: "Reviewers",
    value: stats.reviewers.current,
    target: stats.reviewers.target,
    growth: stats.reviewers.growth,
    color: "from-teal-500 to-teal-600",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    glowColor: "teal",
  },
];

interface StatCardProps {
  icon: React.FC<any>;
  label: string;
  value: number;
  target: number;
  growth: string;
  color: string;
  iconBg: string;
  iconColor: string;
  glowColor: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  target,
  growth,
  color,
  iconBg,
  iconColor,
  glowColor,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentValue(value);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl blur-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="relative bg-white rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90">
        <motion.div
          className={`${iconBg} rounded-full p-3 inline-block`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </motion.div>

        <div className="mt-4">
          <motion.div
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
             <motion.span
  animate={{ opacity: 1 }} // Add any animation properties you need here
  transition={{ duration: 1 }}
>
  {value} {/* Display the value */}
</motion.span>
          </motion.div>

          <div className="flex items-center space-x-2 mt-2">
            <span className="text-sm font-medium text-gray-600">{label}</span>
            <motion.span
              className={`text-sm font-medium ${
                growth.startsWith("-") ? "text-red-500" : "text-green-500"
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {growth}
            </motion.span>
          </div>

          {isHovered && (
            <motion.div
              className="mt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${color}`}
                  initial={{ width: "0%" }}
                  animate={{ width: `${(value / target) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Target: {target}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const StatsOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Performance Metrics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Carousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categories = [
    { id: 1, name: "Category 1", color: "#FF5733" },
    { id: 2, name: "Category 2", color: "#33FF57" },
    { id: 3, name: "Category 3", color: "#3357FF" },
    // Add more categories as needed
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount
      scrollContainerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl focus:outline-none"
            >
              <FaChevronLeft  className="h-6 w-6 text-gray-600" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl focus:outline-none"
            >
              <FaChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          )}

          {/* Tickets Container */}
          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-8"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {[...categories, ...categories].map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="snap-start animate-float"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div
                  style={{ backgroundColor: category.color }}
                  className="group relative cursor-pointer rounded-full border-2 border-gray-800 px-6 py-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:py-4"
                >
                  <div className="relative z-10 whitespace-nowrap text-base font-bold text-gray-800">
                    {category.name}
                  </div>
                  <div
                    className="absolute inset-0 -bottom-1 -z-10 translate-y-1 rounded-full border-2 border-gray-800 bg-gray-800 opacity-10 transition-all duration-300 group-hover:translate-y-2"
                    style={{ backgroundColor: category.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translation, setTranslation] = useState(translations.en);
  const [isFormOpen, setIsFormOpen] = useState(false); // Define the state for the form

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setTranslation(translations[languageCode]);
  };

  useEffect(() => {
    const initJOS = () => {
      const options = {
        debugMode: true,
        animation: "flip",
        duration: 0.7,
        rootMargin: "0% 0% 0% 0%",
      };
      JOS.init(options);
    };

    initJOS();
    JOS.refresh();

    return () => {
      // Clean up JOS if necessary
    };
  }, []);

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <DisclaimerPopup />
      <Navbar
        setSelectedLanguage={handleLanguageChange}
        translation={translation}
        selectedLanguage={selectedLanguage}
        className="shadow-md"
      />
      <main className="main-wrapper relative overflow-hidden">
        {/* Hero Section */}
        <section className="section-hero flex items-center justify-between bg-gradient-to-r from-[#9baed1] to-[#f5f7fa] py-20 lg:py-40">
          <div className="container mx-auto flex items-center justify-between text-center lg:text-left">
            {/* Left Side: Text and CTA */}
            <div className="max-w-lg space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                {translation.hero?.title.split(' ').map((word, index) => (
                  <span key={index} className="underline block mb-1">
                    {word}
                  </span>
                )) || "Spotlighting African Journals".split(' ').map((word, index) => (
                  <span key={index} className="underline block mb-1">
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-lg text-gray-600">
                {translation.hero?.subtitle || "Welcome to Afrika Journals, your gateway to the rich and diverse world of African scholarship. We are dedicated to amplifying the voices of African journals, offering a platform where their unique narratives and perspectives can shine brightly."}
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {translation.hero?.cta || "Get Started Now"}
              </Link>
            </div>
            {/* Right Side: Hero Image */}
            <div className="hidden lg:block w-1/2 ml-10 flex justify-center">
              <Image
                src="/assets/img/content/hero1.jpeg"
                alt="Hero Image"
                width={600}
                height={600}
                className="max-w-full rounded-full shadow-xl mt-20"
              />
            </div>
          </div>
        </section>
        {/* Analytics Dashboard */}
        
        <section className="pt-20 pb-32">
          <div className="container mx-auto px-4">
            
            <div className="text-center mb-12">
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the impact of African research through our platform metrics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statCards.map((card, index) => (
                <StatCard key={index} {...card} className="custom-class-name" />
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="features">
          <Journal />
        </section>
        {/* Conferences Section */}
        <section id="conferences">
          <ConferenceSection />
        </section>
        <section id="research">
          <ReportsSection />
        </section>
 
        <div className="section-topic bg-[#ccd6e8] pt-10">
  <div className="relative">
    {/* Section Space */}
    <div className="section-space-bottom2">
      {/* Section Container */}
      <div className="container-default">
        {/* Section Content Wrapper */}
        <div
          className="mb-[40px] xl:mb-20 jos"
          data-jos_once={1}
          data-jos_animation="fade-up"
          data-jos_timingfunction="ease"
          data-jos_duration="0.7"
          data-jos_delay="0.5"
          data-jos_counter={1}
        >
          {/* Section Content Block */}
          <div className="mx-auto max-w-[636px]">
            <h2 className="text-center font-DmSans -tracking-[1px] text-3xl md:text-4xl font-bold text-gray-800">
              Here are numerous topics that will enhance your research
            </h2>
          </div>
        </div>
        {/* Section Content Wrapper */}
      </div>
      {/* Section Container */}

      {/* Ticket Slider Area */}
      <div className="relative py-5 overflow-hidden">
        <div className="ticket-slider flex animate-slide items-center gap-4">
          {[
            "Leadership Skills",
            "Business",
            "Photography",
            "Computer Science",
            "Art & Music",
            "Information Technology",
            "Digital Marketing",
            "Lifestyle",
            "Healthcare",
            "Time Management",
          ].map((tag, index) => (
            <div
              key={index}
              className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-gradient-to-r from-[#F5EFEB] to-[#E0D0B9] px-8 py-3 text-center text-lg font-bold text-ColorBlack shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      {/* Ticket Slider Area */}
    </div>
  </div>
</div>

<style jsx>
{`
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .ticket-slider {
    display: flex;
    animation: slide 30s linear infinite;  /* Slower movement */
  }

  .ticket-slider > div {
    min-width: 250px;  /* Ensure no splitting of text */
    padding: 10px 20px;
    margin-right: 1rem;
  }
`}
</style>


        <section className="section-content" id="about">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Content Area */}
              <div className="grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[0.8fr_minmax(0,_1fr)] lg:gap-x-20 xl:gap-x-[110px]">
                {/* Content Block */}
                <div
                  className="order-2 jos"
                  data-jos_animation="fade-right"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-DmSans -tracking-[1px]">
                        {translation.about.title}
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>{translation.about.description}</p>
                  <p>{translation.about.description2}</p>
                  <div className="mt-[50px]">
                    <Link
                      href="https://afrijour.web.app/"
                      className="group relative z-10 inline-block"
                    >
                      <div className="btn is-large is-rounded bg-yellow-500 hover:bg-yellow-600">
                        {translation.about.cta}
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </Link>
                  </div>
                </div>
                {/* Content Block */}
                {/* Content Image Block */}
                <div
                  className="order-1 flex justify-center jos"
                  data-jos_animation="fade-left"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <Image
                    className="rounded-xl"
                    src="/assets/img/content/content-img-1.jpeg"
                    alt="content-img-1"
                    width={600}
                    height={600}
                  />
                </div>
                {/* Content Image Block */}
              </div>
              {/* Content Area */}
              {/* Content Area */}
              <div className="mt-24 grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[0.8fr_minmax(0,_1fr)] lg:gap-x-20 xl:gap-x-[110px]">
                {/* Content Block */}
                <div
                  className="order-1 jos"
                  data-jos_animation="fade-right"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-DmSans -tracking-[1px]">
                        {translation.about2.title}
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>{translation.about2.description}</p>
                  <p>{translation.about2.description2}</p>
                  <div className="mt-[50px]">
                    <Link
                      href="https://afrijour.web.app/analytics"
                      className="group relative z-10 inline-block"
                    >
                      <div className="btn is-large is-rounded bg-yellow-500 hover:bg-yellow-600">
                        {translation.about2.cta}
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </Link>
                  </div>
                </div>
                {/* Content Block */}
                {/* Content Image Block */}
                <div
                  className="order-2 flex justify-center jos"
                  data-jos_animation="fade-left"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <Image
                    className="rounded-xl"
                    src="/assets/img/content/content-img-2.jpeg"
                    alt="content-img-1"
                    width={600}
                    height={600}
                  />
                </div>
                {/* Content Image Block */}
              </div>
              {/* Content Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
          <div className="min-h-[65px] bg-white bg-contain bg-[center_bottom] bg-repeat-x -mb-1" />
        </section>

        

        {/* <section className="backdrop-blur-sm">
          <ThematicAreas />
        </section> */}

        <section className="section-content">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Content Area */}
              <div className="grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[1fr_minmax(0,_0.8fr)] lg:gap-x-20 xl:gap-x-[110px]">
                {/* Content Block */}
                <div
                  className="order-1 jos"
                  data-jos_animation="fade-right"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-DmSans -tracking-[1px]">
                        {translation.testimonials.title}
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>{translation.testimonials.description}</p>
                  <ul className="flex flex-col gap-5 font-semibold text-ColorBlack">
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <BadgeCheck />
                      </span>
                      Comprehensive African Journals Directory
                    </li>
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <BadgeCheck />
                      </span>
                      Innovative Analytics and Insights
                    </li>
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <BadgeCheck />
                      </span>
                      Access to African Journals Repositories
                    </li>
                  </ul>
                  <div className="mt-[50px]">
                    <Link
                      href="https://afrijour.web.app/"
                      className="group relative z-10 inline-block"
                    >
                      <div className="btn is-large is-rounded bg-yellow-500 hover:bg-yellow-600">
                        {translation.journals.cta}
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </Link>
                  </div>
                </div>
                {/* Content Block */}
                {/* Content Image Block */}
                <div
                  className="order-2 flex justify-center jos"
                  data-jos_animation="fade-left"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <Image
                    className="rounded-xl"
                    src="/assets/img/content/content-img-3.jpeg"
                    alt="content-img-3"
                    width={600}
                    height={600}
                  />
                </div>
                {/* Content Image Block */}
              </div>
              {/* Content Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="map" className="backdrop-blur-sm">
          <WorldMap />
        </section>

        {/* Floating Button */}
        <div
          className="fixed right-0 z-[500]"
          style={{
            top: "0%", // Adjust this value to move the button down
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "fit-content",
          }}
        >
          <FloatingButton onClick={() => setIsFormOpen(true)} />
        </div>

        <TopButton />

        <section id="faq">
          <FAQSection />
        </section>

        <Chatbot
          title="Afrika Journals Assistant"
          subtitle="Online"
          botName="Afrika Journals"
          welcomeMessage="Hi, I'm Afrika Journals Chatbot. How can I help you today?"
        />
        <Toaster />
      </main>

      <footer className="section-footer">
        <div className="bg-[#babec5] text-black">
          {/* Footer Area Center */}
          <div className="text-ColorBlack">
            {/* Footer Center Spacing */}
            <div className="py-[60px] lg:py-20 xl:py-[100px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Footer Widget List */}
                <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                    {/* Footer Logo */}
                    <h1 className="text-5xl text-yellow-300">
                      Afrika Journals
                    </h1>
                    {/* Footer Content */}
                    <div className="text-yellow-200">
                      {/* Footer About Text */}
                      <div className="lg:max-w-[416px]">
                        {translation.footer.description}
                      </div>
                      {/* Footer Mail */}
                      <Link
                        href="mailto:info@AfrikaJournals.com"
                        className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                      >
                        info@AfrikaJournals.com
                      </Link>
                      {/* Footer Social Link */}
                      <div className="flex flex-wrap gap-5">
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="twitter"
                        >
                          <Twitter />
                        </Link>
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="facebook"
                        >
                          <Facebook />
                        </Link>
                        <Link
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="instagram"
                        >
                          <Instagram />
                        </Link>
                        <Link
                          href="https://www.github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="github"
                        >
                          <Github />
                        </Link>
                      </div>
                    </div>
                    {/* Footer Content */}
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1 ">
                    {/* Footer Widget Title */}
                    <div className="text-xl font-semibold capitalize text-yellow-300">
                      Pages
                    </div>
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/"
                        >
                          {translation.navigation.home}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/#about"
                        >
                          {translation.navigation.about}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/#features"
                        >
                          {translation.navigation.features}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/#faq"
                        >
                          {translation.navigation.faq}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize text-yellow-300">
                      Utility pages
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/signup"
                        >
                          Signup
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/login"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/error-404"
                        >
                          404 Not found
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/reset-password"
                        >
                          Password Reset
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item*/}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize text-yellow-300">
                      Resources
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Support
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Privacy policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Strategic finance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Video guide
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                </div>
                {/* Footer Widget List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Center Spacing */}
          </div>
          {/* Footer Area Center */}
          <div className="horizontal-line bg-ColorBlack" />
          {/* Footer Bottom */}
          <div>
            {/* Footer Bottom Spacing */}
            <div className="py-[18px]">
              {/* Section Container */}
              <div className="container-default">
                <div className="text-center">
                  {translation.footer.copyright}
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Bottom Spacing */}
          </div>
          {/* Footer Bottom */}
        </div>
      </footer>
    </div>
  );
}
