import Input from "@/tools/Input";
import Image from "next/image";
import React from "react";
import loginImage from "@/public/images/computer-account-login-password_165488-4519.jpg";
const Login = () => {
  return (
    <div className="flex gap-2 w-full justify-center p-5 h-full">
      <div className="w-[40%] flex justify-center">
        <div className="w-[70%] p-5 flex flex-col gap-4 bg-sky-100 rounded-2xl">
          <Input lable="سلام" className="!w-full" />
          <Input lable="سلام" className="!w-full" />
          <Input lable="سلام" className="!w-full" />
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
