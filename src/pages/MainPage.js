import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>GGK Checklist 메인 페이지</h1>
      <button onClick={() => navigate('/pick-pack1')} style={{ marginRight: '10px' }}>
        픽앤팩1
      </button>
      <button onClick={() => navigate('/pick-pack2')}>
        픽앤팩2
      </button>
    </div>
  );
};

export default MainPage;
