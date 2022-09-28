import { initializeGoogleMap } from "./googleMapInitializer";

declare var google: any;

export interface RouteViewerResponse {
    distance?: {
        text: string,
        value: number,
    },
    duration?: {
        text: string,
        value: number,
    }
}
export function getDistanceAndDuration(
    origin: { lat: number, lng: number }, 
    destination: { lat: number, lng: number }): Promise<RouteViewerResponse> {
    return new Promise((resolve, reject) => {
        const initMap = ()=>{

            const directionsService = new google.maps.DirectionsService();
            const directionsRequest = {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
            };
            directionsService.route(directionsRequest, (response:any, status:any) => {
                if (status === google.maps.DirectionsStatus.OK) {

                    const res:{distance :{text:string,value:number};
                              duration:{text:string,value:number}} = {distance:{
                        text:"",
                        value:0
                    },duration:{
                        text:"",
                        value:0
                    }};
                    const distance = response?.routes[0]?.legs[0]?.distance;
                    const duration = response?.routes[0]?.legs[0]?.duration;
                    if(distance.text && duration.text){
                        res.distance = { text: distance.text.toUpperCase(), value: distance.value }
                        res.duration = { text: duration.text.toUpperCase(), value: duration.value} 
                    }
                    resolve(res);
                } else {
                    reject(status);
                }
            });
        }
        initializeGoogleMap(initMap);
    });
}

export function createRouteViewer(elementId: string, from: { lat: number, lng: number }, to: { lat: number, lng: number }) {

    return new Promise<RouteViewerResponse>((resolve, reject) => {
        const initMap = () => {
            const map = new google.maps.Map(
                document.getElementById(elementId) as HTMLElement,
                {
                    zoom: 1,
                    center: new google.maps.LatLng(from.lat, from.lng),
                    mapTypeId: "roadmap",
                }
            );

            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(map);

            directionsService.route({
                origin: `${from.lat},${from.lng}`,
                destination: `${to.lat},${to.lng}`,

                optimizeWaypoints: true,
                travelMode: "DRIVING",

            }, (response: any, status: any) => {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                    const res: RouteViewerResponse = {};

                    const distance = response?.routes[0]?.legs[0]?.distance as { text: string, value: number };
                    const duration = response?.routes[0]?.legs[0]?.duration as { text: string, value: number };

                    res.distance = distance ? { text: distance.text?.toUpperCase(), value: distance.value } : undefined;
                    res.duration = duration ? { text: duration.text?.toUpperCase(), value: duration.value } : undefined;

                    resolve(res);

                } else {
                    reject(status);
                }
            });


        };

        initializeGoogleMap(initMap);
    })
}

export function getPlace(lat:string,lng:string) {

    return new Promise((resolve, reject) => {
        const initMap = () => {
      
            let latlng = new google.maps.LatLng(lat,lng); 
            new google.maps.Geocoder().geocode({'latLng' : latlng}, function(results:any, status:any) {
               if (status == google.maps.GeocoderStatus.OK) {
                   if (results[1]) {
                       let country = null, countryCode = null, city = null, cityAlt = null;
                       let c, lc, component;
                       // console.log(results)
                       for (let r = 0, rl = results.length; r < rl; r += 1) {
                           let result = results[r];
       
                         // console.log('result', result)
                         // console.log('result.address_components',result.address_components)

                           if (!city && result.types[0] === 'locality') {
                               for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                                   component = result.address_components[c];
       
                                   if (component.types[0] === 'locality') {
                                       city = component.long_name;
                                       break;
                                   }
                               }
                           }
                           else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
                               for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                                   component = result.address_components[c];
                                    

                                   if (component.types[0] === 'administrative_area_level_1') {
                                       cityAlt = component.long_name;
                                       break;
                                   }
                               }

                           } else if (!country && result.types[0] === 'country') {
                               country = result.address_components[0].long_name;
                               countryCode = result.address_components[0].short_name;
                           }
       
                           if (city && country) {
                               break;
                           }
                       }
       
                       const output = {
                           city, 
                           cityAlt, 
                           country, 
                           countryCode, 
                       }
                        resolve(output);

                   }
               }
           });

        };

        initializeGoogleMap(initMap);
    })
}
