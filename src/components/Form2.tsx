import React from "react";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";

interface FormInterface {
  name: string;
  gender: string;
  lenguages: string[] | string;
  frameworks: string;
  phNumbers: {
    number: string;
  }[];
}

export const Form2 = () => {
  const {
    register,
    handleSubmit,
    control,
    // watch,
    getValues,
    formState: { errors },
  } = useForm<FormInterface>({
    defaultValues: {
      name: "",
      gender: "",
      lenguages: "",
      frameworks: "",
      phNumbers: [{ number: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    console.log("hola");
    console.log(data);
  };

  return (
    <section className="bg-gradient-to-b from-violet-300 to-teal-300 w-1/2 rounded p-3">
      <h1 className="text-white text-2xl text-center font-bold">Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="text-white font-bold">Ingresa tu nombre:</label>
          <input
            className="rounded p-1"
            type="text"
            autoComplete="on"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <p
              className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
              role="alert"
            >
              The field is required
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-white font-bold">Genero:</p>
          <div className="flex items-center gap-2">
            <label className="text-white font-medium">Masculino</label>
            <input
              className="rounded p-1"
              type="radio"
              autoComplete="on"
              value="masculino"
              {...register("gender", {
                required: true,
              })}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white font-medium">Femenino</label>
            <input
              className="rounded p-1"
              type="radio"
              autoComplete="on"
              value="femenino"
              {...register("gender", {
                required: true,
              })}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white font-medium">Desconocido</label>
            <input
              className="rounded p-1"
              type="radio"
              autoComplete="on"
              value="desconocido"
              {...register("gender", {
                required: true,
              })}
            />
          </div>
          {errors.gender?.type === "required" && (
            <p
              className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
              role="alert"
            >
              The field is required
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-white font-bold">Qué lenguajes conoces?</p>
          <div className="flex items-center gap-2">
            <label className="text-white font-medium">JavaScript</label>
            <input
              type="checkbox"
              value="javascript"
              {...register("lenguages", {
                required: true,
              })}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white font-medium">PHP</label>
            <input type="checkbox" value="php" {...register("lenguages")} />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white font-medium">C#</label>
            <input type="checkbox" value="c#" {...register("lenguages")} />
          </div>
          {errors.lenguages?.type === "required" && (
            <p
              className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
              role="alert"
            >
              The field is required
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-white font-bold">
            Qué frameworks conoces?
          </label>
          <select
            className="rounded"
            {...register("frameworks", {
              required: true,
            })}
          >
            <option value="">Select</option>
            <option value="reactjs">ReactJs</option>
            <option value="laravel">Laravel</option>
            <option value=".net">.NET</option>
          </select>
          {errors.frameworks?.type === "required" && (
            <p
              className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
              role="alert"
            >
              The field is required
            </p>
          )}
        </div>
        <div className="mt-2">
          <label className="text-white font-bold">Lista de telefonos</label>
          <div className="flex flex-col">
            {fields.map((field, index) => {
              return (
                <div className="flex flex-col mt-2" key={field.id}>
                  <input
                    className="rounded p-1"
                    type="text"
                    {...register(`phNumbers.${index}.number`, {
                      required: true,
                      minLength: 10,
                    })}
                  />
                  {errors.phNumbers &&
                    errors.phNumbers[index]?.number?.type === "required" && (
                      <p
                        className="bg-red-100 border border-red-400 text-red-700 p-1 rounded relative"
                        role="alert"
                      >
                        The field is required
                      </p>
                    )}
                  {errors.phNumbers &&
                    errors.phNumbers[index]?.number?.type === "minLength" && (
                      <p
                        className="bg-red-100 border border-red-400 text-red-700 p-1 rounded relative"
                        role="alert"
                      >
                        The field must have 10 digits
                      </p>
                    )}

                  {index > 0 && (
                    <button
                      className="bg-red-500 rounded text-white font-medium"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}

            <button
              className="mt-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  p-2 rounded-xl bg-violet-500 text-white text-lg font-bold"
              type="button"
              onClick={() => append({ number: "" })}
            >
              Agregar numero de telefono
            </button>
          </div>
        </div>
        <input
          type="submit"
          className=" mt-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  p-2 rounded-xl bg-violet-500 text-white text-lg font-bold"
          value="Enviar"
        />
      </form>
    </section>
  );
};
