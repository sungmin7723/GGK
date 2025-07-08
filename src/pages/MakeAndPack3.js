import React from 'react';
import FlightTable from '../components/FlightTable';

export const makeAndPack3Data = [
    {
        id: 1,
        flight: 'OZ 9999',
        destination: '프랑크푸르트',
        aircraft: 'OZA333E',
        departureDate: '2025-06-10',
        departureTime: '15:45',
        startTime: '8:00',
        prepDays: -1,
        endTime: '10:00',
        completed: 'N',
        note: '',
        completeDate: '',
        completeTime: '',
    },
    {
        id: 2,
        flight: 'VS 4918',
        destination: '시카고',
        aircraft: 'VSB505E',
        departureDate: '2025-06-10',
        departureTime: '15:50',
        startTime: '8:00',
        prepDays: -1,
        endTime: '10:00',
        completed: 'N',
        note: '',
        completeDate: '',
        completeTime: '',
    },
    {
        id: 3,
        flight: 'OZ 202',
        destination: '오버코헨',
        aircraft: 'OZ020EE',
        departureDate: '2025-06-10',
        departureTime: '15:50',
        startTime: '8:00',
        prepDays: -1,
        endTime: '10:00',
        completed: 'N',
        note: '',
        completeDate: '',
        completeTime: '',
    },
    {
        id: 4,
        flight: 'OZ 331',
        destination: '뉴옥',
        aircraft: 'OZ 331ZZ',
        departureDate: '2025-06-10',
        departureTime: '15:45',
        startTime: '8:00',
        prepDays: -1,
        endTime: '10:00',
        completed: 'N',
        note: '',
        completeDate: '',
        completeTime: '',
    },
    {
        id: 5,
        flight: 'OZ 333',
        destination: '워싱턴DC',
        aircraft: 'OZ 333FF',
        departureDate: '2025-06-10',
        departureTime: '15:50',
        startTime: '8:00',
        prepDays: -1,
        endTime: '10:00',
        completed: 'N',
        note: '',
        completeDate: '',
        completeTime: '',
    },
    {
        id: 6,
        flight: 'OZ 202',
        destination: '코나키나발루',
        aircraft: 'OZ 202HH',
        departureDate: '2025-06-10',
        departureTime: '15:50',
        startTime: '8:00',
        prepDays: -1,
        endTime: '10:00',
        completed: 'N',
        note: '',
        completeDate: '',
        completeTime: '',
    }
];

const MakeAndPack3 = () => (
    <div>
        <h2 style={{ textAlign: 'center', marginTop: '20px' , marginBottom: '30px', fontSize: '24px'}}>Make and Pack 1</h2>
        <FlightTable data={makeAndPack3Data} />
    </div>
);

export default MakeAndPack3;