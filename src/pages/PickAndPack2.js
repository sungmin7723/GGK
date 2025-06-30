import React from 'react';
import FlightTable from '../components/FlightTable';

const pickPack2Data = [
  {
    id: 1,
    flight: 'OZ 5678',
    destination: '시드니',
    aircraft: 'OZA777E',
    departureDate: '2025-06-11',
    departureTime: '9:30',
    startTime: '9:00',
    prepDays: -1,
    endTime: '11:00',
    completed: 'N',
    note: '',
    completeDate: '',
    completeTime: '',
  },
  // ... 추가 데이터
];

const PickAndPack2 = () => (
  <div>
    <h2>Pick and Pack 2</h2>
    <FlightTable data={pickPack2Data} />
  </div>
);

export default PickAndPack2;
