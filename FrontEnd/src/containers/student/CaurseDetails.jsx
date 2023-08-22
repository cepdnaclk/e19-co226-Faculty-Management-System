import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Paper, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function Caurse() {

    const paperStyle = {
        padding: '20px',
        maxWidth: '1000px', 
        margin: '20px auto',
      };

      
    return (
        <Container>

            <Paper elevation={3} style={paperStyle} >
            {/* <img src="/src/assets/avatars/cover.jpg" alt="Your Alt Text" style={{ width: '100%', height: 'auto' }}  /> */}
                <Box display="flex" justifyContent="center" alignItems="center" height={80} fontFamily="Gill Sans" fontSize={"22px"} color={"#000033"}>
                    <h1>Course Details of the University</h1>
                </Box>
                <Box
                    color={'#00004d'}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: 'ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h3>Department of Chemical and processing Engineering - CP</h3>
        
                    <ul>
                        <li>CP01 - Thermodynamics</li>
                        <li>CP02 - Chemistry Fundamentals</li>
                        <li>CP03 - Fluid Mechanics</li>
                        <li>CP04 - Mass Transfer</li>
                        <li>CP05 - Heat Transfer</li>
                        <li>CP06 - Chemical Reaction Engineering</li>
                        <li>CP07 - Process Control</li>
                        <li>CP08 - Process Design and Simulation</li>
                        <li>CP09 - Unit Operations</li>
                        <li>CP10 - Safety and Environmental Engineering</li>
                    </ul>

                    <h3>Department of Civil Engineering - CE</h3>
                    <ul>
                        <li>CE01 - Geometrics</li>
                        <li>CE02 - Hydrology</li>
                        <li>CE03 - Structural Analysis</li>
                        <li>CE04 - Building Construction</li>
                        <li>CE05 - Laboratory</li>
                        <li>CE06 - Surveying</li>
                        <li>CE07 - Fluid Mechanics</li>
                        <li>CE08 - Mechanics of Materials</li>
                        <li>CE09 - Electrical Engineering</li>
                        <li>CE10 - Calculus</li>
                    </ul>



                    <h3>Department of Computer Engineering - CO</h3>
                    <ul>
                        <li>CO221 - Digital Logic and Design</li>
                        <li>CO224 - Computer Architecture</li>
                        <li>CO332 - Microprocessor Systems</li>
                        <li>CO443 - Embedded Systems Design</li>
                        <li>CO554 - Operating Systems</li>
                        <li>CO665 - Advanced Computer Networks</li>
                    </ul>
                    <h3>Department of Electrical and Electronics Engineering - EE</h3>
                    <ul>
                        <li>EE121 - Circuit Analysis</li>
                        <li>EE242 - Electronics</li>
                        <li>EE353 - Power Systems</li>
                        <li>EE464 - Control Systems</li>
                        <li>EE575 - Renewable Energy Systems</li>
                        <li>EE686 - Electric Machines and Drives</li>
                    </ul>
                    
                    <h3>Department of Mechanical Engineering -ME</h3>
                    <ul>
                        <li>ME131 - Engineering Mechanics</li>
                        <li>ME252 - Thermodynamics</li>
                        <li>ME363 - Fluid Mechanics</li>
                        <li>ME474 - Heat Transfer</li>
                        <li>ME585 - Mechanical Design</li>
                        <li>ME696 - Advanced Robotics</li>
                    </ul>
                    <h3>Department of Manufacturing and industrial Engineering -MF</h3>
                    <ul>
                        <li>MFE112 - Introduction to Manufacturing Processes</li>
                        <li>MFE223 - Computer-Aided Design and Manufacturing</li>
                        <li>MFE334 - Production Planning and Control</li>
                        <li>MFE445 - Quality Engineering</li>
                        <li>MFE556 - Advanced Manufacturing Technologies</li>
                        <li>MFE667 - Supply Chain Management</li>
                    </ul>


                </Box>
            </Paper>



        </Container>

    );
}



