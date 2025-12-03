"use client"
import Link from "next/link"
import type React from "react"
import { useState } from "react"
export function CTASection() {
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
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center ">
        {/* Heading */}
        <h2 className="text-[50px] leading-[50px] font-bold tracking-[2px] text-white text-center max-w-[800px] mx-auto uppercase pb-4" style={{color:"white"}}>
          READY TO BUILD A WEBSITE THAT DRIVES GROWTH?
        </h2>
        {/* Subheading */}
        <p className="text-[20px] text-white font-light tracking-[1.5px] pb-8">
                        Let's build an experience-driven website tailored to your business.
                    </p>
       
        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="w-full flex flex-row gap-4 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg"
          style={{
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-white/30 rounded-xl bg-transparent text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-white/30 rounded-xl bg-transparent text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          {/* Right: CTA Button */}
          <div className="flex justify-center">
            <Link 
              href="#"
              className="px-8 pb-3 pt-2 tracking-wider rounded-md text-white text-[18px] transition uppercase bg-[#00AA71] hover:bg-transparent hover:text-[#00AA71] hover:border-[#00AA71] hover:border whitespace-nowrap"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
} 