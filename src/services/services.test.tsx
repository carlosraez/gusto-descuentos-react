import { getRestaurants } from './services';

describe('getRestaurants', () => {
    const mockData = {
        totalCount: 2,
        start: 0,
        rows: 50,
        result: [
            {
                id: 7861,
                title: 'HOGAR EXTREMEÑO EN ZARAGOZA',
                streetAddress: 'C/ Corona de Aragón 43',
                postalCode: '50009',
                addressLocality: 'ZARAGOZA',
                tel: {
                    tel: '976 55 50 19',
                },
                email: 'hogarextremenoza@orange.es',
                url: 'http://www.hogarextremenozaragoza.blogspot.com.es/',
                comment: 'Nº de plazas: 18',
                tenedores: 1,
                capacidad: 18,
                lastUpdated: '2021-04-22T07:49:38',
                description:
                    'C/ Corona de Aragón 43 <strong><abbr title="Teléfono">Tel.:</abbr></strong> 976 55 50 19',
                uri: 'https://www.zaragoza.es/sede/portal/turismo/servicio/restaurante/7861',
                sameAs: 'http://www.zaragoza.es/api/recurso/turismo/restaurante/7861',
            },
            {
                id: 32027,
                title: 'EXTREMEÑO',
                streetAddress: 'Corona de Aragon, 43',
                postalCode: '50009',
                addressLocality: 'Zaragoza',
                tel: {
                    tel: '876 45 93 11',
                },
                tenedores: 1,
                capacidad: 18,
                lastUpdated: '2023-02-21T18:39:58',
                description:
                    'Corona de Aragon, 43 <strong><abbr title="Teléfono">Tel.:</abbr></strong> 876 45 93 11',
                uri: 'https://www.zaragoza.es/sede/portal/turismo/servicio/restaurante/32027',
                sameAs: 'http://www.zaragoza.es/api/recurso/turismo/restaurante/32027',
            },
        ],
    };


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
