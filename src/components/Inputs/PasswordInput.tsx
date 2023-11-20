import React, { useState } from "react";
import { UseFormRegister, useController } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IFormInput } from "../Form";

interface PasswordInputInterface {
    register: UseFormRegister<IFormInput>;
    control: any;
    name: string;
}


export const PasswordInput = ({register, control, name}: PasswordInputInterface) => {
  const { field, fieldState } = useController({ name , control });

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <section>
      <div className="w-full relative">
        <div>
          <input
            type={(open === false) ? 'password' : 'text'}
            ref={field.ref}
            name={field.name}
            value={field.value}
            autoComplete="on"
            className=" w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter you password"
            onChange={async (e: any) => {
                field.onChange(e);
              }}
          />
        </div>
        <div>
          <div className="text-2xl absolute top-5 right-5">
            {open === false ? (
              <FaEye onClick={toggle} />
            ) : (
              <FaEyeSlash onClick={toggle} />
            )}
          </div>
        </div>
        {!!fieldState.error && (
        <p
          className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
          role="alert"
        >
          {fieldState.error.message}
        </p>
      )}
      </div>
    </section>
  );
};
