import { mockData } from '../mocks/mockDataRestaurantsApi';
import { getRestaurants } from './services';

describe('getRestaurants', () => {
    it('should fetch restaurants data from API', async () => {
        const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockData),
        } as unknown as Response);
      
          const result = await getRestaurants();
      
          expect(mockFetch).toHaveBeenCalledWith(
            'https://www.zaragoza.es/sede/servicio/restaurante.json?',
            { method: 'GET', headers: { 'Content-Type': 'application/json' } }
          );
          expect(result).toEqual(mockData);
      
          mockFetch.mockRestore();
    });

    it('should throw an error if the API call fails', async () => {
        const mockFetch = jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('API call failed'));
        console.log(mockFetch);
        
        await expect(getRestaurants()).rejects.toThrowError('API call failed');
      
        mockFetch.mockRestore();
    });
});
