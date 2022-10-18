import { TitleFrame } from "@components/frames/TitleFrame";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { tagItems } from "@utils/mock";
import React from "react";
import { InputHook } from "@shared/elements/hooks/inputHook";
import { currencies, definitions, meterUnits, paymentMethods, vatOptions, weightUnits } from "@utils/dummy/definitions";
import { InputAppendHook, InputGroupHook } from "@shared/elements/hooks";
import Turkiye from '@utils/dummy/turkiye.json'
import { CheckboxHook } from "@shared/elements/hooks/checkboxHook";



export const Payload = ({control}:any) => {

    return (
        <React.Fragment>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
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
                        name="payload.definition"
                        className=' bg-white'
                        placeholder='Yükünüzü Kısaca Tanımlayınız'
                        size='medium'
                        control={control}
                    />
                
                </TitleFrame>
                <TitleFrame title="Yükleme Şekli">
                    <SelectHook 
                        name="payload.transport.load" 
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
                        name="payload.transport.unload" 
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

            <div className='grid grid-cols-1 lg:flex justify-between gap-2'>
                <TitleFrame title="Ağırlık" className='lg:w-96'>
                    <InputAppendHook
                        name='payload.weight'
                        placeholder='Ağırlık Belirtiniz'
                        size='medium'
                        items={weightUnits}
                        control={control}
                    />
                </TitleFrame>
                <TitleFrame title="Ebat" className=''>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        <InputAppendHook
                            name='payload.volume'
                            placeholder="Hacim - Alan Belirtiniz"
                            size='medium'
                            items={meterUnits}
                            control={control}
                        />
                        <InputGroupHook
                            name='payload.dimensions'
                            items={weightUnits}
                            control={control}
                        />
                    </div>
                </TitleFrame>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <TitleFrame title="Ödeme Şekli">
                    <SelectHook 
                        name="fee.paymethod" 
                        items={paymentMethods}
                        id="value" 
                        label="label" 
                        control={control} 
                        placeholder="Ödeme Şekli Seçiniz"
                    />
                </TitleFrame>
                <TitleFrame title="Para Birimi">
                    <SelectHook 
                        name="fee.currency" 
                        items={currencies} 
                        id="value" 
                        label="label" 
                        control={control} 
                        placeholder="Para Birimi Seçiniz"
                    />
                </TitleFrame>
                <TitleFrame title="Kdv Durumu">
                    <SelectHook 
                        name="fee.vat" 
                        control={control} 
                        items={vatOptions} 
                        id="value" 
                        label="label" 
                        placeholder="Kdv Durumu Seçiniz"
                    />
                
                </TitleFrame>
            </div>

                <TitleFrame title="Ücret Hesaplayıcı" color='orange'>
                     <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>   
                            <SelectHook 
                                name="fee.type" 
                                control={control} 
                                placeholder="Ağırlık Giriniz (Ton Cinsinden)" 
                                items={tagItems}
                                size='medium'
                                id='id'
                                disabled

                            />
                            <SelectHook 
                                name="fee.price" 
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
                <div className='flex justify-between'>
                    <div></div>
                    <div className='flex items-start mt-5'>
                        <CheckboxHook name='payload.bargain' label='Fiyat görüşülür' control={control} className='mr-6' />
                        <CheckboxHook name='payload.amount' label='Yalnızca tutar belirteceğim' control={control} checked />
                    </div>
                </div>



        </React.Fragment>
    )
}


export default Payload;