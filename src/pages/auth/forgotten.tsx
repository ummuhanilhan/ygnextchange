import { SignLayout } from "@layouts/SignLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { forgottenSchema } from "@utils/validations/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { FloatLabelHook } from "@shared/elements/hooks";


export type SigninValues = {
    name: string,
    email: string,
    password: string,
    rememberme: boolean,
};

export const Forgotten = () =>{
    const form = useForm<SigninValues>({
        defaultValues: {},
        resolver: yupResolver(forgottenSchema),
    });
    const { register, control,  handleSubmit, watch, formState: { errors } } = form;
    const onSubmit: SubmitHandler<SigninValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center h-screen">
        <div id="forgotten" className="auth">
            <div className="form w-3/6 md:w-full my-6 p-4 rounded-md flex flex-col items-center justify-center">
                <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                <h3 className="text-base mt-2 mb-12">Kullanıcı Girişi</h3>
        
                 <FloatLabelHook name="email" type="text" placeholder="Eposta" control={control} />

                 <button className="button" type="submit">Şifremi Yenile</button>

            </div>
        </div>
    </form>
    )
}


Forgotten.Layout = SignLayout;
Forgotten.Title = 'Şifremi unuttum!';

export default Forgotten;