import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, Stack, TextField } from "@mui/material";
import ExporttoExcel from "./ExporttoExcel";
import CustomHeader from "./CustomHeader";

interface RetroBillingItem {
  id: number;
  vendorCode: number;
  poNumber: string;
  materialCode: string;
  grnNumber: string;
  invoiceDate: string;
  grnDate: string;
  quantity: number;
  oldRate: number;
  newRate: number;
  difference: number;
  totalPrice: number;
  status: string;
  supplementaryInvoiceNo: string;
}

const listingpage: React.FC = () => {
  const [data, setData] = useState<RetroBillingItem[]>([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8080/creditdebit/api/v1/invoice");
      const modifiedData = response.data.map((row: any, index: any) => ({ ...row }));
      setData(modifiedData);
    } catch (e) {
      console.log("CATCH", e);
    }
  }

  useEffect(() => {
    console.log("RUNNN");
    fetchData();
  }, []);

  const predefinedColumns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "vendorCode", headerName: "Vendor Code", flex: 1 },
    { field: "poNumber", headerName: "PO Number", flex: 1 },
    { field: "materialCode", headerName: "Material Code", flex: 1 },
    { field: "grnNumber", headerName: "GRN Number", flex: 1 },
    { field: "invoiceDate", headerName: "Invoice Date", flex: 1 },
    { field: "grnDate", headerName: "GRN Date", flex: 1 },
    { field: "quantity", headerName: "Quantity", flex: 1 },
    { field: "oldRate", headerName: "Old Rate", flex: 1 },
    { field: "newRate", headerName: "New Rate", flex: 1 },
    { field: "difference", headerName: "Difference", flex: 1 },
    { field: "totalPrice", headerName: "Total Price", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "supplementaryInvoiceNo", headerName: "Supplementary Invoice No", flex: 1 },
  ];

  const handleexport = () => {
    ExporttoExcel(data);
  };

  const dynamicColumns = Object.keys(data[0] || {})
    .filter((field) => !predefinedColumns.find((col) => col.field === field))
    .map((field) => ({ field, headerName: field, flex: 1 }));

  const columns = [...predefinedColumns, ...dynamicColumns];


  return (
    <Grid sx={{margin:"100px"}}>
      <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Stack>
          <Button sx={{ margin: 4, display: "flex", color: "secondary.contrastText", bgcolor: "secondary.main" }} variant="outlined">
            Status = New
          </Button>
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Button onClick={handleexport} sx={{ margin: 4, display: "flex",color:"#e8f4f8" }} variant="contained" >
            Export ToExcel
          </Button>
          <Button sx={{ margin: 4, display: "flex" }} variant="contained" color="success">
            Export ToSAP
          </Button>
        </Stack>
      </Grid>
      <div style={{ height: 400, width: "100%", border: "1px solid #ccc" }}>
      <DataGrid
          disableColumnFilter
          disableColumnMenu
          rowHeight={40}
          columns={columns}
          rows={data}
          disableRowSelectionOnClick
          sx={{
            border: "1px solid #EBEFF3",
            "& .MuiDataGrid-columnHeaders": {
              height: "-webkit-fill-available",
            },
            "& .MuiDataGrid-columnHeaderTitleContainerContent": {
              width: "inherit",
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              width: "100%",
            },
          }}
          columnHeaderHeight={100}
          slots={{
            footer: () => null,
            columnHeaders: () => (
              <CustomHeader
              />
            ),
          }}
        />
            
      </div>
    </Grid>
  );
};

export default listingpage;
