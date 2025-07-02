
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CategoryPage({ products }) {
  const { category } = useParams();

  const [filters, setFilters] = useState({
    price: [0, 200],
    color: "",
    category: "",
    size: "",
    style: "",
  });

  const [sortOption, setSortOption] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    setFilters((prev) => ({ ...prev, category: "" }));
    setCurrentPage(1);
  }, [category]);

  // Add default properties if missing
  const enrichedProducts = products.map((p) => ({
    ...p,
    color: p.color || "black",
    size: p.size || "Medium",
    style: p.style || "Casual",
  }));

  const categoryProducts = enrichedProducts.filter((p) =>
    p.category.toLowerCase().includes(category.toLowerCase())
  );

  const filtered = categoryProducts
    .filter((p) => p.price >= filters.price[0] && p.price <= filters.price[1])
    .filter((p) => (filters.color ? p.color?.toLowerCase() === filters.color : true))
    .filter((p) => (filters.category ? p.category === filters.category : true))
    .filter((p) => (filters.size ? p.size === filters.size : true))
    .filter((p) => (filters.style ? p.style === filters.style : true));

  const sortProducts = (products) => {
    switch (sortOption) {
      case "priceLow":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceHigh":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const displayed = sortProducts(filtered);
  const totalPages = Math.ceil(displayed.length / productsPerPage);
  const paginated = displayed.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <section className="bg-white pt-20 pb-40">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold capitalize">{category.replace("-", " ")}</h2>
          <div className="flex items-center gap-6 max-md:gap-2 flex-wrap">
            <p className="text-gray-500 text-sm">
              Showing {paginated.length} of {displayed.length} Products
            </p>
            <select
              className="border border-gray-300 text-sm rounded px-2 py-1.5"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="popular">Sort by: Most Popular</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm">Filters</h3>
              <span className="text-gray-400 cursor-pointer">☰</span>
            </div>

            {/* Categories */}
            <ul className="text-sm text-gray-600 space-y-3">
              {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item) => (
                <li
                  key={item}
                  className="flex justify-between cursor-pointer hover:underline"
                  onClick={() => setFilters({ ...filters, category: item })}
                >
                  {item} <span className="text-black">›</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div>
              <h4 className="font-semibold text-sm mb-2">Price</h4>
              <input
                type="range"
                min={0}
                max={200}
                value={filters.price[0]}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setFilters({
                    ...filters,
                    price: [Math.min(val, filters.price[1] - 1), filters.price[1]],
                  });
                }}
                className="w-full accent-black"
              />
              <input
                type="range"
                min={0}
                max={200}
                value={filters.price[1]}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setFilters({
                    ...filters,
                    price: [filters.price[0], Math.max(val, filters.price[0] + 1)],
                  });
                }}
                className="w-full accent-black"
              />
              <div className="text-sm font-medium text-gray-700 flex justify-between">
                <span>${filters.price[0]}</span>
                <span>${filters.price[1]}</span>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h4 className="font-semibold text-sm mb-2">Colors</h4>
              <div className="grid grid-cols-5 gap-2">
                {["green", "red", "yellow", "orange", "skyblue", "blue", "purple", "magenta", "white", "black"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setFilters({ ...filters, color })}
                    className={`relative w-6 h-6 rounded-full border transition-all duration-150`}
                    style={{ backgroundColor: color }}
                  >
                    {filters.color === color && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="font-semibold text-sm mb-2">Size</h4>
              <div className="grid grid-cols-3 gap-2">
                {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setFilters({ ...filters, size })}
                    className={`px-3 py-1 rounded-full text-xs font-medium text-center ${
                      filters.size === size ? "bg-black text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div>
              <h4 className="font-semibold text-sm mb-2">Dress Style</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                {["Casual", "Formal", "Party", "Gym"].map((style) => (
                  <button
                    key={style}
                    onClick={() => setFilters({ ...filters, style })}
                    className="flex justify-between items-center hover:underline"
                  >
                    {style} <span className="text-black">›</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Apply Filter */}
            <button
              className="w-full bg-black text-white text-sm py-2 rounded-full hover:bg-gray-900 font-semibold"
              onClick={() => console.log("Filters applied!")}
            >
              Apply Filter
            </button>
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3">
            {paginated.length === 0 ? (
              <div className="text-center py-20 text-gray-500 text-sm">
                No products match your filters 🧐 Try adjusting them!
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {paginated.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-48 object-contain rounded mb-3 bg-[#f9f9f9] p-2"
                    />
                    <h4 className="text-sm font-medium mb-1">{product.title}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500 line-through">
                        ${(product.price + product.price * 0.2).toFixed(2)}
                      </span>
                      <span className="font-bold">${product.price}</span>
                      <span className="text-red-600 text-xs font-semibold bg-red-100 px-2 py-0.5 rounded-full">
                        -20%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10 flex justify-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === page ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
