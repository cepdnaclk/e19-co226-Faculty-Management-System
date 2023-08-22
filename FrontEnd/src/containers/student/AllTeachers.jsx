import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function AllTeachers() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        // Fetch teacher data from the backend
        fetch('http://localhost:8080/api/v1/teacher/getallteachers')
            .then(response => response.json())
            .then(data => setTeachers(data))
            .catch(error => console.error('Error fetching teacher data:', error));
    }, []);

    return (
        <div>
            <h2>All Lecturers Details</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Lecturer ID</b></TableCell>
                            <TableCell><b>Lecturer Name</b></TableCell>
                            <TableCell><b>Department Name</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teachers.map(teacher => (
                            <TableRow key={teacher.teacherID}>
                                <TableCell>{teacher.teacherID}</TableCell>
                                <TableCell>{teacher.teacherName}</TableCell>
                                <TableCell>{teacher.department.departmentName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AllTeachers;
