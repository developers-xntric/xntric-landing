"use client"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 2xl:max-w-[1500px] mx-auto md:w-[92%] 2xl:w-[95%] bg-black">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image 
          src="/logo.svg"  
          alt="Logo"
          width={40}
          height={400}
          className="w-40 h-20"
        />
      </div>

      {/* Right: CTA Button */}
      <div>
        <Link 
          href="#"
          className="px-5 pb-3 pt-2 tracking-wider rounded-md text-white text-[18px] transition uppercase bg-[#00AA71] hover:bg-transparent hover:text-[#00AA71] hover:border-[#00AA71] hover:border"
        
        >
          Start Your Project
        </Link>
      </div>
    </nav>
  )
}
