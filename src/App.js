import React, { useState } from 'react'; // 로그인 상태 관리를 위해 useState 추가
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PickAndPack1 from './pages/PickAndPack1';
import PickAndPack2 from './pages/PickAndPack2';
import WashAndPack1 from './pages/WashAndPack1';
import WashAndPack2 from './pages/WashAndPack2';
import MakeAndPack1 from './pages/MakeAndPack1';
import MakeAndPack2 from './pages/MakeAndPack2';
import MakeAndPack3 from './pages/MakeAndPack3';
import MakeAndPack4 from './pages/MakeAndPack4';
import DashboardPage from './pages/DashboardPage';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute'; // 로그인 보호용 라우트 컴포넌트 추가

function App() {
  // 로그인 상태 저장 (false면 비로그인, true면 로그인)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* 일반 사용자 페이지들 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/pick-pack1" element={<PickAndPack1 />} />
        <Route path="/pick-pack2" element={<PickAndPack2 />} />
        <Route path="/wash-pack1" element={<WashAndPack1 />} />
        <Route path="/wash-pack2" element={<WashAndPack2 />} />
        <Route path="/make-pack1" element={<MakeAndPack1 />} />
        <Route path="/make-pack2" element={<MakeAndPack2 />} />
        <Route path="/make-pack3" element={<MakeAndPack3 />} />
        <Route path="/make-pack4" element={<MakeAndPack4 />} />

        {/* ✅ 로그인한 경우만 대시보드 접근 가능 */}
        <Route path="/dashboard" element={<ProtectedRoute isLoggedIn={isLoggedIn}><DashboardPage /></ProtectedRoute>}/>

        {/* ✅ 로그인 페이지 — 로그인 상태/함수 props 전달 */}
        <Route
          path="/admin-login"
          element={
            <AdminLogin
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
