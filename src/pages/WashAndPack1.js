import React from 'react';
import FlightTable from '../components/FlightTable';

const WashPack1Data = [
    {
        id: 1,
        flight: 'VS 1231',
        destination: '취리히',
        aircraft: 'VSB505E',
        departureDate: '2025-06-10',
        departureTime: '8:35',
        startTime: '8:00',
        prepDays: -1,
        endTime: '10:00',
        completed: 'N',
        note: 'ABCBCBAFBAFBAF',
        completeDate: '',
        completeTime: '',
    },
];

const WashAndPack1 = () => (
    <div>
        <h2 style={{ textAlign: 'center', marginTop: '20px' , marginBottom: '30px', fontSize: '24px'}}>Wash And Pack1</h2>
        <FlightTable data={WashPack1Data} />
    </div>
);

export default WashAndPack1;