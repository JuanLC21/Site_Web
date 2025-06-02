import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import './map.css'

const centerMarker = { lat: 6.167243001086757, lng: -75.58878514013476 }

export function Map () {
    const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey: import.meta.env.VITE_API_KEY })

    if (!isLoaded) return <p>Map loading...</p>
    if (loadError) return <p>Map load failed</p>

    return (
        <GoogleMap mapContainerClassName='map' center={centerMarker} zoom={17}>
            <MarkerF position={centerMarker}/>
        </GoogleMap>
    )
}
