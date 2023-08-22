import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import {useNic} from "../../components/NicContext.jsx";
import StudentCard from "../../components/admin/StudentCard.jsx";
import StudentSearch from "../../components/StudentSearch.jsx";

export default function StudentDetails() {

    const studentDetails = {
        firstName: '',
        lastName: 'Doe',
        enrollmentNumber: '123456',
        sex: 'Male',
        studentClass: '10th Grade',
        advisor: 'Ms. Smith',
        address: '123 Main Street, City, Country',
      };
    

    const { nic } = useNic(); // Get the nic value from context

    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto' };
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [enroll, setEnroll] = useState('');
    const [sex, setSex] = useState('');
    const [zScore, setZScore] = useState('');
    const [adress, setAdress] = useState('');
    const [gname, setgName] = useState('');
    const [number, setNumber] = useState('');
    const [courseID1, setCourseID1] = useState('');
    const [courseID2, setCourseID2] = useState('');
    const [courseID3, setCourseID3] = useState('');
    const [projectID1, setProjectID1] = useState('');
    const [projectID2, setProjectID2] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = () => {
        // Prepare the data object to send in the POST request
        const data = {
            enrollmentNo: enroll,
            firstName: fname,
            lastName: lname,
            zscore: zScore,
            sex: sex,
            address: adress,
            guardianName: gname,
            guardianTP: number,
            project1ID: projectID1,
            project2ID: projectID2,
            course1ID: courseID1,
            course2ID: courseID2,
            course3ID: courseID3,
        };



        // Make the POST request using fetch
        fetch('http://localhost:8080/api/v1/student/savestudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to submit the form.');
                }
                return response.json();
            })
            .then((responseData) => {
                // Handle the response from the backend if needed
                console.log('Form submitted successfully:', responseData);
                // Add any logic you need here after the form is successfully submitted
                setEnroll('');
                setfName('');
                setlName('');
                setAdress('');
                setSex('');
                setZScore('');
                setgName('');
                setNumber('');
                setCourseID1('');
                setCourseID2('');
                setCourseID3('');
                setProjectID1('');
                setProjectID2('');
                setPassword('');

                alert("Student saved Successfully")
            })
            .catch((error) => {
                // Handle errors
                console.error('Error submitting the form:', error);
                // Add any error handling logic here if needed
            });
    };



    return (
        
        <Container>
               {/*<div>
                <StudentCard {...studentDetails} />
                </div>*/}

                <div>
                    <StudentSearch/>
                </div>
                

            {/* Nic: {nic} */}  
            {/* //meka comment kara */}
            <Paper elevation={3} style={paperStyle}>
                <Box display="flex" justifyContent="center" alignItems="center" height={50}>
                    <h1>Add a Student</h1>
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h3>Enter Student Details</h3>

                    <TextField
                        id="outlined-basic"
                        label="Enrollment number"
                        variant="outlined"
                        fullWidth={true}
                        value={enroll}
                        onChange={(e) => setEnroll(e.target.value)}
                    />

                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        fullWidth={true}
                        value={fname}
                        onChange={(e) => setfName(e.target.value)}
                    />
                    <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    fullWidth={true}
                    value={lname}
                    onChange={(e) => setlName(e.target.value)}
                    />
                    
                    <TextField
                    id="outlined-basic"
                    label="Sex"
                    variant="outlined"
                    fullWidth={true}
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Z-score"
                        variant="outlined"
                        fullWidth={true}
                        value={zScore}
                        onChange={(e) => setZScore(e.target.value)}
                    />
                   
                    <TextField
                        id="outlined-basic"
                        label="Adress"
                        variant="outlined"
                        multiline
                        //fullWidth={true}
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                    
                    {/* <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    fullWidth={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    /> */}
                    
                    <h3>Enter Guardian details</h3>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth={true}
                        value={gname}
                        onChange={(e) => setgName(e.target.value)}
                    />
                    <TextField
                    id="outlined-basic"
                    label="Telephone Number"
                    variant="outlined"
                    fullWidth={true}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    />

                    <h3>Assign Course IDs</h3>

                    <TextField
                    id="outlined-basic"
                    label="CourseID 1"
                    variant="outlined"
                    fullWidth={true}
                    value={courseID1}
                    onChange={(e) => setCourseID1(e.target.value)}
                    />

                    <TextField
                    id="outlined-basic"
                    label="CourseID 2"
                    variant="outlined"
                    fullWidth={true}
                    value={courseID2}
                    onChange={(e) => setCourseID2(e.target.value)}
                    />

                    <TextField
                    id="outlined-basic"
                    label="CourseID 3"
                    variant="outlined"
                    fullWidth={true}
                    value={courseID3}
                    onChange={(e) => setCourseID3(e.target.value)}
                    />

                    <h3>Assign Project IDs</h3>

                    <TextField
                    id="outlined-basic"
                    label="ProjectID 1"
                    variant="outlined"
                    fullWidth={true}
                    value={projectID1}
                    onChange={(e) => setProjectID1(e.target.value)}
                    />

                    <TextField
                    id="outlined-basic"
                    label="ProjectID 2"
                    variant="outlined"
                    fullWidth={true}
                    value={projectID2}
                    onChange={(e) => setProjectID2(e.target.value)}
                    />

                    <br />
                    <Box display="flex" justifyContent="left" alignItems="center" height={50} margin="auto">
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            SUBMIT
                        </Button>
                    </Box>
                </Box>
            </Paper>

 
        </Container>

    );
}
