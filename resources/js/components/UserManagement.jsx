import Axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';



import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Container from '@mui/material/Container';

import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import Saved from './Saved';

const UserManagement = () => {


    const [save, setSave] = useState('')

    // STORE USERS

    const url = "/api/store";

    // DATA

    const [data, setData] = useState({
        fName: '',
        lName: '',
        email: '',
        company: '',
        companyID: '',
        role: ''
    })

    // ACTION

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            fName: data.fName,
            lName: data.lName,
            email: data.email,
            company: data.company,
            companyID: data.companyID,
            role: data.role,
        }).then(res => {
            console.log(res.data.message)

            if (res.data.status == 200) {
                console.log('Saved');
                setSave(<Saved/>)
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


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const urlGet = "/api/getUser";

    const [userList, setUserList] = useState([]);


    useEffect(() => {

       Axios.get(urlGet).then(res => {

            console.log(res.data.status);

            if (res.data.status == 200) {

                const users = res.data.users;

                setUserList(users)

                console.log(users);

            }
        })


    }, []);

    return (
        <div>
            
            {save}

            <Box sx={{ bgcolor: '#F2F3F4', padding: '20px', borderRadius: '5px', minHeight: '55vh' }}>
                    

            <Button variant="contained" onClick={handleClickOpen} sx={{ mb: '15px' }}>
                <AddBoxRoundedIcon sx={{ mr: '8px' }} fontSize='small' />New User
            </Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">User ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Company</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>

                        {
                            userList.map((user) => {
                                return (

                                    <TableRow
                                        key={user.id}
                                    >
                                        <TableCell align="left">{user.userID}</TableCell>
                                        <TableCell align="left">{user.fName} {user.lName}</TableCell>
                                        <TableCell align="left">{user.company}</TableCell>
                                        <TableCell align="left">{user.email}</TableCell>
                                        <TableCell align="left">{user.role}</TableCell>
                                        <TableCell align="left"><EditRoundedIcon sx={{ mr: '10px' }} fontSize='small' /><DeleteRoundedIcon fontSize='small' /></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose} >

                <form onSubmit={submit}>

                    <DialogTitle sx={{ fontWeight: 'bold' }}>New User</DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{ mb: '15px' }} >
                            Add new user by completing the information needed below
                        </DialogContentText>



                        <TextField
                            sx={{ mb: '18px' }}
                            fullWidth label="First Name"
                            variant="outlined"
                            type="text"
                            id="fName"
                            size='small'
                            onChange={(e) => handle(e)}
                            value={data.fName}

                            required />

                        <TextField
                            sx={{ mb: '18px' }}
                            fullWidth label="Last Name"
                            variant="outlined"
                            type="text"
                            id="lName"
                            size='small'
                            onChange={(e) => handle(e)}
                            value={data.lName}
                            required />

                        <TextField
                            sx={{ mb: '18px' }}
                            fullWidth label="Email"
                            variant="outlined"
                            type="email"
                            id="email"
                            size='small'
                            onChange={(e) => handle(e)}
                            value={data.email}
                            required />

                        <TextField
                            sx={{ mb: '18px' }}
                            fullWidth label="Company"
                            variant="outlined"
                            type="text"
                            id="company"
                            size='small'
                            onChange={(e) => handle(e)}
                            value={data.company}
                            required />

                        <TextField
                            sx={{ mb: '18px' }}
                            fullWidth label="Company ID"
                            variant="outlined"
                            type="text"
                            id="companyID"
                            size='small'
                            onChange={(e) => handle(e)}
                            value={data.companyID}
                            required />

                        <TextField
                            sx={{ mb: '18px' }}
                            fullWidth label="Role"
                            variant="outlined"
                            type="text"
                            id="role"
                            size='small'
                            onChange={(e) => handle(e)}
                            value={data.role}
                            required />

                    </DialogContent>
                    <DialogActions sx={{ pb: '30px' }} >
                        <Container align='center'>

                            <Button onClick={handleClose}>Cancel</Button>
                            <Button variant="contained" type="submit" onClick={handleClose}>Save</Button>

                        </Container>
                    </DialogActions>

                </form>

            </Dialog>
                    
            </Box>

        </div>
    )
}

export default UserManagement;