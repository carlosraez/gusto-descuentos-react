import {
    ResponseRestaurants,
    RestaurantsState,
} from '../interfaces/navar.interface';

type RestaurantAction = {
    type: 'searchRestaurant';
    payload: {
        q: string
    }
};

export const restaurantReducer = (
    state: RestaurantsState,
    action: RestaurantAction
) => {
    console.log(action);
    
    switch (action.type) {     
        case 'searchRestaurant':
            return {
                ...state,
            };

        default:
            return state;
    }
};
