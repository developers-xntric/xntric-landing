"use client";

import Image from "next/image";
import { useState } from "react";

interface CardSet {
    id: number;
    cards: {
        strategy: { title: string; description: string };
        media: { type: "video" | "image"; src: string };
        results: { title: string; description: string; imageSrc: string };
    };
}

const cardSets: CardSet[] = [
    {
        id: 1,
        cards: {
            strategy: {
                title: "Strategy That Drives Impact",
                description:
                    "We dive deep into data, audience insights, and market trends to shape smart digital strategies."
            },
            media: { type: "video", src: "/video1.webm" },
            results: {
                title: "Results That Speak—Case Studies",
                description:
                    "We deliver measurable results with a focus on growth and audience engagement.",
                imageSrc: "/image1.png"
            }
        }
    },
    {
        id: 2,
        cards: {
            strategy: {
                title: "Strategy That Drives Impact",
                description:
                    "We dive deep into data, audience insights, and market trends to shape smart digital strategies."
            },
            media: { type: "video", src: "/video2.webm" },
            results: {
                title: "Creative Solutions",
                description:
                    "See how our design forward approach has transformed brands and created memorable digital experiences that resonate with target audiences",
                imageSrc: "/image2.png"
            }
        }
    },
    {
        id: 3,
        cards: {
            strategy: {
                title: "Strategy That Drives Impact",
                description:
                    "We dive deep into data, audience insights, and market trends to shape smart digital strategies."
            },
            media: { type: "video", src: "/video3.webm" },
            results: {
                title: "Technical Excellence",
                description: "Discover how our technical expertise has helped businesses overcome challenges and achieve their digital transformation goals.",
                imageSrc: "/image5.png"
            }
        }
    },
    {
        id: 4,
        cards: {
            strategy: {
                title: "Growth Stories",
                description:
                    "Explore how our marketing campaigns drive audience growth and engagement."
            },
            media: { type: "video", src: "/video4.webm" },
            results: {
                title: "Marketing Success",
                description:
                    "Helping businesses grow with strategic marketing initiatives.",
                imageSrc: "/image4.png"
            }
        }
    }
];

export default function CaseStudies({ isPadding = false }) {
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 2;
    const totalPages = Math.ceil(cardSets.length / itemsPerPage);
    const currentCardSets = cardSets.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    return (
        <section className={`${isPadding ? "py-16" : "py-16"}  font-futuru relative overflow-hidden`}>


            <div className="absolute bottom-[250px] right-[-500px] -z-10">
                <Image
                    src="/right-hero-bg.svg"
                    alt="Hero Background"
                    width={400}
                    height={400}
                    className="w-[80%] h-full object-cover"
                />
            </div>

            <div className="2xl:max-w-[1620px] mx-auto md:w-[89.5%] 2xl:w-[84.5%]">

                <h2 className="text-[50px] leading-[50px] font-bold tracking-[2px] text-white uppercase text-center mb-6">
                    Projects That Deliver Results
                </h2>

                <div className="flex flex-col -space-y-8 ">
                    {currentCardSets.map((set) => (
                        <div
                            key={set.id}
                            className="grid md:grid-cols-2  gap-4 p-6"
                        >
                            {/* Left Column: Content + Video */}

                            <div className="flex gap-4 h-[500px] border-t border-b border-[#FFFDFD42] bg-white/10 backdrop-blur-xl rounded-[8px] p-6">
                                <div className="flex flex-col justify-between w-1/2">
                                    <h3 className="text-white font-semibold text-[1.125rem] md:text-[26px] leading-[30px] uppercase max-w-[200px] tracking-[1.5px]">
                                        {set.cards.results.title}
                                    </h3>
                                    <p className="text-[18px] text-white font-light tracking-[1.5px] leading-[24px]">
                                        {set.cards.results.description}
                                    </p>
                                </div>
                                <Image
                                    src={set.cards.results.imageSrc}
                                    alt="Case Study Image"
                                    width={400}
                                    height={240}
                                    className="w-1/2 h-full rounded-[8px] object-cover"
                                />
                            </div>

                            {/* Right Column: Content + Image */}


                            <div className="flex gap-4 h-[500px] border-t border-b border-[#FFFDFD42] bg-white/10 backdrop-blur-xl rounded-[8px] p-6">
                                <div className="flex flex-col justify-between w-1/2">
                                    <h2 className="text-[1.375rem] md:text-[30px] font-semibold text-white leading-[36px] uppercase max-w-[400px] tracking-[1.5px]">
                                        {set.cards.strategy.title}
                                    </h2>
                                    <p className="text-[18px] text-white font-light tracking-[1.5px] leading-[24px]">
                                        {set.cards.strategy.description}
                                    </p>
                                </div>
                                {set.cards.media.type === "video" && (
                                    <video
                                        src={set.cards.media.src}
                                        autoPlay
                                        loop
                                        muted
                                        className="w-1/2 h-full rounded-[8px] object-cover"
                                    />
                                )}
                            </div>

                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 gap-1">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx)}
                            className={`w-10 h-10 rounded-full   backdrop-blur-md flex items-center justify-center text-white font-semibold transition-all cursor-pointer ${currentPage === idx
                                ? "bg-transparent border border-white "
                                : "bg-white/5 hover:bg-white/10 border-b border-white/20"
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>

            </div>

        </section>
    );
}
