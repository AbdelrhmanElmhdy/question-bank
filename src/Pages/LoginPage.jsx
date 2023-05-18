import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'rgb(240, 240, 240)',
  });

  const StyledForm = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    padding: '20px',
    borderRadius: '10px',
    background: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    width: "35%"
  });

  const StyledTextField = styled(TextField)({
    margin: 8,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#7a82eb',
      },
      '&:hover fieldset': {
        borderColor: '#7a82eb',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7a82eb',
      },
    },
  });

  const StyledButton = styled(Button)({
    margin: 6,
    background: '#7a82eb',
    color: 'white',
    '&:hover': {
      background: '#4f5bd5',
    },
  });

  return (
    <StyledBox>
      <StyledForm component="form" onSubmit={handleSubmit}>
        <Typography padding={2} variant="h4" align="center" color="primary">Login</Typography>

        <StyledTextField label="Username" variant="outlined" value={username} onChange={handleUsernameChange} />
        <StyledTextField label="Password" variant="outlined" type="password" value={password} onChange={handlePasswordChange} />
        
        <StyledButton variant="contained" type="submit">Login</StyledButton>
      </StyledForm>
    </StyledBox>
  );
};

export default LoginPage;