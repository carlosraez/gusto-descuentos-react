import { ResponseRestaurants } from "../models/navar.interface"


const BaseUrl = 'https://www.zaragoza.es/sede/servicio/restaurante.json?'

/**
 * @describe Get all restaurants from the API
 * @returns {object} user object
 */
export const getRestaurants = async ():Promise<ResponseRestaurants>=> {
  const resp = await  fetch(`${BaseUrl}rf=markdown&srsname=utm30n&start=0&rows=50`,{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
    } 
})
const data = await resp.json()
return data 

}


