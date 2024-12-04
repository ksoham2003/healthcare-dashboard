import React from "react";
import { List, ListItem, ListItemText, Avatar } from "@mui/material";

const patients = [
  { name: "Emily Williams", gender: "Female", age: 18 },
  { name: "Ryan Johnson", gender: "Male", age: 45 },
  { name: "Jessica Taylor", gender: "Female", age: 28 },
];

const Sidebar = () => (
  <List sx={{ width: "250px", height: "100vh", bgcolor: "background.paper" }}>
    {patients.map((patient, index) => (
      <ListItem key={index} button>
        <Avatar sx={{ mr: 2 }}>{patient.name[0]}</Avatar>
        <ListItemText
          primary={patient.name}
          secondary={`${patient.gender}, Age: ${patient.age}`}
        />
      </ListItem>
    ))}
  </List>
);

export default Sidebar;
