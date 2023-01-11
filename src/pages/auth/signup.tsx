import { SignLayout } from "@layouts/SignLayout";
import { XCircle } from "@shared/icons";
import { signupSchema } from "@utils/validations/auth";
import classnames from "classnames";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CheckboxHook,
  FloatLabelHook,
  FloatLabelPhoneHook,
} from "@shared/elements/hooks";
import { PhoneHook } from "@shared/elements/hooks/phoneHook";
import { useAppDispatch } from "stores/store";
import { signup } from "stores/slices/authSlice";
import { notify } from "@utils/helper";
import api from "@utils/api";
import { send } from "process";
import { useRouter } from "next/router";
import { joiResolver } from "@hookform/resolvers/joi";

export type SignupValues = {
  slug: string;
  name: string;
  email: string;
  password: string;
  confirm: string;
  contact: {
    phone: string;
  };
  type: boolean;
  aggrement: {
    terms: boolean;
    kvkk: boolean;
    campaign: boolean;
  };
};

export const Signup = () => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const change = () => setType(!type);
  const form = useForm<SignupValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      type: false,
    },
    resolver: joiResolver(signupSchema),
  });
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = form;
  const onSubmit: SubmitHandler<SignupValues> = async (data: any) => {
    delete data.aggrement;
    const values = { ...data, type: data.type ? "individual" : "corporate" };

    try {
      setLoading(true);
      const result: any = await api.post("/auth/signup", values);
      const { accessToken, refreshToken } = result?.data;

      setLoading(false);
      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        notify("Başarıyla oluşturuldu!", { type: "success" });
        router.push("/auth/signin");
      }
    } catch (err: any) {
      console.log(err);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      notify(err?.response?.data?.message);
    }
  };

  const onError = (errors: any) => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex items-center justify-center h-screen"
    >
      <div id="signup" className="auth">
        <div
          className="form 
                w-screen
                max-w-[53em]
                sm:px-24
                my-6 p-4 rounded-md flex flex-col items-center justify-center"
        >
          <img
            src="/logo.png"
            alt="yükgetir logo"
            className="h-14 object-contain"
          />
          <h3 className="text-base mt-2 2">Üye ol</h3>
          <ul className="w-full flex justify-between gap-2 mb-4">
            <li
              className={classnames(
                "p-3 flex pl-4 cursor-pointer w-full rounded-md border text-sm",
                {
                  "border-yg-blue bg-yg-blue text-white": type,
                  " bg-white  border-gray-300 text-gray-500": !type,
                }
              )}
              onClick={change}
            >
              Bireysel Üyelik
            </li>
            <li
              className={classnames(
                "p-3 flex pl-4 cursor-pointer w-full rounded-md border text-sm",
                {
                  "border-yg-blue bg-yg-blue text-white": !type,
                  " bg-white  border-gray-300 text-gray-500": type,
                }
              )}
              onClick={change}
            >
              Kurumsal üyelik
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-2 w-full">
            <FloatLabelHook
              size="small"
              className=""
              name="name"
              type="text"
              placeholder={type ? "İsim Soyisim" : "Firma Ünvanı"}
              example=""
              control={control}
            />
            <FloatLabelHook
              size="small"
              className=""
              name="slug"
              type="text"
              placeholder="Kullanıcı Adı"
              example=""
              control={control}
            />
            <PhoneHook
              size="small"
              name="contact.phone"
              type="text"
              placeholder="Cep Telefonu"
              example="(212) 12 34"
              control={control}
            />
            <FloatLabelHook
              size="small"
              className=""
              name="email"
              type="text"
              placeholder="Eposta"
              example="orn: deneme@gmail.com"
              control={control}
            />
            <div>
              <FloatLabelHook
                size="small"
                className=""
                name="password"
                type="password"
                placeholder="Şifre"
                example=""
                control={control}
              />
              {false && errors.password && (
                <span className="text-red-500 text-sm p-1">
                  {" "}
                  {errors.password?.message}{" "}
                </span>
              )}
            </div>
            <div>
              <FloatLabelHook
                size="small"
                className=""
                name="confirm"
                type="password"
                placeholder="Şifre Tekrarı"
                example=""
                control={control}
              />
            </div>
          </div>
          <div className="my-4 flex items-start flex-col gap-2 justify-center w-full">
            <CheckboxHook name="aggrement.terms" control={control}>
              <p className="">
                <span className="text-blue-500 cursor-pointer">
                  {" "}
                  Kullanıcı & Üyelik Sözleşmesi{" "}
                </span>
                'ni okudum, anladım ve kabul ediyorum.
              </p>
            </CheckboxHook>
            <CheckboxHook name="aggrement.kvkk" control={control}>
              <p className="flex items-start justify-center">
                <span className="text-blue-500 cursor-pointer">
                  {" "}
                  KVKK Metni
                </span>
                'ni ve
                <span className="text-blue-500 cursor-pointer">
                  {" "}
                  Aydınlatma Metni{" "}
                </span>
                'ni okudum, anladım ve kabul ediyorum.
              </p>
            </CheckboxHook>
            <CheckboxHook name="aggrement.campaign" control={control}>
              <p className="">
                Kampanya ve tanıtımlar için Email, Telefon ve Sms ile iletişim
                kurulmasını kabul ediyorum.
              </p>
            </CheckboxHook>
          </div>

          <div className="flex justify-end items-end w-full">
            <button
              type="button"
              className=" text-white bg-[#1877f2] hover:bg-[#0466e6]/90 
                        focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-md mr-2
                        text-sm p-3 h-10 w-auto min-w-fit text-center flex items-center justify-center dark:focus:ring-[#3b5998]/55 "
            >
              <div>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                  ></path>
                </svg>
              </div>
              <p className="mx-1">Facebook ile</p>
            </button>
            <button
              type="button"
              className="bg-white border border-gray-300 text-gray-500 hover:bg-[#fbfbfb]
                        focus:ring-4 focus:outline-none font-medium rounded-md mr-2
                        text-sm p-3  h-10 w-auto min-w-fit text-center flex items-center justify-center"
            >
              <div>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path
                      fill="#4285F4"
                      d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                    />
                  </g>
                </svg>
              </div>
              <p className="mx-1">Google ile</p>
            </button>
            <button
              type="button"
              className=" text-white bg-[#050708] hover:bg-[#050708]/90 
                        focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md mr-2
                        text-sm p-3 h-10 w-auto min-w-fit text-center flex items-center justify-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 "
            >
              <div>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
              </div>
              <p className="mx-1">Apple ile</p>
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-yg-blue mt-2- px-20- p-3-
                            px-5 py-2.5 col-span-2
                             text-sm text-white text-center rounded-md "
            >
              {loading ? (
                <React.Fragment>
                  <svg
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </React.Fragment>
              ) : (
                <>Eposta ile üye ol</>
              )}
            </button>
          </div>
          <div className="flex justify-end items-end w-full mt-6">
            <a href="/auth/signin" className="text-yg-blue text-sm ml-2">
              Zaten üyeyim. Giriş yapmak istiyorum.
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

Signup.Layout = SignLayout;
Signup.Title = "Üye ol!";

export default Signup;
