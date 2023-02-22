export interface restuarant {
            id: number,
            title: string,
            streetAddress: string,
            postalCode: string,
            addressLocality: string,
            tel: {
                tel: string
            },
            email: string,
            url: string,
            image: string,
            logo: string,
            socioHoreca: boolean,
            accesibilidad: string,
            comment: string,
            tenedores: string,
            capacidad: number,
            geometry: {
                type: string,
                coordinates: [
                    number,
                    number
                ]
            },
            lastUpdated: string,
            description: string,
            uri: string,
            sameAs: string
}

export interface ResponseRestaurants {
    totalCount: number,
    start: number,
    rows: number,
    result: restuarant[]
}

export interface restaurantsContextProps {
    state: ResponseRestaurants;
}