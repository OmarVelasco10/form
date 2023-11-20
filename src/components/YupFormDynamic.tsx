import React from "react";
import { ResultForm, Validation } from '../interfaces/Form';
import { TextInput } from "./Inputs/TextInput";
import { SelectInput } from "./Inputs/SelectInput";
import { RadioInput } from "./Inputs/RadioInput";
import { CheckboxInput } from "./Inputs/CheckboxInput";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormInterface {
  form: ResultForm[] | undefined;
}

export interface FormFields {
  name: string;
  password: string;
  gender: string;
  languages: string;
  framework: string;
}

export const YupFormDynamic = ({ form }: FormInterface) => {
 form ??= [];

  const initialValues: { [key: string]: any } = {};

  for (const input of form) {
    initialValues[input.name] = input.value;

  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    password: Yup
      .string()
      .required("Password is required")
      .min(5, 'The password must have 5 characters'),
    gender: Yup.string().required("Gender is required"),
    languages: Yup.string().required('Languages is required'),
    framework: Yup.string().required('Framework is required'),
  });

  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: '',
      password: '',
      gender: '',
      languages: '',
      framework: ''
    },
    resolver:  yupResolver(validationSchema),
  });

  const framework = watch('framework');
  console.log({framework});

  console.log({errors});
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("submit");
    console.log(data);
  };

  // console.log(initialValues);
  return (
    <section className="bg-gradient-to-b from-violet-300 to-teal-300 w-1/2 rounded p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        {form.map(({ type, name, placeholder, label, id, options }, index) => {
          if (type === "text" || type === "password") {
            return (
              <TextInput
                key={`question-${id}`}
                type={type}
                label={label}
                placeholder={placeholder}
                name={name}
                register={register}
                errors={errors}
              />
            );
          } else if (type === "select") {
            return (
              <SelectInput
                key={`question-${id}`}
                label={label}
                options={options}
                name={name}
                register={register}
                errors={errors}
              />
            );
          } else if (type === "radio") {
            return (
              <RadioInput
                key={`question-${id}`}
                label={label}
                options={options}
                name={name}
                register={register}
                errors={errors}
              />
            );
          } else if (type === "checkbox") {
            return (
              <CheckboxInput
                key={`question-${id}`}
                label={label}
                options={options}
                name={name}
                errors={errors}
              />
            );
          }
          throw new Error(`El type: ${type}, no es soportado`);
        })}

        <button type="submit" className="rounded mt-2 p-2 bg-violet-500">
          Send
        </button>
      </form>
    </section>
  );
};