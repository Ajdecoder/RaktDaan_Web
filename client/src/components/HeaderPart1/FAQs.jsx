// src/components/FAQs.jsx
import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is RaktDaan?",
      answer: "RaktDaan is a platform dedicated to facilitating blood donations and connecting blood donors with those in need.",
    },
    {
      question: "Who can donate blood?",
      answer: "Anyone aged 18-65 years, weighing at least 45kg, and in good health can donate blood.",
    },
    {
      question: "How often can I donate blood?",
      answer: "Men can donate every 3 months, and women can donate every 4 months.",
    },
    {
      question: "What should I do before donating blood?",
      answer: "Eat a healthy meal, stay hydrated, and avoid alcohol or heavy exercise before donating blood.",
    },
    {
      question: "How is the donated blood used?",
      answer: "The blood is separated into components like red cells, platelets, and plasma to help multiple patients in need.",
    },
    {
      question: "Where can I donate blood?",
      answer: "You can donate blood at registered blood banks, donation camps, or hospitals. Use the RaktDaan platform to find nearby donation centers.",
    },
    {
      question: "Is it safe to donate blood during COVID-19?",
      answer: "Yes, blood donation is safe. Blood banks follow strict safety protocols to ensure the health of donors and recipients.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">RaktDaan FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 text-black bg-gray-100 font-medium flex justify-between items-center"
            >
              {faq.question}
              <span>
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
