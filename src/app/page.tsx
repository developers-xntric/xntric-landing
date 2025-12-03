import AboutSection from "./components/about-section";
import CaseStudies from "./components/case-studies";
import { CTASection } from "./components/CTASection";
import { FAQSection } from "./components/faq-section";
import Hero from "./components/hero";
import OurProcess from "./components/our-process";
import { PainPoints } from "./components/pain-points";
import { ServicesSection } from "./components/services";
import TechStack from "./components/tech-stacks";
import { Testimonials } from "./components/testimonials";



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
  return (
    <div className="">
      <Hero />
      <AboutSection/>
      <PainPoints/>
      <ServicesSection/>
      <OurProcess   steps={steps4}/>
      <TechStack/>
      <Testimonials/>
      <CaseStudies/>
      <CTASection/>
      <FAQSection/>
    </div>
  );
}
