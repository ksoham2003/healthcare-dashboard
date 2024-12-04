import React from "react";
import { Box, CssBaseline, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import DiagnosisHistory from "./components/DiagnosisHistory"; // Import DiagnosisHistory component
import PatientDetails from "./components/PatientDetails"; // Import PatientDetails component
import DiagnosticList from "./components/DiagnosticList"; // Import DiagnosticList component
import LabResults from "./components/LabResults"; // Import LabResults component
import Navbar from "./components/Navbar"; // Import Navbar component

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box sx={{ display: "flex", flexGrow: 1, marginTop: "72px" }}>
        <CssBaseline />

        {/* Sidebar */}
        <Sidebar />

        {/* Main Body */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: "367px", // Offset content to the right of the sidebar
            overflowY: "auto", // Enable vertical scrolling for the main content
          }}
        >
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