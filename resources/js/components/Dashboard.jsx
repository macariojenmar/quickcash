import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Grid from '@mui/material/Box';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Route, Routes } from "react-router-dom";

import Nav from './Nav';
import Menu from './Menu';
import TableCompany from './TableCompany';
import UserManagement from './UserManagement';
import App from './App';

const Dashboard = () => {


    return (
        <React.Fragment>

            
            <Nav />
            <Menu />
            <Container maxWidth="xl">


                

                <Routes>
                        <Route path="/dashboard" element={<TableCompany />} />
                        <Route path="/usermanagement" element={<UserManagement/>} />

                  
                </Routes>
                
        


            </Container>

        </React.Fragment>
    )
}

export default Dashboard;