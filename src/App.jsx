import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import axios from "axios";
import Footer from "./sections/Footer";
import Home from "./Pages/Home";
import DetailsPage from "./Pages/DetailsPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError("");
    axios
      .get("https://dummyjson.com/products?limit=20")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        setError("Unable to load products.");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home products={products} loading={loading} error={error} />
            }
          />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </main>
        <Footer />
    </div>
  );
};

export default App;
