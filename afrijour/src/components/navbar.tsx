"use client";
import { languages, Translation } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface NavbarProps {
  setSelectedLanguage: (languageCode: string) => void;
  selectedLanguage: string;
  translation: Translation;
  className?: string;
}

const Navbar = ({ setSelectedLanguage, selectedLanguage, translation }: NavbarProps) => {
  const [isActive, setIsActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility
  const [activeSection, setActiveSection] = useState<string>("");

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  // Handle scroll direction and hero section visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true); // Scrolling up
      } else {
        setIsNavbarVisible(false); // Scrolling down
      }

      setLastScrollY(currentScrollY);

      // Check if the hero section is out of view and hide navbar when out of view
      const heroSection = document.querySelector("#hero-section") as HTMLElement;
      if (heroSection && window.scrollY > heroSection.offsetHeight) {
        setIsNavbarVisible(false); // Hide navbar when past hero section
      } else {
        setIsNavbarVisible(true); // Show navbar if still within hero section
      }

      // Update active section for ScrollSpy functionality
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        if (sectionId && window.scrollY >= section.offsetTop - 100) {
          currentSectionId = sectionId;
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const menu = document.querySelector(".menu-block") as HTMLElement;
    const menuMain = menu.querySelector(".site-menu-main") as HTMLElement;
    const submenuAll = menu.querySelectorAll(".sub-menu") as NodeListOf<HTMLElement>;
    const goBack = menu.querySelector(".go-back") as HTMLElement;
    const menuTrigger = document.querySelector(".mobile-menu-trigger") as HTMLElement;
    const closeMenu = menu.querySelector(".mobile-menu-close") as HTMLElement;

    function toggleMenu() {
      menu.classList.toggle("active");
      document.querySelector(".menu-overlay")?.classList.toggle("active");
    }

    goBack.addEventListener("click", () => {
      menu.querySelector(".mobile-menu-head")?.classList.remove("active");
    });

    menuMain.addEventListener("click", (e) => {
      if (!menu.classList.contains("active")) return;
      const target = e.target as HTMLElement;
      const hasChildren = target.closest(".nav-item-has-children") as HTMLElement;
      if (hasChildren) {
        const subMenu = hasChildren.querySelector(".sub-menu") as HTMLElement;
        subMenu.classList.add("active");
      }
    });

    menuTrigger.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", toggleMenu);
    document.querySelector(".menu-overlay")?.addEventListener("click", toggleMenu);

    const handleResize = () => {
      if (window.innerWidth > 991 && menu.classList.contains("active")) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".menu-block")) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  return (
    <>
      <header
        className={`site-header site-header--absolute is--white py-3 ${isNavbarVisible ? "" : "hidden"}`}
        id="sticky-menu"
      >
        <div className="container-default">
          <div className="flex items-center justify-between gap-x-8">
            <Link href="/" className="ml+10">
              <Image
                src="/logo.png"
                alt="Afrika Journals Logo"
                width={170}
                height={37}
              />
            </Link>

            <div className="menu-block-wrapper">
              <div className={`menu-overlay ${isActive ? "active" : ""}`} />
              <nav className={`menu-block ${isActive ? "active" : ""}`} id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa-solid fa-angle-left" />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close" onClick={handleMenuClick}>×</div>
                </div>
                <ul className="site-menu-main">
                  {Object.keys(translation.navigation).map((key) => (
                    <li className="nav-item" key={key}>
                      <Link
                        href={`#${key}`}
                        className={`nav-link-item ${
                          activeSection === key ? "underline text-blue-500" : ""
                        }`}
                      >
                        {translation.navigation[key as keyof typeof translation.navigation]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
              <Link href="https://afrijour.web.app/" className="group relative hidden sm:inline-block">
                <div className="btn is-rounded is-lunar-green">Dashboard</div>
                <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
              </Link>

              <div className="block lg:hidden">
                <button id="openBtn" className="hamburger-menu mobile-menu-trigger" onClick={handleMenuClick}>
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
