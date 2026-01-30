"use client";
import Image from "next/image";
import Link from "next/link";


interface ServiceCard {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    href?: string;
    points: string[]; // ⭐ ADDED THIS – dynamic paras
}

const services: ServiceCard[] = [
    {
        id: "1",
        title: "E‑Commerce Store Development",
        description: "Tailored",
        tags: ["Responsive Design", "High Performance Builds"],
        image: "/1-service.svg",
        href: "#",
        points: [
            "New stores or brands upgrading from a basic setup",
           
        ]
    },
    {
        id: "2",
        title: "Small Business E‑Commerce Stores",
        description: "Enterprise Grade",
        tags: ["Scalable Solutions"],
        image: "/2-service.svg",
        href: "#",
        points: [
            "Entrepreneurs and small teams who want efficiency over maintenance",
            
        ]
    },
    {
        id: "3",
        title: "E‑Commerce Revamp",
        description: "Shopify",
        tags: ["Custom-Built Ecommerce"],
        image: "/3-service.svg",
        href: "#",
        points: [
            "Stores that feel slow, dated, or leaky in the funnel.",
           
        ]
    },
    {
        id: "4",
        title: "Smart E‑Commerce Implementation",
        description: "Custom Solutions",
        tags: ["SAAS", "OTH to Own Apps"],
        image: "/4-service.svg",
        href: "#",
        points: [
            "Teams that want results without a full rebuild",
          
        ]
    },
];

export function ServicesSection({ id }: { id?: string }) {
    return (
        <section id={id} className="relative w-full overflow-hidden py-16">
            {/* LEFT BG SVG */}
            {/* <div className="absolute -bottom-2.5 left-[-300px] -z-50">
                <Image
                    src="/left-hero-bg.svg"
                    alt="Hero Background"
                    width={400}
                    height={400}
                    className="w-[65%] h-full object-cover"
                />
            </div> */}

            <div className="relative z-10 2xl:max-w-[1740px] mx-auto md:w-[89%] 2xl:w-[85%]">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 style={{
                        fontFamily: "Futuru",
                        background: "linear-gradient(264deg, #00AA71 0%, #FFF 36.57%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }} className="text-[50px] leading-[50px] font-bold tracking-[2px] text-white text-center max-w-[800px] mx-auto">
                        COMPLETE WEBSITE SOLUTIONS <br /> FOR EVERY BUSINESS SIZE
                    </h2>
                </div>

                {/* --------------------------------------------------- */}
                {/* ✅ FEATURED CARD (Image Left, Content Right) */}
                {/* --------------------------------------------------- */}
                <div className="w-full mb-8">
                    <div className="group relative rounded-xl border-r border-t border-b border-[#FFFFFF33] bg-white/5 backdrop-blur-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                        {/* Left Image */}
                        <div className="relative h-64 2xl:h-80 w-full overflow-hidden mt-4 ml-4  2xl:mb-4 2xl:ml-4">
                            <Image
                                src="/web-service.svg"
                                alt="Website Redesign"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col gap-4 p-8 justify-center">
                            <h3 className="text-[35px] font-semibold text-white tracking-[2px]">Smart Store Development</h3>
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] text-white tracking-[2px]">Brands ready for intelligent</p>
                                <p className="text-[20px] text-white tracking-[2px]">automated shopping experiences.</p>
                            </div>

                            <Link
                                href="#"
                                className="inline-block w-fit px-6 pb-2 pt-1 tracking-[1.5px] rounded-md text-white uppercase bg-[#00AA71] hover:bg-transparent hover:text-[#00AA71] hover:border-[#00AA71] hover:border transition text-[14px]"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --------------------------------------------------- */}
                {/* ✅ 4-COLUMN SERVICES GRID */}
                {/* --------------------------------------------------- */}
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative rounded-xl border-r border-t border-b border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden p-4 transition-all duration-300 hover:border-white/40 hover:bg-white/20 space-y-5 2xl:space-y-4 h-[420px] 2xl:h-[410px]"
                        >
                            {/* Title */}
                            <h3 className={`text-[22px] 2xl:text-[28px] font-semibold text-white tracking-[2px] leading-8 ${service.id === "1" ? "w-[95%]" : ""}`}>{service.title}</h3>

                            {/* Image */}
                            <div className={`relative  ${service.id === "1" ? "h-36" : "h-[175px]"} w-full overflow-hidden rounded-xl mt-3`}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-1 mt-4">
                                {service.points.map((point, idx) => (
                                    <p key={idx} className="text-[16px] text-white tracking-[1.5px]">
                                        {point}
                                    </p>
                                ))}
                            </div>

                            {/* Learn More */}
                            <Link
                                href="#"
                                className=" w-fit text-[14px] px-6 pb-2 pt-1 tracking-[1.5px] rounded-md text-white uppercase bg-[#00AA71] hover:bg-transparent hover:text-[#00AA71] hover:border-[#00AA71] hover:border transition"
                            >
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
