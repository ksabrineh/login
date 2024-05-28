"use client";
import { TextField } from "@mui/material";
import React from "react";

const Input = ({ lable = "" }) => {
  return (
    <div>
      <TextField label={lable} className="!text-black" focused />
    </div>
  );
};

export default Input;
