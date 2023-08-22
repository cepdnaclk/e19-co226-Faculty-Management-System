import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Paper, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function Department() {

    const paperStyle = {
        padding: '20px',
        maxWidth: '1000px', 
        margin: '20px auto',
      };
    const paragraphStyle = {
        textAlign: 'justify',
    };

      
    return (
        <Container>

            <Paper elevation={3} style={paperStyle} >
                <Box display="flex" justifyContent="center" alignItems="center" height={80} fontFamily="Gill Sans" fontSize={"22px"} color={"#000033"}>
                    <h1>Department Details of the University</h1>
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
                <div style={paragraphStyle}>
                    <p>The Faculty of Engineering comprises several diverse departments, 
                        each dedicated to a specific branch of engineering. These departments serve as focal points
                         for in-depth education and research within their respective fields.</p>
                </div>

                    <h3>Department of Chemical and processing Engineering - CP</h3>
                    
                    <div style={paragraphStyle}> 
                   <p>The department is a hub of innovation and expertise, where we focus on the dynamic and multifaceted field of chemical engineering and its applications. 
                    Our mission is to educate and empower future engineers with the knowledge and skills needed to tackle complex challenges in various industries.
                    In the Department of Chemical and Processing Engineering, we explore the principles of chemical processes, reactions, and transformations, 
                    with an emphasis on designing and optimizing industrial processes. Our students gain a comprehensive understanding of the 
                    underlying science and engineering principles that govern chemical and material transformations.
                    </p></div>
        
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
                    <br />
                    <h3>Department of Civil Engineering - CE</h3>
                    
                    <div style={paragraphStyle}><p>The Department of Civil Engineering is a vital component within educational institutions and engineering organizations. 
                        It focuses on the design, construction, and maintenance of the physical infrastructure that shapes our modern world. 
                        Civil engineers play a pivotal role in creating and maintaining structures and systems that support society's needs, from buildings and bridges to transportation networks and water supply systems.
                        <br />
                    In this department, students are exposed to a wide array of subjects that encompass various aspects of civil engineering. 
                    They delve into areas like structural engineering, where they learn to design safe and resilient buildings and bridges, as well as geotechnical engineering, which deals with the behavior of soil and foundations to ensure stable construction. 
                    Additionally, students explore transportation engineering to develop efficient and sustainable transportation networks, and they study environmental engineering to address issues related to water quality, waste management, and sustainable development.
                    </p></div>
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
                    <br />

                    <h3>Department of Computer Engineering - CO</h3>
                    
                    <div style={paragraphStyle}><p>The Department of Computer Engineering is a dynamic hub within the realm of engineering and technology. It focuses on the convergence of computer science and electrical engineering, 
                        blending the theoretical foundations of algorithms, programming languages, and software development with the practical aspects of hardware design, digital systems, and computer architecture. 
                        Students in this department gain a profound understanding of the entire computing ecosystem, from microprocessors to software applications, and from embedded systems to cloud computing. 
                        They acquire skills to create innovative software solutions, design efficient and reliable hardware components, and seamlessly integrate both to drive technological innovation. 
                        With a strong emphasis on emerging technologies such as artificial intelligence, machine learning, and cybersecurity, the Department of Computer Engineering nurtures the talents that power the digital age and shape the future of technology.</p>
                  </div>  
                  <ul>
                        <li>CO221 - Digital Logic and Design</li>
                        <li>CO224 - Computer Architecture</li>
                        <li>CO332 - Microprocessor Systems</li>
                        <li>CO443 - Embedded Systems Design</li>
                        <li>CO554 - Operating Systems</li>
                        <li>CO665 - Advanced Computer Networks</li>
                    </ul>
                    <br />
                    <h3>Department of Electrical and Electronics Engineering - EE</h3>
                  
                    <div style={paragraphStyle}><p>The Department of Electrical and Electronics Engineering stands at the forefront of technological innovation. It delves into the intricate world of electrical systems, electronic devices, and information technology. 
                        With a focus on the principles of circuitry, electromagnetism, and digital communication, students in this department learn to design, analyze, and optimize a wide array of electrical and electronic systems. From power generation and distribution to designing cutting-edge 
                        electronic devices, students gain a comprehensive understanding of the underpinnings of modern technology. This department also explores emerging fields such as renewable energy, wireless communication, and IoT (Internet of Things), preparing students to address the evolving needs of our interconnected world. 
                        In essence, the Department of Electrical and Electronics Engineering shapes the foundations of our digitally powered present and future.</p>
                   </div> 
                   <ul>
                        <li>EE121 - Circuit Analysis</li>
                        <li>EE242 - Electronics</li>
                        <li>EE353 - Power Systems</li>
                        <li>EE464 - Control Systems</li>
                        <li>EE575 - Renewable Energy Systems</li>
                        <li>EE686 - Electric Machines and Drives</li>
                    </ul>
                    <br />

                    <h3>Department of Mechanical Engineering - ME</h3>
                 
                   <div style={paragraphStyle}> <p>The Department of Mechanical Engineering stands as a cornerstone of innovation in engineering. It centers on the design, analysis, and manufacturing of mechanical systems that power our modern world. From the smallest intricate mechanisms to colossal structures, mechanical engineers bridge the gap between theoretical principles and real-world applications. 
                        This department encompasses a wide spectrum of subjects, including thermodynamics, fluid mechanics, materials science, and robotics. Students in this field learn to design efficient and robust machines, delve into energy conversion processes, and explore the dynamics of moving systems. With a strong emphasis on interdisciplinary collaboration and hands-on experience, 
                        the Department of Mechanical Engineering cultivates skilled professionals capable of shaping industries ranging from aerospace to renewable energy, and from automotive to biomedical engineering</p>
                   </div> 
                   <ul>
                        <li>ME131 - Engineering Mechanics</li>
                        <li>ME252 - Thermodynamics</li>
                        <li>ME363 - Fluid Mechanics</li>
                        <li>ME474 - Heat Transfer</li>
                        <li>ME585 - Mechanical Design</li>
                        <li>ME696 - Advanced Robotics</li>
                    </ul>
                    <br />
                    <h3>Department of Manufacturing and industrial Engineering - MF</h3>

                   <div style={paragraphStyle}> <p>The Department of Manufacturing and Industrial Engineering holds the key to optimizing production processes and enhancing operational efficiency across various industries. This department focuses on the systematic design, 
                        analysis, and improvement of manufacturing systems and industrial operations. Students delve into subjects like process optimization, supply chain management, and lean manufacturing principles. They learn how to streamline processes, reduce waste, and increase productivity. 
                        With a blend of engineering, management, and technology, this field equips students to tackle real-world challenges in areas such as production planning, quality control, and logistics. 
                        As industries seek continuous improvement, professionals from this department play a pivotal role in driving innovation, cost-effectiveness, and sustainability throughout the manufacturing and industrial landscape.</p>
                   </div> 
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



