import React from "react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useController,
  useFormContext,
} from "react-hook-form";
import { FormFields } from "../YupFormDynamic";

interface TextInputInterface {
  label: string;
  name: string;
  placeholder: string;
  control: any;
  type: string;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

export const TextInput = (props: TextInputInterface) => {
  // const {control} = useFormContext();

  const { type, label, placeholder, name, control } = props;
  const { field, fieldState } = useController({ name, control });
  const id = `text-${field.name}`;

  return (
    <div className="flex flex-col">
      <label className="text-white text-lg font-medium">{label}</label>
      <input
        ref={field.ref}
        name={field.name}
        value={field.value}
        type={type}
        placeholder={placeholder}
        className="rounded p-1 bg-transparent-50"
        autoComplete="on"
        onChange={async (e: any) => {
          field.onChange(e);
        }}
      />
      {!!fieldState.error && (
        <p
          className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
          role="alert"
        >
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
};
