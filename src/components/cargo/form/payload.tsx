import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook, SelectHook } from "@shared/elements/hooks/selectHook";
import { tagItems } from "@utils/mock";
import React from "react";
import { InputHook } from "@shared/elements/hooks/inputHook";
import { meterUnits, weightUnits } from "@utils/dummy/definitions";
import { Input, InputGroup } from "@shared/elements/groups";



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
                <TitleFrame title="Ağırlık" className='flex-2' >
                    <Input
                        name='weight'
                        placeholder='Ağırlık Belirtiniz'
                        size='medium'
                        border
                        items={meterUnits}
                        control={control}
                    />
                </TitleFrame>
                <div>
                    <TitleFrame title="Ebat">
                        <div className='grid grid-cols-2 gap-2'>
                            <Input
                                name='volume'
                                placeholder="Hacim - Alan Belirtiniz"
                                size='medium'
                                border
                                items={meterUnits}
                                control={control}
                            />
                            <InputGroup
                                border
                                name='group1'
                                items={weightUnits}
                                control={control}
                            />
                        </div>
                    </TitleFrame>
                </div>
            </div>


            <div className='grid grid-cols-3 gap-2'>
                <TitleFrame title="Ödeme Şekli">
                    <SelectHook 
                        items={tagItems} 
                        name="p7" 
                        control={control} 
                        placeholder="Ödeme Şekli Seçiniz"
                    />
                </TitleFrame>
                <TitleFrame title="Para Birimi">
                    <SelectHook 
                        items={tagItems} 
                        name="p8" 
                        control={control} 
                        placeholder="Para Birimi Seçiniz"
                    />
                </TitleFrame>
                <TitleFrame title="Kdv Durumu">
                    <SelectHook 
                        name="p9" 
                        control={control} 
                        items={tagItems} 
                        placeholder="Kdv Durumu Seçiniz"
                    />
                </TitleFrame>
            </div>

                <TitleFrame title="Ücret Hesaplayıcı">
                     <div className='grid grid-cols-3 gap-2'>   
                            <SelectHook 
                                name="payment.type" 
                                control={control} 
                                placeholder="Ağırlık Giriniz (Ton Cinsinden)" 
                                items={tagItems}
                                size='medium'
                                id='id'
                                disabled

                            />
                            <SelectHook 
                                name="payment.price" 
                                control={control} 
                                placeholder="Birim Fiyat Giriniz" 
                                items={tagItems}
                                size='medium'
                                id='id'
                                disabled

                            />
                            <InputHook 
                                name="payment.total" 
                                control={control} 
                                placeholder="Toplam Tutar" 
                                items={tagItems}
                                size='medium'
                                id='id'
                                type='number'
                            />
                       
                    </div>
                </TitleFrame>



        </React.Fragment>
    )
}


export default Payload;