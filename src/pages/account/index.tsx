import React from "react";
import { AccountLayout, AccountType } from "@layouts/AccountLayouts";
import PrivateLayout from "@layouts/PrivateLayout";
import { CreditCard2Front, HeartPulse, People, Person } from "@shared/icons";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { CheckboxHook, FloatLabelHook, FloatLabelPhoneHook } from "@shared/elements/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@utils/validations/account";
import classNames from "classnames";

export type SignupValues = {
    name: string,
    email: string,
    phone: string,
    fullname: string,
    company: string,
    type: boolean,
    tax: string,
    tax_administrator: string,
    business_phone: string,
    website: string,
    authorized: string,
    gender: string,
    city: string,
    address: string,
    district: string,
    accept: boolean,
};

const initialValues = {
    name:'tester',
    email:'test@test.com',
    phone:'0505 555 55 55',
    fullname:'Tester Test',
    company:'HyperWise.co',
    tax: '',
    tax_administrator: '',
    business_phone: '',
    website: '',
    authorized: '',
    gender: true,
    city: '',
    address: '',
    district: '',
    type:false,
    accept:false,
}

export const Account = () => {
    const [type, setType] = React.useState(false);
    const [selected, setSelected] = React.useState<number>(1)
    const change = () => setType(!type);
    const form = useForm<SignupValues>({
        defaultValues: initialValues,
        resolver: yupResolver(profileSchema),
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
        <AccountLayout selected={selected} setSelected={setSelected} >
            <form onSubmit={handleSubmit(onSubmit, onError)}
            className="flex items-center justify-start flex-col h-screen" id="profile">
                <div className="">
                    <div className="avatar"></div>
                    <div className="type"></div>
                </div>
                <ul className={classNames('informations w-full',{'hidden':selected!=AccountType.Profile})}>
                    <Corporate control={control} />
                    <li> 
                        <a href="#" className="centerize">
                            <Person className="menu-icon" /> <p>Kişisel Bilgilerim</p> <FiChevronRight size={15} /> 
                        </a>
                        <div className="">

                        
                        </div>
                    </li>
                    <li> 
                        <a href="#" className="centerize">
                        <CreditCard2Front className="menu-icon" /> <p>Sürücü Bilgilerim</p> <FiChevronRight size={15} /> 
                        </a>
                        <div className="">

                        
                        </div>
                    </li>
                    <li> 
                        <a href="#" className="centerize">
                        <HeartPulse className="menu-icon" /> <p>Sağlık Bilgilerim</p> <FiChevronRight size={15} /> 
                        </a>
                        <div className="">

                        
                        </div>
                    </li>
                </ul>
            
            
            </form>
        </AccountLayout>
    )
}


Account.Layout = PrivateLayout

export default Account;

export const Corporate = ({control}:any) => {
    const [type, setType] = React.useState(false)
    const [status, setStatus] = React.useState(false)

    return(
        <li className="personal flex items-start flex-col"> 
            <a href="#" className="centerize">
                <People className="menu-icon" /> <p>Kurumsal Bilgilerim</p> <FiChevronDown size={15} />    
            </a>
            <div className="grid grid-cols-2 gap-2 w-full">
                <FloatLabelHook name={type?'fullname':'company'} type="text" placeholder={type? 'İsim Soyisim' :'Firma Ünvanı'} example="" control={control} />
                <FloatLabelHook name="name" type="text" placeholder="Kullanıcı Adı" example="" control={control} />
                <FloatLabelHook name="tax" type="text" placeholder="Vergi Numarası" example="" control={control} />
                <FloatLabelHook name="tax_administrator" type="text" placeholder="Vergi Dairesi" example="" control={control} />
                <FloatLabelPhoneHook name="business_phone" type="text" placeholder="Şirket Telefonu" example="(212) 12 34" control={control} />
                <FloatLabelPhoneHook name="phone" type="text" placeholder="Cep Telefonu" example="(212) 12 34" control={control} />
                {/** verified **/}
                <FloatLabelHook name="email" type="text" placeholder="Kurumsal Eposta" example="" control={control} />
                <FloatLabelHook name="website" type="text" placeholder="Web Sitesi" example="" control={control} />
                <FloatLabelHook name="authorized" type="text" placeholder="Yetkili İsim Soyisim" example="" control={control} />
                {/** selecbox **/}
                <FloatLabelHook name="gender" type="text" placeholder="Cinsiyet" example="" control={control} />
                <FloatLabelHook name="city" type="text" placeholder="İl" example="" control={control} />
                {/** textarea **/}
                <FloatLabelHook name="address" type="text" placeholder="Şirket adresi" example="" control={control} />
                <FloatLabelHook name="district" type="text" placeholder="İlçe" example="" control={control} />
            </div>    
           <FormFooter 
            control={control}
           />
        </li>
    )
}

export const Personal = () => {
    const [status, setStatus] = React.useState(false)

    return(
        <div>

        </div>
    )
}

export const DriverLicense = () => {
    const [status, setStatus] = React.useState(false)

    return(
        <div>

        </div>
    )
}

export const Healthy = () => {
    const [status, setStatus] = React.useState(false)

    return(
        <div>

        </div>
    )
}

export const FormFooter = ({control}:any) => {

    return (
        <React.Fragment>
            <div className="mt-5">
                <CheckboxHook name="accept" label="Bilgilerimin doğru olduğunu onaylıyorum ve teklif verdiğim ilan sahipleriyle paylaşılmasına izin veriyorum" control={control} />
            </div>
            <div className="w-full flex justify-end">
                <button className="bg-yukgetir-orange p-3 px-12 text-white rounded-md">Vazgeç</button>
                <button type="submit" className="bg-yukgetir-blue p-3 px-12 ml-2 text-white rounded-md">Güncelle</button>
            </div>
        </React.Fragment>
    )
}