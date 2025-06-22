import React from 'react'
import Details from '../sections/Details'
import FAQ from '../sections/FAQ'
import YouMightLike from '../sections/YouMightLike'

const PageDetails = ({products}) => {
  return (
    <div>
      <Details products={products} />
      <FAQ products={products} />
      <YouMightLike products={products} />
    </div>
  );
}

export default PageDetails
