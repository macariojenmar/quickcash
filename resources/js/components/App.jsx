import Axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid'

const App = () => {

    /*
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass);
    }
    */

    const navigate = useNavigate();

    const url = "/api/login";

    const [alert, setAlert] = useState('');
    
    const [data1, setData] = useState({
        email : '',
        password : '',
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            email: data1.email,
            password: data1.password,
        }).then(res => {
            console.log(res.data.status)
            if(res.data.status == 200){
                navigate('/dashboard');
                console.log('success')
                console.log(res.data.mySession)
                const welcome = "Welcome! " + res.data.mySession;
                alert(welcome)
            }
            else{
                console.log('invalid')
                
                return (
                    
                    setAlert(<Alert severity="error">Incorrect email or password.</Alert>)
                    
                )
                
            }
        })
    }

    function handle(e){
        const newdata = {...data1}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
       
            <div>              

                <Container sx={{ pt: '50px' }} maxWidth="sm" autoheight>
                
                <Box sx={{ mb: '20px', borderRadius: '5px' }}>
                {alert}
                </Box>
               
                <Box sx={{ bgcolor: '#F2F3F4', padding: '50px', borderRadius: '5px' }}>

                <form onSubmit={submit}>

                <Typography sx={{ fontWeight: 'bold', mb: '32px' }} variant="h4" component="h4" align="center">
                   QUICKCASH.PH
                </Typography>

                    <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="h6">
                    LOGIN
                    </Typography>

                    <Typography sx={{ mb: '16px', color: '#B3B6B7' }} variant="subtitle2">
                    Please enter your credentials to continue
                    </Typography>

                    <TextField  
                    sx={{ mb: '14px' }} 
                    fullWidth label="Email" 
                    variant="outlined" 
                    type="email"
                    id="email"                  
                    onChange={(e) => handle(e)}
                    value={data1.email}
                    required/>
                    
                    <TextField   
                    sx={{ mb: '15px' }} 
                    fullWidth 
                    label="Password" 
                    variant="outlined" 
                    type="password"
                    id="password"
                    onChange={(e) => handle(e)}
                    value={data1.password}
                    required
                    />
                    <Button sx={{ padding: '15px' }} fullWidth  variant="contained" type="submit">Login</Button>

                    <Typography sx={{ mb: '50px', mt: '50px' }} variant="subtitle2" align="center">
                    Don't have an account? <Link to="/register" >Create an account</Link>
                    </Typography>

                    <Typography sx={{color: '#B3B6B7'}} variant="subtitle2" align="center">
                    Developed by Jenmar Macario
                    </Typography>
                </form>
                
                </Box>

                </Container>
            </div>
    )
}

export default App;