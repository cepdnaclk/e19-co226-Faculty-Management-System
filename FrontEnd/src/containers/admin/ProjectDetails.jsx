import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import {useNic} from "../../components/NicContext.jsx";
import { Link } from 'react-router-dom';

export default function Project() {

    const { nic } = useNic(); // Get the nic value from context

    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto' };
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    



    const handleSubmit = () => {
        // Prepare the data object to send in the POST request
        const data = {
            projectID: id,
            projectName: name,
            projectDescription: description,
            
        };

        // Make the POST request using fetch
        fetch('http://localhost:8080/api/v1/project/saveproject', {
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
                setID('');
                setName('');
                setDescription('');
                // Add any logic you need here after the form is successfully submitted
            })
            .catch((error) => {
                // Handle errors
                console.error('Error submitting the form:', error);
                // Add any error handling logic here if needed
            });
    };

    

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                


                <Box display="flex" justifyContent="center" alignItems="center" height={20}>
                    <h1>Add a project</h1>
                </Box>
                <br />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h3>Enter project details</h3>
                    <TextField
                        id="outlined-basic"
                        label="ProjectID"
                        variant="outlined"
                        fullWidth={true}
                        value={id}
                        onChange={(e) => setID(e.target.value)}
                    />
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
                        label="Description"
                        multiline
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    
                    <br />
                    <Box display="flex" justifyContent="left" alignItems="center" height={50} margin="auto">
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            SUBMIT
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="right" alignItems="right" height={20}  mr={5}>
                    <Link to="/allprojects"><h3>View All Projects</h3></Link>
                </Box>
            </Paper>


        </Container>

    );
}
