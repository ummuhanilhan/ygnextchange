import React, { useEffect, useRef } from "react";
import { initializeGoogleMap } from "@utils/googleMapInitializer";
import { getPlace } from "@utils/googleViewer";
import classNames from "classnames";
import { useAppDispatch } from "stores/store";
import { slugify } from "@utils/helper";
declare var google:any;
export const MapView = ({
    setValue,
    border, 
    id
 }:any) => {
     const mapRef = React.useRef(null);
     const [mapMarker, setMapMarker] = React.useState();
     const dispatch = useAppDispatch();
 
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
               zoom: 5,
               center: new google.maps.LatLng(39.0,36.0),
               mapTypeId: google.maps.MapTypeId.ROADMAP,
               clickableIcons: true,
               fullscreenControl: true,
               mapTypeControl: false,
               streetViewControl: false,
               gestureHandling: "greedy",
             });
       
             google.maps.event.addListener(map, "click", (e: any) => onMapClick(e));
 
             const name = `#search-container-${id} input`;
             const searchInput = document.querySelector(
               name
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
                 map.setZoom(7);//16
                 zoomOk = true;
               }
 
               // obj.geolocation = {lat,lng};
               
               setMapMarker(marker);
             };
       
             
 
             const setPlaceToForm = (place: any) => {
               // setFormattedAddress(place.formatted_address);
               const addresses = (place.address_components as any[]) || [];
                console.log('addresses--->',addresses)
                console.log('place', place);
               let obj:any = {direction:{country:{}},
               place:{}};
         
               for (let i = 0; i < addresses.length; i++) {
                 const item = addresses[i];
 
 
                 if(item.types.includes('country')){
                   obj.direction.country.name = item.long_name;
                   obj.direction.country.code = item.short_name;
                 }
                 if(item.types.includes('administrative_area_level_1')){
                   obj.direction.city = item.long_name;
                 }
                 !obj.direction.district && setValue('direction.district', '');
                 if(item.types.includes('administrative_area_level_2')){
                   obj.direction.district = item.long_name;
                   setValue('direction.district', item.long_name);
                 }
                 if(item.types.includes('administrative_area_level_4')){
                   obj.direction.province = item.long_name;
                 }
                 if(item.types.includes('postal_code')){
                   obj.direction.zip = item.long_name;
                 }
                 if(item.types.includes('route')){
                   obj.place.address = item.long_name;
                   obj.place.address_short = item.short_name;
                 }
 
 
                 const addressType = item.types[0];
                 const value = item.long_name;
                 console.log(obj.direction.city)
                 obj.direction.city && setValue('direction.city', obj.direction.city)

                 setValue('place.address', place.formatted_address)

                 
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

               setValue('geolocation', {lat,lng});

       
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
     
     return (
         <React.Fragment>
             <div
               id={`search-container-${id}`}
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
                       'w-full rFS rounded-md h-[2.7em] p-3',
                       {'border':border}
                     )}
                     placeholder={'Adres, Yer veya Koordinat Giriniz'}
                   />
                   
                <div className='map w-full h-[32.5vh] my-2 rounded-lg' ref={mapRef} />
 
             </div>
 
         </React.Fragment>
     )
 }
 