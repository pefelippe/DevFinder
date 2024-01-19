import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUserContext } from "../context/UserContext";

const schema = z.object({
  username: z.string().min(1, { message: "Username é obrigatório" }),
});

type FormValues = z.infer<typeof schema>;

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { updateUserData } = useUserContext();

  const onSubmit = async (data: FormValues) => {
    updateUserData(data?.username);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex rounded-3xl items-center justify-center w-full gap-4 "
    >
      <input
        type="text"
        placeholder={"Username"}
        {...register("username")}
        className={`border-2 border-gray-600 rounded-md p-2 w-full" ${
          errors.username ? "border-red-500" : ""
        }`}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md px-5 text-lg w-fit hover:bg-blue-500/80 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
