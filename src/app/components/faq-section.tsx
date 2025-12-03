"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How many users have you onboarded in the last month?",
    answer:
      "We have successfully onboarded hundreds of users and continue to grow our user base significantly each month.",
  },
  {
    id: "2",
    question: "How big does a standard project take?",
    answer:
      "A standard project typically takes 4-8 weeks depending on complexity and specific requirements of your business.",
  },
  {
    id: "3",
    question: "Do you offer SEO and development?",
    answer:
      "Yes, we offer comprehensive SEO services along with full-stack development to ensure your website ranks well and performs optimally.",
  },
  {
    id: "4",
    question: "Do you work with international accounts?",
    answer: "We work with clients from all around the world and have experience with multiple markets and languages.",
  },
  {
    id: "5",
    question: "When might I expect a certain website launch?",
    answer:
      "Launch timelines are customized based on your project scope. We provide detailed timelines during the planning phase.",
  },
  {
    id: "6",
    question: "How much does monthly maintenance?",
    answer:
      "Monthly maintenance packages start at competitive rates and can be customized based on your specific needs and requirements.",
  },
  {
    id: "7",
    question: "Do you provide UI/UX design?",
    answer:
      "Yes, we provide modern UI/UX design tailored to your brand’s identity and customer experience.",
  },
  {
    id: "8",
    question: "What payment methods do you support?",
    answer:
      "We support all major international and local payment methods depending on your region.",
  },
]

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>("1")

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  // Split into two columns
  const firstColumn = faqItems.slice(0, 4)
  const secondColumn = faqItems.slice(4)

  const renderItem = (item: FAQItem) => (
    <div
      key={item.id}
      className={`border rounded-md p-6 cursor-pointer backdrop-blur-lg bg-white/10 transition-colors flex flex-col
        ${expandedId === item.id ? "border-green-500" : "border-border hover:border-green-500"}
      `}
      onClick={() => toggleExpand(item.id)}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[20px] text-white tracking-[1.5px] flex-1">
          {item.question}
        </h3>

        <div className="flex-shrink-0 mt-1">
          <div
            className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
              expandedId === item.id ? "bg-green-500" : "bg-white border border-gray-300"
            }`}
          >
            {expandedId === item.id ? (
              <Minus size={18} className="text-white" />
            ) : (
              <Plus size={18} className="text-black" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expandedId === item.id ? "mt-4" : "mt-0"
        }`}
        style={{
          maxHeight: expandedId === item.id ? "200px" : "0px",
        }}
      >
        <div className="text-[15px] text-white font-light tracking-[1.5px]">
          {item.answer}
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full py-16">
      <h2 className="text-[50px] leading-[50px] font-bold tracking-[2px] text-white text-center max-w-[800px] mx-auto uppercase pb-8">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:max-w-[1620px] mx-auto md:w-[89.5%] 2xl:w-[84.5%]">
        <div className="flex flex-col gap-6">
          {firstColumn.map(renderItem)}
        </div>

        <div className="flex flex-col gap-6">
          {secondColumn.map(renderItem)}
        </div>
      </div>
    </div>
  )
}
