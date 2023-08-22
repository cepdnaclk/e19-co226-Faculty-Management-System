import { Card} from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function LectureDetails() {
    const [teacherID, setTeacherID] = useState('');
    const [teacherInfo, setTeacherInfo] = useState(null);
    const [courses, setCourses] = useState([]);
    const [department, setDepartment] = useState(null);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const fetchStudentData = () => {
        // Fetch student basic information
        /*fetch(`http://localhost:8080/api/v1/teacher/getteacher/${teacherID}`)
            .then(response => response.json())
            .then(data => {
                setTeacherInfo(data);
                
            })
            .catch(error => console.error('Error fetching student info:', error));

        // Fetch student's courses
        fetch(`http://localhost:8080/api/v1/teacher/getcoursesbyteacherid/${teacherID}`)
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching student courses:', error));
            console.log("courses fetched");

        // Fetch student's projects
        fetch(`http://localhost:8080/api/v1/teacher/getdepartmentbyteacherid/${teacherID}`)
            .then(response => response.json())
            .then(data => {
                setDepartment(data);
                setIsDataFetched(true);
            })
            .catch(error => console.error('Error fetching teachers department:', error));
            console.log("departments fetched");*/

            Promise.all([
                fetch(`http://localhost:8080/api/v1/teacher/getcoursesbyteacherid/${teacherID}`).then(response => response.json()),
                fetch(`http://localhost:8080/api/v1/teacher/getdepartmentbyteacherid/${teacherID}`).then(response => response.json()),
                fetch(`http://localhost:8080/api/v1/teacher/getteacher/${teacherID}`).then(response => response.json())
            ])
                .then(([coursesData, departmentData,teacherData]) => {
                    setCourses(coursesData);
                    setDepartment(departmentData);
                    setTeacherInfo(teacherData);

                    console.log("all data fetched");

                    setIsDataFetched(true);
                })
                .catch(error => console.error('Error fetching data:', error));
    };

    const goback = () => {
        setIsDataFetched(false);
        setTeacherID('');
    };

    return (
        <Card variant='outlined'>
            <div>
                {!isDataFetched ? (
                    <div>
                        <Box display="flex" justifyContent="center" alignItems="center" height={50}>
                        <h1>Search a Lecturer</h1>
                        </Box>

                        <br/>

                        <Box display="flex" justifyContent="center" alignItems="center" paddingBottom={2}>
                            
                            <TextField
                            id="outlined-basic"
                            label="Enter lecturer ID"
                            variant="outlined"
                            autoComplete='off'
                            value={teacherID}
                            onChange={e => setTeacherID(e.target.value)}
                            //autoComplete='off'
                            style={{marginRight: '10px',width:'300px'}}
                            />
                            
                            <Button variant="contained" color="primary" onClick={fetchStudentData}>
                                SEARCH
                            </Button>
                        </Box>

                        <Box display="flex" justifyContent="right" alignItems="right" height={40}  mr={5} mb={4}>
                            <Link to="/allteachers"><h3>View All Lecturers</h3></Link>
                        </Box>

                    </div>
                ) : (
                    <div>
                        <Container display="flex" justifyContent="center" alignItems="center">
                        <h2 style={{textAlign:"center"}}>{teacherInfo.teacherName} </h2>
                            
                            <p><b>Lecturer ID:</b> {teacherInfo.teacherID}</p>
                            <p><b>Name:</b> {teacherInfo.teacherName}</p>
                            <p><b>Assigned Deparment ID:</b> {department.departmentID}</p>
                            <p><b>Department Name:</b> {department.departmentName}</p>
                        </Container>

                        <br />

                        <Container>
                        <h3 style={{textAlign:'center'}}>Assigned Courses for {teacherInfo.teacherName}</h3>

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

                        <Container>
                            <Button variant="contained" color="primary" onClick={goback}>
                                Go Back
                            </Button>
                        </Container>

                        <br />
                        
                    </div>
                )}
            </div>
        </Card>
    );
}

export default LectureDetails;
