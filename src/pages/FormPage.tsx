import React from "react";
import { Form } from "../components/Form";

export const FormPage = () => {
  return (
    <div className="bg-grey flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
            <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
            <div className="w-full h-1/2  absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
      </div>
    </div>
  );
};