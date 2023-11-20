import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Username is required"),
  channel: yup.string().required("Channel is required"),
});

interface FormInterface {
  username: string;
  email: string;
  channel: string;
}

export const Form3 = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInterface>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    console.log("hola");
    console.log(data);
  };

  return (
    <section className="bg-gradient-to-b from-violet-300 to-teal-300 w-1/2 rounded p-3">
      <h1 className="text-white text-2xl text-center font-bold">YupForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="text-white text-lg font-medium">Username</label>
          <input
            type="text"
            className="rounded p-1"
            {...register("username")}
          />
          <p  className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
              role="alert">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="text-white text-lg font-medium">Email</label>
          <input type="text" className="rounded p-1" {...register("email")} />
          <p  className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
              role="alert">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="text-white text-lg font-medium">Channel</label>
          <input type="text" className="rounded p-1" {...register("channel")} />
          <p  className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
              role="alert">{errors.channel?.message}</p>
        </div>

        <button
          type="submit"
          className="text-white font-medium p-2 bg-violet-500 rounded mt-2"
        >
          Send
        </button>
      </form>
    </section>
  );
};
