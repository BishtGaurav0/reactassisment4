import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';


const Students = () => {

    function createData(name, age, course, batch, change) {
        return { name, age, course, batch, change };
      }
    
    const rows = [
      createData('Harry Potter',15, 'MERN', 'January',<NavLink to='#'>Edit</NavLink>),
      createData('Ron Weasley', 15, 'MERN', 'March', <NavLink to='#'>Edit</NavLink>),
      createData('Hermione Granger', 21, 'MERN', 'May', <NavLink to='#'>Edit</NavLink>),
      createData('Draco Malfoy', 22, 'MERN', 'June', <NavLink to='#'>Edit</NavLink>),
      createData('Ginny Weasley', 22, 'MERN', 'June', <NavLink to='#'>Edit</NavLink>),
      createData('Neville Longbottom', 22, 'MERN', 'June', <NavLink to='#'>Edit</NavLink>),

    ];

    return (
        <div>
            <div className='firstrow'>
                <h2 className='bold2'>STUDENT DETAILS</h2>
                <button className='student-btn'>Add New student</button>
            </div>
            <div className='table'>
              <TableContainer component={Paper} >
                <Table sx={{ minWidth: 500 }} aria-label="simple table" >
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Name</b></TableCell>
                      <TableCell align="right"><b>Age</b></TableCell>
                      <TableCell align="right"><b>Course</b></TableCell>
                      <TableCell align="right"><b>Batch</b></TableCell>
                      <TableCell align="right"><b>Change</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.course}</TableCell>
                        <TableCell align="right">{row.batch}</TableCell>
                        <TableCell align="right">{row.change}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </div>
          </div> 
      );
    }

export default Students
