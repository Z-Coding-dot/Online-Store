import { useState } from 'react'
import { faqs } from '../constants/data'


const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(false)
  return (
    <section>
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 ">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-sm bg-white-100"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-sm sm:text-lg font-semibold
                     focus:outline-none cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? false : idx)}
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-500 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-gray-700 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accordion
