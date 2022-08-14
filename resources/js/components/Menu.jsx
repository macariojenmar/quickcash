import React from 'react';
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Menu() {
    return (
        <div>
             
             <Container maxWidth="xl" sx={{ mt: '35px', mb: '30px' }} align='center'>

               
                <Button variant="text"  sx={{ fontWeight: 'bold', bgcolor: '#F2F3F4', mr: '15px', pl: '20px', pr: '20px'}} ><Link to="/dashboard">Dashboard</Link></Button>
                <Button variant="text" sx={{ fontWeight: 'bold', bgcolor: '#F2F3F4', mr: '15px', pl: '20px', pr: '20px' }} ><Link to="/usermanagement">User Management</Link></Button>
                <Button variant="text" sx={{ fontWeight: 'bold', bgcolor: '#F2F3F4', mr: '15px', pl: '20px', pr: '20px' }} ><Link to="/dashboard">Companies</Link></Button>
                
                <Button variant="text" sx={{ fontWeight: 'bold', bgcolor: '#F2F3F4', mr: '15px', pl: '20px', pr: '20px' }} ><Link to="/dashboard">Loans</Link></Button>
                
                <Button variant="text" sx={{ fontWeight: 'bold', bgcolor: '#F2F3F4', mr: '15px', pl: '20px', pr: '20px' }} ><Link to="/dashboard">Loan Application</Link></Button>
               

            </Container>

        </div>
    );
}

export default Menu;