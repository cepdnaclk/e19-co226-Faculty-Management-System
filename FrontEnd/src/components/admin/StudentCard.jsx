import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StudentCard = ({ firstName, lastName, enrollmentNumber, sex, studentClass, advisor, address }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Student Details
        </Typography>
        <Typography variant="body1">
          <strong>First Name:</strong> {firstName}
        </Typography>
        <Typography variant="body1">
          <strong>Last Name:</strong> {lastName}
        </Typography>
        <Typography variant="body1">
          <strong>Enrollment Number:</strong> {enrollmentNumber}
        </Typography>
        <Typography variant="body1">
          <strong>Sex:</strong> {sex}
        </Typography>
        <Typography variant="body1">
          <strong>Class:</strong> {studentClass}
        </Typography>
        <Typography variant="body1">
          <strong>Advisor:</strong> {advisor}
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> {address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
