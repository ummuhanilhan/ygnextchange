import { SignLayout } from "@layouts/SignLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckboxHook, FloatLabelHook } from "@shared/elements/hooks";
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
                            <CheckboxHook name="remember" label="Remember Me" control={control} />


                         
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