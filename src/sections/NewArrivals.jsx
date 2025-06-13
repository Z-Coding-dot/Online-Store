
import { useState } from 'react';
import { Element } from 'react-scroll';

const NewArrivals = ({ products }) => {
  const [viewAll, setViewAll] = useState(false);
  const displayed = viewAll ? products : products.slice(0, 4);

  return (
    <section className="py-16 px-6 bg-white font-sans">
      <Element name='New Arrivals'>
      <h2 className="text-center text-4xl font-black uppercase mb-14">New Arrivals</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayed.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-58 max-lg:h-auto object-contain rounded-lg bg-[#F0EEED]"
            />
            <h4 className="mt-4 font-bold text-xl max-lg:line-clamp-1 max-lg:text-base">{p.title}</h4>
            <p className="flex gap-1 items-center mt-2 font-semibold">
              {'⭐'.repeat(Math.floor(p.rating))}
              {'☆'.repeat(5 - Math.floor(p.rating))}
              <span className="text-md ml-2 font-bold">{p.rating.toFixed(1)}</span>
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
             hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
            View All
          </button>
        </div>
      )}
      </Element>
    </section>
  );
}

export default NewArrivals;