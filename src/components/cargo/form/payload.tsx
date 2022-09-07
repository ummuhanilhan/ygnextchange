import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook } from "@shared/elements/hooks";
import React from "react";



export const Payload = ({control}:any) => {

    return (
        <React.Fragment>
            <div className='grid grid-cols-2 gap-2'>
                <TitleFrame title="Yük Cinsi">
                    <MultiSelectHook name="p1" control={control} 
                    placeholder="Yükünüzün Cinsini Yazınız" />
                </TitleFrame>
                <TitleFrame title="Yük Tanımı">
                <MultiSelectHook name="p2" control={control} 
                    placeholder="Yükünüzü Kısaca Tanımlayınız" />
                </TitleFrame>
                <TitleFrame title="Yükleme Şekli">
                    <MultiSelectHook name="p3" control={control} 
                        placeholder="Yüleme Şeklini Seçiniz" />
                </TitleFrame>
                <TitleFrame title="Boşaltma Şekli">
                    <MultiSelectHook name="p4" control={control} 
                        placeholder="Boşaltma Şekli Seçiniz" />
                </TitleFrame>
            </div>

            <div className='grid grid-cols-2 gap-2'>
                <TitleFrame title="Ağırlık">
                    <MultiSelectHook name="p5" control={control} 
                    placeholder="Ağırlık Belirtiniz" />
                </TitleFrame>
                <div>
                    <TitleFrame title="Ebat">
                        <div className='grid grid-cols-2 gap-2'>
                            <MultiSelectHook name="p6" control={control} 
                            placeholder="Hacim - Alan Belirtiniz" />
                                <MultiSelectHook name="rent" control={control} 
                            placeholder="Uzunluk x Genişlik x Yükseklik" />
                        </div>
                    </TitleFrame>
                </div>
            </div>


            <div className='grid grid-cols-3 gap-2'>
                <TitleFrame title="Ödeme Şekli">
                    <MultiSelectHook name="p7" control={control} 
                    placeholder="Ödeme Şekli Seçiniz" />
                </TitleFrame>
                <TitleFrame title="Para Birimi">
                    <MultiSelectHook name="p8" control={control} 
                    placeholder="Para Birimi Seçiniz" />
                </TitleFrame>
                <TitleFrame title="Kdv Durumu">
                    <MultiSelectHook name="p9" control={control} 
                    placeholder="Kdv Durumu Seçiniz" />
                </TitleFrame>
            </div>

                <TitleFrame title="Ücret Hesaplayıcı">
                    <div className='grid grid-cols-3 gap-2'>
                            <MultiSelectHook name="p10" control={control} 
                            placeholder="Ağırlık Giriniz (Ton Cinsinden)" />
                            <MultiSelectHook name="p11" control={control} 
                            placeholder="Birim Fiyat Giriniz" />
                            <MultiSelectHook name="p12" control={control} 
                            placeholder="Toplam Tutar" />
                            <div>
                                
                            </div>
                    </div>
                </TitleFrame>



        </React.Fragment>
    )
}


export default Payload;