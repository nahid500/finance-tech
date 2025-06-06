"use client";

import Cookies from "js-cookie";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errors, setErrors] = useState("");
  const { register, handleSubmit } = useForm();
  const navigation = useRouter();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await fetch(
        "https://jakaria-finance-backend.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setErrors(data.message);
        return;
      }

      if (data.success) {
        Cookies.set("token", data.data.token, {
          expires: 7,
          // secure: true,
          sameSite: "Lax",
        });
        navigation.push("/dashboard/service");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-[400px] h-screen flex items-center mx-auto ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-gray-50 p-10 border rounded-md shadow-md"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
            // defaultValue={"jakariafinancedatabase@gmail.com"}
          />
        </div>

        <div className="flex flex-col gap-1 mt-5 relative">
          <label htmlFor="password">Password</label>
          <input
            type={isShowPassword ? "text" : "password"}
            id="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
            // defaultValue={"#Jakaria017891#"}
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            <Eye />
          </span>
        </div>

        {errors && (
          <p className="text-red-500 mt-2 text-end underline">{errors}</p>
        )}
        <button
          type="submit"
          className="mt-5 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
