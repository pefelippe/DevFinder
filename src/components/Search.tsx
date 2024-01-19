import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUserContext } from "../hooks/useUserContext";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
});

type FormValues = z.infer<typeof schema>;

const Search: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { GetUserData } = useUserContext();

  const onSubmit = async (data: FormValues) => {
    GetUserData(data?.username);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-4 max-w-2xl mx-auto"
    >
      <div className="flex  items-start justify-start gap-2  w-full">
        <input
          type="text"
          placeholder={"Username"}
          {...register("username")}
          className={`border-2 border-gray-600  p-2 w-full rounded-md " ${
            errors.username ? "border-red-500" : ""
          }`}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md px-12 font-medium text-lg w-fit hover:bg-blue-500/80 transition-all"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
