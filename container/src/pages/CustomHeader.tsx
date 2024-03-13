import React, { useState } from "react";
import {
  Stack,
  Typography,
  FormControl,
  Autocomplete,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
 
type RowProps = {
  id: string;
  priceLabel: string;
  priceType: string;
  calculatedType: string | null;
  componentType: string;
};
 
const CustomHeader = ({
  sectionVisible,
  setSectionVisible,
  setAddClick,
  setRows,
  handleTextChange,
}: any) => {


  return (
    <div>
      <Stack
        alignItems={"center"}
        direction={"row"}
        height={48}
        className="variation8"
      >
        <Stack width={230}>
          <Typography pl={"34px"} variant="subtitle2">
            VendorCode
          </Typography>
        </Stack>
        <Stack flex={1}>
          <Typography pl={1} variant="subtitle2">
            PO Number
          </Typography>
        </Stack>
        <Stack width={230}>
          <Typography pl={"7px"} variant="subtitle2">
            Material Code
          </Typography>
        </Stack>
        <Stack flex={1}>
          <Typography pl={"5px"} variant="subtitle2">
            GRN Number
          </Typography>
        </Stack>
        <Stack width={100}>{""}</Stack>
      </Stack>
        <Stack
          alignItems={"center"}
          className="neutral5"
          direction={"row"}
          height={60}
        >
          <Stack direction={"row"} width={230} pl={4}>
            <TextField
              placeholder="Enter"
              sx={{ backgroundColor: "white", width: "160px" }}
            />
          </Stack>
          <Stack direction={"row"} width={230} pl={4}>
            <TextField
              placeholder="Enter"
              sx={{ backgroundColor: "white", width: "160px" }}
            />
          </Stack>
          <Stack direction={"row"} width={230} pl={4}>
            <TextField
              placeholder="Enter"
              sx={{ backgroundColor: "white", width: "160px" }}
            />
          </Stack>
          <Stack direction={"row"} width={230} pl={4}>
            <TextField
              placeholder="Enter"
              sx={{ backgroundColor: "white", width: "160px" }}
            />
          </Stack>
        </Stack>
    </div>
  );
};
 
export default CustomHeader;