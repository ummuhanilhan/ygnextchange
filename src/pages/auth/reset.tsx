import { SignLayout } from "@layouts/SignLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { resetSchema } from "@utils/validations/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { FloatLabelHook } from "@shared/elements/hooks";


export type Resetvalues = {
    password: string,
    confirm: string,
};

export const Reset = () =>{
    const form = useForm<Resetvalues>({
        defaultValues: {},
        // resolver: yupResolver(resetSchema),
    });
    const { register, control,  handleSubmit, watch, formState: { errors } } = form;
    const onSubmit: SubmitHandler<Resetvalues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center h-screen">
        <div id="reset" className="auth">
            <div className="form 
                 w-screen
                 max-w-[53em]
                 sm:px-24
                 md:w-full my-6 p-4 rounded-md flex flex-col items-center justify-center">
                <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                <h3 className="text-base mt-2 mb-12">Yeni Şifre Oluştur</h3>
        
                 <FloatLabelHook name="password" type="password" placeholder="Şifre" control={control} />
                 <FloatLabelHook name="confirm" type="password" placeholder="Şifre Tekrarı" control={control} />

                 <button className="button" type="submit">Şifremi Sıfırla</button>

            </div>
        </div>
    </form>
    )
}


Reset.Layout = SignLayout;
Reset.Title = 'Şifremi unuttum!';

export default Reset;