import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import Box from '@mui/material/Box'; // Importing Box component from Material-UI
import { Link } from 'react-router-dom';


function AllStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch student data from the backend
        fetch('http://localhost:8080/api/v1/student/getallstudents')
            .then(response => response.json())
            .then(data => setStudents(data.content))
            .catch(error => console.error('Error fetching student data:', error));
    }, []);

    return (
        <div>
            <Box display="flex" justifyContent="left" alignItems="right" height={40} mr={5}>
            <h2>All Students Details</h2>
            </Box>
            <div>
            <Box display="flex" justifyContent="right" alignItems="right" height={40} mr={5}>
                <Link to='/studentdetails'><h3>Back</h3></Link>
            </Box>
            </div>
            <br />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Enrollment Number</b></TableCell>
                            <TableCell><b>First Name</b></TableCell>
                            <TableCell><b>Last Name</b></TableCell>
                            <TableCell><b>Sex</b></TableCell>
                            <TableCell><b>Address</b></TableCell>
                            <TableCell><b>Z-Score</b></TableCell>
                            <TableCell><b>Guardian Name</b></TableCell>
                            <TableCell><b>Guardian Telephone</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(student => (
                            <TableRow key={student.enrollmentNo}>
                                <TableCell>{student.enrollmentNo}</TableCell>
                                <TableCell>{student.firstName}</TableCell>
                                <TableCell>{student.lastName}</TableCell>
                                <TableCell>{student.sex}</TableCell>
                                <TableCell>{student.address}</TableCell>
                                <TableCell>{student.zscore}</TableCell>
                                <TableCell>{student.guardianName}</TableCell>
                                <TableCell>{student.guardianTP}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AllStudents;
