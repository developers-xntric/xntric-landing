"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PainPointsSlider({
  awwards,
}: {
  awwards: { year: string; icon: string }[];
}) {
  const [duration, setDuration] = useState(20);
  const duplicatedAwards = [...awwards, ...awwards];

  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 768 ? 10 : 20);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="
        text-white overflow-hidden font-futuru flex flex-col justify-between items-center w-full relative right-10"
    >
      <div className="overflow-hidden w-full">
        <motion.div
          key={duration}
          className="flex gap-24 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedAwards.map((award, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="border-b border-[#5B5B5B] pb-3">
                <Image
                  width={113}
                  height={67}
                  src={award.icon}
                  alt={`Award ${index}`}
                />
              </div>
              <p className="text-[18px] tracking-widest">YEAR {award.year}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
