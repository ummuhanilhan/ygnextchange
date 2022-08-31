import { SignLayout } from "@layouts/SignLayout";
import { FloatingLabelInput, FloatingLabelPhone } from "@shared/elements/inputs";
import { XCircle } from "@shared/icons";
import { signupSchema } from "@utils/validations/auth";
import classnames from "classnames";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckboxHook, FloatLabelHook, FloatLabelPhoneHook } from "@shared/elements/hooks";


export type SignupValues = {
    name: string,
    email: string,
    phone: string,
    password: string,
    confirm: string,
    fullname: string,
    company: string,
    type: boolean,
};


export const Signup = () =>{
    const [status, setStatus] = React.useState(false)
    const [type, setType] = React.useState(false);
    const change = () => setType(!type);
    const form = useForm<SignupValues>({
        defaultValues: {
            name:'',
            email:'',
            phone:'',
            password:'',
            confirm:'',
            fullname:'',
            company:'',
            type:false,
        },
        resolver: yupResolver(signupSchema),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<SignupValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} 
            className="flex items-center justify-center h-screen"
        >
             <div id="signup" className="auth">
                <div className="form 
                w-screen
                max-w-[53em]
                sm:px-24
                my-6 p-4 rounded-md flex flex-col items-center justify-center">
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
                        <FloatLabelHook name={type?'fullname':'company'} type="text" placeholder={type? 'İsim Soyisim' :'Firma Ünvanı'} example="" control={control} />
                        <FloatLabelHook name="name" type="text" placeholder="Kullanıcı Adı" example="" control={control} />
                        <FloatLabelPhoneHook name="phone" type="text" placeholder="Cep Telefonu" example="(212) 12 34" control={control} />
                        <FloatLabelHook name="email" type="text" placeholder="Eposta" example="orn: deneme@gmail.com" control={control} />
                        <FloatLabelHook name="password" type="password" placeholder="Şifre" example="" control={control} />
                        <FloatLabelHook name="confirm" type="password" placeholder="Şifre Tekrarı" example="" control={control} />
                    </div>
                    <div className="my-2 flex items-start flex-col gap-2 justify-center w-full">
                        <CheckboxHook name="terms" control={control}>
                            <p className="">
                                <span className="text-blue-500 cursor-pointer"> Kullanıcı & Üyelik Sözleşmesi </span>
                                'ni okudum, anladım ve kabul ediyorum.
                            </p>
                        </CheckboxHook>
                        <CheckboxHook name="kvkk" control={control} >
                            <p className="flex items-start justify-center">
                                <span className="text-blue-500 cursor-pointer"> KVKK Metni</span>
                                'ni ve 
                                <span className="text-blue-500 cursor-pointer"> Aydınlatma Metni </span>
                                'ni okudum, anladım ve kabul ediyorum.
                            </p>
                        </CheckboxHook>
                        <CheckboxHook name="campaign" control={control}>
                            <p className="">
                                Kampanya ve tanıtımlar için Email, Telefon ve Sms ile iletişim kurulmasını kabul ediyorum.
                            </p>
                        </CheckboxHook>
                    </div>
                    <div className="flex justify-end items-end w-full">
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
