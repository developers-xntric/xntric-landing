
"use client";
import Image from "next/image";
// import AboutSection from "./components/about-section";
import CaseStudies from "./components/case-studies";
import { CTASection } from "./components/CTASection";
import { FAQSection } from "./components/faq-section";
import Hero from "./components/hero";
import OurProcess from "./components/our-process";
import { PainPoints } from "./components/pain-points";
import { ServicesSection } from "./components/services";
import TechStack from "./components/tech-stacks";
import { Testimonials } from "./components/testimonials";
import WhyChooseUs from "./components/why-choose-us";
import { useBallScrollAnimation } from "./components/moving-ball";


export const steps4 = [
  {
    number: "01",
    title: "Discovery & Strategy ",
    description: "Business goals, technical audit, sitemap planning",
    icon: "/discover-icon.svg",
    bgImage: "/discover-bg.png",
    bgColor: "bg-gray-900",
  },
  {
    number: "02",
    title: "UX/UI Design",
    description:
      "Wireframes, prototypes, brand-aligned visuals",
    icon: "/ui-icon.svg",
    bgImage: "/ui-bg.png",
    bgColor: "bg-gray-800",
  },
  {
    number: "03",
    title: "Development",
    description: "Front-end + back-end, CMS setup, API integrations",
    icon: "/dev-icon.svg",
    bgImage: "/dev-bg.png",
    bgColor: "bg-gray-700",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Performance, SEO, CRO, QA testing",
    icon: "/optimize-icon.svg",
    bgImage: "/optimize-bg.png",
    bgColor: "bg-gray-900",
  },
  {
    number: "04",
    title: "Launch & Handover",
    description: "Deployment, documentation, training",
    icon: "/launch-icon.svg",
    bgImage: "/launch-bg.png",
    bgColor: "bg-emerald-500",
  },
];


export default function Home() {
  useBallScrollAnimation([
    "hero",
    "about",
    "pain",
    "services",
    "process",
    "tech",
    "case",
    "why",
    "testimonials",
    "faq",
    "cta"
  ]);

  return (
    <div className="">
      <div
        id="floating-ball"
        className="fixed left-[40%] top-[18%] -translate-x-1/2 
            w-[60px] h-[60px] md:w-20 md:h-20 lg:w-[150px] lg:h-[150px]
             rounded-full bg-linear-to-bl from-[#3BE29A] to-[#00442D3B]
             opacity-80 -z-30 pointer-events-none
             flex items-center justify-center"
      >
        <div id="ball-content" className="text-center"></div>
      </div>

      <Hero id="hero" />
      {/* <AboutSection id="about" /> */}
      <PainPoints id="pain" />
      <ServicesSection id="services" />
      <OurProcess id="process" steps={steps4} />
      <TechStack id="tech" />
      <CaseStudies id="case" />
      <WhyChooseUs id="why" />
      <Testimonials id="testimonials" />
      <div className="relative overflow-hidden">
        <div className="absolute -bottom-20 right-[-550px] -z-10">
          <Image
            src="/right-hero-bg.svg"
            alt="Hero Background"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <FAQSection id="faq" />
        <CTASection id="cta" />
      </div>
    </div>
  );
}
