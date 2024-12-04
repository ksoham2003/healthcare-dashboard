import React from "react";
import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";

const patients = [
  { name: "Emily Williams", gender: "Female", age: 18, image: "/img/Layer 8.png" },
  { name: "Ryan Johnson", gender: "Male", age: 45, image: "/img/Layer 1.png" },
  { name: "Brandon Mitchell", gender: "Male", age: 36, image: "/img/Layer 8.png" },
  { name: "Jessica Taylor", gender: "Female", age: 28, image: "/img/Layer 8.png" },
  { name: "Samantha Johnson", gender: "Female", age: 56, image: "/img/Layer 8.png" },
  { name: "Ashley Martinez", gender: "Female", age: 54, image: "/img/Layer 8.png" },
  { name: "Olivia Brown", gender: "Female", age: 32, image: "/img/Layer 8.png" },
  { name: "Tyler Davis", gender: "Male", age: 19, image: "/img/Layer 8.png" },
  { name: "Kevin Anderson", gender: "Male", age: 30, image: "/img/Layer 8.png" },
  { name: "Dylan Thompson", gender: "Male", age: 36, image: "/img/Layer 8.png" },
  { name: "Nathan Evans", gender: "Male", age: 58, image: "/img/Layer 8.png" },
  { name: "Mike Nolan", gender: "Male", age: 31, image: "/img/Layer 8.png" }
];

const Sidebar = () => (
  <Box
    sx={{
      position: "fixed", // Fix the sidebar to prevent it from moving
      top: "122px",
      left: "18px",
      width: "367px",
      height: "1054px",
      bgcolor: "#FFFFFF",
      borderRadius: "16px",
      overflowY: "auto", // Enable scrolling for long content
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Optional: Add subtle shadow
      padding: "16px",
    }}
  >
    {/* Header with "Patients" title and search icon */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#000",
        }}
      >
        Patients
      </Typography>
      <img
        src="/img/search_FILL0_wght300_GRAD0_opsz24.svg" // Path to your search icon in the public/img folder
        alt="Search"
        style={{
          width: "24px",
          height: "24px",
          cursor: "pointer", // Add interactivity hint
        }}
      />
    </Box>

    {/* List of patients */}
    <List sx={{ padding: 0 }}>
      {patients.map((patient, index) => (
        <ListItem
          key={index}
          button
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px", // Optional: Add spacing between items
            padding: "8px",
            borderRadius: "8px",
            ":hover": {
              backgroundColor: "#f0f0f0", // Optional: Highlight on hover
            },
          }}
        >
          <img
            src={patient.image}
            alt={patient.name}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "16px",
            }}
          />
          <ListItemText
            primary={patient.name}
            secondary={`${patient.gender}, Age: ${patient.age}`}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Sidebar;
