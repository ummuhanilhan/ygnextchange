import { SignLayout } from "@layouts/SignLayout";
import { FloatingLabelInput } from "@shared/elements/inputs";
import { XCircle } from "@shared/icons";


export const Signin = () =>{

    return (
        <div id="signin" className="auth">
            <div className="form w-3/6 md:w-full my-6 p-4 rounded-md flex flex-col items-center justify-center">
                <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                <h3 className="text-base mt-2 mb-12">Kullanıcı Girişi</h3>
     
                <FloatingLabelInput name="username" type="text">
                    Kullanıcı Adı
                </FloatingLabelInput>
                <FloatingLabelInput name="password" type="password">
                    Şifre
                </FloatingLabelInput>
                
                {false && (
                    <div className="relative w-full">
                        <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Floating filled</label>
                    </div>
                )}

                {false && Array.from(Array(1)).map((item,key:number)=>(
                    <div key={`f-${key}`}  className="input bg-white w-full h-12 rounded-md flex border border-gray 
                    justify-between items-center px-4 mb-3">
                        <input type="text" 
                            placeholder="Şifrenizi Giriniz"
                            className="bg-transparent border-none outline-none h-full w-full 
                            text-sm"
                        />
                        <div className="ml-2">
                            <XCircle className="h-4 text-gray" />
                        </div>
                    </div>
                 ))}

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
                    <a href="#"><p className="text-lightgray text-sm text-gray-600">Şifremi Unuttum</p></a>
                </div>

                 <div className="button cursor-pointer bg-yukgetir-blue text-white p-3 w-full text-center rounded-md text-sm">Giriş Yap</div>
            </div>
        </div>
    )
}


Signin.Layout = SignLayout;
Signin.Title = 'Giriş';

export default Signin;