import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook, SelectHook } from "@shared/elements/hooks/selectHook";
import { tagItems } from "@utils/mock";
import React from "react";
import { InputHook } from "@shared/elements/hooks/inputHook";



export const Payload = ({control}:any) => {

    return (
        <React.Fragment>
            <div className='grid grid-cols-2 gap-2'>
                <TitleFrame title="Yük Cinsi">
                    <InputHook
                        name="p1"
                        className=' bg-white'
                        placeholder='Yükünüzün Cinsini Yazınız'
                        size='medium'
                        control={control}
                    />
                </TitleFrame>
                <TitleFrame title="Yük Tanımı">
                    <InputHook
                        name="p2"
                        className=' bg-white'
                        placeholder='Yükünüzü Kısaca Tanımlayınız'
                        size='medium'
                        control={control}
                    />
                
                </TitleFrame>
                <TitleFrame title="Yükleme Şekli">
                    <SelectHook 
                        name="p3" 
                        control={control} 
                        placeholder="Yükleme Şeklini Seçiniz" 
                        className=' '
                        size='medium'
                        id='id'
                        items={tagItems}
                    />
                </TitleFrame>
                <TitleFrame title="Boşaltma Şekli">
                <SelectHook 
                        name="p4" 
                        control={control} 
                        placeholder="Boşaltma Şeklini Seçiniz" 
                        className=' '
                        size='medium'
                        id='id'
                        items={tagItems}
                    />
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