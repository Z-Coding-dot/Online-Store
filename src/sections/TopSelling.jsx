import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";

const  TopSelling = ({ products }) => {
  const [viewAll, setViewAll] = useState(false);
  const displayed = viewAll ? products : products.slice(16, 20);

  return (
    <section className="py-16 px-6 bg-white font-sans">
      <Element className="Top Selling">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-14">
        Top Selling
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {displayed.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl aspect-w-4 aspect-h-3
             shadow-md p-4 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <Link to={`details/${p.id}`}>
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain rounded-xl bg-[#F0EEED]"/></Link>
            <h4 className="mt-4 font-semibold text-base sm:text-lg max-lg:line-clamp-1">{p.title}</h4>
            <p className="flex gap-2  items-center mt-2 font-bold text-sm sm:text-base">
              {'⭐'.repeat(Math.floor(p.rating))}
              {'☆'.repeat(5 - Math.floor(p.rating))}
              <span className="text-sm ml-2 font-bold">{p.rating.toFixed(1)}</span>
            </p>
            <span className='flex flex-wrap gap-2 items-center text-wrap'>
            <p className="mt-2 font-bold text-base sm:text-lg">${(p.price - (p.price * p.discountPercentage / 100)).toFixed(2)}</p>
            <del className="mt-2 text-base sm:text-lg font-bold text-gray-500">
                ${p.price}
              </del>
              <p className='mt-2 text-sm sm:text-lg font-semibold text-red-500 bg-red-200 px-1 rounded-full'>-{Math.floor((p.discountPercentage))}%</p>
            </span>
          </div>
        ))}
      </div>

      {!viewAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setViewAll(true)}
            className="px-6 py-2 border rounded-full text-sm font-semibold
              cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            View All
          </button>
        </div>
      )}
      </Element>
    </section>
  );
}

export default TopSelling;