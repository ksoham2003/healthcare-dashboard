import React from "react";
import { Box, CssBaseline, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import DiagnosisHistory from "./components/DiagnosisHistory";
import PatientDetails from "./components/PatientDetails";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box sx={{ display: "flex", flexGrow: 1 ,marginTop: "72px" }}>
        <CssBaseline />

        {/* Sidebar */}
        <Sidebar />

        {/* Main Body */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            {/* Left side: Diagnosis history and diagnostic list */}
            <Grid item xs={8}>
              <DiagnosisHistory />
              <DiagnosticList />
            </Grid>

            {/* Right side: Patient details and lab results */}
            <Grid item xs={4}>
              <PatientDetails />
              <LabResults />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
