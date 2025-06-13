import React, { useState } from 'react';
import { Element } from 'react-scroll';

const  TopSelling = ({ products }) => {
  const [viewAll, setViewAll] = useState(false);
  const displayed = viewAll ? products : products.slice(0, 4);

  return (
    <section className="py-16 px-6 bg-white font-sans">
      <Element className="Top Selling">
      <h2 className="text-center text-4xl font-black uppercase mb-14">
        Top Selling
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayed.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-58h-auto max-lg: object-contain rounded-lg bg-[#F0EEED]"
            />
            <h4 className="mt-4 font-semibold text-xl max-lg:text-base max-lg:line-clamp-1">{p.title}</h4>
            <p className="flex gap-1 items-center mt-2 font-bold">
              {'⭐'.repeat(Math.floor(p.rating))}
              {'☆'.repeat(5 - Math.floor(p.rating))}
              <span className="text-sm ml-2 font-bold">{p.rating.toFixed(1)}</span>
            </p>
            <p className="mt-2 font-bold text-lg">${p.price}</p>
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