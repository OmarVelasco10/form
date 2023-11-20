import React from "react";
import { Option } from "../../interfaces/Form";
import { FieldErrors, UseFormRegister, useFormContext } from "react-hook-form";
import { FormFields } from "../YupFormDynamic";

interface RadioInputInterface {
  label: string;
  name: string;
  options: Option[] | undefined;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;

}

export const RadioInput = (props: RadioInputInterface) => {
    // const {register} = useFormContext();

  const { label, options, name, register, errors } = props;
  return (
    <div className="flex flex-col">
      <p className="text-white font-bold">{label}</p>
      <div className="flex gap-2 flex-col items-start lg:flex-row ">
        {options?.map(({ value, label, id }) => (
          <div key={`${value}-${id}`} className="flex items-center gap-2">
            <label className="text-white font-medium">{label}</label>
            <input
              className="rounded p-1"
              type="radio"
              autoComplete="on"
              value={value}
              {...register(name as keyof FormFields)}
            />
          </div>
        ))}
      </div>
      {
        errors.name?.message &&    <p  className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
        role="alert">{errors?.[name as keyof FormFields]?.message}</p>
      }

      {/* {errors.gender?.type === "required" && (
      <p
        className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
        role="alert"
      >
        The field is required
      </p>
    )} */}
    </div>
  );
};
