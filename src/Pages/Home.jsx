import Hero from '../sections/Hero'
import NewArrivals from '../sections/NewArrivals'
import TopSelling from '../sections/TopSelling'
import CustomersComments from '../sections/CustomersComments'
import Loader from '../components/Loader';
import BrowseByCategory from '../sections/BrowseByCategory';

const Home = ({products, error, loading}) => {
  return (
    <>

    <Hero/>
      {loading && (<div className='flex justify-center py-40'> {<Loader/>} </div>)}
      {error && (<div> <h2 className='text-red-500 text-4xl text-center my-12 mx-auto'>Something Went Wrong! 🤔 {error}</h2> </div>)}
      <NewArrivals products={products}/>
      <TopSelling products={products}/>
      <BrowseByCategory/>
      <CustomersComments products={products} />
      
    </>
  )
}

export default Home
