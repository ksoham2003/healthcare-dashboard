import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Oct", systolic: 120, diastolic: 80 },
  { month: "Nov", systolic: 130, diastolic: 85 },
  { month: "Dec", systolic: 125, diastolic: 82 },
];

const DiagnosisHistory = () => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Diagnosis History
      </Typography>
      <LineChart width={400} height={200} data={data}>
        <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
        <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
        <Box>
          <Typography>Respiratory Rate</Typography>
          <Typography variant="h5">20 bpm</Typography>
        </Box>
        <Box>
          <Typography>Temperature</Typography>
          <Typography variant="h5">98.6°F</Typography>
        </Box>
        <Box>
          <Typography>Heart Rate</Typography>
          <Typography variant="h5">78 bpm</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default DiagnosisHistory;
