import React from 'react';

export const Restaurant = ({
    title,
    comment,
    url,
}: {
    title: string;
    comment: string;
    url: string;
}) => {
    const imageRestaurantURL = `https://${url}`;

    return (
        <div className="card">
            {imageRestaurantURL !== 'https://undefined' ? (
                <img
                    src={imageRestaurantURL}
                    className="card-img-top"
                    alt="..."
                />
            ) : (
                <img
                    height={300}
                    src="https://thumbs.dreamstime.com/b/no-stop-food-icon-restaurant-sign-fork-knife-plate-symbol-prohibited-ban-stop-symbol-no-food-icon-vector-food-icon-145006653.jpg"
                    className="card-img-top"
                    alt="prueba"
                />
            )}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{comment}</p>
            </div>
        </div>
    );
};
