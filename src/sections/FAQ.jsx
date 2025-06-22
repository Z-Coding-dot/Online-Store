import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from '../components/Accordion'
import RatingAndReview from '../components/RatingAndReview'
import DetailsTab from '../components/DetailsTab'


const TABS = [
  { id: 0, label: 'Product Details' },
  { id:1,  label: 'Rating & Reviews' },
  { id:2, label: 'FAQs' }
]

const FAQ = ({products}) => {
  const [tab, setTab] = useState(1)
  const { id } = useParams()
  const product = products && id ? products.find((p) => p.id === parseInt(id)) : null

  return (
    <section className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-30 max-lg:px-4">
        <div className="flex justify-evenly border-b border-gray-200 mb-10">
          {TABS.map((t, idx) => (
            <button
              key={idx}
              className={`py-3 text-lg max-lg:text-sm font-semibold focus:outline-none transition-all duration-500 cursor-pointer ${
                tab === idx
                  ? "border-b-3 border-black text-black"
                  : "text-gray-500"
              }`}
              onClick={() => setTab(idx)}
            >
              {t.label}
            </button>
          ))}
        </div>
        {tab === 0 && <DetailsTab product={product} />}
        {tab === 1 && <RatingAndReview product={product} />}
        {tab === 2 && <Accordion />}
      </div>
    </section>
  );
}

export default FAQ
