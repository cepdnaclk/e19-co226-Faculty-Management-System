import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Typography
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import loginImage from '../assets/avatars/logo.jpg';

const Home = () => {
    const containerStyle = {
        // backgroundImage: `url(${backgroundImage})`,
        padding: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '100px',
        boxShadow: '1px 1px 10px rgba(0.1, 0.1, 0.9, 0.8)',
        
    };
    // const typographyStyle = {
    //     fontFamily: 'Impact, sans-serif', // Change the font here
    // };

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    

    const expectedUserName = "admin";
    const expectedPassword = "dog";

    const expectedUserName2 = "e19001";
    const expectedPassword2 = "cat";

    const handleSignIn = async () => {
        if (expectedUserName === userName && expectedPassword === password){
            navigate(`/adminhome`);
        }
        else{
            alert("User name or Password is incorect")
            navigate(`/`);
        }
    };
        const handleSignIn2 = async () => {
        if (expectedUserName2 === userName && expectedPassword2 === password){
            navigate(`/studenthome`);
        }
        else{
            alert("User name or Password is incorect")
            navigate(`/`);
        }
    };


    return (
        <Container style={containerStyle}>
            <Typography mt={3} variant="h3" align="center" color="text.primary" fontFamily="Gill Sans" >
                <br /><br />
                FACULTY MANAGEMENT SYSTEM
            </Typography>
            <Box mt={2}>
                <TextField
                    label="User Name / Enrollment Number"
                    fullWidth
                    margin="normal"
                    value={userName}
                    autoComplete='off'
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    autoComplete='off'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <Box mt={2} >
                
                    <Button variant="contained"  color="primary" size="large" fullWidth onClick={handleSignIn}>
                        Sign In as Admin
                    </Button>
                    <br />
                    <br />
                    <Button variant="contained"  color="primary" size="large" fullWidth onClick={handleSignIn2}>
                        Sign In as a Student
                    </Button>
                    
                </Box>
            </Box>
            <div>
            <img src={loginImage} alt="Student Management System" width="300" height="300" style={{ marginTop: '0px' }} />

            </div>
            
        </Container>
    );
};

export default Home;
