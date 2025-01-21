"use client";
import Image from "next/image";
import JOS from "jos-animation";
import {
  BadgeCheck,
  ChevronDown,
  Facebook,
  Github,
  Instagram,
  Star,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import Journal from "../components/JournalSection/JournalSection";
import Navbar from "@/components/navbar";
import { ThematicAreas } from "../components/ThematicAreas/ThematicAreas";
import ReportsSection from "../components/ReportsSection/ReportsSection";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import WorldMap from "@/components/WorldMap";
import { Toaster } from "react-hot-toast";
import Chatbot from "../components/Chatbot";
import { Language, translations } from "@/data/content";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import FAQSection from "../components/FAQ/FAQSection";
import ConferenceSection from "@/components/Conference/ConferenceSection";
import TopButton from "@/components/TopButton";
export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translation, setTranslation] = useState(translations.en);

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setTranslation(translations[languageCode]);
  };
  const [isFormOpen, setIsFormOpen] = useState(false);
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
      <div className="page-wrapper relative z-[1] bg-white">
        {/*...::: Header Start :::... */}
        <Navbar
          setSelectedLanguage={handleLanguageChange}
          translation={translation}
          selectedLanguage={selectedLanguage}
        />
        {/*...::: Header End :::... */}
        <main className="main-wrapper relative overflow-hidden">
          {/*...::: Hero Section Start :::... */}
          <section className="section-hero">
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-[#9baed1] to-[#f5f7fa]">
                {/* Hero Space */}
                <div className="pb-20 pt-[100px] md:pt-[120px] lg:pb-[110px] lg:pt-[190px]">
                  {/* Section Container */}
                  <div className="container-default">
                    {/* Hero Area Block */}
                    <div className="grid items-center gap-x-[60px] gap-y-12 lg:grid-cols-[1fr_0.8fr] xl:gap-x-[100px]">
                      {/* Hero Content Block */}
                      <div className="mx-auto max-w-[580px] text-center lg:max-w-none lg:text-left">
                        <h1 className="mb-6 font-DmSans text-[32px] font-bold leading-[1.04] -tracking-[1px] sm:text-5xl lg:text-[65px] xl:text-[78px] xxl:text-[90px]">
                          {translation.hero.title}
                        </h1>
                        <p className="mb-8 lg:mb-[50px]">
                          {translation.hero.subtitle}
                        </p>
                        <Link
                          href="https://afrijour.web.app/"
                          className="group relative inline-block"
                        >
                          <div className="btn is-large is-rounded bg-yellow-500 hover:bg-yellow-600">
                            {translation.hero.cta}
                          </div>
                          <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                        </Link>
                      </div>
                      {/* Hero Content Block */}
                      {/* Hero Image Block */}
                      <div className="flex justify-center lg:justify-start">
                        <div className="relative inline-block">
                          <Image
                            src="/assets/img/content/hero1.jpeg"
                            alt="hero-img"
                            width={600}
                            height={600}
                            className="max-w-full rounded-full"
                          />
                          {/* Hero Image Shape */}
                          <div className="absolute right-0 top-1 flex h-[180px] w-[180px] items-center justify-center text-center xl:left-[320px]">
                            <Image
                              src="assets/img/elements/hero-4-start-shape-1.svg"
                              alt="hero-4-start-shape-1"
                              width={180}
                              height={180}
                              className="rotate-360"
                            />
                            <span className="absolute inline-block max-w-[100px] text-base font-bold text-ColorBlack">
                              {translation.hero.promo}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Hero Image Block */}
                    </div>
                    {/* Hero Area Block */}
                  </div>
                  {/* Section Container */}
                </div>
              </div>
              {/* Hero Space */}
              {/* Hero Background Shape */}
              <Image
                src="assets/img/elements/hero-4-bg-shape.svg"
                alt="hero-4-bg-shape"
                height={1038}
                width={1038}
                className="absolute right-0 top-0 -z-10"
              />
              {/* Background Divider Shape */}
              {/* <div className="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[#e5e7eb]  bg-[center_bottom] bg-repeat-x" /> */}
            </div>
          </section>
          <section id="features">
            <Journal />
          </section>
          <section id="conferences">
            {/* <Journal /> */}
            <ConferenceSection/>
          </section>
          <section id="research">
            <ReportsSection />
          </section>
          {/* <div
            className="fixed right-0"
            style={{
              top: "10%", // Adjust this value to move the button down
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
              border: "1px solid black", // Adds a thin black border
              borderRadius: "8px", // Rounds the corners of the boundary
              padding: "8px", // Adds some spacing inside the boundary
              backgroundColor: "white", // Optional: Adds a background color
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
            }}
          >
            
          </div> */}

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
            <div className="min-h-[65px] bg-white  bg-contain bg-[center_bottom] bg-repeat-x -mb-1" />
            {/* Section Space */}
          </section>
          {/*...::: Content Section End :::... */}
          {/*...::: Ticket Slider Section Start :::... */}
          <div className="section-topic bg-[#ccd6e8]  pt-10">
            <div className="relative">
              {/* Section Space */}
              <div className="section-space-bottom2">
                {/* Section Container */}
                <div className="container-default">
                  {/* Section Content Wrapper */}
                  <div
                    className="mb-[60px] xl:mb-20 jos"
                    data-jos_once={1}
                    data-jos_animation="fade-up"
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_delay="0.5"
                    data-jos_counter={1}
                  >
                    {/* Section Content Block */}
                    <div className="mx-auto max-w-[636px] ">
                      <h2 className="text-center font-DmSans -tracking-[1px]">
                        {translation.blog.title}
                      </h2>
                    </div>
                    {/* Section Content Block */}
                  </div>
                  {/* Section Content Wrapper */}      
                </div>
                {/* Section Container */}
                {/* Ticket Slider Area */}
                <div>
                  {/* Ticket Wrapper */}
                  <div className="flex flex-row flex-nowrap py-5">
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Computer Science
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Art &amp; Music
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Information Technology
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Digital Marketing
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Lifestyle
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Healthcare
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Time Management
                      </div>
                      {/* Ticket Tag */}

                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Computer Science
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Art &amp; Music
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Information Technology
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Digital Marketing
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Lifestyle
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Healthcare
                      </div>
                      {/* Ticket Tag */}

                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Time Management
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Computer Science
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Art &amp; Music
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Information Technology
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Digital Marketing
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Lifestyle
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Healthcare
                      </div>
                      {/* Ticket Tag */}

                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Time Management
                      </div>
                      {/* Ticket Tag */}

                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                  </div>
                  {/* Ticket Wrapper */}
                  {/* Ticket Wrapper */}
                  <div className="flex flex-row flex-nowrap py-5">
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Computer Science
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Art &amp; Music
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Information Technology
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Web Development
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Digital Marketing
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Lifestyle
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Healthcare
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Time Management
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Computer Science
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Art &amp; Music
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Information Technology
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Digital Marketing
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Lifestyle
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Healthcare
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Time Management
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Computer Science
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Art &amp; Music
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Information Technology
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                    {/* Ticket Content */}
                    <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Digital Marketing
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Lifestyle
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Healthcare
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Time Management
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        iOS Development
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Leadership Skills
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Business
                      </div>
                      {/* Ticket Tag */}
                      {/* Ticket Tag */}
                      <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                        Photography
                      </div>
                      {/* Ticket Tag */}
                    </div>
                    {/* Ticket Content */}
                  </div>
                  {/* Ticket Wrapper */}
                </div>
                {/* Ticket Slider Area */}
              </div>
              {/* Section Space */}
            </div>
          </div>
          {/*...::: Ticket Slider Section End :::... */}
          <section className="backdrop-blur-sm">
            <ThematicAreas />
          </section>
          {/*...::: Content Section Start :::... */}
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
          {/*...::: Content Section End :::... */}
          <section id="testimonials">
            <TestimonialsSection />
          </section>
          {/*...::: Newsletter Section Start :::... */}
          {/* <section className="section-newsletter">
          <div className="relative"> */}
          {/* Section Space */}
          {/* <div className="section-space"> */}
          {/* Section Container */}
          {/* <div className="container-default"> */}
          {/* Newsletter Area */}
          {/* <div
                  className="mx-auto flex max-w-[720px] flex-col justify-center text-center jos"
                  data-jos_once={1}
                  data-jos_animation="fade-up"
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <h2 className="mb-5 font-DmSans -tracking-[1px]">
                   {translation.map.title}
                  </h2>
                  <p className="mb-[50px]">
                  {translation.map.description}
                  </p>
                </div>
                <div className="mb-80 mt-20"> */}
          <div
            className="fixed right-0"
            style={{
              top: "10%", // Adjust this value to move the button down
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
            }}
          ></div>
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
          <TopButton/>

          {/*...::: Newsletter Section End :::... */}
          <Chatbot
            title="Afrika Journals Assistant"
            subtitle="Online"
            botName="Afrika Journals"
            welcomeMessage="Hi, I'm Afrika Journals Chatbot. How can I help you today?"
          />
          <Toaster />
        </main>

        {/* Divider Line */}
        {/* <div
  style={{
    width: '90%', // Adjusted width for spacing on sides
    height: '2px', // Slightly increased thickness for visibility
    backgroundColor: 'black', // Line color set to black
    margin: '0 auto 1px auto', // Centers the divider and adds bottom margin
  }}
/>  */}

{/* className="backdrop-blur-sm z-50" */}
        <section id="faq">
          <FAQSection />
        </section>
        {/*...::: Footer Section Start :::... */}
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
                      {/* <Link href="/">
                      <Image
                        src="assets/img/logo-violet-dark.png"
                        alt="Masco"
                        width={109}
                        height={24}
                      />
                    </Link> */}
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
                          href="mailto:info@Afrika Journals.com"
                          className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                        >
                          info@Afrika Journals.com
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
                        {/* <li>
                          <Link
                            className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                            href="/journals#"
                          >
                            {translation.navigation.journals}
                          </Link>
                        </li> */}
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
        {/*...::: Footer Section End :::... */}
      </div>
    </div>
  );
}
