import React, { useState } from 'react';
import { TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Username: ${username}, Password: ${password}, User Type: ${userType}`);
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

  const StyledRadioGroup = styled(RadioGroup)({
    flexDirection: 'row',
    gap: '20px',
  });

  const StyledFormControlLabel = styled(FormControlLabel)({
    '& .MuiFormControlLabel-label': {
      color: '#7a82eb',
    },
  });

  const StyledButton = styled(Button)({
    background: '#7a82eb',
    color: 'white',
    '&:hover': {
      background: '#4f5bd5',
    },
  });

  return (
    <StyledBox>
      <StyledForm component="form" onSubmit={handleSubmit}>
        <Typography padding={2} variant="h4" align="center" color="primary">Sign Up</Typography>

        <StyledTextField label="Name" variant="outlined" value={name} onChange={handleNameChange} />
        <StyledTextField label="Username" variant="outlined" value={username} onChange={handleUsernameChange} />
        <StyledTextField label="Password" variant="outlined" type="password" value={password} onChange={handlePasswordChange} />

        <StyledRadioGroup aria-label="user-type" name="user-type" value={userType} onChange={handleUserTypeChange}>
          <StyledFormControlLabel value="STUDENT" control={<Radio />} label="Student" />
          <StyledFormControlLabel value="TEACHER" control={<Radio />} label="Teacher" />
        </StyledRadioGroup>
        
        <StyledButton variant="contained" type="submit">Sign Up</StyledButton>
      </StyledForm>
    </StyledBox>
  );
};

export default SignUpPage;