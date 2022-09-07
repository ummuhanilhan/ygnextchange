import { ArrowLeftCircle, ArrowRightCircle, ArrowRightShort, Calendar, Capslock, ChevronDoubleRight, CircleFill, CircleHalf, Clock, Eye, Forward, Geo, Heart, HeartFill, People, Truck } from "@yukgetir-icons"
import classNames from "classnames"
import { FaChevronRight, FaMinusCircle } from "react-icons/fa"
import { FiArrowLeft, FiArrowRight, FiMinusCircle, FiXCircle } from "react-icons/fi"

const items = [
    {type:true, corporate:false, price:'15.750', currency:'₺', tax:true, fav:true, view:125, time:'1-3 Gün içerisinde', 
    vehicle:'Tır 13.60 Açık', weight:'27 Ton', date:'22.07.2022 - 25.08.2022', load:'Ankara', unload:'Mersin', 
    distance:'500KM',  },
    {type:false, corporate:true, price:'7.35', currency:'₺', tax:false, fav:false, view:76413, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'15 Ton', date:'22.07.2012 - 03.00.2022', load:'Adana', unload:'Ardahan', distance:'3420KM',  },
    {type:false, corporate:false, price:'342.875', currency:'₺', tax:true, fav:true, view:8135, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'2 Ton', date:'22.07.2022 - 25.08.2022', load:'Konya', unload:'Diyarakır', distance:'1500KM',  },
    {type:true, corporate:true, price:'19.255', currency:'₺', tax:false, fav:true, view:91413, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'5 Ton', date:'22.07.2012 - 03.00.2022', load:'Yozgat', unload:'Hatay', distance:'43420KM',  },
]

export const View = ({}:any) => {

    return (
        <div className='view rounded-md bg-yukgetir-lightblue ml-[15.5em]'>
            <Heading />
            {items.map((item,i:number)=>(
                <Item item={item} key={`cargo-item-${i}`} />
            ))}
            <SimplePagination />
        </div>
    )
}

const Item = ({item}:any) => {

    return (
        <div className="cargo-item bg-white p-2 px-4 mb-2 rounded-lg">
            <div className="flex justify-between">
                <div className="flex items-start">
                    <div className="tag rounded-lg p-1 px-3 border border-1 
                    border-yukgetir-blue m-r2 flex items-start w-max"> 
                        <People className='fill-yukgetir-blue' width={20} /> 
                        <p className='text-yukgetir-blue ml-1 text-sm'>{item.corporate?'Kurumsal İlan':'Bireysel İlan'}</p>
                    </div>
                    <div className="flex items-start justify-center">
                        <Geo width={20} className='fill-yukgetir-blue ml-1' />
                        <p className='text-gray-500 pl-1'>Ankara</p>
                        <ChevronDoubleRight width={20} className='fill-yukgetir-orange mt-[.1rem]' />
                        <p className='text-gray-500 px-1'>Mersin</p>
                        <Forward width={20} />
                        <p className="ml-1 mr-3">{item.distance}</p>
                        {item.type ? 
                        <CircleFill width={15} className='fill-yukgetir-blue mt-[.25rem] ml-1' /> : 
                        <CircleHalf width={15} className='fill-yukgetir-blue mt-[.25rem] ml-1' />}
                        <p className="text-gray-400 ml-1">{!item.type? 'Parsiyel':'Komple'}</p>
                    </div>
                </div>
                <div className='flex items-end flex-col'>
                    <h2 className='text-2xl font-bold'>{item.price}{item.currency}</h2>
                    {item.tax && <p className='text-gray-300 text-sm'>(KDV Dahil)</p>}
                </div>
            </div>
            <div className="flex justify-between mt-[-1em]">
                <div className={classNames({
                     'mt-6':!item.tax 
                })}>
                    <ul className='mt-1'>
                        <li className='flex items-start'>
                            <Calendar width={17} className='fill-yukgetir-blue mr-2 mb-1' />
                            <p className="text-yukgetir-blue text-sm mr-2">Yükleme Tarihi:</p>
                             <p className='text-gray-400 text-sm'>{item.date}</p> </li>
                        <li className='flex items-start'>
                            <Clock width={17} className='fill-yukgetir-blue mr-2 mb-1' />
                            <p className="text-yukgetir-blue text-sm mr-2">Boşaltma Zamanı:</p>
                             <p className='text-gray-400 text-sm'>{item.time}</p> </li>
                        <li className='flex items-start'>
                            <Truck width={17} className='fill-yukgetir-blue mr-2 mb-1' />
                            <p className="text-yukgetir-blue text-sm mr-2">Araç Tipi:</p>
                             <p className='text-gray-400 text-sm'>{item.vehicle}</p> </li>
                        <li className='flex items-start'>
                            <Capslock width={17} className='fill-yukgetir-blue mr-2 mb-1' />
                             <p className='text-gray-400 text-sm'>{item.weight}</p> </li>
                    </ul>
                </div>
                <div className='flex items-end'>
                    <div className='view flex flex-col items-center mr-2'><Eye width={15} className='fill-gray-400' />
                     <p className='text-gray-400 text-sm'>{item.view}</p></div>
                    <div className='heart rounded-md border border-1 border-yukgetir-orange h-[2.2em] w-[2.2em] flex
                        items-center justify-center mr-2 cursor-pointer hover:bg-yukgetir-lightblue'> 
                        {item.fav ? <HeartFill width={20} className='fill-yukgetir-orange' /> : <Heart width={20} className='fill-yukgetir-orange' />}
                     </div>
                    <div className='button p-2 px-6 bg-yukgetir-orange 
                    border border-transparent hover:bg-yukgetir-transparent hover:border-yukgetir-orange hover:bg-transparent hover:text-yukgetir-orange 
                    text-white cursor-pointer text-sm
                    rounded-md inline-block mr-1'>Detay Gör</div>
                    <div className='button p-2 px-6 bg-yukgetir-blue 
                    border border-transparent hover:bg-yukgetir-transparent hover:border-yukgetir-blue hover:bg-transparent hover:text-yukgetir-blue 
                    text-white cursor-pointer text-sm
                    rounded-md inline-block ml-1'>Telif Gönder</div>
                </div>
            </div>
        </div>
    )
}

export const Heading = () => {

    return (
        <div className='heading'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-center justify-center text-base'>
                    <p>Her sayfada</p>
                    <p className='text-yukgetir-orange ml-2 mr-1'>25</p>
                    <div><FaChevronRight size={17} className='text-gray-400' /></div>
                    <p>İlan göster</p>
                </div>
                <div className='flex items-center'>
                    <p>Sıralama:</p>
                    <p className="text-yukgetir-orange mx-2">Yeniden Eskiye</p>
                    <div><FaChevronRight size={17} className='text-gray-400' /> </div>
                </div>
            </div>
            <Selectes />
        </div>
    )
}

export const SimplePagination = () => {

    return (
        <div className='simple-pagination flex justify-between bg-white rounded-md py-2 pr-2 my-2 mt-3'>
            <div></div>
            <div className='flex items-center'>
                <div className=''><ArrowLeftCircle width={21} className='fill-yukgetir-blue mx-2' /></div>
                <ul className="flex items-center">
                    <li className="text-yukgetir-blue mx-1 text-lg">1</li>
                    <li className="text-gray-400 mx-1 text-lg">2</li>
                    <li className="text-gray-400 mx-1 text-lg">3</li>
                    <li className="text-gray-400 mx-1 text-lg">...</li>
                    <li className="text-gray-400 mx-1 text-lg">10</li>
                </ul>
                <div className=''><ArrowRightCircle width={21} className='fill-yukgetir-blue mx-2' /></div>
            </div>
            <div className='flex items-end '>
                <div className="border border-1 border-yukgetir-blue rounded-md p-1 flex justify-between">
                    <input type="text" className='px-2 border-none outline-none w-22' />
                    <div className='bg-yukgetir-blue'>
                         <ArrowRightShort width={21} className='fill-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}


const selected = [
    {id:1, title:'Yükleme Yeri: Ankara'},
    {id:2, title:'Boşaltma Yeri: Mersin'},
    {id:3, title:'Yükleme Tarihi: 22.07.2022 - 25.07.2022'},
    {id:4, title:'Boşaltma Zamanı: 1-3 Gün'},
    {id:5, title:'Kiralama Tipi: Parsiyel'},
    {id:6, title:'Fiyat: 7.500 - 12.000 ₺'},
]

export const Selectes = () => {

    return (
        <div className='w-full inline-block'>
            <ul className=''>
                {selected.map((item,i:number)=>(
                    <li key={`selected-${i}`} className='flex justify-between items-center cursor-pointer px-3 p-1 mr-2 mt-2 
                    rounded-md bg-white w-fit float-left'>
                        <p className='text-gray-400 text-sm'> {item.title} </p>
                        <div> <FiMinusCircle  className='text-gray-400 ml-2' size={15} /> </div>
                    </li>
                ))}
                <li className='flex justify-between items-center cursor-pointer px-4 p-1 mr-2 mt-2 
                    rounded-md bg-gray-200 w-fit float-left'>
                    <p className='text-gray-400 text-sm'> Temizle </p>
                    <div> <FiXCircle  className='text-gray-400 ml-2' size={15} /> </div>
                </li>
            </ul>

        </div>
    )
}