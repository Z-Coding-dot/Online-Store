import React, { useState } from 'react';

const  TopSelling = ({ products }) => {
  const [viewAll, setViewAll] = useState(false);
  const displayed = viewAll ? products : products.slice(0, 4);

  return (
    <section className="py-16 px-6 bg-white font-sans">
      <h2 className="text-center text-4xl font-black uppercase mb-14">
        Top Selling
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayed.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-48 object-contain rounded-lg bg-[#F0EEED]"
            />
            <h4 className="mt-4 font-semibold">{p.title}</h4>
            <p className="flex gap-1 items-center mt-2">
              {'★'.repeat(Math.floor(p.rating))}
              {'☆'.repeat(5 - Math.floor(p.rating))}
              <span className="text-sm ml-2">{p.rating.toFixed(1)}</span>
            </p>
            <p className="mt-2 font-bold text-lg">${p.price}</p>
          </div>
        ))}
      </div>

      {!viewAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setViewAll(true)}
            className="px-6 py-2 border rounded-full text-sm font-semibold hover:bg-gray-100 cursor-pointer"
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
}

export default TopSelling;