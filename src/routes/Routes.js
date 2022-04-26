import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accommodations from '../components/accommodations/accommodations';
import Home from '../components/home/Home';
import Dashboard from '../components/layouts/dashboardLayout';
import NotFoundPage from '../views/notFound/NotFoundPage';
import ProtectRoute from './routes/protectedRoutes';
import Unauthorized from './routes/unauthorizedRoutes';


const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/accommodations" element={<Accommodations />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route exact path='/success'  element={
            <ProtectRoute redirectTo='/login'>
              <SuccessLogin/>
            </ProtectRoute>}/>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AllRoutes;
