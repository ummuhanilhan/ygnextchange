import { IconFrameCovered, IconFrame, IconFrameDropdown } from "@components/frames/IconFrame";
import React from "react";
import { GeoAlt } from "@shared/icons";
import { Search } from "@shared/elements/searches";
import Classic, { ModalHeader } from "@shared/modals/classic";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import { useSelector } from "react-redux";
import { addAddress, removeAddress, selectAddress, setAddr } from "stores/slices/addressSlice";
import { useAppDispatch } from "stores/store"; 
import AddressCreate from "./create";
import { FormFooter } from "@shared/footers";
import { slugify } from "@utils/helper";

export const AddressList = () => {
    const [address, setAddress] = React.useState({});
    const [status, setStatus] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [query, setQuery] = React.useState('');
    const {addresses} = useSelector(selectAddress)
    const dispatch = useAppDispatch();
    React.useEffect(()=>{
        setData(addresses);
    },[addresses])

    return (
        <React.Fragment>  
          <Classic 
            status={status} 
            close={setStatus} 
            className='pt-4'
            header={ModalHeader}
            styles={{
                height:'fit-content',
                top:'10%',
                left:'20%',
                right:'20%',
                borderRadius:'10px',
                overflow:'visible'
            }}
            overlay={{
                backgroundColor:'rgba(0, 0, 0, 0.5)',
                WebkitBackdropFilter: 'blur(0)',
                backdropFilter: 'blur(0)',

            }}
          >
            <SimpleBar style={{ maxHeight: '95vh' }}>
                <AddressCreate 
                  id='modal'
                  defaultAddress={address}
                  update={!!address}
                  footer={<FormFooter className='mb-4' />}
                  border  
                />
            </SimpleBar>
          </Classic>

            <IconFrameCovered
                icon={<GeoAlt className="menu-icon" />}
                title='İletişim Ayarlarım'
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4'>
                     <Search 
                        value={query}
                        onChange={(e:any)=>setQuery(e.target.value)}
                        placeholder='Adres Başlığı Ara' 
                    />
                     <p 
                      className='button bg-yg-blue py-2 px-10 flex justify-center text-sm
                      items-center text-white rounded-md cursor-pointer'
                      onClick={()=>setStatus(true)}
                     >Yeni Adres Ekle</p>
                </div>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                   {data
                   .filter((item:any)=>{
                        const title = slugify(item.title).includes(slugify(query))
                        const addr = slugify(item.place.address).includes(slugify(query))
                        return title || addr;
                   })
                   .map((item:any,i:number)=>( // Array.from(Array(5))
                     <li className='address-box bg-white p-2 rounded-md' key={`address-${i}`}>
                        <h5 className='text-yg-blue text-sm font-medium'>{item.title?item.title:'Adres Başlığı'}</h5>
                        <p className='text-gray-900 text-sm'>{item.place?.address}</p>
                        <p className='text-gray-400 text-sm'>
                            {item.contact?.name} 
                        {item.contact?.code && ' +'+ item.contact?.code} {item.contact?.phone}
                        {` `}{item.contact?.email} 
                        </p>
                        <div className='flex justify-end w-full mt-2'>
                            <p 
                            onClick={()=>dispatch(removeAddress(item._id))}
                            className='bg-yg-orange text-sm mr-1 text-white flex items-center 
                            hover:bg-transparent hover:text-yg-orange border border-1 border-transparent hover:border-yg-orange
                            px-4 py-1 rounded-md cursor-pointer' 
                            >Sil</p>
                            <p 
                            onClick={()=>{
                                setAddress(item)
                                setStatus(!status)
                            }}
                            className='bg-yg-blue text-sm ml-1 text-white flex items-center 
                            hover:bg-transparent hover:text-yg-blue border border-1 border-transparent hover:border-yg-blue
                            px-4 py-1 rounded-md cursor-pointer'>Düzenle</p>
                        </div>
                    </li>
                   ))}
                </ul>
            </IconFrameCovered>
        </React.Fragment>
    )
}
