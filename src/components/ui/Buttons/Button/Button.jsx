import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, icon, isActive, onClick }) => {
  return (
    <MuiButton 
    variant='contained'
    endIcon={icon}
    onClick={onClick}
    sx={{
      boxShadow: "none",
      textTransform: "none",
      backgroundColor: isActive ? "#F72585" : "#fff",
      fontWeight: 500,
      fontSize: 16,
      p: "8.5px 20px",
      color: isActive ? "#fff" : "#aaaaaa",
      fontFamily: "Inter",
      "&:hover": {
        backgroundColor: isActive ? "#F72585" : "#fff",
        color: isActive ? "#fff" : "#F72585",
        boxShadow: "none"
      }
    }}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
