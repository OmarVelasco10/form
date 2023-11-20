import React from "react";
import { Route, Routes } from "react-router-dom";
import { YupFormDynamic2 } from "../components/YupFormDynamic2";
import { WelcomePage } from "../pages/WelcomePage";
import { ResultForm } from "../interfaces/Form";
import { Form } from "../components/Form";
import { BoardPage } from "../pages/BoardPage";
import { Form2 } from "../components/Form2";
import { Form3 } from "../components/Form3";
import { FormPage } from "../pages/FormPage";

interface FormInterface {
    form: ResultForm[] | undefined;
  }

export const AppRouter = ({form}: FormInterface) => {
  return (
    <Routes>
      {/* <Route path="/" element={<YupFormDynamic2 form={form}/>} /> */}
      <Route path="/" element={<BoardPage  />} />
      <Route path="/form1" element={<FormPage  />} />
      <Route path="/form2" element={<Form2  />} />
      <Route path="/form3" element={<Form3  />} />
      <Route path="/yup-dynamic" element={<YupFormDynamic2 form={form}/>} />



      <Route path="/login" element={<YupFormDynamic2 form={form}/>} />
      <Route path="/welcome" element={<WelcomePage />} />


    </Routes>
  );
};