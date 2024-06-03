"use client";
import Input from "@/tools/Input";
import Image from "next/image";
import React, { useState } from "react";
import loginImage from "@/public/images/computer-account-login-password_165488-4519_prev_ui.png";
import {
  AccountBox,
  LoginSharp,
  Mail,
  Person,
  VpnKey,
} from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import "./Login.css";
const Login = () => {
  const [value, setValue] = useState("login");
  return (
    <div
      className={`flex bg-white bg-opacity-50 rounded-2xl transition-transform container duration-700 ${
        value === "signup" ? "flex-row-reverse" : "flex-row"
      } gap-2 w-full justify-around p-2 h-full`}
    >
      <div className="w-[30%] flex">
        <div className="flex w-[80%] flex-col items-center p-10 bg-white shadow-2xl rounded-2xl justify-between">
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
      <div className="w-[60%] h-full flex flex-col justify-center items-center">
        <Image
          alt="loginPhoto"
          width={1200}
          height={980}
          className="object-contain h-[60%]"
          src={loginImage}
        />
        <Button
          variant="contained"
          className="!w-28 gap-2 cursor-pointer shadow-md shadow-blue-300 rounded-md flex items-center justify-center p-2"
          onClick={
            value === "signup"
              ? () => setValue("login")
              : () => setValue("signup")
          }
        >
          {value === "signup" ? "ورود" : "ثبت نام"}
          {value === "login" ? <Person /> : <LoginSharp />}
        </Button>
      </div>
    </div>
  );
};

export default Login;
