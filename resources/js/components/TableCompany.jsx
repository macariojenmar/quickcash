import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function TableCompany() {

    const urlGet = "/api/getCompany";

    const [companyList, setCompanyList] = useState([]);

    useEffect(() => {

        Axios.get(urlGet).then(res => {

            console.log(res.data.status);

            if (res.data.status == 200) {

                const companies = res.data.companies;

                setCompanyList(companies)

                console.log(companies);

            }
        })

    }, []);

    return (
        <div>

<Box sx={{ bgcolor: '#F2F3F4', padding: '20px', borderRadius: '5px', minHeight: '55vh' }}>
                    
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Company Name</TableCell>
                            <TableCell align="left">Capital</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>

                        {
                            companyList.map((company) => {
                                return (
                                    <TableRow
                                        key={company.id}
                                    >
                                        <TableCell align="left">{company.companyName}</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }} align="left">{company.capital}</TableCell>
                                        <TableCell align="left"><EditRoundedIcon sx={{ mr: '10px' }} fontSize='small' /><DeleteRoundedIcon fontSize='small' /></TableCell>
                                    </TableRow>

                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </div>
    );
}

export default TableCompany;