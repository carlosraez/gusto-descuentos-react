import { ResponseRestaurants } from "../interfaces/navar.interface";

type RestaurantAction = 
|
{
     type: 'initialData',
     payload: ResponseRestaurants 
} 

    
   


export const restaurantReducer = (state:ResponseRestaurants , action:RestaurantAction) => {
    switch (action.type) {
        case 'initialData':
        return {
            ...state,  
        }
            
                      
    
        default:
            return state;
    }
   
}