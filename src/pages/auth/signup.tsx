import { SignLayout } from "@layouts/SignLayout";
import { FloatingLabelInput, FloatingLabelPhone } from "@shared/elements/inputs";
import { XCircle } from "@shared/icons";
import classnames from "classnames";
import React from "react";


export const Signup = () =>{
    const [status, setStatus] = React.useState(false)

    const [type, setType] = React.useState(false);
    const change = () => setType(!type);
        
    return (
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

                <FloatingLabelInput name={type?'fullname':'company'} type="text">
                    {type? 'İsim Soyisim' :'Firma Ünvanı'}
                </FloatingLabelInput>
                <FloatingLabelInput name="name" type="text">
                    Kullanıcı Adı
                </FloatingLabelInput>

                <FloatingLabelPhone name="phone">
                    Cep Telefonu
                </FloatingLabelPhone>
                <FloatingLabelInput name="email" type="email">
                    Eposta
                </FloatingLabelInput>

                <FloatingLabelInput name="password" type="password">
                    Şifre
                </FloatingLabelInput>
                <FloatingLabelInput name="confirm" type="password">
                    Şifre Tekrarı
                </FloatingLabelInput>

                </div>
                <div className="flex justify-end items-end">

                    <div className="px-20 cursor-pointer bg-yukgetir-orange mt-2 text-white p-3 w-full text-center rounded-md text-sm">
                        Üye ol
                    </div>
                </div>
            </div>
            


         

        </div>
    )
}


Signup.Layout = SignLayout;
Signup.Title = 'Üye ol!';

export default Signup;
