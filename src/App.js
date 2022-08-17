import React from "react";
import "./App.css";
import ProductsFilters from "./ProductsFilters";
// import DataTable from "./DemoTable";
import SelectTableComponent from "./DemoTable2";

const App = () => {
  return (
    <div className="App">
      <ProductsFilters />
      {/* <DataTable /> */}
      {/* <SelectTableComponent /> */}
      <br />
    </div>
  );
};

export default App;
