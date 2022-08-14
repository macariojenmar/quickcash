import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import Alert from '@mui/material/Alert';



const Register = () => {

  const navigate = useNavigate();

  const [compSelect, setCompSelect] = useState('');

  const [alert, setAlert] = useState('');

  const url = "api/register";

  // STORE USERS

  // DATA

  const [data, setData] = useState({
    companyID: '',
    fName: '',
    lName: '',
    email: '',
    company: '',
    password: '',
    password_confirmation: '',

  })

  // ACTION

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      companyID: data.companyID,
      fName: data.fName,
      lName: data.lName,
      email: data.email,
      company: data.company,
      password: data.password,
      password_confirmation: data.password_confirmation,
    }).then(res => {
      console.log(res.data.message)
      if (res.data.status == 200) {
        console.log('Saved')
        //alert('Saved');
        navigate('/');
      }
      else { 
        console.log(res.data.status)
   
      }
    })
  }

  // GETTING VALUE FROM INPUTS

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const handleChange = e => setCompSelect(e.target.value);

  return (
    <div>

      <Container maxWidth="md">

      <Box sx={{ mb: '20px', borderRadius: '5px' }}>
                {alert}
      </Box>

        <Box sx={{ bgcolor: '#F2F3F4', padding: '40px', margin: '50px', borderRadius: '5px'  }}>

          <form onSubmit={submit}>

            <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="h6">
              CREATE ACCOUNT
            </Typography>

            <Typography sx={{ mb: '16px', color: '#B3B6B7' }} variant="subtitle2">
              Please complete the details below
            </Typography>

            <Box sx={{ flexGrow: 1 }}>

              <Grid container spacing={2}>
                <Grid item xs={6}>

                  <TextField
                    sx={{ mb: '14px' }}
                    fullWidth label="First Name"
                    variant="outlined"
                    type="text"
                    id="fName"
                    onChange={(e) => handle(e)}
                    value={data.fName}
                    required />

                </Grid>
                <Grid item xs={6}>
                  <TextField
                    sx={{ mb: '14px' }}
                    fullWidth label="Last Name"
                    variant="outlined"
                    type="text"
                    id="lName"
                    onChange={(e) => handle(e)}
                    value={data.lName}

                    required />
                </Grid>
              </Grid>


              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    sx={{ mb: '14px' }}
                    fullWidth label="Email"
                    variant="outlined"
                    type="email"
                    id="email"
                    onChange={(e) => handle(e)}
                    value={data.email}

                    required />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    sx={{ mb: '14px' }}
                    fullWidth label="Company ID"
                    variant="outlined"
                    type="number"
                    id="companyID"
                    onChange={(e) => handle(e)}
                    value={data.companyID}

                    required />
                </Grid>

              </Grid>

              {/*
              <select id="company"  onChange={(e) => handle(e)}  value={data.company}      >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              </select> 
              
                 */}

            <TextField
              sx={{ mb: '15px' }}
            label="Company"
            id = "company"
            variant="outlined"
            type="text"
            fullWidth
            onChange={(e) => handle(e)}
            value = {data.company}
            required
            >
            </TextField>

              <TextField
                sx={{ mb: '15px' }}
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                id="password"
                helperText="*Password must be minimum of 6 characters and must contain letters, numbers, and special characters"
                onChange={(e) => handle(e)}
                value={data.password}
                required
              />

              <TextField
                sx={{ mb: '20px' }}
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type="password"
                id="password_confirmation"
                onChange={(e) => handle(e)}
                value={data.password_confirmation}
                required
              />

            </Box>

            <Button sx={{ padding: '15px' }} fullWidth variant="contained" type="submit">Continue</Button>

            <Typography sx={{ mt: '45px' }} variant="subtitle2" align="center">
              Already have an account? <Link to="/" >Login</Link>
            </Typography>

          </form>

        </Box>

      </Container>


    </div>
  )
}

export default Register;