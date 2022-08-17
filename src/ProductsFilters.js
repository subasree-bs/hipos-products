import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, InputLabel, Box } from "@mui/material";
import ProductTabs from "./ProductTabs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./styles.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "white",

    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChangePanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [ProductType, setProductType] = React.useState("");

  const handleChange1 = (event) => {
    setProductType(event.target.value);
  };

  const [Category, setCategory] = React.useState("");

  const handleChange2 = (event) => {
    setCategory(event.target.value);
  };

  const [Unit, setUnit] = React.useState("");

  const handleChange3 = (event) => {
    setUnit(event.target.value);
  };

  const [Tax, setTax] = React.useState("");

  const handleChange4 = (event) => {
    setTax(event.target.value);
  };

  const [Brand, setBrand] = React.useState("");

  const handleChange5 = (event) => {
    setBrand(event.target.value);
  };

  const [BusinessLocation, setBusinessLocation] = React.useState("");

  const handleChange6 = (event) => {
    setBusinessLocation(event.target.value);
  };

  const [Status, setStatus] = React.useState("");

  const handleChange7 = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ p: 3 }}>
        Products &nbsp;
        <span className="product_title_span">Manage your products </span>
      </Typography>
      <Grid>
        <Grid sx={{ pl: 3, pr: 3 }} fullWidth>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
            sx={{
              margin: "10px",
              bgcolor: "#fff",
              height: "auto",
              padding: "3px",
              borderTop: "5px solid #7009AB;",
              borderRadius: "10px",
              boxShadow: "6px 6px 6px 6px #dedbdbae",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography sx={{ color: " #7009AB" }}>
                <FilterAltIcon /> Filter
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={10}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #B97DF0",
                    },
                  }}
                >
                  <Typography>
                    <FormControl
                      sx={{
                        m: 1,
                        borderRadius: 2,
                      }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel id="demo-select-small">
                        Product Type
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={ProductType}
                        label="Product Type"
                        onChange={handleChange1}
                        autoFocus="true"
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"single"}>Single</MenuItem>
                        <MenuItem value={"variable"}>Variable</MenuItem>
                        <MenuItem value={"combo"}>Combo</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={10}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #B97DF0",
                    },
                  }}
                >
                  <Typography>
                    <FormControl
                      sx={{
                        m: 1,
                        borderRadius: 2,
                      }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel id="demo-select-small">Category</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={Category}
                        label="Category"
                        onChange={handleChange2}
                      >
                        <MenuItem value="category_all">All</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={10}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #B97DF0",
                    },
                  }}
                >
                  <Typography>
                    <FormControl
                      sx={{
                        m: 1,
                        borderRadius: 2,
                      }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel id="demo-select-small">Unit</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={Unit}
                        label="Unit"
                        onChange={handleChange3}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"pieces"}>Pieces (Pc(s))</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={10}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #B97DF0",
                    },
                  }}
                >
                  <Typography>
                    <FormControl
                      sx={{
                        m: 1,
                        borderRadius: 2,
                      }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel id="demo-select-small">Tax</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={Tax}
                        label="Tax"
                        onChange={handleChange4}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"gst"}>GST</MenuItem>
                        <MenuItem value={"cgst"}>CGST</MenuItem>
                        <MenuItem value={"tax"}>Tax</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={10}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #B97DF0",
                    },
                  }}
                >
                  <Typography>
                    <FormControl
                      sx={{
                        m: 1,
                        borderRadius: 2,
                      }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel id="demo-select-small">Brand</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={Brand}
                        label="Brand"
                        onChange={handleChange5}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"motog"}>MotoG</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>

                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={10}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #B97DF0",
                    },
                  }}
                >
                  <Typography>
                    <FormControl
                      sx={{
                        m: 1,
                        borderRadius: 2,
                      }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel id="demo-select-small">
                        Business Location
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={BusinessLocation}
                        label="Business Location"
                        onChange={handleChange6}
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"none"}>None</MenuItem>
                        <MenuItem value={"xyz"}>XYZ (123456)</MenuItem>
                        <MenuItem value={"juiceria"}>
                          Juiceria (1234567)
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={10}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #B97DF0",
                    },
                  }}
                >
                  <Typography>
                    <FormControl
                      sx={{
                        m: 1,
                        minWidth: 120,
                        borderRadius: 2,
                      }}
                      size="small"
                      fullWidth
                    >
                      <Select
                        value={Status}
                        onChange={handleChange7}
                        displayEmpty
                      >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value={"active"}>Active</MenuItem>
                        <MenuItem value={"inactive"}>Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={10}>
                  <Typography>
                    <FormControl sx={{ m: 1 }} size="small" fullWidth>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                          />
                        }
                        label="Not for selling"
                      />
                    </FormControl>
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <div>
        <ProductTabs />
      </div>
    </Box>
  );
}
