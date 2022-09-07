import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame, IconFrameCovered, IconFrameDropdown } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import { GeoAlt, Person } from "@shared/icons";
import { Search } from "@components/cargo/filter";
import { FloatLabelHook, FloatLabelPhoneHook, MultiSelectHook } from "@shared/elements/hooks";
import { FormFooter } from ".";

export const Address = () => {
    return (
        <AccountLayout>
            <AddressCreate />
            <AddressList />
        </AccountLayout>
    )
}

Address.Layout = PrivateLayout;

export default Address;

export type AddressValues = {
    name: string,
};

const addressValues = {
    name:'',
}

export const AddressCreate = () => {
    const form = useForm<AddressValues>({
        defaultValues: addressValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<AddressValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };
    return (
        <React.Fragment>
            <IconFrameCovered
                icon={<GeoAlt className="menu-icon" />}
                title='Adres Detay Bilgileri'
            >
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="grid grid-cols-2 gap-2">
                        <FloatLabelHook name="address" type="text" placeholder="Ankara Şirket Adresim" example="" control={control} />
                        <FloatLabelHook name="address_search" type="text" placeholder="Mersin Lİmanı" example="" control={control} />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                              <FloatLabelHook name="address_detail" type="text" 
                              placeholder="Haritadan Seçili Adres Detayları" disabled example="" control={control} />
                              <div className='grid grid-cols-2 gap-2'>
                                <MultiSelectHook name="city" control={control} disabeld placeholder="İl Seçiniz"  />                 
                                <MultiSelectHook name="district" control={control} disabeld placeholder="İlçe Seçiniz"  />    
                              </div>
                             <FloatLabelHook name="directions" type="text" placeholder="Adres Tarifi İçin Ek Detay Ekleyiniz (Opsiyonel)" example="" control={control} />
                        </div>
                        <div className="map">

                        </div>
                        <div></div>
                    </div>
                </form>
            </IconFrameCovered>
            <IconFrameCovered
                icon={<Person className="menu-icon" />}
                title='Adres İletişim Bilgileri'
            >
                <div className="grid grid-cols-3 gap-2 mb-2 change-password">
                    <FloatLabelHook name="name" type="text" 
                    placeholder="İsim Soyisim" example="" control={control} />
                    <FloatLabelPhoneHook name="phone" type="text" 
                    placeholder="Cep Telefonu" example="(212) 12 34" control={control} />
                    <FloatLabelHook name="email" type="text" 
                    placeholder="Eposta Adresi" example="" control={control} />
                </div>
            </IconFrameCovered>

            <FormFooter />
        </React.Fragment>
    )
}

export const AddressList = () => {

    return (
        <React.Fragment>
            <IconFrameCovered
                icon={<GeoAlt className="menu-icon" />}
                title='İletişim Ayarlarım'
            >
                <div className='grid grid-cols-2 gap-2 mb-4'>
                     <Search placeholder='Adres Başlığı Ara' />
                     <p className='button bg-yukgetir-blue py-2 px-10 flex justify-center text-sm
                     items-center text-white rounded-md cursor-pointer'>Yeni Adres Ekle</p>
                </div>
                <ul className='grid grid-cols-3 gap-3'>
                   {Array.from(Array(5)).map((item,i:number)=>(
                     <li className='address-box bg-white p-2 rounded-md' key={`address-${i}`}>
                        <h5 className='text-yukgetir-blue text-sm font-medium'>Adres Başlığı</h5>
                        <p className='text-gray-900 text-sm'>Karaduvar, Mersin Limanı, 33020 - Merkez...</p>
                        <p className='text-gray-400 text-sm'>Sercan İzci - +90 543 522 12 13</p>
                        <div className='flex justify-end w-full mt-2'>
                            <p className='bg-yukgetir-orange text-sm mr-1 text-white flex items-center 
                            hover:bg-transparent hover:text-yukgetir-orange border border-1 border-transparent hover:border-yukgetir-orange
                            px-4 py-1 rounded-md cursor-pointer'>Sil</p>
                            <p className='bg-yukgetir-blue text-sm ml-1 text-white flex items-center 
                            hover:bg-transparent hover:text-yukgetir-blue border border-1 border-transparent hover:border-yukgetir-blue
                            px-4 py-1 rounded-md cursor-pointer'>Düzenle</p>
                        </div>
                    </li>
                   ))}
                </ul>
            </IconFrameCovered>
        </React.Fragment>
    )
}