import Axios from 'axios';
import React from 'react';
import {useState} from 'react';
import { Link} from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Application = () => {

    /*
    const [loanAmt, setLoanAmt] = useState('');

    
    const handleSubmit = () => {
       
       
        console.log(monthly.toFixed(2));
    }
    */

    const url = "api/storeLoan";
    
    const [data, setData] = useState({
        loanAmount : ''
    })


    const ammortization = 6;
    const totalPer = ammortization * 0.05;
    const totalInt = data.loanAmount * totalPer;
    const totalAmt = parseFloat(data.loanAmount) + parseFloat(totalInt);
    const monthly = totalAmt / ammortization;
    
    
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            loanAmount: data.loanAmount,
        }).then(res => {
            console.log(res.data.message)

            if(res.data.status == 200){
                alert('Saved')
            }
        })
    }

    // GETTING VALUE FROM INPUTS
    
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
        console.log(ammortization)
        console.log(totalAmt.toFixed(2))
        console.log(monthly.toFixed(2))
    }

     // --------------------------------- DISPLAY --------------------------- //

     const urlGet = "/api/getLoan";

     const [loanList, setLoanList] = useState([]);

     function load(e) {
         e.preventDefault();
         Axios.get(urlGet).then(res => {
             
             console.log(res.data.status);
             
             if(res.data.status == 200){
                 
                 const loans = res.data.loans;
               
                 setLoanList(loans)

                 console.log(loans);
              
             }
         })

        
     }

    return (
        <div>
            <form onSubmit={submit}>
            <h1>Loan Application</h1>

            <Link to="/dashboard">Dashboard</Link>

            <h5>Loan Applicaion Details</h5>
            <h4>Amortization: 6</h4>
            <h4>Percentage: 5%</h4>
            <h4>Interest: 30%</h4>

            <button type='button' onClick={load}>Refresh</button>
            <br/><br/>
            <input 
                type="number" placeholder="Loan amount"
                id = "loanAmount"
                onChange={(e) => handle(e)}
                value={data.loanAmount}
                required
            />
            <br/><br/>
            <button type="submit">Apply Loan</button>
            </form>

            {
                        loanList.map((loan) => {
                        return(
                           
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell align="left">User ID</TableCell>
                                            <TableCell align="left">Employee Name</TableCell>
                                            <TableCell align="left">Company Name</TableCell>
                                            <TableCell align="left">Company ID</TableCell>
                                            <TableCell align="left">Loan Amt</TableCell>
                                            <TableCell align="left">Loan Amt (With Interest)</TableCell>
                                            <TableCell align="left">Amortization</TableCell>
                                            <TableCell align="left">Status</TableCell>
                                            <TableCell align="left" style={{ fontWeight: 600 }}>Monthly</TableCell>
                                        </TableRow>
                                        </TableHead>
                              
                                        <TableBody>
                                        
                                            <TableRow
                                            key={loan.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                                            >
                                            <TableCell align="left">{loan.userID}</TableCell>
                                            <TableCell align="left">{loan.employeeName}</TableCell>
                                            <TableCell align="left">{loan.companyName}</TableCell>
                                            <TableCell align="left">{loan.companyID}</TableCell>
                                            <TableCell align="left">{loan.amount}</TableCell>
                                            <TableCell align="left">{loan.withInterest}</TableCell>
                                            <TableCell align="left">{loan.amortization}</TableCell>
                                            <TableCell align="left">{loan.status}</TableCell>
                                            <TableCell align="left" style={{ fontWeight: 600 }}>{loan.monthly}</TableCell>
                                            </TableRow>
                                     
                                        </TableBody>
                                    </Table>
                                    </TableContainer>
                         
                        )
                        })
                    }
        </div>
    )
}

export default Application;