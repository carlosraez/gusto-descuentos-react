import React from 'react';
import './App.css';
import { Navigation } from './routes/navigation';
import { RestaurantProvider } from './context/useContext';

function App() {
    return (
        <div className="App" data-testid="restaurant-provider">
            <AppState>
                <Navigation />
            </AppState>
        </div>
    );
}

const AppState = ({ children }: { children: JSX.Element }) => {
    return <RestaurantProvider>{children}</RestaurantProvider>;
};

export default App;
