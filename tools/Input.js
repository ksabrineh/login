"use client";
import { TextField } from "@mui/material";
import React from "react";

const Input = ({ lable = "",className }) => {
  return (
    <div className="w-full">
      <TextField label={lable} className={`text-black ${className && className}`} focused />
    </div>
  );
};

export default Input;
