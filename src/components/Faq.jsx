"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What exactly is an ICO and how does it work?",
    answer: "An ICO (Initial Coin Offering) is a fundraising method where you create a unique cryptocurrency token and offer it to investors. These tokens can be traded on decentralized exchanges, providing your business with capital to grow while engaging a global investor community."
  },
  {
    question: "Are there any upfront fees or hidden charges?",
    answer: "No, Jakaria.finance operates with no upfront fees. You only pay based on successful fundraising outcomes. The $20,000 liquidity is an investment in your token’s market, not a service fee." },
  {
    question: "How long does the entire ICO process take?",
    answer: "Our streamlined process ensures your ICO launch is completed within 7 days, covering token creation, marketing, smart contract development, and listing on DEX platforms."  },
  {
    question: "Will I lose ownership or control of my company?",
    answer: "No. ICO tokens typically represent utility or access within your ecosystem and do not confer equity or voting rights. You retain full ownership and control of your business throughout and after the ICO"},
    {
    question: "Can you share examples of your previous clients or success stories?",
    answer: "Certainly! We have successfully supported over 400 clients worldwide in launching ICOs and tokens. We’d be happy to share tailored case studies relevant to your industry and objectives."},
    {
    question: "What marketing support do you provide?",
    answer: "Our dedicated team of 20+ digital marketing specialists manages your ICO’s promotion via social media campaigns, community engagement, influencer partnerships, and targeted advertising to maximize visibility and investor interest."},
    {
    question: "What support do you offer after the ICO launch?",
    answer: "Post-launch, we assist with liquidity pool management, ongoing community building, token listings on additional exchanges, and strategic partnerships to sustain momentum and growth"},
    {
    question: "Can anyone invest in my ICO?",
    answer: "Yes. ICOs are generally accessible globally, allowing anyone with an internet connection and a compatible crypto wallet to invest and participate in your token ecosystem."},
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Answers to common questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-semibold hover:bg-gray-50 transition"
              >
                {faq.question}
                <span className="ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:info@example.com"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Book a Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
