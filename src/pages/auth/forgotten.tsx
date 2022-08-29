import { SignLayout } from "@layouts/SignLayout";
import { FloatingLabelInput } from "@shared/elements/inputs";
import { XCircle } from "@shared/icons";


export const Forgotten = () =>{

    return (
        <div id="forgotten" className="auth">
            <div className="form w-3/6 md:w-full my-6 p-4 rounded-md flex flex-col items-center justify-center">
                <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                <h3 className="text-base mt-2 mb-12">Kullanıcı Girişi</h3>
     
                <FloatingLabelInput name="email" type="email">
                    Eposta
                </FloatingLabelInput>
             

                 <div className="button">
                    Şifremi yenile
                 </div>
            </div>
        </div>
    )
}


Forgotten.Layout = SignLayout;
Forgotten.Title = 'Şifremi unuttum!';

export default Forgotten;