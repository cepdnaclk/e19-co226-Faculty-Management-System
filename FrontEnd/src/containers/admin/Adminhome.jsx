import React from 'react';
import './Admin.css';
import { Container, Paper, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Clock from "../../components/Clock.jsx"
import { useState, useEffect } from 'react';
import facultyImage from '../../assets/avatars/bg.jpg';


const Home = () => {
  const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto' };

  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  

    useEffect(() => {
        // Fetch student count from the backend
        fetch('http://localhost:8080/api/v1/student/getstudentcount')
            .then(response => response.json())
            .then(data => setStudentCount(data))
            .catch(error => console.error('Error fetching student count:', error));
    }, [studentCount]);

    useEffect(() => {
        // Fetch teacher count from the backend
        fetch('http://localhost:8080/api/v1/teacher/getteachercount')
            .then(response => response.json())
            .then(data => setTeacherCount(data))
            .catch(error => console.error('Error fetching teacher count:', error));
    }, [teacherCount]);

    useEffect(() => {
        // Fetch student count from the backend
        fetch('http://localhost:8080/api/v1/project/getprojectcount')
            .then(response => response.json())
            .then(data => setProjectCount(data))
            .catch(error => console.error('Error fetching project count:', error));
    }, [projectCount]);

  return (

    <Container>
            <Paper elevation={1} style={paperStyle}>

                    <div className="container">
                <div className="box">
                    <h2>Student Count</h2>
                    <h3>{studentCount}</h3>
                </div>
                <div className="box">
                    <h2>Lecturer Count</h2>
                    <h3>{teacherCount}</h3>
                </div>
                <div className="box">
                    <h2>Ongoing Project Count</h2>
                    <h3>{projectCount}</h3>
                </div>
                <div>
                    <Clock/>
                </div>
                {/* <div></div> */}
                </div>
                <br />
                
                <div className="bottom-image">
                <img
                src= {facultyImage} 
                alt="Bottom Image"
                width="100%" 
                />
    
                </div>
            </Paper>
    </Container>
  );
};


export default Home;