import { useEffect, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import NewArrivals from './sections/NewArrivals';
import TopSelling from './sections/TopSelling';
import  axios  from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const fetchData = () => {
    axios
      .get('https://dummyjson.com/products?limit=12')
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        setError('Unable to load products.');
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
          Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 p-6 rounded text-center my-10 max-w-lg mx-auto">
        <h2 className="text-xl mb-2">Error</h2>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Hero/>
      <NewArrivals products={products}/>
      <TopSelling products={products.slice(4)}/>
    </div>
  );
}

export default App
