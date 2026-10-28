import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eye-slash.svg";
import { Link } from "react-router";

const loginSchema = z
  .object({
    username: z
      .string()
      .min(3, "the minimum username length is 3")
      .max(20, "the maximum username length is 20")
      .regex(/^[a-zA-Z0-9-_]+$/, "the username format is wrong"),
    email: z.email("the email format is wrong").min(8, "minimum length is 8"),
    password: z.string().min(8, "the minimum password length is 8"),
    confirmPassword: z
      .string()
      .min(8, "the minimum confirm password length is 8"),
    terms: z.boolean().refine((value) => value === true, {
      message: "You must checked Terms & Conditions",
    }),
    birthDate: z
      .string()
      .min(1, "Date of birth is required")
      .refine((value) => {
        const birthDate = new Date(`${value}T00:00:00`);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const hasHadBirthdayThisYear =
          today.getMonth() > birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());

        if (!hasHadBirthdayThisYear) {
          age--;
        }

        return (
          !Number.isNaN(birthDate.getTime()) && birthDate <= today && age >= 18
        );
      }, "Minimum Age is 18"),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is not the same as confirm password",
        path: ["confirmPassword"],
      });
    }
  });
type FormValues = z.infer<typeof loginSchema>;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
              Your email
            </label>
            <input
              {...register("email")}
              type="text"
              autoComplete="off"
              placeholder="Masukkan email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
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

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmasi password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">
                  {errors.confirmPassword?.message}
                </p>
              )}
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                aria-label={
                  showConfirmPassword
                    ? "Sembunyikan password"
                    : "Tampilkan password"
                }
              >
                <img
                  src={showConfirmPassword ? eyeSlash : eye}
                  alt=""
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Pilih Tanggal Lahir
            </label>
            <input
              {...register("birthDate")}
              type="date"
              placeholder="Masukkan Tanggal Lahir"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            {errors.birthDate && (
              <p className="text-red-500">{errors.birthDate?.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Pilih Kota
            </label>
            <select className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700">
              <option value="Jakarta">Jakarta</option>
              <option value="Bogor">Bogor</option>
              <option value="Depok">Depok</option>
              <option value="Tanggerang">Tanggerang</option>
              <option value="Bekasi">Bekasi</option>
            </select>
          </div>

          <div>
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-blue-600"
                {...register("terms")}
              />

              <span className="flex gap-1">
                Saya menyetujui{" "}
                <span className="text-blue-500">Terms & Conditions</span>
                dan kebijakan privasi yang berlaku.
              </span>
            </label>

            {errors.terms && (
              <p className="mt-1 text-sm text-red-500">
                {errors.terms.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className={
                "flex-1 rounded-xl px-5 py-3 font-medium text-white bg-blue-600 hover:bg-blue-700"
              }
            >
              REGISTER
            </button>
          </div>
          <label>
            <span className="">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-blue-500">
                Login Sekarang{" "}
              </Link>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Register;
