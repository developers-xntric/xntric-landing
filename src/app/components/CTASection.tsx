"use client"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useState } from "react"
export function CTASection({ id }: { id?: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }
  return (
    <section id={id} className="pt-2 pb-20 relative overflow-hidden">

     
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto text-center ">
        {/* Heading */}
        <h2 className="text-[50px] leading-[50px] font-bold tracking-[2px] text-white text-center max-w-[800px] mx-auto uppercase pb-4" style={{ color: "white" }}>
          READY TO BUILD A WEBSITE THAT DRIVES GROWTH?
        </h2>
        {/* Subheading */}
        <p className="text-[20px] text-white font-light tracking-[1.5px] pb-8">
          Let's build an experience-driven website tailored to your business.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-row gap-4 rounded-[10px] border-t border-b border-e border-[#FFFDFD42] bg-white/10 backdrop-blur-xl pt-9 pb-9 px-14 shadow-lg"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
            style={{
              borderRadius: "8px",
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
            style={{
              borderRadius: "8px",
            }}
            required
          />
          {/* Right: CTA Button */}
          <div className="flex justify-center">
            <Link
              href="#"
              className="px-8 pb-3 pt-3 tracking-wider rounded-md text-white text-[18px] transition uppercase bg-[#00AA71] hover:bg-transparent hover:text-[#00AA71] hover:border-[#00AA71] hover:border whitespace-nowrap"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
} 