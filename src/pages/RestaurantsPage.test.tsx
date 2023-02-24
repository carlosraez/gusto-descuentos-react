import { render, screen, waitFor } from '@testing-library/react';
import { mockData } from '../mocks/mockDataRestaurantsApi';
import { RestaurantsPage } from './RestaurantsPage';

describe('RestaurantsPage', () => {
    // Mock the getRestaurants function
    jest.mock('../services/services', () => ({
        getRestaurants: jest.fn(() => Promise.resolve({ result: mockData })),
    }));

    it('should render a list of restaurants', async () => {
        // Render the component
        render(<RestaurantsPage />);
        await waitFor(() => {
          expect(screen.getAllByRole('img')).toHaveLength(50);
        });
        

        /* Wait for the restaurants to load
        const restaurants = await screen.findAllByRole('img');

        // Assert that the restaurants are displayed
        expect(restaurants).toHaveLength(3);*/
    });
});
