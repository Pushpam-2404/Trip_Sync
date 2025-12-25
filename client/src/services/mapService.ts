/// <reference types="vite/client" />
/// <reference types="google.maps" />

// NOTE: The Google Maps script must be loaded (e.g., via useJsApiLoader in a component) 
// before these functions are called, as they rely on the global `google` namespace.

export const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    if (typeof google === 'undefined') {
        console.error("Google Maps API not loaded");
        return 0;
    }
    const p1 = new google.maps.LatLng(lat1, lng1);
    const p2 = new google.maps.LatLng(lat2, lng2);
    return google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
};

export const getPlacePredictions = async (query: string): Promise<any[]> => {
    return searchPlaces(query);
};

export const searchPlaces = async (query: string, location?: { lat: number, lng: number }): Promise<any[]> => {
    if (typeof google === 'undefined') return [];

    return new Promise((resolve) => {
        const service = new google.maps.places.AutocompleteService();
        const request: google.maps.places.AutocompletionRequest = {
            input: query,
        };

        if (location) {
            const center = new google.maps.LatLng(location.lat, location.lng);
            const radius = 50000; // 50km
            // Define a bias circle
            request.locationBias = { radius, center };
        }

        service.getPlacePredictions(request, (predictions, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK || !predictions) {
                // console.error("Place search failed:", status); // Quiet failure for autocomplete
                resolve([]);
                return;
            }

            const results = predictions.map(p => ({
                id: p.place_id,
                place_id: p.place_id,
                name: p.description,
                vicinity: p.structured_formatting.secondary_text,
                main_text: p.structured_formatting.main_text,
                secondary_text: p.structured_formatting.secondary_text,
            }));
            resolve(results);
        });
    });
};

export const getPlaceDetails = async (placeId: string): Promise<any> => {
    if (typeof google === 'undefined') return null;

    // PlacesService requires a map or a generic HTML element (attributions need to be displayed)
    // We create a dummy element for the service.
    const dummyDiv = document.createElement('div');
    const service = new google.maps.places.PlacesService(dummyDiv);

    return new Promise((resolve, reject) => {
        service.getDetails({
            placeId: placeId,
            fields: ['name', 'geometry', 'formatted_address']
        }, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && place) {
                resolve(place);
            } else {
                resolve(null);
            }
        });
    });
};


export const getDirections = async (origin: string | { lat: number, lng: number }, destination: string | { lat: number, lng: number }): Promise<google.maps.DirectionsResult | null> => {
    if (typeof google === 'undefined') return null;

    const directionsService = new google.maps.DirectionsService();

    // Convert to LatLng or use string directly
    const originLoc = typeof origin === 'string' ? origin : new google.maps.LatLng(origin.lat, origin.lng);
    const destLoc = typeof destination === 'string' ? destination : new google.maps.LatLng(destination.lat, destination.lng);

    return new Promise((resolve) => {
        directionsService.route({
            origin: originLoc,
            destination: destLoc,
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
                resolve(result);
            } else {
                console.error("Directions request failed due to " + status);
                resolve(null);
            }
        });
    });
};

export const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
    if (typeof google === 'undefined') return "Unknown Location";

    const geocoder = new google.maps.Geocoder();
    const latlng = { lat, lng };

    return new Promise((resolve) => {
        geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK" && results && results[0]) {
                resolve(results[0].formatted_address);
            } else {
                console.error("Geocoder failed due to: " + status);
                resolve("Unknown Location");
            }
        });
    });
};
