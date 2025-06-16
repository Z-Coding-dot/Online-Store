import beauty from '/images/beauty.jpg'
import dress from '/images/dress.jpg'
import fragrances from '/images/fragrance.jpg'
import skincare from '/images/skincare.jpg'

export const categories = [
  {id: 1,
     name: 'beauty',
     image: beauty, 

  },
  { id: 2,
    name: 'skincare',
     image: skincare },
  { id: 3, 
    name: 'fragrances',
     image: fragrances},
  { id: 4,
    name: 'womens-dresses',
     image: dress },
];



export  const brand = [
    {
        id: 1,
        price: 200,
        descriptions: 'International Brands'
    },
    {
        id: 2,
        price: 2000,
        descriptions: 'High-Quality Products'
    },
    {
        id: 3,
        price: 30000,
        descriptions: 'Happy Customers'
    },
]