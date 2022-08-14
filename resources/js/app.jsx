//import '../bootstrap';
//import '../css/app.css'
import React from 'react';
import ReactDOM from 'react-dom/client';        
import App from './components/App';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import Amortization from './components/Amortization';
import LoanApplication from './components/LoanApplication';
import Register from './components/Register';
import Company from './components/Company';
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('app')).render(
    
    <React.StrictMode>

   
    <BrowserRouter>
        
        <Dashboard />
        {/*
        <Routes>
            <Route path="/" element={} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/usermanagement" element={<UserManagement/>} />
            <Route path="/amortization" element={<Amortization/>} />
            <Route path="/loanapplication" element={<LoanApplication/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/company" element={<Company/>} />
        </Routes>
        */}
    
    </BrowserRouter>
    </React.StrictMode>

);