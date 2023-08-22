import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import {useNic} from "../../components/NicContext.jsx";
import LectureSearch from "../../components/LectureSearch.jsx"

export default function ReportDisease() {

    const { nic } = useNic(); // Get the nic value from context

    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto' };
    const [name, setName] = useState('');
    const [teacherid, setTeacherID] = useState('');
    const [departmentid, setDepartmentID] = useState('');
    const [caurse1, setCaurse1] = useState('');
    const [caurse2, setCaurse2] = useState('');

    const handleSubmit = async () => {
        const formData = {
            name: name,
            teacherID: teacherid,
            departmentID: departmentid,
            course1ID: caurse1,
            course2ID: caurse2
        };
    
        try {
            const response = await fetch('http://localhost:8080/api/v1/teacher/saveteacher', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Teacher added successfully!');
                // Reset form fields after successful submission
                setName('');
                setTeacherID('');
                setDepartmentID('');
                setCaurse1('');
                setCaurse2('');
            } else {
                console.error('Error adding teacher:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding teacher:', error);
        }
    };


    return (
        <Container>

                <div>
                    <LectureSearch/>
                </div>

            <Paper elevation={3} style={paperStyle}>
                <Box display="flex" justifyContent="center" alignItems="center" height={50}>
                    <h1>Add a Lecturer</h1>
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h3>Enter Lecturer's details</h3>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth={true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                    id="outlined-basic"
                    label="Lecturer ID"
                    // label="Teacher ID"
                    variant="outlined"
                    fullWidth={true}
                    value={teacherid}
                    onChange={(e) => setTeacherID(e.target.value)}
                />
                    <TextField
                        id="outlined-basic"
                        label="Department ID"
                        variant="outlined"
                        fullWidth={true}
                        value={departmentid}
                        onChange={(e) => setDepartmentID(e.target.value)}
                    />
                    <TextField
                    id="outlined-basic"
                    label="Course 1"
                    variant="outlined"
                    fullWidth={true}
                    value={caurse1}
                    onChange={(e) => setCaurse1(e.target.value)}
                />

                    <TextField
                        id="outlined-basic"
                        label="Course 2"
                        variant="outlined"
                        fullWidth={true}
                        value={caurse2}
                        onChange={(e) => setCaurse2(e.target.value)}
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
