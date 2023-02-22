import { useReducer, createContext } from "react";
import { restaurantReducer } from "./restaurantReducer";
import { ResponseRestaurants, restaurantsContextProps } from '../interfaces/navar.interface';

export const InitialState:ResponseRestaurants = {
  totalCount: 0,
  start: 0,
  rows: 0,
  result: []
} 

export const Context = createContext({} as restaurantsContextProps)

export const RestaurantProvider = ({children}:any) => {

  const getInitialData = () => {
    dispatch({type: 'initialData',  payload: {
      totalCount: 0, 
      start: 0,
      rows: 0,
      result: []
    }})
}

const [state, dispatch] = useReducer(restaurantReducer, InitialState)
return (
  <Context.Provider value={{state, getInitialData}}>
      {children}
  </Context.Provider>
)
}