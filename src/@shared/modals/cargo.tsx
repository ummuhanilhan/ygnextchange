import { TitleFrameDropdown } from "@components/frames/IconFrame";
import { Frame } from "@components/frames/MainFrame";

export const CargoModal = () => {

    return (
       <Frame>
        <TitleFrameDropdown title='Yük Detayları' nomargin />
        <div className="grid grid-cols-3 gap-2">
            <Box label='İlan No' value='#10567' />
            <Box label='Yük Cinsi' value='Tuğla' />
            <Box label='Yükün Tanımı' value='Paletli Yük' />
            <Box label='Yükleme Şekli' value='Forklift ile Rampadan' />
            <Box label='Boşaltma Şekli' value='Forklift ile Yandan' />
            <Box label='Mesafe' value='550 km' />
            <Box label='Ağırlık' value='27 TON' />
            <Box label='Hacim' value='1000 m3' />
            <Box label='Ebat' value='10 x 10 x 10 m' />
        </div>

        <TitleFrameDropdown title='Araç Detayları' />
        <div className="grid grid-cols-2 gap-2">
             <Box label='Kiralama Cinsi' value='Komple' />
             <Box label='Araç Tipi' value='Dorse' />
             <Box label='Araç Özellikleri' value='10 Teker Kamyon Açık' />
             <Box label='Donanım Özellikleri' value='Adr - Konteyner Kilitli' />
        </div>

        <TitleFrameDropdown title='Ödeme Detayları' />
        <div className="grid grid-cols-2 gap-2">
              <Box label='Verilen Fiyat' value='5.750,00 TL (KDV Dahil)' />
              <Box label='Ödeme Şekli' value='Peşin Yükleyici Ödemeli' />
        </div>

        <TitleFrameDropdown title='Tarih & Zaman Detayları' />
        <div className="grid grid-cols-2 gap-2">
            <Box label='Yükleme Tarih Aralığı' value='01.09.2022 - 10.09.2022' />
            <Box label='Boşaltma Zamanı' value='1 - 3 Gün İçerisinde' />
        </div>

        <TitleFrameDropdown title='Adres Detayları' />
        <div className="grid grid-cols-2 gap-2">
            <Box label='Yükleme Adresi' value='Merkez / Mersin' />
            <Box label='Boşaltma Adresi' value='Seyhan/Adana' />
        </div>

        <TitleFrameDropdown title='İletişim Detayları' />
        <div className="grid grid-cols-2 gap-2">
              <Box label='Firma Ünvanı / isim Soyisim' value='***********' />
              <Box label='Telefon Numarası' value='+90 5*** *** ** **' />
        </div>

       </Frame>
    )
}

export const Box = ({label,value}:any) =>{
    return(
        <div className='bg-[#ebebeb] rounded-lg p-1 h-[55px] 
        flex items-center justify-start pl-3'>
            <div>
                <label className='text-xs text-black'>{label}</label>
                <p className='text-gray-500 font-regular mb-1'>{value}</p>
            </div>
        </div>
    )
}