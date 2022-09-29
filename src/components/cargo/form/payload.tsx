import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook, SelectHook } from "@shared/elements/hooks/selectHook";
import { tagItems } from "@utils/mock";
import React from "react";
import { InputHook } from "@shared/elements/hooks/inputHook";
import { currencies, definitions, meterUnits, paymentMethods, vatOptions, weightUnits } from "@utils/dummy/definitions";
import { InputAppendHook, InputGroupHook } from "@shared/elements/hooks";



export const Payload = ({control}:any) => {

    return (
        <React.Fragment>
            <div className='grid grid-cols-2 gap-2'>
                <TitleFrame title="Yük Cinsi">
                    <InputHook
                        name="payload.type"
                        className=' bg-white'
                        placeholder='Yükünüzün Cinsini Yazınız'
                        size='medium'
                        control={control}
                    />
                </TitleFrame>
                <TitleFrame title="Yük Tanımı">
                    <InputHook
                        name="payload.define"
                        className=' bg-white'
                        placeholder='Yükünüzü Kısaca Tanımlayınız'
                        size='medium'
                        control={control}
                    />
                
                </TitleFrame>
                <TitleFrame title="Yükleme Şekli">
                    <SelectHook 
                        name="payload.transport" 
                        control={control} 
                        placeholder="Yükleme Şeklini Seçiniz" 
                        size='medium'
                        items={definitions.load}
                        id='_id'
                        label='name'
                    />
                </TitleFrame>
                <TitleFrame title="Boşaltma Şekli">
                <SelectHook 
                        name="payload.transport2" 
                        control={control} 
                        placeholder="Boşaltma Şeklini Seçiniz" 
                        className=' '
                        items={definitions.load}
                        size='medium'
                        id='_id'
                        label='name'
                    />
                </TitleFrame>
            </div>

            <div className='flex justify-between gap-2'>
                <TitleFrame title="Ağırlık" className='w-96'>
                    <InputAppendHook
                        name='payload.measurement.weight'
                        placeholder='Ağırlık Belirtiniz'
                        size='medium'
                        items={weightUnits}
                        control={control}
                    />
                </TitleFrame>
                <TitleFrame title="Ebat" className=''>
                    <div className='grid grid-cols-2 gap-2'>
                        <InputAppendHook
                            name='volume'
                            placeholder="Hacim - Alan Belirtiniz"
                            size='medium'
                            items={meterUnits}
                            control={control}
                        />
                        <InputGroupHook
                            name='group1'
                            items={weightUnits}
                            control={control}
                        />
                    </div>
                </TitleFrame>
            </div>


            <div className='grid grid-cols-3 gap-2'>
                <TitleFrame title="Ödeme Şekli">
                    <SelectHook 
                        items={paymentMethods}
                        id="value" 
                        label="label" 
                        name="p7" 
                        control={control} 
                        placeholder="Ödeme Şekli Seçiniz"
                    />
                </TitleFrame>
                <TitleFrame title="Para Birimi">
                    <SelectHook 
                        items={currencies} 
                        id="value" 
                        label="label" 
                        name="p8" 
                        control={control} 
                        placeholder="Para Birimi Seçiniz"
                    />
                </TitleFrame>
                <TitleFrame title="Kdv Durumu">
                    <SelectHook 
                        name="p9" 
                        control={control} 
                        items={vatOptions} 
                        id="value" 
                        label="label" 
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