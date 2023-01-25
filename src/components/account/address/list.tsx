import { IconFrameCovered, IconFrame, IconFrameDropdown } from "@components/frames/IconFrame";
import React, { useEffect } from "react";
import { GeoAlt } from "@shared/icons";
import { Search } from "@shared/elements/searches";
import Classic, { defaultOverlays, defaultStyles, ModalHeader } from "@shared/modals/classic";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { useSelector } from "react-redux";
import { addAddress, create, findAll, remove, removeAddress, selectAddress, setAddr, update } from "stores/slices/addressSlice";
import { useAppDispatch } from "stores/store"; 
import AddressCreate from "./create";
import { FormFooter } from "@shared/footers";
import { add, slugify } from "@utils/helper";
import classNames from "classnames";
import { useModal } from "stores/features/useModal";
import { Empty } from "@utils/empty";

export const AddressList = ({cb, border}:any) => {
    const dispatch = useAppDispatch();
    const {addresses} = useSelector(selectAddress)
    const [data, setData] = React.useState([]);
    const [query, setQuery] = React.useState('');
    React.useEffect(()=>{
        getAddr()
    },[])
    const open = useModal((state:any)=>state.open);
    const getAddr = async ( ) => {
        await dispatch(findAll())
    }
    useEffect(()=>{
        addresses && setData(addresses);
    },[addresses])
    return (
        <React.Fragment>  
            <IconFrameCovered
                icon={<GeoAlt className="menu-icon" />}
                title='İletişim Ayarlarım'
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4'>
                    <Search 
                        value={query}
                        border
                        onChange={(e:any)=>setQuery(e.target.value)}
                        placeholder='Adres Başlığı Ara' 
                    />
                    <p 
                    className='button bg-yg-blue py-2 px-10 flex justify-center text-sm
                    items-center text-white rounded-md cursor-pointer'
                    onClick={()=>{
                        open({ 
                            type:'create-address',
                            values:{
                                id:'modal',
                                border:true,
                            },
                            styles:{
                                paddingTop:'1rem'
                            },
                         })
                    }}
                    >Yeni Adres Ekle</p>
                </div>
                    
                { data?.length<=0 && ( 
                    <Empty />
                )}  

                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 gap-3'>
                {data?.length>0 && data
                .filter((item:any)=>{
                    const title = slugify(item.title).includes(slugify(query))
                    const addr = slugify(item.place.address).includes(slugify(query))
                    return title || addr;
                })
                .map((item:any,i:number)=>( // Array.from(Array(5))
                    <li className={classNames(
                        'address-box bg-white p-2 rounded-md',
                        {'border': border}
                    )}
                    key={`address-${i}`}>
                        <h5 className='text-yg-blue text-sm font-medium'>{item?.place?.title? item.place.title:'Adres Başlığı'}</h5>
                        <p className='text-gray-900 text-sm'>{item.place?.address}</p>
                        <p className='text-gray-400 text-sm'>
                            {item.contact?.name} 
                        {item.contact?.code && ' +'+ item.contact?.code} {item.contact?.phone}
                        {` `}{item.contact?.email} 
                        </p>
                        <div className='flex justify-end w-full mt-2 '>
                            <p 
                            onClick={()=>{
                                dispatch(remove(item._id))// dispatch(removeAddress(item._id))
                            }}
                            className='bg-yg-orange text-sm mr-1 ml-1 mb-2 text-white flex items-center text-center
                            hover:bg-transparent hover:text-yg-orange border border-1 border-transparent hover:border-yg-orange 
                            px-4 py-1 rounded-md cursor-pointer' 
                            >Sil</p>
                            <p 
                            onClick={()=>{
                                 open({ 
                                    type:'create-address',
                                    values:{
                                        id:'modal',
                                        defaultAddress:item,
                                        update:Object.entries(item)?.length>0,
                                        border:true,
                                        cb:(data:any)=>{
                                            console.log('direction',data)
                                             cb && cb(data);
                                        }
 
                                    },
                                    styles:{
                                        paddingTop:'1rem'
                                    },
                                 })


                            }}
                            className='bg-yg-blue text-sm ml-1 text-white mb-2 flex items-center 
                            hover:bg-transparent hover:text-yg-blue border border-1 border-transparent hover:border-yg-blue
                            px-4 py-1 rounded-md cursor-pointer'>Düzenle</p>

                            {cb && (
                                <p 
                                    onClick={()=>{
                                        cb && cb(item);
                                    }}
                                    className='bg-yg-blue text-sm ml-1 mb-2 text-white flex items-center 
                                    hover:bg-transparent hover:text-yg-blue border border-1 border-transparent hover:border-yg-blue
                                    px-4 py-1 rounded-md cursor-pointer'>
                                     Seç
                                </p>
                            )}
                        </div>
                    </li>
                ))}
                </ul>
            </IconFrameCovered>
        </React.Fragment>
    )
}
