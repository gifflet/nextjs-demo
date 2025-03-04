import { EventModel } from '@/models';

interface DataStructure {
    events: EventModel[];
    spots: {
        id: number;
        name: string;
        status: string;
        event_id: number;
    }[];
}

const data: DataStructure = {
    events: [
        {
            id: 1,
            name: "cerulean",
            date: "2023-09-09T00:00:00",
            image_url: "https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?w=1380&t=st=1718319756~exp=1718320356~hmac=04c66eebce155ef2dccf0cd945fdc0c1269c83e574149145aaee4159d8219906",
            created_at: "2023-09-09T00:10:10",
            available_spots: 10,
            price: 100
        },
        {
            id: 2,
            name: "fuchsia rose",
            date: "2023-10-09T00:00:00",
            image_url: "https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?w=1380&t=st=1718319756~exp=1718320356~hmac=04c66eebce155ef2dccf0cd945fdc0c1269c83e574149145aaee4159d8219906",
            created_at: "2023-09-09T00:10:11",
            available_spots: 20,
            price: 200
        },
        {
            id: 3,
            name: "true red",
            date: "2023-11-09T00:00:00",
            image_url: "https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?w=1380&t=st=1718319756~exp=1718320356~hmac=04c66eebce155ef2dccf0cd945fdc0c1269c83e574149145aaee4159d8219906",
            created_at: "2023-09-09T00:10:12",
            available_spots: 30,
            price: 300
        },
    ],
    spots: [
        { id: 1, name: "A1", status: 'available', event_id: 1 },
        { id: 2, name: "A2", status: 'available', event_id: 1 },
        { id: 3, name: "A3", status: 'available', event_id: 1 },
        { id: 4, name: "A4", status: 'available', event_id: 1 },
        { id: 5, name: "A5", status: 'available', event_id: 1 },
        { id: 6, name: "B1", status: 'available', event_id: 1 },
        { id: 7, name: "B2", status: 'available', event_id: 1 },
        { id: 8, name: "B3", status: 'available', event_id: 1 },
        { id: 9, name: "B4", status: 'available', event_id: 1 },
        { id: 10, name: "B5", status: 'available', event_id: 1 },

        { id: 1, name: "A1", status: 'available', event_id: 2 },
        { id: 2, name: "A2", status: 'available', event_id: 2 },
        { id: 3, name: "A3", status: 'available', event_id: 2 },
        { id: 4, name: "A4", status: 'available', event_id: 2 },
        { id: 5, name: "A5", status: 'available', event_id: 2 },
        { id: 6, name: "A6", status: 'available', event_id: 2 },
        { id: 7, name: "A7", status: 'available', event_id: 2 },
        { id: 8, name: "A8", status: 'available', event_id: 2 },
        { id: 9, name: "A9", status: 'available', event_id: 2 },
        { id: 10, name: "A10", status: 'available', event_id: 2 },
        { id: 11, name: "B1", status: 'available', event_id: 2 },
        { id: 12, name: "B2", status: 'available', event_id: 2 },
        { id: 13, name: "B3", status: 'available', event_id: 2 },
        { id: 14, name: "B4", status: 'available', event_id: 2 },
        { id: 15, name: "B5", status: 'available', event_id: 2 },
        { id: 16, name: "B6", status: 'available', event_id: 2 },
        { id: 17, name: "B7", status: 'available', event_id: 2 },
        { id: 18, name: "B8", status: 'available', event_id: 2 },
        { id: 19, name: "B9", status: 'available', event_id: 2 },
        { id: 20, name: "B10", status: 'available', event_id: 2 },

        { id: 1, name: "A1", status: 'available', event_id: 3 },
        { id: 2, name: "A2", status: 'available', event_id: 3 },
        { id: 3, name: "A3", status: 'available', event_id: 3 },
        { id: 4, name: "A4", status: 'available', event_id: 3 },
        { id: 5, name: "A5", status: 'available', event_id: 3 },
        { id: 6, name: "A6", status: 'available', event_id: 3 },
        { id: 7, name: "A7", status: 'available', event_id: 3 },
        { id: 8, name: "A8", status: 'available', event_id: 3 },
        { id: 9, name: "A9", status: 'available', event_id: 3 },
        { id: 10, name: "A10", status: 'available', event_id: 3 },
        { id: 11, name: "A11", status: 'available', event_id: 3 },
        { id: 12, name: "A12", status: 'available', event_id: 3 },
        { id: 13, name: "A13", status: 'available', event_id: 3 },
        { id: 14, name: "A14", status: 'available', event_id: 3 },
        { id: 15, name: "A15", status: 'available', event_id: 3 },
        { id: 16, name: "B1", status: 'available', event_id: 3 },
        { id: 17, name: "B2", status: 'available', event_id: 3 },
        { id: 18, name: "B3", status: 'available', event_id: 3 },
        { id: 19, name: "B4", status: 'available', event_id: 3 },
        { id: 20, name: "B5", status: 'available', event_id: 3 },
        { id: 21, name: "B6", status: 'available', event_id: 3 },
        { id: 22, name: "B7", status: 'available', event_id: 3 },
        { id: 23, name: "B8", status: 'available', event_id: 3 },
        { id: 24, name: "B9", status: 'available', event_id: 3 },
        { id: 25, name: "B10", status: 'available', event_id: 3 },
        { id: 26, name: "B11", status: 'available', event_id: 3 },
        { id: 27, name: "B12", status: 'available', event_id: 3 },
        { id: 28, name: "B13", status: 'available', event_id: 3 },
        { id: 29, name: "B14", status: 'available', event_id: 3 },
        { id: 30, name: "B15", status: 'available', event_id: 3 },
    ]
};

export default data; 