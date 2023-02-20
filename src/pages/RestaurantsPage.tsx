import React, { useState } from 'react'
import { Restaurant } from '../components/Restaurant'
import { useEffect } from 'react';
import { getRestaurants } from '../services/services';
import { restuarant } from '../interfaces/navar.interface';

export const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState<restuarant[]>([])
  
  useEffect(() => {
  getRestaurants()
  .then(data => setRestaurants(data.result))
  .catch(error => console.error(error)); 
  }, [])
  
  return (
    <div className="container mt-3">
      <div className="row">
        {
          restaurants.map((rest) => 
          <div className="col-4 mt-3">
          <Restaurant 
          title={rest.title} 
          comment={rest.comment}
          url={rest.image}
          />
          </div>) 
        }
       
      </div>
    </div>
  )
}
