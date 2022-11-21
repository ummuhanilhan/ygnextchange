
export function initializeGoogleMap(callback: () => void) {
    if (!document.getElementById('google-maps-api-script')) {
        const script:any = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}&libraries=places&language=tr&callback=initMap`;
        script.id = "google-maps-api-script";
        script.setAttribute = "defer";
        script.async = true;

        (window as any).initMap = function () {
            callback();
        };
        document.body.appendChild(script);
    }
    else {
        setTimeout(() => {
            callback();
        }, 1000);
    }
}