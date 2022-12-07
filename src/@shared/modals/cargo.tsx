import { TitleFrameDropdown } from "@components/frames/IconFrame";
import { Frame } from "@components/frames/MainFrame";
import { capitalize, currencyFormat, priceFormat } from "@utils/helper";
import React from "react";
import { useSelector } from "react-redux";
import { selectDefinition } from "stores/slices/definitionSlice";
import SimpleBar from "simplebar-react";

export const CargoModal = ({item}:any) => {

    const { definitions, formatted } = useSelector(selectDefinition);
    const defined = (name:string) => formatted[name]?.name
    const defines = (values:string[]) => values.map((v:string)=> `${defined(v)} `) || ''

    return (
       <Frame>
            <SimpleBar style={{ maxHeight: '80vh' }}>

                <TitleFrameDropdown title='Yük Detayları' nomargin />
                <div className="grid grid-cols-3 gap-2">
                    <Box label='İlan No' value={item?._id} />
                    <Box label='Yük Cinsi' value={item?.payload?.type} />
                    <Box label='Yükün Tanımı' value={item?.payload?.definition} />
                    <Box label='Yükleme Şekli' value={defined(item?.payload?.transport?.load)} />
                    <Box label='Boşaltma Şekli' value={defined(item?.payload?.transport?.unload)} />
                    <Box label='Mesafe' value={item?.shipping?.distance?.text} />
                    <Box label='Ağırlık' value={item?.payload?.weight?.size} />
                    <Box label='Hacim' value={item?.payload?.volume?.size} />
                    <Box label='Ebat' value={item?.payload?.dimensions?.width + 'm ' + 
                        item?.payload?.dimensions?.height + 'm ' + item?.payload?.dimensions?.height 
                        } />
                </div>

                <TitleFrameDropdown title='Araç Detayları' />
                <div className="grid grid-cols-2 gap-2">
                    <Box label='Kiralama Cinsi' value={!item.rent?.type? 'Parsiyel':'Komple'} />
                    <Box label='Araç Tipi' value={item?.rent?.vehicle} />
                    <Box label='Araç Özellikleri' value={defines(item?.rent?.features)} />
                    <Box label='Donanım Özellikleri'value={defines(item?.rent?.options)} />
                </div>

                <TitleFrameDropdown title='Ödeme Detayları' />
                <div className="grid grid-cols-2 gap-2">
                    <Box label='Verilen Fiyat' value={currencyFormat( priceFormat(item?.fee?.price?.total) , item?.fee?.currency) + item?.fee?.vat=='include' ?'KDV Dahil':'+KDV' } />
                    <Box label='Ödeme Şekli' value={defined(item?.fee?.paymethod)} />
                </div>

                <TitleFrameDropdown title='Tarih & Zaman Detayları' />
                <div className="grid grid-cols-2 gap-2">
                    <Box label='Yükleme Tarih Aralığı' value={item?.shipping?.range?.map((date:string,i:number)=> `${ new Date(date).toISOString().slice(0, 10) } ${i==0 ? ' - ' : ''}` )} />
                    <Box label='Boşaltma Zamanı' value={defined(item?.shipping?.time)} />
                </div>

                <TitleFrameDropdown title='Adres Detayları' />
                <div className="grid grid-cols-2 gap-2">
                    <Box label='Yükleme Adresi' value={capitalize(item?.shipping?.load?.direction?.city)} />
                    <Box label='Boşaltma Adresi' value={capitalize(item?.shipping?.unload?.direction?.city)} />
                </div>

                <TitleFrameDropdown title='İletişim Detayları' />
                <div className="grid grid-cols-2 gap-2">
                    <Box label='Firma Ünvanı / isim Soyisim' value='***********' />
                    <Box label='Telefon Numarası' value='+90 5*** *** ** **' />
                </div>

        </SimpleBar>

       </Frame>
    )
}

export const Box = ({label,value}:any) =>{
    return(
        <div className='bg-[#ebebeb] rounded-lg p-1 h-[55px] 
        flex items-center justify-start pl-3 overflow-hidden'>
            <div>
                <label className='text-xs text-black'>{label}</label>
                <p className='text-gray-500 font-regular mb-1'>{value}</p>
            </div>
        </div>
    )
}