import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Manage dropdown menu

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget); // Open menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close menu
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff", boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Side: Logo and Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
            Tech.Care
          </Typography>
        </Box>

        {/* Center: Navigation Links */}
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
          <Typography variant="body1" sx={{ margin: "0 20px", cursor: "pointer", color: "#1976d2" }}>
            Overview
          </Typography>
          <Typography variant="body1" sx={{ margin: "0 20px", cursor: "pointer", color: "#1976d2" }}>
            Patients
          </Typography>
          <Typography variant="body1" sx={{ margin: "0 20px", cursor: "pointer", color: "#1976d2" }}>
            Schedule
          </Typography>
          <Typography variant="body1" sx={{ margin: "0 20px", cursor: "pointer", color: "#1976d2" }}>
            Messages
          </Typography>
          <Typography variant="body1" sx={{ margin: "0 20px", cursor: "pointer", color: "#1976d2" }}>
            Transactions
          </Typography>
        </Box>

        {/* Right Side: Profile and Settings */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" onClick={handleMenu}>
            <Avatar sx={{ backgroundColor: "#1976d2", color: "#fff" }}>J</Avatar> {/* Replace with dynamic initial */}
          </IconButton>

          <Typography variant="body1" sx={{ margin: "0 10px", color: "#1976d2" }}>
            Dr. Jose Simmons
          </Typography>

          {/* Dropdown Menu for Settings */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
