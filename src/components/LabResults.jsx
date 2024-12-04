import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";


const labResults = ["Blood Tests", "CT Scans", "X-Rays", "Urine Test"];

const LabResults = () => (
  <List>
    {labResults.map((result, index) => (
      <ListItem key={index}>
        <ListItemText primary={result} />
        <IconButton>
          <DownloadIcon />
        </IconButton>
      </ListItem>
    ))}
  </List>
);

export default LabResults;
