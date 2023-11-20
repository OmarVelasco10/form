import React from "react";
import { Control, FieldErrors, UseFormRegister, useFormContext } from "react-hook-form";
import { FormFields } from "../YupFormDynamic";


interface TextInputInterface {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

export const TextInput = (props: TextInputInterface) => {
    // const {register} = useFormContext();

  const { type, label, placeholder, name, register, errors  } = props;
  return (
    <div className="flex flex-col">
      <label className="text-white text-lg font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded p-1"
        autoComplete="on"
        {...register(name as keyof FormFields)}
      />
      {
        errors.name?.message &&    <p  className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
        role="alert">{errors?.[name as keyof FormFields]?.message}</p>
      }
    
    </div>
  );
};
