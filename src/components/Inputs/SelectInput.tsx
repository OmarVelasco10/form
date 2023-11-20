import React from "react";
import { Option } from "../../interfaces/Form";
import { FieldErrors, UseFormRegister, useController, useFormContext } from "react-hook-form";
import { FormFields } from "../YupFormDynamic";

interface SelectInputInterface {
  label: string;
  name: string;
  options: Option[] | undefined;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
  control: any;
}

export const SelectInput = (props: SelectInputInterface) => {
    // const {register} = useFormContext();

  const { label, options, name, register, errors, control } = props;
  const { field, fieldState } = useController({ name, control });

  return (
    <div className="flex flex-col">
      <label className="text-white font-bold">{label}</label>
      <select className="rounded" {...register(name as keyof FormFields)}>
        <option value="">Select</option>
        {options?.map(({ label, value, id }) => (
          <option key={`${label}-${id}`} value={value} >
            {label}
          </option>
        ))}
      </select>
      {!!fieldState.error && (
        <p
          className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
          role="alert"
        >
          {fieldState.error.message}
        </p>
      )}
      {/* {errors.frameworks?.type === "required" && (
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
