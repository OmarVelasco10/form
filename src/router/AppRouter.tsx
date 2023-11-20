import React from "react";
import { Route, Routes } from "react-router-dom";
import { YupFormDynamic2 } from "../components/YupFormDynamic2";
import { WelcomePage } from "../pages/WelcomePage";
import { ResultForm } from "../interfaces/Form";

interface FormInterface {
    form: ResultForm[] | undefined;
  }

export const AppRouter = ({form}: FormInterface) => {
  return (
    <Routes>
      <Route path="/" element={<YupFormDynamic2 form={form}/>} />
      <Route path="/login" element={<YupFormDynamic2 form={form}/>} />
      <Route path="/welcome" element={<WelcomePage />} />


    </Routes>
  );
};