import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

import { RestaurantsPage } from '../pages/RestaurantsPage';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path={'/'} element={<RestaurantsPage />} />
                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
