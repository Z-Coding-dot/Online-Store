import { useEffect, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import NewArrivals from './sections/NewArrivals';
import TopSelling from './sections/TopSelling';
import  axios  from "axios";
import Loader from './components/Loader';
import CustomersComments from './sections/CustomersComments';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   const fetchData = () => {
    setLoading(true);
    setError('');
    axios
      .get('https://dummyjson.com/products?limit=20')
      .then((res) => {
        console.log(res.data.products)
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

  return (
    <div className='overflow-hidden'>
      <Header/>
      <Hero/>
      {loading && (<div className='flex justify-center py-40'> {<Loader/>} </div>)}
      {error && (<div> <h2 className='text-red-500 text-4xl text-center my-12 mx-auto'>Something Went Wrong! 🤔 {error}</h2> </div>)}
      <NewArrivals products={products}/>
      <TopSelling products={products}/>
      <CustomersComments products={products} />
    </div>
  );
}

export default App
