"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function useBallScrollAnimation(sectionIds: string[]) {
    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const ball = document.getElementById("floating-ball");
        const content = document.getElementById("ball-content");

        if (!ball || !content) return;

        // Predefined X positions for sections other than Hero/About
        const sidePositions = ["10%", "70%", "15%", "60%", "20%", "75%"];

        sectionIds.forEach((id, index) => {
            const el = document.getElementById(id);
            if (!el) return;

            // -------------------------------
            // HERO SECTION ANIMATION
            // -------------------------------
            if (id === "hero") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.7,
                    markers: false,
                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        const startX = 40;
                        const endX = 110;
                        const startY = 58;
                        const endY = 68;
                        const startWidth = 400;
                        const endWidth = 400;
                        const startHeight = 400;
                        const endHeight = 400;

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;
                        const newWidth = startWidth + (endWidth - startWidth) * progress;
                        const newHeight = startHeight + (endHeight - startHeight) * progress;

                        gsap.set(ball, { x: `${newX}%`, y: `${newY}%`, width: `${newWidth}px`, height: `${newHeight}px` });
                        content.innerHTML = "";
                    },
                    onLeaveBack: () => {
                        gsap.to(ball, { x: "40%", y: "18%", width: 300, height: 300, duration: 0.5, ease: "power3.out" });
                    },
                });
            }


            // -------------------------------
            // ABOUT SECTION ANIMATION
            // -------------------------------
            if (id === "about") {
                const awards = [
                    { year: 2022, image: "/awward-1.svg" },
                    { year: 2023, image: "/awward-2.svg" },
                    { year: 2023, image: "/awward-1.svg" },
                    { year: 2023, image: "/awward-4.svg" },
                    { year: 2024, image: "/awward-5.svg" },
                    { year: 2023, image: "/awward-1.svg" },
                ];

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 55%",   // when About section starts
                    end: "bottom 80%",  // when About section ends
                    scrub: 0.7,
                    markers: false,

                    onEnter: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(135deg, #A1A1A1, #fff)", // gradient for About
                            duration: 0.5,
                        });
                    },

                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(135deg, #A1A1A1, #fff)",
                            duration: 0.5,
                        });
                    },

                    onLeaveBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(135deg, rgba(59,226,154,0.8), rgba(0,68,45,0.2))", // revert to Hero gradient
                            duration: 0.5,
                        });
                    },

                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        // -------------------------------
                        // Ball movement positions
                        // -------------------------------
                        const startX = 95; // Hero final X%
                        const startY = 68; // Hero final Y%
                        const endX = -140; // About target X%
                        const endY = 60;   // About target Y%

                        // -------------------------------
                        // Ball size
                        // -------------------------------
                        const startSize = 30; // vw
                        const endSize = 15;   // vw

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;
                        const newSize = startSize + (endSize - startSize) * progress;

                        // Apply position & size
                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });


                        // Show award inside the ball
                        const awardIndex = Math.min(
                            Math.floor(progress * awards.length),
                            awards.length - 1
                        );
                        const award = awards[awardIndex];

                        content.innerHTML = `
                <div class="flex flex-col items-center justify-center gap-1 text-center">
                    <img src="${award.image}" alt="Award" class="w-32 h-32 object-contain"/>
                    <p class="text-[16px] font-medium tracking-[1.5px] text-black">${award.year}</p>
                </div>
            `;
                    },
                });
            }

            // -------------------------------
            // PAIN POINTS SECTION ANIMATION
            // -------------------------------
            if (id === "pain") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top center",
                    end: "bottom 80%",
                    scrub: 0.7,
                    markers: false, // set true for debugging
                    onEnter: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(30deg, #0A4B35, #29DA9F)",
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(30deg, #0A4B35, #29DA9F)",
                            duration: 0.5,
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(135deg, #A1A1A1, #fff)", // About section default
                            duration: 0.5,
                        });
                    },
                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        // Responsive positions and size like Hero section
                        const startX = -100;    // left edge in %
                        const endX = 100;     // right edge in %
                        const startY = 20;   // top edge in %
                        const endY = 85;     // bottom edge in %
                        const startSize = 25; // in vw
                        const endSize = 40;   // in vw

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;
                        const newSize = startSize + (endSize - startSize) * progress;

                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });

                        // Fade text out
                        const opacity = 1 - progress;
                        content.innerHTML = `
        <p class="text-[4vw] md:text-[3vw] lg:text-[2.5vw] font-bold text-center tracking-[1.5px] uppercase w-[80%] mx-auto leading-[1.2em] text-white" style="opacity: ${opacity}">
          Is Your Website Holding Your Business Back?
        </p>
      `;
                    },
                });
            }

            // -------------------------------
            // SERVICES SECTION ANIMATION
            // -------------------------------
            if (id === "services") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 55%",
                    end: "bottom 80%",
                    scrub: 0.7,
                    markers: false,
                    onEnter: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(90deg, #3BE29A, #3BE29A00)", // example gradient for Services
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(90deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },
                    onLeaveBack: () => {
                        // revert to Pain Points gradient when scrolling back
                        gsap.to(ball, {
                            background: "linear-gradient(30deg, #0A4B35, #29DA9F)",
                            duration: 0.5,
                        });
                    },
                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        // Start from Pain Points end position
                        const startX = 85;   // Pain Points right-bottom X in %
                        const endX = -100;      // Move to left
                        const startY = 85;   // Pain Points bottom Y in %
                        const endY = 10;     // Slightly lower in Services
                        const startSize = 40; // vw, same as Pain Points end size
                        const endSize = 35;   // Increase as moving to Services

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;
                        const newSize = startSize + (endSize - startSize) * progress;

                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });

                        // Optional: clear content or show Services-specific info
                        content.innerHTML = "";
                    },
                });
            }


            // -------------------------------
            // OUR PROCESS SECTION ANIMATION
            // -------------------------------

            if (id === "process") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top top",
                    end: "bottom 80%",
                    scrub: 1, // increase scrub for smoother, slower movement
                    markers: false,
                    onEnter: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(90deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(90deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(30deg, #0A4B35, #29DA9F)",
                            duration: 0.5,
                        });
                    },
                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        // X and Y positions
                        const startX = 0;   // starting X from Services section
                        const endX = 85;    // target X in OurProcess
                        const endY = 20;    // target Y in OurProcess
                        const startY = 85;  // starting Y (bottom of Services)

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;

                        // Optional: adjust size if you want
                        const startSize = 35;
                        const endSize = 40;
                        const newSize = startSize + (endSize - startSize) * progress;

                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });

                        content.innerHTML = "";
                    },
                });
            }


            // -------------------------------
            // TEch SECTION ANIMATION
            // -------------------------------
            if (id === "tech") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 55%",
                    end: "bottom 80%",
                    scrub: 0.7,
                    markers: false,
                    onEnter: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)", // example gradient for Services
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },
                    onLeaveBack: () => {
                        // revert to Pain Points gradient when scrolling back
                        gsap.to(ball, {
                            background: "linear-gradient(30deg, #0A4B35, #29DA9F)",
                            duration: 0.5,
                        });
                    },
                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        // Start from Pain Points end position
                        const startX = 85;   // Pain Points right-bottom X in %
                        const endX = -90;      // Move to left
                        const endY = 40;     // Slightly lower in Services
                        const startY = 85;   // Pain Points bottom Y in %
                        const startSize = 40; // vw, same as Pain Points end size
                        const endSize = 35;   // Increase as moving to Services

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;
                        const newSize = startSize + (endSize - startSize) * progress;

                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });

                        // Optional: clear content or show Services-specific info
                        content.innerHTML = "";
                    },
                });
            }


            // -------------------------------
            // Case Studies SECTION ANIMATION
            // -------------------------------

            if (id === "case") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top top",
                    end: "bottom 80%",
                    scrub: 1, // increase scrub for smoother, slower movement
                    markers: false,
                    onEnter: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(30deg, #0A4B35, #29DA9F)",
                            duration: 0.5,
                        });
                    },
                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        // X and Y positions
                        const startX = -90;   // starting X from Services section
                        const endX = 85;    // target X in OurProcess
                        const startY = 40;  // starting Y (bottom of Services)
                        const endY = 20;    // target Y in OurProcess

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;

                        // Optional: adjust size if you want
                        const startSize = 35;
                        const endSize = 40;
                        const newSize = startSize + (endSize - startSize) * progress;

                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });

                        content.innerHTML = "";
                    },
                });
            }

            // Why Choose Us SECTION ANIMATION
            // -------------------------------

            if (id === "why") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 45%",
                    end: "bottom 80%",
                    scrub: 0.7,
                    markers: false,

                    onEnter: () => {
                        // Ball gradient when entering
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.4,
                        });

                        // WHY background goes full gradient
                        gsap.to(el, {
                            background: "linear-gradient(200deg, #3BE29A, #00442D3B)",
                            opacity: 1,
                            duration: 0.4,
                        });
                    },

                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.4,
                        });

                        gsap.to(el, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            opacity: 1,
                            duration: 0.4,
                        });
                    },

                    onLeaveBack: () => {
                        // Reset both ball + bg when scrolling up
                        gsap.to(ball, {
                            opacity: 1,
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.4,
                        });

                        gsap.to(el, {
                            background: "transparent",
                            opacity: 0,
                            duration: 0.4,
                        });
                    },

                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        /* ----------------------------------
                         * ORIGINAL MOTION VALUES YOU CREATED
                         * ----------------------------------*/
                        const startX = 85;
                        const endX = -90;

                        const startY = 20;
                        const endY = 40;

                        const startSize = 40;
                        const endSize = 35;

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;
                        const newSize = startSize + (endSize - startSize) * progress;

                        // Apply movement
                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });

                        /* ----------------------------------
                         * STAGE 1 — Ball EXPANDS + HIDES
                         * ----------------------------------*/
                        if (progress < 0.25) {
                            const scaleVal = gsap.utils.mapRange(0, 0.25, 1, 4, progress); // zoom 1x to 4x

                            gsap.set(ball, {
                                scale: scaleVal,
                                opacity: 1 - progress * 4, // fade out fast
                            });
                        }

                        /* ----------------------------------
                         * STAGE 3 — Ball comes back at end
                         * ----------------------------------*/
                        if (progress > 0.85) {
                            gsap.to(ball, {
                                opacity: (progress - 0.85) * 5, // fade in from 0 → 1
                                scale: 1,
                                duration: 0.2,
                            });
                        }

                        content.innerHTML = "";
                    },
                });
            }

            // TESTIMONIALS SECTION ANIMATION
            // -------------------------------
            if (id === "testimonials") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 55%",
                    end: "bottom 80%",
                    scrub: 0.7,
                    markers: false,

                    onEnter: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },

                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        // Ball movement positions
                        const startX = -90;
                        const endX = 100;
                        const startY = 40;   // top
                        const endY = 40;     // lower down

                        // Ball size (optional)
                        const startSize = 35;
                        const endSize = 35;

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;
                        const newSize = startSize + (endSize - startSize) * progress;

                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });

                        content.innerHTML = ""; // optional if you want to clear content inside ball
                    },
                });
            }


            // FAQSection 
            if (id === "faq") {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 55%",
                    end: "bottom 80%",
                    scrub: 0.7,
                    markers: true,

                    onEnter: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(ball, {
                            background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
                            duration: 0.5,
                        });
                    },

                    onUpdate: (self) => {
                        const progress = self.progress; // 0 → 1

                        // Ball movement positions
                        const startX = 100;
                        const endX = -100;
                        const startY = 40;   // top
                        const endY = 60;     // lower down

                        // Ball size (optional)
                        const startSize = 35;
                        const endSize = 30;

                        const newX = startX + (endX - startX) * progress;
                        const newY = startY + (endY - startY) * progress;
                        const newSize = startSize + (endSize - startSize) * progress;

                        gsap.set(ball, {
                            x: `${newX}%`,
                            y: `${newY}%`,
                            width: `${newSize}vw`,
                            height: `${newSize}vw`,
                        });

                        content.innerHTML = ""; // optional if you want to clear content inside ball
                    },
                });
            }


            // -------------------------------
            // OTHER SECTIONS (horizontal movement)
            // -------------------------------

        });
    }, []);
}
