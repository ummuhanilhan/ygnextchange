import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrameCovered, IconFrame, IconFrameDropdown } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import { GeoAlt, Person } from "@shared/icons";
import { FloatLabelHook, FloatLabelPhoneHook, MultiSelectHook } from "@shared/elements/hooks";
import { FormFooter } from ".";
import { Search } from "@shared/elements/searches";
import Turkiye from '@utils/dummy/turkiye.json'
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { initializeGoogleMap } from "@utils/googleMapInitializer";
import { getPlace } from "@utils/googleViewer";
import Classic, { ModalHeader } from "@shared/modals/classic";
import { addresses } from "@utils/mock";
import { FloatingInput } from "@shared/elements/inputs";
import classNames from "classnames";
import { FiX } from "react-icons/fi";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

declare var google:any;

export const Address = () => {
    return (
        <AccountLayout>
             <React.Fragment>
                <IconFrameCovered
                    icon={<GeoAlt className="menu-icon" />}
                    title='Adres Detay Bilgileri'
                >
                    <AddressCreate />
                </IconFrameCovered>
                <Communication />
                <FormFooter />
            </React.Fragment>
            <AddressList />
        </AccountLayout>
    )
}

Address.Layout = PrivateLayout;

export default Address;

export type AddressValues = {
  no:number | string,
  geolocation: {
    lat: string | number
    lng: string | number
  },
  place?: {
    address: string
    street: string
  },
  direction?: {
    city: string  
    district: string
    country: {
      code:string
      name:string
    }
  },
  contact?: {
    phone:string
    name: string
  }
}

const addressValues =  addresses[0]
 

export const Communication = () =>{
  const form = useForm<AddressValues>({
      defaultValues: addressValues,
      // resolver: yupResolver(),
  });
  const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
  const onSubmit: SubmitHandler<AddressValues> = data => {
      console.log(data)
      alert(JSON.stringify(data))
  };
  const onError = (errors:any) => {
      console.log(errors)

  };
  return (
     <IconFrameCovered
              icon={<Person className="menu-icon" />}
              title='Adres İletişim Bilgileri'
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2 change-password">
                <FloatLabelHook name="name" type="text" 
                placeholder="İsim Soyisim" example="" control={control} />
                <FloatLabelPhoneHook name="phone" type="text" 
                placeholder="Cep Telefonu" example="(212) 12 34" control={control} />
                <FloatLabelHook name="email" type="text" 
                placeholder="Eposta Adresi" example="" control={control} />
            </div>
        </IconFrameCovered>
  )
}


export const AddressCreate = ({border=false, footer}:any) => {
    const form = useForm<AddressValues>({
        defaultValues: addressValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<AddressValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };
    return (
      <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FloatLabelHook name="place.address" border={border} type="text" className='mb-2' placeholder="Ankara Şirket Adresim" example="" control={control} />
                <FloatLabelHook name="address_search" border={border} type="text" className='mb-2' placeholder="Mersin Lİmanı" example="" control={control} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                <div>
                      <FloatLabelHook name="address_detail" border={border} type="text" 
                      placeholder="Haritadan Seçili Adres Detayları" className='mb-2' disabled example="" control={control} />
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                          <SelectHook
                                name='direction.city'
                                placeholder='İl Seçiniz'
                                size='medium'
                                id='value'
                                removable
                                searchable
                                items={Turkiye}
                                control={control}
                                className='mb-2'
                                border={border}
                                />
                            <SelectHook
                                name='direction.district'
                                placeholder='İl Seçiniz'
                                size='medium'
                                id='value'
                                removable
                                searchable
                                items={Turkiye}
                                control={control}
                                border={border}
                                className='mb-2'
                            />
                      </div>
                      <FloatLabelHook name="directions" type="text" border={border} className='mb-2' placeholder="Adres Tarifi İçin Ek Detay Ekleyiniz (Opsiyonel)" example="" control={control} />
                </div>
                <MapView control={control} border={border} />
                                 
            </div>
            {footer}
              
      </form>
      
    )
}

export const AddressList = () => {
    const [status, setStatus] = React.useState(false);

    return (
        <React.Fragment>  
          <Classic 
            status={status} 
            close={setStatus} 
            className='pt-4'
            header={ModalHeader}
            styles={{
                height:'fit-content',
                top:'15%',
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
                <AddressCreate border footer={()=>(
                     <div className="flex justify-end w-full  mb-4">
                        <div 
                        className="bg-yg-orange p-3 text-center px-12 text-white rounded-md
                        cursor-pointer">Vazgeç</div>
                        <div
                        className="bg-yg-blue p-3 px-12 sm:mt-0 sm:ml-2 text-white rounded-md 
                        cursor-pointer" 
                        onClick={()=>{}}>Ekle</div>
                    </div>
                )} />
            </SimpleBar>
          </Classic>

            <IconFrameCovered
                icon={<GeoAlt className="menu-icon" />}
                title='İletişim Ayarlarım'
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4'>
                     <Search placeholder='Adres Başlığı Ara' />
                     <p 
                      className='button bg-yg-blue py-2 px-10 flex justify-center text-sm
                      items-center text-white rounded-md cursor-pointer'
                      onClick={()=>setStatus(true)}
                     >Yeni Adres Ekle</p>
                </div>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                   {Array.from(Array(5)).map((item,i:number)=>(
                     <li className='address-box bg-white p-2 rounded-md' key={`address-${i}`}>
                        <h5 className='text-yg-blue text-sm font-medium'>Adres Başlığı</h5>
                        <p className='text-gray-900 text-sm'>Karaduvar, Mersin Limanı, 33020 - Merkez...</p>
                        <p className='text-gray-400 text-sm'>Sercan İzci - +90 543 522 12 13</p>
                        <div className='flex justify-end w-full mt-2'>
                            <p className='bg-yg-orange text-sm mr-1 text-white flex items-center 
                            hover:bg-transparent hover:text-yg-orange border border-1 border-transparent hover:border-yg-orange
                            px-4 py-1 rounded-md cursor-pointer'>Sil</p>
                            <p className='bg-yg-blue text-sm ml-1 text-white flex items-center 
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



export const MapView = ({control, border}:any) => {
    const mapRef = React.useRef(null);
    const [mapMarker, setMapMarker] = React.useState();
    React.useEffect(() => {
        const loadMap = () => {
            let marker: any;
            let pin =  {
                lat:'',
                lng:'',
            }  // form.getValues(`shipping.${addressType}`)?.geolocation;
            let lat = pin?.lat;
            let lng = pin?.lng;
  
            const map = new google.maps.Map(mapRef.current, {
              zoom: 6,
              center: new google.maps.LatLng(39.0,36.0),
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              clickableIcons: true,
              fullscreenControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              gestureHandling: "greedy",
            });
      
            google.maps.event.addListener(map, "click", (e: any) => onMapClick(e));
      
            const searchInput = document.querySelector(
              "#search-container input"
            ) as HTMLInputElement;
      
            const autocomplete = new google.maps.places.Autocomplete(searchInput);
            autocomplete.addListener("place_changed", () => onPlaceChanged());
            autocomplete.bindTo("bounds", map);
            let zoomOk = false;
            const buildMarker = (lat: number, lng: number, setCenter: boolean) => {
              if (marker) {
                marker.setMap(null);
              }
              marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map,
                draggable: true,
              });
              if (setCenter) {
                map.setCenter(marker.position);
              }
              if (!zoomOk) {
                map.setZoom(16);
                zoomOk = true;
              }
      
              setMapMarker(marker);
            };
      
            const setPlaceToForm = (place: any) => {
              // setFormattedAddress(place.formatted_address);
              const addresses = (place.address_components as any[]) || [];
              for (let i = 0; i < addresses.length; i++) {
                const item = addresses[i];
                const addressType = item.types[0];
                const value = item.long_name as string;
      
                switch (addressType) {
                  case "route":
                    // setRoute(value);
                  case "street_number":
                    // setBuildingInfo(!value.toLowerCase().startsWith("no") ? `No: ${value}` : value );
                    break;
                  default:
                    break;
                }
              }
              setTimeout(
                () =>
                  (searchInput.value =
                    place.formatted_address ||
                    place.name 
                    //|| `${route} ${buildingInfo}`
                    .trim())
              );
            };
      
            const clearAllData = ()=>{
             // setFormattedAddress("");
             // setRoute("");
             // setBuildingInfo("");
            }
  
            const onMapClick = (e: any) => {
              clearAllData();
              const lat = e.latLng.lat();
              const lng = e.latLng.lng();
              buildMarker(lat, lng, false);
      
              if (e.placeId) {
                const service = new google.maps.places.PlacesService(map);
                service.getDetails(
                  { placeId: e.placeId },
                  (place: any, status: any) => {
                    if (status === "OK") {
                      setPlaceToForm(place);
                    }
                  }
                );
              } else {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode(
                  { address: `${lat},${lng}` },
                  (res: any, status: any) => {
                    if (status === "OK") {
                      setPlaceToForm(res[0]);
                    }
                  }
                );
              }
            };
      
            const onPlaceChanged = () => {
              const place = autocomplete.getPlace();
              clearAllData();
              if (place.geometry && place.geometry.location) {
                const location = {
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                };
                buildMarker(location.lat, location.lng, true);
              }
      
              if (place) setPlaceToForm(place);
            };
      
            /**
             
            if (data && data.geolocation) {
              buildMarker(
                data.geolocation?.lat,
                data.geolocation?.lng,
                true
              );
            }
             */

          };
    
          initializeGoogleMap(loadMap);
    }, []);
  
    const handleSelected = async () => {
      // @ts-ignore
      const pos = mapMarker?.getPosition();
      
      if (pos && pos.lat instanceof Function && pos.lng instanceof Function) {
        if (true) {

          const place:any = await getPlace(pos.lat(), pos.lng())

          const data = { 
            geolocation: { lat: pos.lat(), lng: pos.lng() }, 
            direction:{
              city:(String(place.cityAlt)||String(place.city))?.toLowerCase()||null,
              country:{
                code:place.countryCode,
                name:place.country,
              },
              // zip:'',
              // province:'',
              // town:'',
              // district:'',
            }          
          }
          

          // console.log('place', place)
          // console.log(pos.lat(), pos.lng())

        }  
      }  
    };
    
    const [ value, setValue ] = React.useState('')

    return (
        <React.Fragment>
            <div
              id="search-container"
            >
                {/** 

                 <FloatingInput
                    name='harita'
                    type="text"
                    placeholder="Adres, Yer veya Koordinat Giriniz" 
                    size='medium'
                    value={value}
                    onChange={(e:any)=>setValue(e.value)}
                  />
                
                **/}
                <input
                    className={classNames(
                      'w-full rFS rounded-md h-[4em] p-3',
                      {'border':border}
                    )}
                    placeholder={'Adres, Yer veya Koordinat Giriniz'}
                  />
                  
               <div className='map w-full h-[20vh] my-2 rounded-lg' ref={mapRef} />

            </div>

        </React.Fragment>
    )
}


export const Location = ({
    addressType
}:any) => {


    return (
        <React.Fragment>


        </React.Fragment>
    )
}
