import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';


const MyGoogleMap = ({ business }) => {


    //This sets the center of the map. This must be set BEFORE the map loads

    const [currentPosition, setCurrentPosition] = useState()
    Geocode.setApiKey(process.env.REACT_APP_MAPS_KEY);
    // set response language. Defaults to english.
    Geocode.setLanguage('en');

    Geocode.setLocationType('ROOFTOP');

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();
    useEffect(() => {
        // Get latitude & longitude from address
        const makeMap = () => {
            Geocode.fromAddress(`${business.address}, ${business.city}`).then(
                (response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    setCurrentPosition({ lat, lng });
                },
                (error) => {
                    console.error(error);
                }
            );
        };

        makeMap();
    }, []);

    // This is the equivalent to a script tag

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
    })

    const containerStyle = {
        marginLeft: '10px',
        marginTop: '25px',
        width: '390px',
        height: '200px',
    };

    const [map, setMap] = useState(null)

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])


    return (
        // Important! Always set the container height explicitly

        <div className="map_page__container">

            <div style={{ height: '400px', width: '400px' }}>
                {isLoaded && <GoogleMap
                    mapContainerStyle={containerStyle}
                    zoom={8}
                    center={currentPosition}
                    onUnmount={onUnmount}
                >
                    <Marker key={business.id}
                        position={{ lat: currentPosition?.lat, lng: currentPosition?.lng }}
                        title={business.name}
                        icon={<i style={{ color: 'pink', fontSize: '15px' }} class="fa-solid fa-location-dot" />}
                        streetView={false} />
                </GoogleMap>}
            </div>

        </div>
    );

}

export default MyGoogleMap
