import React from 'react';
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Box';


import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function Nav() {
    return (
        <div>
            <Container maxWidth="xl" sx={{ mt: '20px' }} align='center'>

                    <Typography sx={{ color: '#797D7F', fontWeight: 'lighter' }} variant="subtitle2">
                        Welcome back!
                    </Typography>

                    <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                        macariojenmar@gmail.com
                    </Typography>

                    <Typography sx={{ mb:'15px' }} variant="subtitle2">
                       Owner
                    </Typography>

                    <Link to="/"><SettingsRoundedIcon sx={{ mr: '10px' }} fontSize='small' /></Link>
                <Link to="/"><LogoutRoundedIcon fontSize='small' /></Link>

            </Container>

            <Container>
             
            </Container>
        </div>
    );
}

export default Nav;