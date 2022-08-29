import { SignLayout } from "@layouts/SignLayout";
import { FloatingLabelInput, FloatingLabelPhone } from "@shared/elements/inputs";
import { XCircle } from "@shared/icons";
import { signupSchema } from "@utils/validations/auth";
import classnames from "classnames";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FloatLabelHook } from "@shared/elements/hooks";


export type SignupValues = {
    name: string,
    email: string,
    phone: string,
    password: string,
    confirm: string,
    fullname: string,
    type: boolean,
};


export const Signup = () =>{
    const [status, setStatus] = React.useState(false)
    const [type, setType] = React.useState(false);
    const change = () => setType(!type);
    const form = useForm<SignupValues>({
        defaultValues: {},
        resolver: yupResolver(signupSchema),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<SignupValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors, e) => {
        console.log(errors, e)

    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="flex items-center justify-center h-screen">
            <div id="signup" className="auth">
                <div className="form w-3/6 md:w-full my-6 p-4 rounded-md flex flex-col items-center justify-center">
                    <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                    <h3 className="text-base mt-2 mb-12">Üye ol</h3>
    
                    <ul className="w-full flex justify-between gap-2 mb-4">
                        <li className={classnames('p-3 flex pl-4 cursor-pointer w-full rounded-md border text-sm', {
                            'border-yukgetir-blue bg-yukgetir-blue text-white': type,
                            ' bg-white  border-gray-300 text-gray-500': !type
                        } )} onClick={change}>Bireysel Üyelik</li>
                        <li className={classnames('p-3 flex pl-4 cursor-pointer w-full rounded-md border text-sm', {
                            'border-yukgetir-blue bg-yukgetir-blue text-white': !type,
                            ' bg-white  border-gray-300 text-gray-500': type
                        } )} onClick={change}>Kurumsal üyelik</li>
                    </ul>

                    <div className="grid grid-cols-2 gap-2 w-full">

                        <FloatLabelHook name={type?'fullname':'company'} type="text" placeholder={type? 'İsim Soyisim' :'Firma Ünvanı'} control={control} />
                        <FloatLabelHook name="name" type="text" placeholder="Kullanıcı Adı" control={control} />
                        <FloatingLabelPhone name="phone" type="text" placeholder="Cep Telefonu" control={control} />
                        <FloatLabelHook name="email" type="text" placeholder="Eposta" control={control} />
                        <FloatLabelHook name="password" type="password" placeholder="Şifre" control={control} />
                        <FloatLabelHook name="confirm" type="password" placeholder="Şifre Tekrarı" control={control} />
                         
                    </div>
                    <div className="flex justify-end items-end">

                        <button type="submit" className="px-20 cursor-pointer bg-yukgetir-orange mt-2 text-white p-3 w-full text-center rounded-md text-sm">
                            Üye ol
                        </button>
                    </div>
                </div>
                


            

            </div>
        </form>
        
    )
}


Signup.Layout = SignLayout;
Signup.Title = 'Üye ol!';

export default Signup;
