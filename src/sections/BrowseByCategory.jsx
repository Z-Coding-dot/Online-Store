import { Link, useNavigate } from "react-router-dom";
import { categories } from "../constants/data";

export default function BrowseByCategory() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    window.scrollTo(0, 0);
    navigate(`/style/${category}`);
  };

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories.map(({ name, image }) => {
              const isSmall = name === "beauty" || name === "womens-dresses";
              const spanClass = isSmall ? "sm:col-span-1" : "sm:col-span-2";

              return (
                
                <button
                  key={name}
                  onClick={() => handleClick(name)}
                  className={`relative w-full rounded-xl overflow-hidden bg-white shadow transition duration-300 transform hover:scale-105 active:scale-100 focus:outline-none ${spanClass}`}
                  style={{ padding: 0, border: "none" }}>
                  <Link to={`/category/${name}`}>
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-36 sm:h-44 object-cover"
                    draggable={false}/>
                  <span className="absolute top-2 left-3 bg-white bg-opacity-90 text-black text-sm px-3 py-1 rounded font-semibold shadow-sm capitalize">
                    {name.replace("-", " ")}
                  </span>
                  </Link>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
