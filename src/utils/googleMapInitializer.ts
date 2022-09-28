
export function initializeGoogleMap(callback: () => void) {
    if (!document.getElementById('google-maps-api-script')) {
        const script = document.createElement('script');
        script.id = "google-maps-api-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}&libraries=places&language=tr&callback=initMap`;
        script.async = true;

        (window as any).initMap = function () {
            callback();
        };
        document.head.appendChild(script);
    }
    else {
        callback();
    }
}