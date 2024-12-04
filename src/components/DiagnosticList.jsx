import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const diagnoses = [
  { problem: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
  { problem: "Type 2 Diabetes", description: "Insulin resistance", status: "Cured" },
];

const DiagnosticList = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Problem</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {diagnoses.map((row, index) => (
        <TableRow key={index}>
          <TableCell>{row.problem}</TableCell>
          <TableCell>{row.description}</TableCell>
          <TableCell>{row.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default DiagnosticList;
