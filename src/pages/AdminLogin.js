import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 이미 로그인되어 있으면 로그인 페이지 접근 시 바로 대시보드로 이동
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    // 로그인 로직 (지금은 임시로 무조건 통과)
    if (id.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true); // 로그인 상태 true로 변경
      navigate('/dashboard'); // 대시보드로 이동
    } else {
      alert('ID와 비밀번호를 입력하세요.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2 className="login-title">관리자 로그인</h2>
        <div className="login-box">
          <input
            type="text"
            placeholder="ID"
            className="login-input"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
