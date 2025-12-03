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
                title: "Results That Speak",
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
                title: "Creative Solutions",
                description:
                    "See how our design-forward approach has transformed brands and created memorable digital experiences."
            },
            media: { type: "video", src: "/video2.webm" },
            results: {
                title: "Design Impact",
                description:
                    "Our creative solutions have helped brands connect better with their audience.",
                imageSrc: "/image2.png"
            }
        }
    },
    {
        id: 3,
        cards: {
            strategy: {
                title: "Technical Excellence",
                description:
                    "Discover how our technical expertise helps businesses overcome challenges."
            },
            media: { type: "video", src: "/video3.webm" },
            results: {
                title: "Tech Results",
                description: "Delivering robust and scalable solutions that meet business needs.",
                imageSrc: "/image3.png"
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
        <section className={`${isPadding ? "py-16" : ""} max-w-[90%] mx-auto font-futuru`}>
            <div className="flex flex-col gap-12">
                {currentCardSets.map((set) => (
                    <div
                        key={set.id}
                        className="grid md:grid-cols-2  gap-8 border-t border-b border-[#454545] bg-white/10 backdrop-blur-xl rounded-[8px] p-6"
                    >
                        {/* Left Column: Content + Video */}

                        <div className="flex gap-4 h-[500px]">
                            <div className="flex flex-col justify-between w-1/2">
                                <h3 className="text-white font-semibold text-[1.125rem] md:text-[1.25rem] leading-[1.4]">
                                    {set.cards.results.title}
                                </h3>
                                <p className="text-white/70 text-[0.9375rem] md:text-[1rem] leading-[1.6]">
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



                        <div className="flex gap-4 h-[500px]">
                            <div className="flex flex-col justify-between w-1/2">
                                <h2 className="text-[1.375rem] md:text-[1.5rem] font-semibold text-white leading-[1.4]">
                                    {set.cards.strategy.title}
                                </h2>
                                <p className="text-white/70 mt-2 text-[0.9375rem] md:text-[1rem] leading-[1.6]">
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

                        {/* Right Column: Content + Image */}

                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-3">
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentPage(idx)}
                        className={`w-10 h-10 rounded-[8px] border border-white/20 backdrop-blur-md flex items-center justify-center text-white font-semibold transition-all ${currentPage === idx
                                ? "bg-[#00AA71]/20 border-[#00AA71]"
                                : "bg-white/5 hover:bg-white/10"
                            }`}
                    >
                        {idx + 1}
                    </button>
                ))}
            </div>
        </section>
    );
}
