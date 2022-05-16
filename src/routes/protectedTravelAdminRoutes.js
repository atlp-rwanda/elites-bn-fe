import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';


export default function ProtectedTravelAdminRoutes({ children, redirectTo }) {
  const token = localStorage.getItem('userToken');
  if(token){
	const roleId = localStorage.getItem('roleId');
    if (roleId == 2) {
		return children;
	}
  }
  return <Navigate to={redirectTo}/>
}
