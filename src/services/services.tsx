import { ResponseRestaurants, restuarant } from "../interfaces/navar.interface"

const BaseUrl = 'https://www.zaragoza.es/sede/servicio/restaurante.json?'

/**
 * @describe Get all restaurants from the API
 * @returns {object | string} user object
 */
export const getRestaurants = async ():Promise<restuarant | string> => {
  try {
    const resp = await  fetch(`${BaseUrl}`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      } 
  })
   const data = await resp.json()
   return data 
  } catch (error) {
    console.log(error);
    return 'error'
   
  }
  
}


