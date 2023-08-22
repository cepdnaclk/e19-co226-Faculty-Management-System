import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import {useNic} from "../../components/NicContext.jsx";
import { Link } from 'react-router-dom';

export default function Project() {

    

    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto' };
    const [comment, setComment] = useState('');
    

    const handleSubmit = () => {
        // Prepare the data object to send in the POST request
        const data = {
            comment: comment,
            
            
        };

        // Make the POST request using fetch
        fetch('http://localhost:8080/api/v1/comment/savecomment', {
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
                alert("comment successfully saved")
                setComment('');
                
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
                    <h1>Welcome to Notification Centre</h1>
                </Box>
                <br />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h3>Enter Your Comment Here</h3>
                    <TextField
                    
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        fullWidth={true}
                        value={comment}
                        multiline
                        rows={4}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    {/* <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth={true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /> */}
                    {/* <TextField
                        id="outlined-basic"
                        label="Description"
                        multiline
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /> */}
                    
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
