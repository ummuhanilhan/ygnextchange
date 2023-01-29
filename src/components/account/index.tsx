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
import { AccountRoute, tagItems, tagItems2 } from "@utils/mock";
import { InputHook } from "@shared/elements/hooks/inputHook";
import { Upload } from "@shared/elements/uploads";
import { TextareaHook } from "@shared/elements/hooks/textareaHook";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";
import { FormFooter } from "@shared/footers";
import { PhoneHook } from "@shared/elements/hooks/phoneHook";
import { TagHook } from "@shared/elements/hooks/tagHook";
import Turkiye from '@utils/dummy/turkiye.json'
import { useAppDispatch } from "stores/store";
import { update } from "stores/slices/userSlice";
import { notify, successMessage } from "@utils/helper";
import { useSelector } from "react-redux";
import { selectDefinition } from "stores/slices/definitionSlice";
import { UploadHook } from "@shared/elements/hooks/uploadHook";

type AccountValues = {
    name: string,
    email: string,
    phone: string,
    fullname: string,
    type: boolean,
    city: any,
    address: string,
    district: any,
    accept: boolean,
    gender: any,
    birth:Date,
    driver:{
        licence: string[],
        file: string,
        year: Date,
        src_file: string,
        psychotechnical_file: string,
    },
    health:{
        blood:string,
        chronic_disease:string,
    },
    company: string,
    tax:{
        no: string,
        administration: string,
    },
    corporate:{
        mail: string,
        official: string,
        website: string,        
        phone: string        
    },

};

const initialValues = {
    name:'tester',
    email:'test@test.com',
    phone:5055555555,//'0505 555 55 55',
    fullname:'Tester Test',
    address: 'address is here',
    district:'district',
    type:false,
    accept:false,
    gender:1,
    birth:new Date('04-05-1990'),
    driver:{
        year:new Date('04-05-2000'),
        licence: ['1','2','3'],
        file:'/src_file92348.pdf',
        src_file:'/src_file92348.pdf',
        psychotechnicalal_file:'/src_file92348.pdf',

    },
    health:{
        blood:'+A',
        chronic_disease:'',
    },
    tax:{
        no:'',
        administration:'',
    },
    corporate:{
        mail:'',
        official:'',
        website:'',        
        phone:''        
    },
    tax_administrator: '',
    business_phone: 5012345678,
    authorized: '',
}

export const Account = ({uptodate}:any) => {
    const dispatch = useAppDispatch();
    const [type, setType] = React.useState(false);
    const [selected, setSelected] = React.useState<number>(1)
    const router = useRouter()
    const { pid, pathname } = router.query
    React.useEffect(()=>{},[pathname]) 
    const change = () => setType(!type);
    const form = useForm({
        //@ts-ignore
        defaultValues: uptodate,
        // resolver: yupResolver(profileSchema),
    });
    const { register, control, handleSubmit, watch, getValues, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<any> = data => {
         dispatch(update({id:uptodate._id, data}))
        console.log(uptodate._id, data)
        notify('Başarıyla Güncellendi!', {type:'success',position:'bottom-center'});
    };
    const onError = (errors:any) => { console.log(errors) };
    
    return (
        <AccountLayout selected={selected} setSelected={setSelected} >
            <form onSubmit={handleSubmit(onSubmit, onError)}
            className="flex items-center justify-start flex-col h-full informations" id="profile">
                <ProfileInformation control={control} setSelected={setSelected} selected={selected} getValues={getValues} />
                <div className={classNames(' w-full',{'hidden-':selected!=AccountRoute.ChangePassword})} ></div>
            </form>
        </AccountLayout>
    )
} 

Account.Layout = PrivateLayout

export default Account;

export const ProfileInformation = ({control, selected, setSelected, getValues}:any) =>{
    const [type, setType] = React.useState(true)
    return(
        <div className={classNames('w-full',{'hidden-':selected!=AccountRoute.ChangePassword })} >
            <ul className='w-full'>
                <Corporate control={control} corporate={type} setCorporate={setType} />
                <DriverLicense control={control}  getValues={getValues} />
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
                <p> {corporate ? 'Kurumsal' : 'Kişisel' } Bilgilerim </p>  
                {!status ? <FiChevronRight size={15} /> : <FiChevronDown size={15} />}    
            </div>
            
            <div className={classNames({'hidden':!status}, 'w-full')}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mb-4">
                  
                    <AvatarHook name="avatar" control={control} placeholder="Profil Fotoğrafı Ekle"  />
                    
                    <div>
                      <IconFrame icon={<TextareaResize className="menu-icon" />} title="Üyelik Tipi" />
                      <div 
                        onClick={()=>{
                            // setCorporate(!corporate)
                        }}
                        className="type border border-yg-blue rounded-md p-2 py-4 w-full cursor-pointer"
                        >
                            <p className="text-yg-blue">{corporate ? 'Kurumsal':'Bireysel'} Üyelik</p>
                      </div>
                        
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full'>
                    <InputHook name={type?'name':'company'} type="text" placeholder={type? 'İsim Soyisim' :'Firma Ünvanı'} example="" control={control} />
                    <InputHook name="name" type="text" placeholder="Kullanıcı Adı" example="" control={control} />
                    {/**
                     */}
                    <InputHook name="tax.no" type="text" placeholder="Vergi Numarası" example="" control={control} />
                    <InputHook name="tax.administration" type="text" placeholder="Vergi Dairesi" example="" control={control} />
                    <PhoneHook name="corporate.phone" type="text" placeholder="Şirket Telefonu" example="(212) 12 34" control={control} />

                  
                    <PhoneHook size='medium' height='55px' name="contact.phone" type="text" placeholder="Cep Telefonu" example="(212) 12 34" control={control} />
                    {/** verified **/}
                    <InputHook name="corporate.email" type="text" placeholder="Kurumsal Eposta" example="" control={control} />
                    {/** 
                     */}
                    <InputHook name="corporate.website" type="text" placeholder="Web Sitesi" example="" control={control} />
                    <InputHook name="corporate.official" className="mb-2" type="text" placeholder="Yetkili İsim Soyisim" example="" control={control} />                   
                    <SelectHook 
                            name="gender" 
                            placeholder="Cinsiyet Seçiniz"  
                            control={control} 
                            id='slug'
                            label='name'
                            items={[
                                {slug:1,name:'Erkek'},
                                {slug:0,name:'Kadın'},
                            ]} 
                            className='mb-2' 
                        />                 
                </div>    
               
                {/** selecbox **/}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <div className="w-ful">
                      
                        <SelectHook items={Turkiye} 
                            label='label'
                            value='value'
                            className='mb-2' 
                            name="city" 
                            control={control} 
                            placeholder="İl Seçiniz"  
                        />                 
                        <SelectHook 
                            disabled
                            items={[]} 
                            className='mb-2' 
                            name="district" 
                            control={control} 
                            placeholder="İlçe Seçiniz"  
                        />                 
                    </div>
                    <div className="w-full mb-2">
                        {/** 
                            <CalendarHook className='mb-2'name="birth" type="text" placeholder="Doğum Tarihi" example="" control={control} />
                         */}
                        <TextareaHook className='h-full'name="location.place.address" 
                        textarea type="text" placeholder="Şirket adresi" example="" 
                        control={control} />
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

export const DriverLicense = ({control, getValues}:any) => {
    const [status, setStatus] = React.useState(true)
    const {definitions} = useSelector(selectDefinition);

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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <TagHook 
                         name='driver.licence'
                         placeholder="Sürücü Bilgilerim" 
                         size='medium'
                         id='_id'
                         label='name'
                         items={definitions.driver}
                         control={control}
                     />
                      <CalendarHook 
                        name="driver.year" 
                        control={control} 
                        placeholder="Ehliyet Tescil Yılı" 
                    />                              
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    <UploadHook name="driver.file" control={control} placeholder="Sürücü Belgesi Ekle"  />
                    <UploadHook name="driver.src_file" control={control} placeholder="Src Belgesi Ekle" default={getValues('src_file')} />
                    <UploadHook name="driver.psychotechnicalal_file" control={control} placeholder="Psikoteknik Belgesi Ekle"  />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <FloatLabelHook size='medium' name="health.blood" type="text" placeholder="Kan Grubu" example="" control={control} />
                    <FloatLabelHook size='medium' name="health.chronic_disease" type="text" placeholder="Kronik Rahatsızlığınız Varsa Belirtiniz" example="" control={control} />
                </div>
            )}
        </li>
    )
}

 