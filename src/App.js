import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Home from './component/Home/Home';
import Header from './component/Header/Header';
import THome from './component/Tecnology/Home/THome';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnology" element={<THome/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
