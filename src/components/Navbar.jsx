import React, { useState } from "react";
import { AppBar, Toolbar, Box, Menu, MenuItem, Typography, IconButton, Button } from "@mui/material"; // Importing necessary components

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Manage dropdown menu state
  const [activeTab, setActiveTab] = useState("Overview"); // Manage active tab state

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget); // Open menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close menu
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the clicked tab as active
  };

  // Object for mapping tabs to their corresponding logos
  const tabLogos = {
    Overview: "/img/home_FILL0_wght300_GRAD0_opsz24.svg",
    Patients: "/img/group_FILL0_wght300_GRAD0_opsz24.svg",
    Schedule: "/img/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
    Messages: "/img/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg",
    Transactions: "/img/credit_card_FILL0_wght300_GRAD0_opsz24.svg",
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        top: "18px", // Set top position
        height: "72px", // Set height
        backgroundColor: "#fff",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        borderRadius: "70px", // Apply border-radius to navbar
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        
        {/* Left Side: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/img/TestLogo.png" // Use the logo from public img folder
            alt="Tech.Care Logo"
            style={{
              width: "211px",
              height: "48px",
              background: "transparent url('/img/TestLogo.png') no-repeat padding-box",
              opacity: 1,
            }}
          />
        </Box>

        {/* Center: Navigation Links */}
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          {["Overview", "Patients", "Schedule", "Messages", "Transactions"].map((tab) => (
            <Button
              key={tab}
              onClick={() => handleTabClick(tab)}
              sx={{
                margin: "0 20px",
                cursor: "pointer",
                color: activeTab === tab ? "#fff" : "#000", // Active tab color set to black
                backgroundColor: activeTab === tab ? "#00bcd4" : "transparent", // Active tab background color
                borderRadius: "30px", // Rounded edges for the active tab
                padding: "5px 20px", // Padding inside the button
                transition: "all 0.3s ease", // Smooth transition for the background color
                ":hover": {
                  backgroundColor: "#00bcd4", // Hover effect for active tab
                  color: "#fff",
                },
                display: "flex",
                alignItems: "center", // Align text and logo in a row
              }}
            >
              {/* Move the logo to the left side of the text */}
              <img
                src={tabLogos[tab]} // Use the appropriate logo for each tab
                alt={tab}
                style={{
                  width: "20px", // Adjust size of the logo
                  height: "20px", // Adjust size of the logo
                  opacity: activeTab === tab ? 1 : 0.7, // Make logo more visible for active tab
                  transition: "opacity 0.3s ease", // Smooth opacity transition
                  marginRight: "8px", // Space between logo and text
                }}
              />
              <Typography variant="body1" sx={{ color: "#000" }}> {/* Set text color to black */}
                {tab}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* Right Side: Profile and Settings */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" onClick={handleMenu}>
            {/* Replace Avatar with Profile Image */}
            <img
              src="/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" // Use the profile image from public img folder
              alt="Profile"
              style={{
                width: "40px", // Adjust size of the profile image
                height: "40px", // Adjust size of the profile image
                borderRadius: "50%", // Make it round
              }}
            />
          </IconButton>

          <Box sx={{ margin: "0 10px", textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: "#000" }}> {/* Set text color to black */}
              Dr. Jose Simmons
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: "14px" }}>
              General Practitioner
            </Typography>
          </Box>
          
          <Box
            sx={{
              width: "1px", // Vertical line width
              height: "30px", // Vertical line height
              backgroundColor: "#ccc", // Line color
              marginLeft: "10px", // Space before the line
              marginRight: "10px", // Space after the line
            }}
          />

          {/* Setting and Menu Buttons */}
          <IconButton sx={{ marginLeft: "10px" }}>
            <img
              src="/img/settings_FILL0_wght300_GRAD0_opsz24.svg" // Use settings logo from public img folder
              alt="Settings"
              style={{
                width: "24px", // Adjust size of the settings logo
                height: "24px",
              }}
            />
          </IconButton>
          <IconButton sx={{ marginLeft: "10px" }}>
            <img
              src="/img/more_vert_FILL0_wght300_GRAD0_opsz24.svg" // Use menu logo from public img folder
              alt="Menu"
              style={{
                width: "24px", // Adjust size of the menu logo
                height: "24px",
              }}
            />
          </IconButton>

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
