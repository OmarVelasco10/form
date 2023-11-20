import React from "react";
import { Option } from "../../interfaces/Form";
import { FieldErrors, useFormContext } from "react-hook-form";
import { FormFields } from "../YupFormDynamic";

interface CheckboxInputInterface {
  label: string;
  name: string;
  options: Option[] | undefined;
  errors: FieldErrors<FormFields>;
}

export const CheckboxInput = (props: CheckboxInputInterface) => {
  const { register } = useFormContext();
  const { label, options, name, errors } = props;
  return (
    <div className="flex flex-col">
      <p className="text-white font-bold">{label}</p>
      <div className="flex items-center gap-2">
        {options?.map(({ value, label, id }) => (
          <div key={`${value}-${id}`} className="flex items-center gap-2">
            <label className="text-white font-medium">{label}</label>
            <input type="checkbox" value={value} {...register(name)} />
          </div>
        ))}
      </div>

      {errors.name?.message && (
        <p
          className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
          role="alert"
        >
          {errors?.[name as keyof FormFields]?.message}
        </p>
      )}
      {/* {errors.lenguages?.type === "required" && (
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
