import React, { useState } from 'react';
import { Restaurant } from '../components/Restaurant';
import { useEffect } from 'react';

import { getRestaurants } from '../services/services';
import { restuarant } from '../interfaces/navar.interface';

export const RestaurantsPage = () => {
    const [restaurants, setRestaurants] = useState<restuarant[]>([]);

    useEffect(() => {
        getRestaurants().then((resp) => {
            if (resp !== undefined) {
                setRestaurants(resp.result);
            }
        });
    }, []);

    return (
        <div className="container mt-3">
            <div className="row">
                {restaurants.map((rest, i) => (
                    <div
                        key={rest?.id === rest.id ? i : rest.id}
                        className="col-4 mt-3"
                    >
                        <Restaurant
                            title={rest.title}
                            comment={rest.comment}
                            url={rest.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
