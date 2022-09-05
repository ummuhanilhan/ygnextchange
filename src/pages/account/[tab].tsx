import React from "react";
import { AccountLayout, AccountRoute, AccountType } from "@layouts/AccountLayouts";
import PrivateLayout from "@layouts/PrivateLayout";
import { CardImage, CloudArrowUp, CreditCard2Front, HeartPulse, People, Person, TextareaResize } from "@shared/icons";
import { FiChevronDown, FiChevronRight, FiXCircle } from "react-icons/fi";
import { AvatarHook, CheckboxHook, FileUploadHook, FloatLabelHook, FloatLabelPhoneHook, MultiSelectHook } from "@shared/elements/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@utils/validations/account";
import classNames from "classnames";
import { IconFrame } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'

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
    gender: any,
    city: any,
    address: string,
    district: any,
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
    address: '',
    type:false,
    accept:false,
}

export const Account = () => {
    const [type, setType] = React.useState(false);
    const [selected, setSelected] = React.useState<number>(1)
    const router = useRouter()
    const { pid, pathname } = router.query
    React.useEffect(()=>{
        alert(pathname)
        
    },[pid])

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
            className="flex items-center justify-start flex-col h-screen informations" id="profile">
             
                <ProfileInformation control={control} setSelected={setSelected} selected={selected} />

                <div className={classNames(' w-full',{'hidden':selected!=AccountType.ChangePassword})} >

                </div>

                <div className={classNames(' w-full',{'hidden':selected!=AccountType.AddressList})} >

                </div>

                <div className={classNames(' w-full',{'hidden':selected!=AccountType.Favorites})} >

                </div>

                <div className={classNames(' w-full',{'hidden':selected!=AccountType.Settings})} >

                </div>
            
            </form>
        </AccountLayout>
    )
}


Account.Layout = PrivateLayout

export default Account;

export const ProfileInformation = ({control, selected, setSelected}:any) =>{

    return(
        <div className={classNames('w-full',{'hidden':selected!=AccountType.Profile})} >
            <ul className='w-full'>
                <Corporate control={control} />
                <DriverLicense control={control} />
                <Healthy control={control} />

            </ul>
            <FormFooter label="Bilgilerimin doğru olduğunu onaylıyorum ve teklif verdiğim ilan sahipleriyle paylaşılmasına izin veriyorum" control={control} />
        </div>
    )
}

export const Corporate = ({control}:any) => {
    const [type, setType] = React.useState(false)
    const [status, setStatus] = React.useState(false)

    return(
        <li className="personal flex items-start flex-col"> 
            <a href="#" className="centerize" onClick={()=>setStatus(!status)}>
                <People className="menu-icon" /> <p>Kurumsal Bilgilerim</p> {status ? <FiChevronRight size={15} /> : <FiChevronDown size={15} />}    
            </a>
            <div className={classNames({'hidden':status}, 'w-full')}>

                <div className="grid grid-cols-2 gap-2 w-full mb-4">
                    <div className="flex items-start w-full gap-3">
                        <div className="avatar">
                            <img src="/assets/avatar.svg" width="135" />
                        </div>
                        <div className="w-full flex flex-start flex-col">
                            <IconFrame icon={<CardImage className="menu-icon" />} title="Profil Fotoğrafım" />
                            <AvatarHook name="avatar" control={control} placeholder="Profil Fotoğrafı Ekle"  />
                            <p className="text-gray-400 text-sm mt-1"> JPG & PNG uzantılı dosyalar aizin verilir. (Maks. 500kb) </p>
                        </div>
                    </div>
                    <div>
                      <IconFrame icon={<TextareaResize className="menu-icon" />} title="Üyelik Tipi" />
                      <div className="type border border-yukgetir-blue rounded-md p-2 py-4 w-full cursor-pointer">
                            <p className="text-yukgetir-blue">Kurumsal Üyelik</p>
                      </div>
                        
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 w-full'>
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
                    <MultiSelectHook name="gender" control={control} placeholder="Cinsiyet Seçiniz"  />                 
                    <MultiSelectHook name="city" control={control} placeholder="İl Seçiniz"  />                 
                    <MultiSelectHook name="district" control={control} placeholder="İlçe Seçiniz"  />                 

                    {/** textarea **/}
                    <FloatLabelHook name="address" textarea type="text" placeholder="Şirket adresi" example="" control={control} />
                </div>    
                
            </div>
        </li>
    )
}

export const Personal = ({control}:any) => {
    const [status, setStatus] = React.useState(false)

    return(
        <li> 
        <a href="#" className="centerize">
            <Person className="menu-icon" /> <p>Kişisel Bilgilerim</p> <FiChevronRight size={15} /> 
        </a>
        <div className="">

        
        </div>
    </li>
    )
}

export const DriverLicense = ({control}:any) => {
    const [status, setStatus] = React.useState(false)

    return(
        <li> 
        <a href="#" className="centerize">
        <CreditCard2Front className="menu-icon" /> <p>Sürücü Bilgilerim</p> <FiChevronRight size={15} /> 
        </a>
        <div>
             <div className="grid grid-cols-2 gap-2">
                <FloatLabelHook name="driver" type="text" placeholder="Sürücü Bilgilerim" example="" control={control} />
                <MultiSelectHook name="licence_year" control={control} placeholder="Ehliyet Tescil Yılı"  />                 
            </div>

            <div className="grid grid-cols-3 gap-2 mt-2">
                <FileUploadHook name="driver_file" control={control} placeholder="Sürücü Belgesi Ekle"  />
                <FileUploadHook name="src_file" control={control} placeholder="Src Belgesi Ekle"  />
                <FileUploadHook name="psychotechnical_file" control={control} placeholder="Psikoteknik Belgesi Ekle"  />
            </div>

        </div>
        </li>
    )
}

export const Healthy = ({control}:any) => {
    const [status, setStatus] = React.useState(false)

    return(
        <li> 
            <a href="#" className="centerize">
            <HeartPulse className="menu-icon" /> <p>Sağlık Bilgilerim</p> <FiChevronRight size={15} /> 
            </a>
            <div className="grid grid-cols-2 gap-2">
                <FloatLabelHook name="bloodgroup" type="text" placeholder="Kan Grubu" example="" control={control} />
                <FloatLabelHook name="disease" type="text" placeholder="Kronik Rahatsızlığınız Varsa Belirtiniz" example="" control={control} />
            </div>
        </li>
    )
}

export const FormFooter = ({control, label}:any) => {

    return (
        <React.Fragment>
            <div className="mt-5 flex items-start my-1">
                <CheckboxHook name="accept" label={label} control={control} />
            </div>
            <div className="w-full flex justify-end">
                <button className="bg-yukgetir-orange p-3 px-12 text-white rounded-md">Vazgeç</button>
                <button type="submit" className="bg-yukgetir-blue p-3 px-12 ml-2 text-white rounded-md">Güncelle</button>
            </div>
        </React.Fragment>
    )
}