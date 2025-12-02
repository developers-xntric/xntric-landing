"use client";

import { Home_Section_6_icons } from "@/app/data/home-icons";
import Image from "next/image";

function ClientsLogos() {
  const itemWidth = 180 + 24; // 180px width + 24px gap
  const totalWidth = Home_Section_6_icons.length * itemWidth;

  // Duplicate the icons array for seamless scrolling
  const logos = [...Home_Section_6_icons, ...Home_Section_6_icons];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex animate-scroll-logos will-change-transform gap-6">
        {logos.map((src, index) => (
          <div
            key={index}
            className={`shrink-0 w-[150px] h-[150px] md:w-[240px] 2xl:w-[280px] md:h-[90px] flex items-center justify-center border- border-r px-10 border-white`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`logo-${index}`}
              width={180}
              height={180}
              className="object-contain"
              priority={index < 3}
            />
            
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }

        .animate-scroll-logos {
          display: flex;
          animation: scroll-logos 55s linear infinite;
        }

        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

export default ClientsLogos;
