import { SignLayout } from "@layouts/SignLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckboxHook, FloatLabelHook } from "@shared/elements/hooks";
import { signinSchema } from "@utils/validations/auth";
import { InputHook } from "@shared/elements/hooks/inputHook";
import { notify } from "@utils/helper";
import { joiResolver } from "@hookform/resolvers/joi";
import { useAppDispatch } from "stores/store";
import { selectAuth, setAuth, signin } from "stores/slices/authSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { LoadingState } from "stores/types";
import { useEffect, useState } from "react";
import api from "@utils/api";
import React from "react";


export type SigninValues = {
     email: string,
    password: string,
    remember: boolean,
};

export const Signin = () =>{
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const form = useForm<SigninValues>({
        defaultValues: {},
        resolver: joiResolver(signinSchema),
    });
    const { register, control,  handleSubmit, watch, formState: { errors } } = form;
    const onSubmit: SubmitHandler<SigninValues> = async data => {
        // dispatch(signin(data))
        // if(loading == LoadingState.LOADED) router.push('/')
        try{
            setLoading(true)
            const result:any = await api.post('/auth/signin', data)
            const {accessToken,refreshToken } = result?.data;
            setLoading(false)
            if(accessToken && refreshToken){
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                dispatch(setAuth(true))
                notify('Başarıyla giriş yapıldı!',{type:'success'})
                router.push('/')
            }
        }catch(err:any){
            setLoading(false)
            notify(err?.message)
        }


    };

    useEffect(()=>{
       //  if(loading == LoadingState.LOADED){
       //      router.push('/')
       //  }
    },[loading])
    const onError = (errors:any) => { 
        notify('Boş alanları doldurunuz!',{position:'bottom-right', theme:'light', type:'error'})
        console.log('errors', errors, form.getValues() ) };
        
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="flex items-center justify-center h-screen">
            <div id="signin" className="auth transform scale-[100%] h-auto">
                <div className="form 
                  w-screen
                  max-w-[53em]
                  sm:px-24
                  my-6 p-4 rounded-md flex flex-col items-center justify-center">
                    <img src="/logo.png" alt="yükgetir logo" className="h-14 object-contain" />
                    <h3 className="text-base mt-2 mb-12">Kullanıcı Girişi</h3>
        
                    <InputHook size='small' className='mb-2' name="email" type="text" placeholder="Eposta" example="test@test.com" control={control} />
                    <InputHook size='small' className='mb-2' name="password" type="password" placeholder="Şifre" example="" control={control} />
                    

                    <div className="flex justify-between w-full my-2">
                        <div className="remember">
                            <CheckboxHook name="remember" label="Remember Me" control={control} />
                         
                        </div>
                        <a href="/auth/forgotten" className="cursor-pointer">
                            <p className="text-lightgray text-sm text-gray-600">Şifremi Unuttum</p>
                        </a>
                    </div>

                    <button  type="submit" disabled={loading} className="text-white align-center bg-yg-blue focus:ring-4 focus:ring-blue-300 font-medium 
                    rounded-lg text-sm px-5 py-2.5 text-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                    inline-flex items-center cursor-pointer mt- p-3 w-full">
                        {loading ?(
                            <React.Fragment>
                                <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                Loading...
                            </React.Fragment>
                        ) : <>Giriş Yap</>}
                        
                    </button>
                    <a href="/auth/signup" className="mt-1">Hesabınız yok mu?</a>
                </div>
            </div>
        </form>

    )
}


Signin.Layout = SignLayout;
Signin.Title = 'Giriş';

export default Signin;