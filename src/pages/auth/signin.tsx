import { SignLayout } from "@layouts/SignLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { FloatLabelHook } from "@shared/elements/hooks";
import { signinSchema } from "@utils/validations/auth";
import { yupResolver } from "@hookform/resolvers/yup";


export type SigninValues = {
    name: string,
    email: string,
    password: string,
    rememberme: boolean,
};

export const Signin = () =>{
    const form = useForm<SigninValues>({
        defaultValues: {},
        resolver: yupResolver(signinSchema),
    });
    const { register, control,  handleSubmit, watch, formState: { errors } } = form;
    const onSubmit: SubmitHandler<SigninValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center h-screen">
            <div id="signin" className="auth transform scale-[100%] h-auto">
                <div className="form 
                  w-screen
                  max-w-[53em]
                  sm:px-24
                  my-6 p-4 rounded-md flex flex-col items-center justify-center">
                    <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                    <h3 className="text-base mt-2 mb-12">Kullanıcı Girişi</h3>
        
                    <FloatLabelHook name="name" type="text" placeholder="Kullanıcı Adı" example="" control={control} />
                    <FloatLabelHook name="email" type="text" placeholder="Eposta" example="test@test.com" control={control} />
                    <FloatLabelHook name="password" type="password" placeholder="Şifre" example="" control={control} />
                    

                    <div className="flex justify-between w-full my-2">
                        <div className="rememberme">
                            <div className="flex items-center">
                            <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" className="opacity-0
                            absolute h-6 w-6" />
                            <div className="border-2 rounded-xl border-blue-400 w-5 h-5 flex flex-shrink-0 
                            justify-center items-center mr-2 focus-within:border-blue-500">
                            <svg className="fill-current hidden  w-[0.6rem] ml-[.08rem] h-2 stroke-6 text-blue-600 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                                </g>
                            </svg>
                            </div>
                            <label htmlFor="A3-yes" className="select-none text-sm">Remember Me</label>
                        </div>


                         
                        </div>
                        <a href="/auth/forgotten" className="cursor-pointer">
                            <p className="text-lightgray text-sm text-gray-600">Şifremi Unuttum</p>
                        </a>
                    </div>

                    <button className="button" type="submit">Giriş Yap</button>
                </div>
            </div>
        </form>

    )
}


Signin.Layout = SignLayout;
Signin.Title = 'Giriş';

export default Signin;