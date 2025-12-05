"use client";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-black relative pt-14 pb-10 font-futuru border-t bg-no-repeat overflow-hidden">

      <div className="px-6 2xl:max-w-[1740px] mx-auto md:w-[92%] 2xl:w-[87%]">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Logo */}
          <div className="shrink-0">
            <Image 
              src="/logo.svg" 
              alt="Company Logo" 
              width={150} 
              height={50} 
            />
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  place-items-end w-full">

            {[
              "Dubai",
              "Saudi Arabia",
              "United Kingdom",
              "Canada",
              "Egypt"
            ].map((country, index) => (
              <div key={index} className="">
                <h3 className="text-[#00AA71] text-[22px] md:text-[26px] uppercase tracking-wide">
                  {country}
                </h3>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 px-6 2xl:max-w-[1740px] mx-auto md:w-[92%] 2xl:w-[87%]">
        <p className="text-center xl:text-left text-[13px] md:text-[15px] tracking-widest">
          © ALL RIGHTS RESERVED, <span className="text-[#00AA71]">XNTRIC</span> 2025
        </p>
      </div>

    </footer>
  );
};

export default Footer;
