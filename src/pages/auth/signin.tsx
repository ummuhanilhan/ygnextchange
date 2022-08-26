import { SignLayout } from "@layouts/SignLayout";
import { XCircle } from "@shared/icons";


export const Signin = () =>{

    return (
        <div id="signin" className="w-full flex items-center justify-center h-screen">
            <div className="form w-3/5 my-6 p-4 rounded-md flex flex-col items-center justify-center">
                <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                <h3 className="text-base mt-3 mb-4">Kullanıcı Girişi</h3>
                 
                {Array.from(Array(2)).map((item,key:number)=>(
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

                        </div>
                        <p className="text-sm">Beni Hatırla</p>
                        </div>
                        <a href="#"><p className="text-lightgray text-sm">Şifremi Unuttum</p></a>
                    </div>

                 <div className="button bg-yukgetir-blue text-white p-3 w-full text-center rounded-md text-sm">Giriş Yap</div>
            </div>
        </div>
    )
}


Signin.Layout = SignLayout;
Signin.Title = 'Giriş';

export default Signin;