import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eye-slash.svg";
import { Link, useNavigate } from "react-router";
import { loginSuccess } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { login } from "../../services/auth.services";
import type { LoginPayload } from "../../types/auth.types";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, "the minimum username length is 3")
    .max(20, "the maximum username length is 20")
    .regex(/^[a-zA-Z0-9-_]+$/, "the username format is wrong"),
  password: z.string().min(8, "the minimum password length is 8"),
});
type FormValues = z.infer<typeof loginSchema>;

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: LoginPayload) => {
    try {
      // proses login ke backend
      const res = await login(data);

      console.log("LOGIN RESPONSE:", res);
      // proses set state global
      dispatch(loginSuccess(res));
      navigate("/");
    } catch (error) {
      console.log("error : ", error);
      console.log(
        `berhasil submit username : ${data.username} dan password : ${data.password}`,
      );
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <form
          className="mb-6 space-y-3 flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Username
            </label>

            <input
              type="text"
              placeholder="Masukkan username"
              autoComplete="username"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              {...register("username")}
            />

            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
              >
                <img
                  src={showPassword ? eyeSlash : eye}
                  alt=""
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className={
                "flex-1 rounded-xl px-5 py-3 font-medium text-white bg-blue-600 hover:bg-blue-700"
              }
            >
              Login
            </button>
          </div>
          <label>
            <span className="">
              belum punya akun?{" "}
              <Link to="/register" className="text-blue-500">
                Daftar Sekarang{" "}
              </Link>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login;
