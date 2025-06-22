import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import MainLayout from "./components/MainLayout";
import PageDetails from "./Pages/PageDetails";
import CartPage from "./Pages/CartPage";

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
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
            <Home products={products} loading={loading} error={error} />}/>
          <Route path="/details/:id" element={<PageDetails products={products} />}/>
          <Route path="/cart" element={<CartPage/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
