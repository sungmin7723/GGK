import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PickAndPack1 from './pages/PickAndPack1';
import PickAndPack2 from './pages/PickAndPack2';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pick-pack1" element={<PickAndPack1 />} />
        </Routes>
    </Router>
  );
}

export default App;
