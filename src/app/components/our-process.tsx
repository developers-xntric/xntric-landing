/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export type Step = {
    number: string;
    title: string;
    description: string;
    icon: string;
    bgImage: string;
    bgColor: string;
};

function StepCard({ step, index }: { step: Step; index: number }) {
    const cardRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        if (!isMounted || isDesktop === null) return;

        ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.trigger === cardRef.current) trigger.kill();
        });

        gsap.set(cardRef.current, {
            opacity: index === 0 ? 1 : 0,
        });

        if (index > 0) {
            const timer = setTimeout(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: isDesktop ? "top 8%" : "top bottom",
                        end: isDesktop ? "bottom top" : "bottom top",
                        toggleActions: "play reverse play reverse",
                        scrub: isDesktop ? 5 : false,
                        refreshPriority: 1,
                        invalidateOnRefresh: true,
                    },
                });

                tl.to(cardRef.current, {
                    opacity: 1,
                    duration: isDesktop ? 2 : 1,
                    ease: "power2.out",
                    delay: isDesktop ? (index - 1) * 2 : (index - 1) * 0.5,
                });
            }, 100);

            return () => {
                clearTimeout(timer);
                ScrollTrigger.getAll().forEach((trigger) => {
                    if (trigger.trigger === cardRef.current) trigger.kill();
                });
            };
        }
    }, [index, isDesktop, isMounted]);

    if (!isMounted || isDesktop === null) {
        return (
            <section
                className={`relative min-h-[25vh] lg:min-h-[45vh] lg:w-[40%] flex flex-col justify-start ${step.bgColor}`}
            >
                <div className="opacity-0">Loading...</div>
            </section>
        );
    }

    return (
        <section
            ref={cardRef}
            className={`relative min-h-[55vh] 2xl:min-h-[52vh] w-full flex flex-col justify-start ${step.bgColor}`}

        >
            {step.bgImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url(${step.bgImage})` }}
                />
            )}

            <div className="relative z-10 text-center p-6 font-futuru flex flex-col items-center justify-center h-full mt-8 lg:mt-0">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center">
                            <Image
                                src={step.icon || "/placeholder.svg"}
                                alt={step.number}
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>

                    <h3
                        className={`xl:w-[233px] mx-auto text-center text-[28px] 2xl:text-[34px] font-semibold tracking-wide font-futuru uppercase leading-[35px] ${step.number === "05" ? "text-black" : "text-white"
                            }`}
                    >
                        {step.title}
                    </h3>

                    <h3 className="lg:w-[90%] 2xl:w-[280px] font-futuru min-h-20 mx-auto opacity-80 text-center text-base font-futuru leading-[21px] text-white font-light tracking-[2px] 2xl:text-[18px] xl:text-[15px]">
                        {step.description}
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default function OurProcess({ steps }: { steps?: Step[] }) {
    const pinSectionRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    const stepsToDisplay = steps || [];

    useEffect(() => {
        setIsMounted(true);
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        if (!isMounted || isDesktop === null) return;

        if (isDesktop) {
            const timer = setTimeout(() => {
                const pinTrigger = ScrollTrigger.create({
                    trigger: pinSectionRef.current,
                    start: "top 12%",
                    end: "+=200%",
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    scrub: 1,
                    refreshPriority: 0,
                    markers: false,
                    invalidateOnRefresh: true,
                });
                return () => pinTrigger.kill();
            }, 150);

            return () => clearTimeout(timer);
        }
    }, [isDesktop, isMounted]);

    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            ScrollTrigger.refresh();
        };
    }, []);

    return (
        <div className="md:py-16 font-futuru space-y-6 md:space-y-20">

            {/* 🔥 WRAP TITLE + CARDS TO PIN ONLY THIS BLOCK */}
            <div ref={pinSectionRef} className="space-y-20">

                {/* Title */}
                <div className="px-6">
                    <h2 className="text-[50px] leading-[50px] font-bold tracking-[2px] text-white text-center max-w-[800px] mx-auto uppercase">
                        Our Proven Website<br /> Development Process
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 overflow-hidden">

                    {stepsToDisplay.map((step: Step, index: number) => (
                        <StepCard key={index} step={step} index={index} />
                    ))}
                </div>

            </div>
        </div>
    );
}
