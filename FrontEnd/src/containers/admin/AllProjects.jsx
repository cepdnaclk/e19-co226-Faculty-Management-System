import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function AllProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch project data from the backend
        fetch('http://localhost:8080/api/v1/project/getallprojects')
            .then(response => response.json())
            .then(data => setProjects(data.content))
            .catch(error => console.error('Error fetching project data:', error));
    }, []);

    return (
        <div>
            <h2>All Project Details</h2>
            <Box display="flex" justifyContent="right" alignItems="right" height={40} mr={5}>
                <Link to='/projecdetails'><h3>Back</h3></Link>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Project ID</b></TableCell>
                            <TableCell><b>Project Name</b></TableCell>
                            <TableCell><b>Project Description</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map(project => (
                            <TableRow key={project.projectID}>
                                <TableCell>{project.projectID}</TableCell>
                                <TableCell>{project.projectName}</TableCell>
                                <TableCell>{project.projectDescription}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AllProjects;
