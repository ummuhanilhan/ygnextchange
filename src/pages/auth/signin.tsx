import { SignLayout } from "@layouts/SignLayout";
import { XCircle } from "@shared/icons";
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div id="signin" className="auth">
                <div className="form w-3/6 md:w-full my-6 p-4 rounded-md flex flex-col items-center justify-center">
                    <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                    <h3 className="text-base mt-2 mb-12">Kullanıcı Girişi</h3>
        
                    <FloatLabelHook name="name" type="text" placeholder="Kullanıcı Adı" control={control} />
                    <FloatLabelHook name="email" type="text" placeholder="Eposta" control={control} />
                    <FloatLabelHook name="password" type="password" placeholder="Şifre" control={control} />
                    

                    <div className="flex justify-between w-full my-2">
                        <div className="checkbox">
                        <div className="check">
                        <div className=" flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" 
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Beni Hatırla
                            </label>
                        </div>
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