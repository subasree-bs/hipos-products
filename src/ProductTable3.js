import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Button, Container, Grid } from "@mui/material";
import "./styles.css";
import CustomizedDialogs from "./Modal";
import {
  FaFileCsv,
  FaPrint,
  FaFilePdf,
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";

function createData(
  sr_sku,
  sr_product,
  sr_location,
  sr_unitprice,
  sr_currentstock,
  sr_currentstock_pp,
  sr_currentstock_sp,
  sr_potentialprofit,
  sr_totalunitsold,
  sr_totalunittransferred,
  sr_totalunitadjusted
) {
  return {
    sr_sku,
    sr_product,
    sr_location,
    sr_unitprice,
    sr_currentstock,
    sr_currentstock_pp,
    sr_currentstock_sp,
    sr_potentialprofit,
    sr_totalunitsold,
    sr_totalunittransferred,
    sr_totalunitadjusted,
  };
}

const rows = [
  // createData(
  //   "Frozen yoghurt",
  //   159,
  //   6.0,
  //   24,
  //   4.0,
  //   "Frozen yoghurt",
  //   159,
  //   6.0,
  //   24,
  //   4.0,
  //   78
  // ),
  // createData(
  //   "Ice cream sandwich",
  //   237,
  //   9.0,
  //   37,
  //   4.3,
  //   "Ice cream sandwich",
  //   237,
  //   9.0,
  //   37,
  //   4.3,
  //   79
  // ),
];

export default function CustomizedTables() {
  $(document).ready(function () {
    setTimeout(function () {
      $("#example2").DataTable({
        language: { search: "", searchPlaceholder: "Search..." },
        lengthMenu: [25, 50, 100, 200, 500, 1000],
        paging: true,
      });
    }, 1000);
  });
  return (
    <TableContainer component={Paper} sx={{ padding: 3 }}>
      <Grid
        container
        sx={{
          // marginTop: "30px",
          justifyContent: "center",
        }}
      >
        <Grid>
          <Button className="users_btngrp">
            <FaFileCsv />
            &ensp;Export to CSV
          </Button>
          <Button className="users_btngrp">
            <AiFillFileExcel />
            &ensp;Export to Excel
          </Button>
          <Button className="users_btngrp">
            <FaPrint />
            &ensp;Print
          </Button>
          <Button className="users_btngrp">
            <FaFilePdf />
            &ensp;Export to PDF
          </Button>
        </Grid>
      </Grid>
      <Table id="example2" sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              SKU
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Product
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Location
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px", width: 180 }}>
              Unit Price
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Current Stock
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Current Stock Value (By purchase price)
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Current Stock Value (By sale price)
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Potential Profit
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Total Unit Sold
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Total Unit Tranferred
            </TableCell>
            <TableCell sx={{ fontWeight: "600", fontSize: "14px" }}>
              Total Unit Adjusted
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.sr_sku}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sr_sku}
              </TableCell>
              <TableCell>{row.sr_product}</TableCell>
              <TableCell>{row.sr_location}</TableCell>
              <TableCell>
                {row.sr_unitprice}
                <CustomizedDialogs />
              </TableCell>
              <TableCell>{row.sr_currentstock}</TableCell>
              <TableCell>{row.sr_currentstock_pp}</TableCell>
              <TableCell>{row.sr_currentstock_sp}</TableCell>
              <TableCell>{row.sr_potentialprofit}</TableCell>
              <TableCell>{row.sr_totalunitsold}</TableCell>
              <TableCell>{row.sr_totalunittransferred}</TableCell>
              <TableCell>{row.sr_totalunitadjusted}</TableCell>
            </TableRow>
          ))}
          {/* <TableRow className="table2_total">
            <TableCell
              colSpan={4}
              align="center"
              sx={{ fontWeight: 700, fontSize: 18, color: "black" }}
            >
              Total:{" "}
            </TableCell>
            <TableCell sx={{ color: "black", fontSize: 16 }}>18.00</TableCell>
            <TableCell sx={{ color: "black", fontSize: 16 }}>
              ₹ 30,078.16
            </TableCell>
            <TableCell sx={{ color: "black", fontSize: 16 }}>
              ₹ 46,687.50
            </TableCell>
            <TableCell sx={{ color: "black", fontSize: 16 }}>
              ₹ 16,609.34
            </TableCell>
            <TableCell sx={{ color: "black", fontSize: 16 }}>13.00</TableCell>
            <TableCell sx={{ color: "black", fontSize: 16 }}>0.00</TableCell>
            <TableCell sx={{ color: "black", fontSize: 16 }}>0.00</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
