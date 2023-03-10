import { useReducer, createContext } from 'react';
import { restaurantReducer } from './restaurantReducer';
import {
    restaurantsContextProps,
    RestaurantsState,
} from '../interfaces/navar.interface';

export const InitialState: RestaurantsState = {
    q: '',
    totalCount: 0,
    start: 0,
    rows: 0,
    result: [],
};

export const Context = createContext({} as restaurantsContextProps);

export const RestaurantProvider = ({ children }: any) => {
    const searchRestaurant = (q: string) => {
        dispatch({
            type: 'searchRestaurant',
            payload: {
                q,
            },
        });
    };

    const [state, dispatch] = useReducer(restaurantReducer, InitialState);
    return (
        <Context.Provider value={{ state, searchRestaurant }}>
            {children}
        </Context.Provider>
    );
};
