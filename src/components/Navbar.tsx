import { useContext, useEffect, useState } from 'react';
import { es } from '../i18n/spanish';

import { Context } from '../context/useContext';

export const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchRestaurant } = useContext(Context)
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
         searchRestaurant(searchTerm)
    }, [searchRestaurant, searchTerm]);

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder={es.placeHolderSearchRestaurant}
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-success" type="submit">
                        {es.search}
                    </button>
                </form>
            </div>
        </nav>
    );
};
