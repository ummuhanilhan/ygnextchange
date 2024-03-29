import { TitleFrame } from "@components/frames/TitleFrame";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { tagItems } from "@utils/mock";
import React from "react";
import { InputHook } from "@shared/elements/hooks/inputHook";
import { currencies, meterUnits, paymentMethods, vatOptions, weightUnits } from "@utils/dummy/definitions";
import { InputAppendHook, InputGroupHook, NumberHook } from "@shared/elements/hooks";
import Turkiye from '@utils/dummy/turkiye.json'
import { CheckboxHook } from "@shared/elements/hooks/checkboxHook";
import { Select } from "@shared/elements/selects";
import { FloatingInput } from "@shared/elements/inputs";
import { Checkbox } from "@shared/elements/checkboxes";
import FormLayout from "@layouts/FormLayout";
import { server } from "@utils/helper";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectDefinition } from "stores/slices/definitionSlice";

export const Payload = ({
    control, 
    setValue, 
    getValues,
    amount,
    watch,
    setAmount,
    errors
}:any) => {
    const {definitions} = useSelector(selectDefinition);

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

           <PriceCalculate 
                setValue={setValue}                
                getValues={getValues}                
                disabled={amount} 
                errors={errors}
                watch={watch}
            />
        
            <div className='flex justify-between'>
                <div></div>
                <div className='flex items-start mt-5'>
                    <CheckboxHook 
                        name='fee.bargain' 
                        label='Fiyat görüşülür' 
                        control={control} 
                        className='mr-6' 
                    />
                     <CheckboxHook 
                        name='fee.price.amount' 
                        label='Yalnızca tutar belirteceğim' 
                        control={control} 
                        setAmount={setAmount} 
                    />
                    
                </div>
            </div> 
        </React.Fragment>
    )
}

export default Payload;


export const PriceCalculate = ({
    value, 
    onChange, 
    error, 
    size, 
    setValue,
    getValues,
    errors,
    watch,
    disabled
}:any) => {
  
    const [tonnage, setTonnage] = React.useState(getValues('fee.price.tonnage')||0);
    const [unit, setUnit] = React.useState(getValues('fee.price.unit')||0);
    const [total, setTotal] = React.useState(getValues('fee.price.total')||0);
    const watchAllFields = watch()

    React.useEffect(()=>{
        setTotal(unit*tonnage);
        setValue('fee.price.tonnage',tonnage)
        setValue('fee.price.unit',unit)
        setValue('fee.price.total',total)
    },[unit,tonnage])

    React.useEffect(()=>{
        console.log(total)
        setValue('fee.price.total',total)
    },[total])

    const err = errors?.fee?.price;

    const valueReturn = (value:number) =>{
        if(value === 0){
            return '';
        }
        else{
            return value;
        }
    }

    return (

    <TitleFrame title="Ücret Hesaplayıcı" color='orange'>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>   
                <FloatingInput 
                    name="fee.price.tonnage" 
                    placeholder="Ağırlık Giriniz (Ton Cinsinden)" 
                    size='medium'
                    type='number'
                    value={valueReturn(tonnage)}
                    onChange={setTonnage}
                    disabled={disabled}
                    error={err?.tonnage}
                />
                
                <FloatingInput 
                    name="fee.price.unit" 
                    placeholder="Birim Fiyat Giriniz" 
                    size='medium'
                    type='number'
                    value={valueReturn(unit)}
                    onChange={setUnit}     
                    disabled={disabled}
                    error={err?.unit}
                />
            
                <FloatingInput 
                    name="fee.price.total" 
                    placeholder="Toplam Tutar" 
                    size='medium'
                    type='number'
                    value={valueReturn(total)}
                    onChange={setTotal}
                    disabled={!disabled}
                    error={err?.total}
                />
        </div>
 
    </TitleFrame>
    )
}

