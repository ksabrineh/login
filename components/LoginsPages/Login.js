"use client";
import Input from "@/tools/Input";
import Image from "next/image";
import React, { useState } from "react";
import loginImage from "@/public/images/computer-account-login-password_165488-4519.jpg";
import { AccountBox, Mail, Person, VpnKey } from "@mui/icons-material";
import { Button, Divider, Tab, Tabs } from "@mui/material";
const Login = () => {
  const [value, setValue] = useState("signup");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex gap-2 w-full justify-around p-5 h-full">
      <div className="w-[30%] flex">
        <div className="h-auto w-[20%] pt-10">
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className=""
          >
            <Tab label="ورود" className="!h-16" value="login" />
            <Tab label="ثبت نام" className="!h-16" value="signup" />
          </Tabs>
        </div>
        <div className="flex w-[80%] flex-col items-center p-10 bg-blue-100 shadow-2xl rounded-2xl justify-between">
          <div className="w-[100%] flex flex-col gap-6 items-center">
            <div className="w-full text-lg pb-4 flex justify-start font-bold">
              {value === "login" ? "ورود" : "ثبت نام"}
            </div>
            <Input
              lable="نام و نام خانوادگی"
              className="!w-full"
              name="name"
              type="text"
              icon={<Person fontSize="small" />}
            />
            <Input
              lable="ایمیل"
              className="!w-full"
              name="email"
              type="mail"
              dir="ltr"
              icon={<Mail fontSize="small" />}
            />
            <Input
              lable="نام کاربری"
              className="!w-full"
              name="userName"
              type="text"
              dir="ltr"
              icon={<AccountBox fontSize="small" />}
            />
            <Input
              lable="رمز عبور"
              className="!w-full"
              name="password"
              type="password"
              dir="ltr"
              icon={<VpnKey fontSize="small" />}
            />
            <Button variant="contained" className="!w-full !mt-10">
              {value === "login" ? "ورود" : "ثبت"}
            </Button>
          </div>
          <div className="w-full text-xs opacity-100 items-center justify-center flex">
            <Divider className="!w-[15%]" />
            <p className="w-[50%] opacity-50 pr-2">
              آیا قبلا ثبت نام کرده اید؟
            </p>
            <p
              onClick={
                value === "login"
                  ? () => setValue("signup")
                  : () => setValue("login")
              }
              className="w-[18%] font-bold !text-blue-600 !opacity-100 cursor-pointer pr-1 pl-1"
            >
              {value === "login" ? "ثبت نام" : "ورود"}
            </p>
            <Divider className="!w-[15%]" />
          </div>
        </div>
      </div>
      <div className="w-[60%] flex justify-center">
        <Image
          alt="loginPhoto"
          width={1200}
          height={980}
          className="object-contain"
          src={loginImage}
        />
      </div>
    </div>
  );
};

export default Login;
