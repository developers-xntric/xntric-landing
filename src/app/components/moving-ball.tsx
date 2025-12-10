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

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      // -------------------------------
      // HERO SECTION ANIMATION
      // -------------------------------
      if (id === "hero") {
        ScrollTrigger.create({
          trigger: el,
          start: "top 3%",
          end: "bottom 70%",
          scrub: 1.7,
          markers: false,
          onEnter: () => gsap.to(ball, { opacity: 1, duration: 0.3 }),
          onUpdate: (self) => {
           const progress = self.progress;

            const startX = 10;
            const endX = -120;
            const startY = 0;
            const endY = -23;
            const startSize = 25;
            const endSize = 25;

            const newX = startX + (endX - startX) * progress;
            const newY = startY + (endY - startY) * progress;
            const newSize = startSize + (endSize - startSize) * progress;

            gsap.to(ball, {
              x: `${newX}%`,
              y: `${newY}%`,
              width: `${newSize}vw`,
              height: `${newSize}vw`,
              duration: 0.7,
              ease: "power1.out",
              overwrite: "auto",
            });
            content.innerHTML = "";
          },
         

          onLeaveBack: () => {
            gsap.to(ball, {
              x: "8%",
              y: "-2%",
              width: "150px",
              height: "150px",
              duration: 0.9,
              ease: "power3.out",
            });
          },
        });
      }

      // -------------------------------
      // ABOUT SECTION - MULTIPLE BALLS
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

        const aboutGradient = "linear-gradient(135deg, #A1A1A1, #fff)";
        const heroGradient = "linear-gradient(135deg, rgba(59,226,154,0.8), rgba(0,68,45,0.2))";
        const secondBallGradient = "linear-gradient(145deg, #37C7EF, #113D49)";

        const aboutSection = el;

        const ballsContainer = document.getElementById("balls-container") || (() => {
          const container = document.createElement("div");
          container.id = "balls-container";
          container.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10; overflow: visible;";
          aboutSection.style.position = "relative";
          aboutSection.style.overflow = "visible";
          aboutSection.appendChild(container);
          return container;
        })();

        ballsContainer.innerHTML = "";

        const balls = awards.map((award, i) => {
          const ballEl = document.createElement("div");
          ballEl.className = "award-ball flex items-center justify-center absolute rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2";

          // Different image sizes using Tailwind breakpoints
          const imageClass = [
            "w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-[11vw] xl:h-[11vw]", // first ball
            "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[11vw] xl:h-[11vw]", // second ball
            "w-12 h-12 md:w-16 md:h-16 lg:w-32 lg:h-32 xl:w-[11vw] xl:h-[11vw]", // remaining balls
            "w-12 h-12 md:w-16 md:h-16 lg:w-32 lg:h-32 xl:w-[11vw] xl:h-[11vw]",
            "w-12 h-12 md:w-16 md:h-16 lg:w-32 lg:h-32 xl:w-[11vw] xl:h-[11vw]",
            "w-12 h-12 md:w-16 md:h-16 lg:w-32 lg:h-32 xl:w-[11vw] xl:h-[11vw]",
          ][i];

          const contentEl = document.createElement("div");
          contentEl.className = "ball-content";
          contentEl.innerHTML = `
    <div class="flex flex-col items-center justify-center -space-y-5 text-center">
      <img src="${award.image}" class="${imageClass} object-contain" />
      <p class="text-xs md:text-[23px] 2xl:text-[26px] font-medium tracking-[1.5px] text-black">${award.year}</p>
    </div>
  `;

          ballEl.appendChild(contentEl);
          ballsContainer.appendChild(ballEl);
          return { element: ballEl, content: contentEl, award };
        });


        // Responsive positioning strategy with proper spacing
        // Using calc() with viewport units to prevent overlapping
        const ballPositions = [
          { x: 64, y: 9, offsetX: "0vw", offsetY: "0vh" },      // Ball 1: Top-right
          { x: 78, y: 36, offsetX: "6vw", offsetY: "3vh" },      // Ball 2: Middle-right (offset slightly)
          { x: 58, y: 50, offsetX: "5vw", offsetY: "6vh" },     // Ball 3: Middle-center (more left)
          { x: 40, y: 62, offsetX: "4vw", offsetY: "2vh" },     // Ball 4: Lower-middle (offset)
          { x: 22, y: 68, offsetX: "4vw", offsetY: "1vh" },      // Ball 5: Lower-left
          { x: 5, y: 75, offsetX: "4vw", offsetY: "3vh" },     // Ball 6: Middle-left (up slightly)
        ];

        ScrollTrigger.create({
          trigger: el,
          start: "top 40%",
          end: "bottom 20%",
          scrub: 1.2,
          pin: false,
          markers: false,
          onEnter: () => {
            // Keep hero ball visible until balls fade in
            gsap.to(ball, { opacity: 1, duration: 0 });

            // Fade out slowly AFTER progress starts
            gsap.to(ball, { opacity: 0, duration: 0.6, delay: 0.2 });
          },

          onLeaveBack: () => gsap.to(ball, { opacity: 1, background: heroGradient, duration: 0.3 }),
          onEnterBack: () => gsap.to(ball, { opacity: 0, duration: 0.3 }),
          onLeave: () => {
            balls.forEach((b) => gsap.to(b.element, { opacity: 0, duration: 0.3 }));
            gsap.to(ball, { opacity: 1, duration: 0.3 });
          },

          onUpdate: (self) => {
            const progress = gsap.utils.clamp(0, 1, self.progress);
            const numVisibleBalls = Math.min(
              Math.floor(progress * (balls.length + 0.5)),
              balls.length
            );

            balls.forEach((ballObj, i) => {
              if (i < numVisibleBalls) {
                const pos = ballPositions[i];
                const ballProgress = gsap.utils.clamp(
                  0,
                  1,
                  (progress - i / balls.length) * balls.length
                );

                // Dynamic sizing based on ball index
                let startSize, endSize, bg;
                if (i === 0) {
                  startSize = 14;
                  endSize = 20;
                  bg = aboutGradient;
                } else if (i === 1) {
                  startSize = 13;
                  endSize = 18;
                  bg = secondBallGradient;
                } else if (i === balls.length - 1) {
                  startSize = 12;
                  endSize = 16;
                  bg = aboutGradient;
                } else {
                  startSize = 12;
                  endSize = 16;
                  bg = aboutGradient;
                }

                const currentSize = startSize + (endSize - startSize) * ballProgress;

                // Apply position with responsive offsets to prevent overlap
                gsap.set(ballObj.element, {
                  left: `calc(${pos.x}% + ${pos.offsetX})`,
                  top: `calc(${pos.y}% + ${pos.offsetY})`,
                  width: `${currentSize}vw`,
                  height: `${currentSize}vw`,
                  opacity: Math.min(ballProgress * 1.2, 1),
                  background: bg,
                });
              } else {
                gsap.set(ballObj.element, { opacity: 0 });
              }
            });
          },
        });
      }

      // -------------------------------
      // PAIN POINTS SECTION ANIMATION
      // -------------------------------
      if (id === "pain") {
        ScrollTrigger.create({
          trigger: el,
          start: "top 12%",
          end: "bottom 100%",
          scrub: 1.7,
          markers: true,
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
              background: "linear-gradient(30deg, #0A4B35, #29DA9F)",
              duration: 0.5,
            });
          },
          onUpdate: (self) => {
            const progress = self.progress;

            const startX = -100;
            const endX = -80;
            const startY = -23;
            const endY = 10;
            const startSize = 28;
            const endSize = 30;

            const newX = startX + (endX - startX) * progress;
            const newY = startY + (endY - startY) * progress;
            const newSize = startSize + (endSize - startSize) * progress;

            gsap.to(ball, {
              x: `${newX}%`,
              y: `${newY}%`,
              width: `${newSize}vw`,
              height: `${newSize}vw`,
              duration: 0.7,
              ease: "power1.out",
              overwrite: "auto",
            });

            const opacity = 2 - progress;
            content.innerHTML = `
              <p class="text-[4vw] md:text-[3vw] lg:text-[2.5vw] font-bold text-center tracking-[1.5px] uppercase w-[80%] mx-auto leading-[1.2em] text-white" style="opacity: ${opacity}">
                Is Your Website Holding Your Business Back?
              </p>
            `;
          },
        });
      }

      // I'll include them for completeness but they're unchanged

      if (id === "services") {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 80%",
          scrub: 0.7,
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
            const progress = self.progress;
            const startX = 55;
            const endX = -100;
            const startY = 51;
            const endY = 10;
            const startSize = 40;
            const endSize = 35;

            const newX = startX + (endX - startX) * progress;
            const newY = startY + (endY - startY) * progress;
            const newSize = startSize + (endSize - startSize) * progress;

            gsap.to(ball, {
              x: `${newX}%`,
              y: `${newY}%`,
              width: `${newSize}vw`,
              height: `${newSize}vw`,
              duration: 0.7,
              ease: "power1.out",
              overwrite: "auto",
            });

            content.innerHTML = "";
          },
        });
      }

      if (id === "process") {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom -70%",
          scrub: 1.07,
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
            const progress = self.progress;
            const startX = -90;
            const endX = 125;
            const startY = 20;
            const endY = 10;
            const startSize = 35;
            const endSize = 40;

            const newX = startX + (endX - startX) * progress;
            const newY = startY + (endY - startY) * progress;
            const newSize = startSize + (endSize - startSize) * progress;
            gsap.to(ball, {
              x: `${newX}%`,
              y: `${newY}%`,
              width: `${newSize}vw`,
              height: `${newSize}vw`,
              duration: 0.35,
              ease: "power1.out",
              overwrite: "auto",
            });
            content.innerHTML = "";
          },
        });
      }

      if (id === "tech") {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 80%",
          scrub: 1.7,
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
              background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
              duration: 0.5,
            });
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const startX = 105;
            const endX = -90;
            const startY = 20;
            const endY = 40;
            const startSize = 40;
            const endSize = 35;

            const newX = startX + (endX - startX) * progress;
            const newY = startY + (endY - startY) * progress;
            const newSize = startSize + (endSize - startSize) * progress;

            gsap.to(ball, {
              x: `${newX}%`,
              y: `${newY}%`,
              width: `${newSize}vw`,
              height: `${newSize}vw`,
              duration: 1.36,
              ease: "power1.out",
              overwrite: "auto",
            });

            content.innerHTML = "";
          },
        });
      }

      if (id === "case") {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom 110%",
          scrub: 1,
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
            const progress = self.progress;
            const startX = -90;
            const endX = 20;
            const startY = 40;
            const endY = -20;
            const startSize = 35;
            const endSize = 40;

            const newX = startX + (endX - startX) * progress;
            const newY = startY + (endY - startY) * progress;
            const newSize = startSize + (endSize - startSize) * progress;

            gsap.to(ball, {
              x: `${newX}%`,
              y: `${newY}%`,
              width: `${newSize}vw`,
              height: `${newSize}vw`,
              duration: 0.7,
              ease: "power1.out",
              overwrite: "auto",
            });

            content.innerHTML = "";
          },
        });
      }

      if (id === "why") {
        const ball = document.getElementById("floating-ball");
        const content = document.getElementById("ball-content");

        if (!ball || !content) return;

        // Start position comes from previous section end
        const prevX = parseFloat(ball.dataset.lastX || "-7"); 
        const prevY = parseFloat(ball.dataset.lastY || "-28");

        const startX = prevX;
        const startY = prevY;

        const endX = 10; // center X for full-screen
        const endY = 10; // center Y for full-screen

        const startSize = 40; // initial vw
        const endSize = 480; // full-screen vw

        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          end: "bottom 70%",
          scrub: 1.7,
          markers: false,
          onUpdate: (self) => {
            const progress = gsap.utils.clamp(0, 1, self.progress);

            // Smooth interpolation
            const size = startSize + (endSize - startSize) * progress;
            const x = startX + (endX - startX) * progress;
            const y = startY + (endY - startY) * progress;

            gsap.to(ball, {
              x: `${x}%`,
              y: `${y}%`,
              width: `${size}vw`,
              height: `${size}vw`,
              translateX: "-90%",
              translateY: "-50%",
              background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
              opacity: progress < 0.99 ? 1 : 1, // hide when full-screen
              duration: 0.7,
              ease: "power1.out",
              overwrite: "auto",
            });

            content.innerHTML = "";
          },

          onLeave: () => {
            // Store ending position for the next ball
            // ball.dataset.lastX = `${endX}`;
            // ball.dataset.lastY = `${endY}`;
            gsap.to(ball, {
              x: `${endX}%`,
              y: `${endY}%`,
              width: `${endSize}vw`,
              height: `${endSize}vw`,
              translateX: "-90%",
              translateY: "-50%",
              background: "linear-gradient(270deg, #3BE29A, #3BE29A00)",
              duration: 0.7,
              ease: "power1.out",
              overwrite: "auto",
            });
          },

          onEnterBack: () => {
            // When scrolling back, start from previous position
            gsap.to(ball, {
              x: `${startX}%`,
              y: `${502}%`,
              width: `${startSize}vw`,
              height: `${startSize}vw`,
              translateX: "-90%",
              translateY: "50%",
              opacity: 1,
              duration: 0.7,
              ease: "power1.out",
              overwrite: "auto",
            });
          },
        });
      }


      if (id === "testimonials") {
        ScrollTrigger.create({
          trigger: el,
          start: "top 68%",
          end: "bottom 80%",
          scrub: 1.7,
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
            const progress = self.progress;
            const startX = -110;
            const endX = 140;
            const startY = 80;
            const endY = 40;
            const startSize = 35;
            const endSize = 35;

            const newX = startX + (endX - startX) * progress;
            const newY = startY + (endY - startY) * progress;
            const newSize = startSize + (endSize - startSize) * progress;

            gsap.to(ball, {
              x: `${newX}%`,
              y: `${newY}%`,
              width: `${newSize}vw`,
              height: `${newSize}vw`,
              duration: 0.7,
              ease: "power1.out",
              overwrite: "auto",
            });

            content.innerHTML = "";
          },
        });
      }

      if (id === "faq") {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 80%",
          scrub: 1.7,
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
            const progress = self.progress;
            const startX = 140;
            const endX = -110;
            const startY = 40;
            const endY = 15;
            const startSize = 35;
            const endSize = 30;

            const newX = startX + (endX - startX) * progress;
            const newY = startY + (endY - startY) * progress;
            const newSize = startSize + (endSize - startSize) * progress;

            gsap.to(ball, {
              x: `${newX}%`,
              y: `${newY}%`,
              width: `${newSize}vw`,
              height: `${newSize}vw`,
              duration: 1.4,
              ease: "power1.out",
              overwrite: "auto",
            });

            content.innerHTML = "";
          },
        });
      }


    });
  }, []);
}
