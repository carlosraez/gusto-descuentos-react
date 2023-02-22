import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './routes/navigation';
import { RestaurantProvider } from './context/useContext';

function App() {
    return (
        <div className="App">
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
