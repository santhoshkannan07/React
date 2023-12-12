import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Typography>Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={plus}>
        +
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" color="secondary" onClick={minus}>
        -
      </Button>
    </div>
  );
};

export default Counter;
