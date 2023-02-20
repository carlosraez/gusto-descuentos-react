import React from 'react';
import { Link } from 'react-router-dom';

export const Restaurant = ({title, comment, url}:{title:string, comment:string, url:string}) => {
    const imageRestaurantURL = `https://${url}`;
    return (
        <div className="card">
            <img height={230} src={imageRestaurantURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {comment}
                </p>
                <Link to="#" className="btn btn-primary">
                    Ver
                </Link>
            </div>
        </div>
    );
};
