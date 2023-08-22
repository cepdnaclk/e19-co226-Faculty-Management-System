import { Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import Container from '@mui/material/Container';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StudentDetails() {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [studentInfo, setStudentInfo] = useState(null);
    const [courses, setCourses] = useState([]);
    const [projects, setProjects] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);


    const fetchStudentData = () => {
        // Fetch student basic information
        fetch(`http://localhost:8080/api/v1/student/getstudentbyid/${registrationNumber}`)
            .then(response => response.json())
            .then(data => {
                setStudentInfo(data);
                setIsDataFetched(true);
            })
            .catch(error => console.error('Error fetching student info:', error));

        // Fetch student's courses
        fetch(`http://localhost:8080/api/v1/student/getcourses/${registrationNumber}`)
            .then(response => response.json())
            .then(data => {setCourses(data)
            console.log("courses fetched");
            })
            .catch(error => console.error('Error fetching student courses:', error));
            
        // Fetch student's projects
        fetch(`http://localhost:8080/api/v1/student/getprojects/${registrationNumber}`)
            .then(response => response.json())
            .then(data => {
                setProjects(data)
                console.log("projects fetched");
            })
            .catch(error => console.error('Error fetching student projects:', error));
    };

    const goback = () => {
        setIsDataFetched(false);
        setRegistrationNumber('');
    };

    return (
        <Card variant='outlined'>
            <div>
                
                {!isDataFetched ? (
                    <div>

                    <Box display="flex" justifyContent="center" alignItems="center" height={50} mt={4}>
                        <h1>Search a Student</h1>
                    </Box>
                    <br/>
                    <Box display="flex" justifyContent="center" alignItems="center" paddingBottom={2}>
                        
                        <TextField
                        id="outlined-basic"
                        label="Enter the Enrollment Number"
                        variant="outlined"
                        value={registrationNumber}
                        onChange={e => setRegistrationNumber(e.target.value)}
                        autoComplete='off'
                        style={{marginRight: '10px',width:'300px'}}
                        />
                        
                        <Button variant="contained" color="primary" onClick={fetchStudentData}>
                            SEARCH
                        </Button>
                    </Box>

                    <Box display="flex" justifyContent="right" alignItems="right" height={40} mr={6}>
                        <Link to="/allstudents"><h3>View All Students</h3></Link>
                    </Box>

                    <Box display="flex" justifyContent="right" alignItems="right" height={40} mr={6}>
                        <Link to="/studentcommentbyadmin"><h3>View Students Comments</h3></Link>
                    </Box>

                    </div>
                    
                ) : (
                    <div>
                        <Container display="flex" justifyContent="center" alignItems="center">
                            <h2 style={{textAlign:"center"}}>{studentInfo.firstName}  {studentInfo.lastName} </h2>
                           
                            <p><b>Registration Number:</b> {studentInfo.enrollmentNo}</p>
                            <p><b>First Name:</b> {studentInfo.firstName}</p>
                            <p><b>Last Name:</b> {studentInfo.lastName}</p>
                            <p><b>Z-Score:</b> {studentInfo.zscore}</p>
                            <p><b>Sex:</b> {studentInfo.sex}</p>
                            <p><b>Address:</b> {studentInfo.address}</p>

                            <h3 style={{textAlign:"center"}}>Guardian Details</h3>

                            <p><b>Name:</b> {studentInfo.guardianName}</p>
                            <p><b>Telephone Number:</b> {studentInfo.guardianTP}</p>
                        </Container>
                        
                        <Container>

                        <h3 style={{textAlign:'center'}}>Assigned Courses for {studentInfo.firstName}</h3>

                            <TableContainer component={Paper} sx={{ maxWidth: '60%', margin: 'auto' }}>
                                <Table sx={{ minWidth: 40 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><b>Course ID</b></TableCell>
                                            <TableCell align='center'><b>Course Name</b></TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                    {courses.map(course => (
                                        <TableRow
                                            key={course.courseID}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                            <TableCell component="th" scope="row">
                                            {course.courseID}
                                            </TableCell>
                                            <TableCell align="center">{course.courseName}</TableCell>
                        
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>                        
                        </Container>
                        
                        <br />
                        <Container>
                        <h3 style={{textAlign:'center'}}>Assigned Projects for {studentInfo.firstName}</h3>

                            <TableContainer component={Paper} sx={{ maxWidth: '60%', margin: 'auto' }}>
                                <Table sx={{ minWidth: 40 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><b>Project ID</b></TableCell>
                                            <TableCell align='center'><b>Project Name</b></TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                    {projects.map(project => (
                                        <TableRow
                                            key={project.projectID}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                            <TableCell component="th" scope="row">
                                            {project.projectID}
                                            </TableCell>
                                            <TableCell align="center">{project.projectName}</TableCell>
                        
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>                        
                        </Container>

                        <Container>
                            <Button variant="contained" color="primary" onClick={goback}>
                                Go Back
                            </Button>
                        </Container>
                    </div>
                )}
            </div>
            <br />
        </Card>
    );
}

export default StudentDetails;
