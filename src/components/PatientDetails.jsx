import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const PatientDetails = () => (
  <Card>
    <CardContent>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar sx={{ width: 100, height: 100, mb: 2 }} />
        <Typography variant="h6">Jessica Taylor</Typography>
        <Typography variant="body2">Date of Birth: August 23, 1996</Typography>
        <Typography variant="body2">Gender: Female</Typography>
        <Typography variant="body2">Contact: (415) 555-1234</Typography>
      </Box>
    </CardContent>
  </Card>
);

export default PatientDetails;
