import React, { useState } from 'react';
// 셀 정의 
const cellMeta = {
  flight: 'excel',
  destination: 'excel',
  aircraft: 'excel',
  departureDate: 'system',
  departureTime: 'system',
  startTime: 'auto',
  prepDays: 'auto',
  endTime: 'auto',
  completed: 'manual',
  note: 'manual',
  completeDate: 'system',
  completeTime: 'system',
};

// 셀 렌더링 방식
const renderCell = (key, value) => {
  const source = cellMeta[key];

  if (source === 'system') return <span>{value}</span>;
  if (source === 'auto') return <em>{value}</em>;
  if (source === 'excel') return <strong>{value}</strong>;
  return <input type="text" defaultValue={value} />;
};

// 준비시간 자동 계산
const FlightTable = ({ data }) => {
  const [flightFilter, setFlightFilter] = useState('');
  const [destinationFilter, setDestinationFilter] = useState('');
  const [completedFilter, setCompletedFilter] = useState('');
  const uniqueFlights = [...new Set(data.map(f => f.flight))];
  const uniqueDestinations = [...new Set(data.map(f => f.destination))];


  const [completionTimestamps, setCompletionTimestamps] = useState(() =>
  data.reduce((acc, item) => {
    if (item.completed === 'Y') {
      acc[item.id] = {
        date: item.completeDate,
        time: item.completeTime,
      };
    }
    return acc;
  }, {})
  );


  const [completionStatus, setCompletionStatus] = useState(() =>
  data.reduce((acc, item) => {
    acc[item.id] = item.completed === 'Y';
    return acc;
  }, {})
  );

  const filteredData = data.filter(f =>
     (flightFilter ? f.flight === flightFilter : true) &&
    (destinationFilter ? f.destination === destinationFilter : true) &&
    (completedFilter
      ? (completionStatus[f.id] ? 'Y' : 'N') === completedFilter
      : true)
  );



const handleCheckboxChange = (id) => {
  const nowChecked = !completionStatus[id];

  setCompletionStatus((prev) => ({
    ...prev,
    [id]: nowChecked,
  }));

  setCompletionTimestamps((prev) => {
    if (nowChecked) {
      const now = new Date();
      const rawDate = now.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      
      const date = rawDate
      .replace(/\./g, '/')
      .replace(/\s/g, '')
      .replace(/\/$/, '');

      const time = now.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

       return {
        ...prev,
        [id]: { date, time },
      };
    } else {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    }
  });
};

  return (
      <div style={{ maxWidth: '834px', margin: '0 auto', padding: '10px'}}>
         <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}> 
          {/* 테이블과 필터 UI */}
          
          비행편명:
          <select value={flightFilter} onChange={(e) => setFlightFilter(e.target.value)}>
            <option value="">전체</option>
            {uniqueFlights.map(flight => (
              <option key={flight} value={flight}>{flight}</option>
            ))}
          </select>
        </label>

        <label style={{ marginRight: '10px' }}>
          목적지:
          <select value={destinationFilter} onChange={(e) => setDestinationFilter(e.target.value)}>
            <option value="">전체</option>
            {uniqueDestinations.map(dest => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </label>

        <label>
          완료 여부:
          <select value={completedFilter} onChange={(e) => setCompletedFilter(e.target.value)}>
            <option value="">전체</option>
            <option value="Y">✅ 완료</option>
            <option value="N">❌ 미완료</option>
          </select>
        </label>
      </div>

          <div style={{ overflowX: 'auto' }}>
        <table
          border="1"
          cellPadding="8"
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            tableLayout: 'auto',
            wordBreak: 'keep-all',
            whiteSpace: 'normal',
            marginBottom: 0,
          }}
        >
          <thead>
            <tr>
              <th style={{ whiteSpace: 'nowrap' }}>ID</th>
              <th style={{ whiteSpace: 'nowrap' }}>비행편명</th>
              <th style={{ whiteSpace: 'nowrap' }}>목적지</th>
              <th style={{ whiteSpace: 'nowrap' }}>기종</th>
              <th style={{ whiteSpace: 'nowrap' }}>출발날짜</th>
              <th style={{ whiteSpace: 'nowrap' }}>출발시간</th>
              <th style={{ whiteSpace: 'nowrap' }}>작업시작시간</th>
              <th style={{ whiteSpace: 'nowrap' }}>준비시간</th>
              <th style={{ whiteSpace: 'nowrap' }}>작업종료시간</th>
              <th style={{ whiteSpace: 'nowrap' }}>완료</th>
              <th style={{ whiteSpace: 'nowrap' }}>주석</th>
              <th style={{ whiteSpace: 'nowrap' }}>완료일자</th>
              <th style={{ whiteSpace: 'nowrap' }}>완료시간</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((f) => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>{renderCell('flight', f.flight)}</td>
                <td style={{ maxWidth: '200px', wordBreak: 'keep-all', whiteSpace: 'normal'}}>{renderCell('destination', f.destination)}</td>
                <td>{renderCell('aircraft', f.aircraft)}</td>
                <td style= {{ whiteSpace: 'nowrap' }}>{renderCell('departureDate', f.departureDate)}</td>
                <td style={{ textAlign: 'center' }}>{renderCell('departureTime', f.departureTime)}</td>
                <td style={{ textAlign: 'center' }}>{renderCell('startTime', f.startTime)}</td>
                <td style={{ textAlign: 'center' }}>{f.prepDays ?? -1}</td>
                <td style={{ textAlign: 'center' }}>{renderCell('endTime', f.endTime)}</td>
                <td style={{ textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={completionStatus[f.id] || false}
                    onChange={() => handleCheckboxChange(f.id)}
                  />
                </td>
                <td>{renderCell('note', f.note)}</td>
                <td style={{ textAlign: 'center' }}>{completionStatus[f.id] && completionTimestamps[f.id]?.date}</td>
                <td style={{ textAlign: 'center' }}>{completionStatus[f.id] && completionTimestamps[f.id]?.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightTable;
