"use client"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useState } from "react"

export function CTASection({ id }: { id?: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // ✅ Allow numbers only for phone
    if (name === "phoneNumber") {
      const numericValue = value.replace(/[^0-9]/g, "")
      setFormData((prev) => ({
        ...prev,
        phoneNumber: numericValue,
      }))
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id={id} className="pt-2 pb-20 relative overflow-hidden">
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2
          style={{
            fontFamily: "Futuru",
            background: "linear-gradient(264deg, #00AA71 0%, #FFF 36.57%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-[50px] leading-[50px] font-bold tracking-[2px] text-white text-center max-w-[800px] mx-auto uppercase pb-4"
        >
          Ready to Build a Store That Works Harder for You?
        </h2>

        {/* Subheading */}
        <p className="text-[20px] text-white font-light tracking-[1.5px] pb-8">
          Let’s create a smart e-commerce experience that grows with your business not your workload.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-10 rounded-[10px] border-t border-b border-e border-[#FFFDFD42] bg-white/10 backdrop-blur-xl pt-9 pb-9 px-14 shadow-lg"
        >
          <div className="grid grid-cols-2 gap-4 w-full">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
              required
            />

            {/* ✅ NEW: Company Name */}
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
              required
            />

            {/* ✅ NEW: Phone Number (numbers only) */}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
              required
            />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center w-full">
            <Link
              href="#"
              className="px-8 pb-3 pt-3 tracking-wider rounded-md text-white text-[18px] transition uppercase bg-[#00AA71] hover:bg-transparent hover:text-[#00AA71] hover:border-[#00AA71] hover:border whitespace-nowrap"
            >
              Book a Free Consultation
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
