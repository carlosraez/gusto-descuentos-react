import { ResponseRestaurants } from '../interfaces/navar.interface';

const BaseUrl = 'https://www.zaragoza.es/sede/servicio/restaurante.json?'

/**
 * @describe Get all restaurants from the API
 * @returns {object | string} user object
 */
export const getRestaurants = async ():Promise<ResponseRestaurants> => {
  try {
    console.log('Before fetch');
    const resp = await fetch(`${BaseUrl}`,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      } 
  })
   const data = await resp.json()
   return data 
  } catch (error) {
    throw new Error("API call failed");
  }
}


