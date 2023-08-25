import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { ServicesPage } from './pages/ServicesPage';

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ServicesPage />} />
        <Route path="/:id/details" element={<ServiceDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
