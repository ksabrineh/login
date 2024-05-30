"use client";
import { AccountCircle } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

const Input = ({ lable = "", className, icon, infoIcon, type }) => {
  return (
    <div className="w-full">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", height: "15px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          type={type ? type : "text"}
          label={lable}
          className={`text-black focus:!border-none ${className && className}`}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                {infoIcon && infoIcon}
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">{icon && icon}</InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputBase-root": {
              height: 30,
              borderRadius: "5px",
              margin: "0px",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "black", 
              },
            },
          }}
        />
      </Box>
    </div>
  );
};

export default Input;
