import React, { useEffect, useState } from "react";
// import { Form3 } from "./components/Form3";
import { YupFormDynamic } from "./components/YupFormDynamic";
import { fetchForm } from "./api/fetchForm";
import { ResultForm } from "./interfaces/Form";
import { FormProvider, useForm } from "react-hook-form";
import { YupFormDynamic2 } from "./components/YupFormDynamic2";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
// import { Form2 } from "./components/Form2";
// import { Form } from "./components/Form";

function App() {
  const methods = useForm();
  const [data, setData] = useState<ResultForm[]>();
  useEffect(() => {
    const getFormInformation = async () => {
      const formInformation: ResultForm[] = await fetchForm();
      setData(formInformation);
    };
    console.log("Hola", data);
    getFormInformation();
  }, []);

  return (
      <div className="flex w-full h-screen bg-black">
        <div className="w-full flex items-center justify-center">
          {/* <Form2 /> */}
          {/* <Form /> */}
          {/* <Form3 /> */}
          <FormProvider {...methods}>
            {/* <YupFormDynamic form={data} />
             */}
            <AppRouter form={data}/>
          </FormProvider>
        </div>
      </div>
  );
}

export default App;
