"use client";

import Image from "next/image";
import React from "react";
import { Translation} from "@/data/content";


interface FooterProps {
  translation: Translation;
}

const Footer = ({translation }: FooterProps) => {
  return (
    <>
      {" "}
      {/*...::: Footer Section Start :::... */}
      <footer className="section-footer">
        <div className="bg-[#0A102F]">
          {/* Footer Area Center */}
          <div className="text-white">
            {/* Footer Center Spacing */}
            <div className="py-[60px] lg:py-20">
              {/* Section Container */}
              <div className="container-default">
                {/* Footer Widget List */}
                <div className="grid gap-x-4 lg:gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-[1fr_repeat(3,_auto)] xl:lg:grid-cols-[1fr_repeat(4,_auto)]  xl:gap-x-20">
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-4 lg:col-span-1">
                    {/* Footer Logo */}
                    <a href="/">
                      <Image
                        src="/assets/img/logo-white.png"
                        className="w-48"
                        alt="Masco"
                        width={109}
                        height={24}
                      />
                    </a>
                    {/* Footer Content */}
                    <div>
                      {/* Footer About Text */}
                      <div className="lg:max-w-[320px]">
                        For more information about our services, privacy
                        practices, or terms of use, please visit the relevant
                        sections below. Connect with us on social media to stay
                        updated on the latest news and features.
                      </div>
                      {/* Footer Mail */}
                      <a
                        href="mailto:yourdemo@email.com"
                        className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                      >
                        info@orderfiti.com
                      </a>
                      {/* Footer Social Link */}
                      <div className="flex flex-wrap gap-5">
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:text-white"
                          aria-label="twitter"
                        >
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:text-white"
                          aria-label="facebook"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:text-white"
                          aria-label="instagram"
                        >
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <a
                          href="https://www.github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:text-white"
                          aria-label="github"
                        >
                          <i className="fa-brands fa-github" />
                        </a>
                      </div>
                    </div>
                    {/* Footer Content */}
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                    {/* Footer Widget Title */}
                    <div className="text-xl font-semibold capitalize">
                      Primary Pages
                    </div>
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/about"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/services"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/pricing"
                        >
                          pricing
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Utility pages
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/signup"
                        >
                          Signup
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/login"
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/error-404"
                        >
                          404 Not found
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                          href="/reset-password"
                        >
                          Password Reset
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item*/}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Resources
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Privacy policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Strategic finance
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                        >
                          Video guide
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Download now
                    </div>
                    {/* Footer Title */}
                    <div className="flex flex-col gap-3">
                      <a href="#">
                        <Image
                          src="/assets/img/icons/icon-apple-app-store.svg"
                          alt="icon-apple-app-store"
                          width={166}
                          height={54}
                        />
                      </a>
                      <a href="#">
                        <Image
                          src="/assets/img/icons/icon-google-play-store.svg"
                          alt="icon-apple-app-store"
                          width={166}
                          height={51}
                        />
                      </a>
                    </div>
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
    </>
  );
};

export default Footer;
