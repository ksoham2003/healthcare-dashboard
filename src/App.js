import React from "react";
import { Box, CssBaseline, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import DiagnosisHistory from "./components/DiagnosisHistory";
import PatientDetails from "./components/PatientDetails";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Reset CSS baseline for consistent styling */}
      <CssBaseline />
      
      {/* Sidebar for patient navigation */}
      <Sidebar />

      {/* Main content */}
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
  );
}

export default App;
