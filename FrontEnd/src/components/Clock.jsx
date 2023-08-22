import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Typography variant="h4" component="div" gutterBottom>
      {time.toLocaleTimeString()}
    </Typography>
  );
};

export default Clock;
