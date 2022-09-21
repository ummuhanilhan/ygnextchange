import React from "react";
import { AccountLayout } from "@layouts/AccountLayouts";
import PrivateLayout from "@layouts/PrivateLayout";
import { CardImage, CloudArrowUp, CreditCard2Front, HeartPulse, People, Person, TextareaResize } from "@shared/icons";
import { FiChevronDown, FiChevronRight, FiXCircle } from "react-icons/fi";
import { AvatarHook, CheckboxHook, FileUploadHook, FloatLabelHook, FloatLabelPhoneHook } from "@shared/elements/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@utils/validations/account";
import classNames from "classnames";
import { IconFrame, IconFrameDropdown } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import { AccountRoute, tagItems } from "@utils/mock";
import { InputHook } from "@shared/elements/hooks/inputHook";
import { Upload } from "@shared/elements/uploads";
import { TextareaHook } from "@shared/elements/hooks/textareaHook";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";

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
    React.useEffect(()=>{},[pathname])

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
            className="flex items-center justify-start flex-col h-full informations" id="profile">
                <ProfileInformation control={control} setSelected={setSelected} selected={selected} />
                <div className={classNames(' w-full',{'hidden-':selected!=AccountRoute.ChangePassword})} ></div>
            </form>
        </AccountLayout>
    )
}


Account.Layout = PrivateLayout

export default Account;

export const ProfileInformation = ({control, selected, setSelected}:any) =>{
    const [type, setType] = React.useState(true)
    return(
        <div className={classNames('w-full',{'hidden-':selected!=AccountRoute.ChangePassword })} >
            <ul className='w-full'>
                <Corporate control={control} corporate={type} setCorporate={setType} />
                <DriverLicense control={control} />
                <Healthy control={control} />

            </ul>
            <FormFooter check label="Bilgilerimin doğru olduğunu onaylıyorum ve teklif verdiğim ilan sahipleriyle paylaşılmasına izin veriyorum" control={control} />
        </div>
    )
}

export const Corporate = ({control, corporate, setCorporate}:any) => {
    const [type, setType] = React.useState(false)
    const [status, setStatus] = React.useState(true)

    return(
        <li className="personal flex items-start flex-col"> 
            <div className="centerize cursor-pointer" onClick={()=>setStatus(!status)}>
                <People className="menu-icon" /> 
                <p> {corporate ? 'Kurumsal' : 'Kişisel' } Bilgilerim</p>  
                {!status ? <FiChevronRight size={15} /> : <FiChevronDown size={15} />}    
            </div>
            
            <div className={classNames({'hidden':!status}, 'w-full')}>

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
                      <div 
                        onClick={()=>setCorporate(!corporate)}
                        className="type border border-yg-blue rounded-md p-2 py-4 w-full cursor-pointer"
                        >
                            <p className="text-yg-blue">{corporate ? 'Kurumsal':'Bireysel'} Üyelik</p>
                      </div>
                        
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 w-full'>
                    <InputHook name={type?'fullname':'company'} type="text" placeholder={type? 'İsim Soyisim' :'Firma Ünvanı'} example="" control={control} />
                    <InputHook name="name" type="text" placeholder="Kullanıcı Adı" example="" control={control} />
                    <InputHook name="tax" type="text" placeholder="Vergi Numarası" example="" control={control} />
                    <InputHook name="tax_administrator" type="text" placeholder="Vergi Dairesi" example="" control={control} />
                    <FloatLabelPhoneHook name="business_phone" type="text" placeholder="Şirket Telefonu" example="(212) 12 34" control={control} />
                    <FloatLabelPhoneHook name="phone" type="text" placeholder="Cep Telefonu" example="(212) 12 34" control={control} />
                    {/** verified **/}
                    <InputHook name="email" type="text" placeholder="Kurumsal Eposta" example="" control={control} />
                    <InputHook name="website" type="text" placeholder="Web Sitesi" example="" control={control} />
                    <InputHook name="authorized" className="mb-2" type="text" placeholder="Yetkili İsim Soyisim" example="" control={control} />                   
                </div>    
               
                {/** selecbox **/}
                <div className='grid grid-cols-2 gap-2'>
                    <div className="w-ful">
                        <SelectHook items={tagItems} className='mb-2' name="gender" control={control} placeholder="Cinsiyet Seçiniz"  />                 
                        <SelectHook items={[]} className='mb-2' name="city" control={control} placeholder="İl Seçiniz"  />                 
                        <SelectHook items={[]} className='mb-2' name="district" control={control} placeholder="İlçe Seçiniz"  />                 
                    </div>
                    <div className="w-full">
                        <CalendarHook className='mb-2'name="birth" type="text" placeholder="Doğum Tarihi" example="" control={control} />
                        <TextareaHook className='mt-2'name="address" textarea type="text" placeholder="Şirket adresi" example="" control={control} />
                    </div>
                </div>

            
            </div>
        </li>
    )
}

export const Personal = ({control}:any) => {
    const [status, setStatus] = React.useState(true)

    return(
        <li> 
       
        <IconFrameDropdown 
            icon={<Person className="menu-icon" />}
            title='Kişisel Bilgilerim'
            status={status}
            setStatus={setStatus}
        />
        {status && (
             <div className="">

        
             </div>
        )}
    </li>
    )
}

export const DriverLicense = ({control}:any) => {
    const [status, setStatus] = React.useState(true)

    return(
        <li> 
            <IconFrameDropdown 
                icon={<CreditCard2Front className="menu-icon" />}
                title='Sürücü Bilgilerim'
                status={status}
                setStatus={setStatus}
            />
            
            {status&&(
                <div>
                <div className="grid grid-cols-2 gap-2">
                    <InputHook name="driver" type="text" placeholder="Sürücü Bilgilerim" example="" control={control} />
                    <SelectHook items={[]} name="licence_year" control={control} placeholder="Ehliyet Tescil Yılı"  />                 
                </div>
    
                <div className="grid grid-cols-3 gap-2 mt-2">
                <Upload name="driver_file" control={control} placeholder="Sürücü Belgesi Ekle"  />
                    <Upload name="src_file" control={control} placeholder="Src Belgesi Ekle"  />
                    <Upload name="psychotechnical_file" control={control} placeholder="Psikoteknik Belgesi Ekle"  />
                </div>
    
            </div>
            )}
        </li>
    )
}

export const Healthy = ({control}:any) => {
    const [status, setStatus] = React.useState(true)

    return(
        <li> 
            <IconFrameDropdown 
                icon={<HeartPulse className="menu-icon" />}
                title='Sağlık Bilgilerim'
                status={status}
                setStatus={setStatus}
            />
            
            {status&&(
                <div className="grid grid-cols-2 gap-2">
                    <FloatLabelHook name="bloodgroup" type="text" placeholder="Kan Grubu" example="" control={control} />
                    <FloatLabelHook name="disease" type="text" placeholder="Kronik Rahatsızlığınız Varsa Belirtiniz" example="" control={control} />
                </div>
            )}
        </li>
    )
}

export const FormFooter = ({control, label, check}:any) => {

    return (
        <React.Fragment>
            {check && (
                 <div className="mt-5 flex items-start my-1 mb-5">
                    <CheckboxHook name="accept" label={label} control={control} />
                </div>
            )}
            <div className="w-full flex justify-end">
                <button className="bg-yg-orange p-3 px-12 text-white rounded-md cursor-pointer">Vazgeç</button>
                <button type="submit" className="bg-yg-blue p-3 px-12 ml-2 text-white rounded-md cursor-pointer">Güncelle</button>
            </div>
        </React.Fragment>
    )
}