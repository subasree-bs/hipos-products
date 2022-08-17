import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  FormControl,
  Paper,
  TableBody,
  Button,
} from "@mui/material";

export default function Table2() {
  return (
    <TableContainer component={Paper} fullWidth>
      <Table
        aria-label="simple table "
        sx={{ borderBlock: "1px solid #B97FD0" }}
        fullWidth
      >
        <TableHead fullWidth>
          <TableRow fullWidth></TableRow>
        </TableHead>
        <TableBody fullWidth></TableBody>
      </Table>
    </TableContainer>
  );
}
