import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { Grid, Container, Button } from "@mui/material";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

$(document).ready(function () {
  setTimeout(function () {
    $("#example2").DataTable({
      language: { search: "", searchPlaceholder: "Search..." },
      lengthMenu: [25, 50, 100, 200, 500, 1000],
      // overflow-X: true
    });
  }, 1000);
});

function createData(
  sku,
  product,
  location,
  upprice,
  currentstock,
  currentstockvaluep,
  currentstockvalues,
  potentialprofit,
  totalunitsold,
  totalunittransfer,
  totalunitadjust
) {
  return {
    sku,
    product,
    location,
    upprice,
    currentstock,
    currentstockvaluep,
    currentstockvalues,
    potentialprofit,
    totalunitsold,
    totalunittransfer,
    totalunitadjust,
  };
}

const rows = [
  createData(
    45,
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake"
  ),
  createData(
    45,
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake",
    "Cupcake"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "sku",
    numeric: true,
    disablePadding: true,
    label: "SKU",
  },
  {
    id: "product",
    numeric: false,
    disablePadding: true,
    label: "Product",
  },
  {
    id: "location",
    numeric: false,
    disablePadding: false,
    label: "Location",
  },
  {
    id: "upprice",
    numeric: false,
    disablePadding: false,
    label: "Unit Price",
  },
  {
    id: "currentstock",
    numeric: false,
    disablePadding: false,
    label: "Current Stock",
  },
  {
    id: "currentstockvaluep",
    numeric: false,
    disablePadding: false,
    label: "Current Stock Value (By purchase price)",
  },
  {
    id: "currentstockvalues",
    numeric: false,
    disablePadding: false,
    label: "Current Stock Value (By sale price)",
  },
  {
    id: "potentialprofit",
    numeric: false,
    disablePadding: false,
    label: "Potential Price",
  },
  {
    id: "totalunitsold",
    numeric: false,
    disablePadding: false,
    label: "Total Unit Sold",
  },
  {
    id: "totalunittransfer",
    numeric: false,
    disablePadding: false,
    label: "Total Unit Transfered",
  },
  {
    id: "totalunitadjust",
    numeric: false,
    disablePadding: false,
    label: "Total Unit Adjusted",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ fontWeight: "600", fontSize: "16px" }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>{/* <FilterListIcon /> */}</IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable2() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 25));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Container className="Products_table1_exportbtngrp">
            <Button variant="outlined" size="large" className="exportBtnText">
              Export to csv
            </Button>
            <Button variant="outlined" size="large" className="exportBtnText">
              Export to Excel
            </Button>
            <Button variant="outlined" size="large" className="exportBtnText">
              Print
            </Button>
            <Button variant="outlined" size="large" className="exportBtnText">
              Export to PDF
            </Button>
          </Container>
          <Table
            id="example2"
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1}>
                      <TableCell>{row.sku}</TableCell>
                      <TableCell align="">{row.product}</TableCell>
                      <TableCell align="">{row.location}</TableCell>
                      <TableCell align="">{row.upprice}</TableCell>
                      <TableCell align="">{row.currentstock}</TableCell>
                      <TableCell align="">{row.currentstockvaluep}</TableCell>
                      <TableCell align="">{row.currentstockvalues}</TableCell>
                      <TableCell align="">{row.potentialprofit}</TableCell>
                      <TableCell align="">{row.producttype}</TableCell>
                      <TableCell align="">{row.totalunitsold}</TableCell>
                      <TableCell align="">{row.totalunittransfer}</TableCell>
                      <TableCell align="">{row.totalunitadjust}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
