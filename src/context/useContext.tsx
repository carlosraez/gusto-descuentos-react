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

export const Provider = ({children}:any) => {

const [state, dispatch] = useReducer(restaurantReducer, InitialState)
return (
  <Context.Provider value={{state}}>
      {children}
  </Context.Provider>
)
}