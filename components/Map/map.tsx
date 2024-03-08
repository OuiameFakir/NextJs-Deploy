"use client";
import {
  CircleF,
  GoogleMap,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";

import { useMemo, useState } from "react";
import markerData from "../../_assets/Data/MapData";
import PinAddress from "../Address/Address";
import "./map.css";
import { IMarkerProps, IMapProps } from "../Map/types";
import iconOnClick from "../../_assets/images/PinOnClick.png";
import icon from "../../_assets/images/Pin.png";
import {
  getDisplayedMarkers,
  handleInfoWindowCloseFunction,
  handleMarkerClickFunction,
  setMapFocusOnSelectedPlace,
  setMapFocusOnUserLocation,
  setupDragEndListener,
} from "./utils";
import theme from "../../utils/theme";
import Loader from "../../_assets/svgs/Loader.svg";
import Disclaimer from "./disclaimer";
import IconHolder from "../Icons/icon";
const Map: React.FC<IMapProps> = ({
  isLocation,
  setIsLocation,
  selectedPlace,
  setSelectedPlace,
  isLoaded,
}) => {
  const [map, setMap] = useState<google.maps.Map>();
  const [cursorPosition, setCursorPosition] = useState({
    lat: 33.5731,
    lng: -7.5898,
  });

  //  Store the Selected Marker
  const [selectedMarker, setSelectedMarker] = useState<IMarkerProps | null>();
  //  Marker Hovered
  const [isMarkerHovered, setIsMarkerHovered] = useState<IMarkerProps | null>();

  // Raduis of the circle
  const radiusCircle = 120;
  // const ConditionToVerify = true;
  const [conditionToVerify, setConditionToVerify] = useState(false);

  // Map Options
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
      scaleControl: true,
      zoomControl: true,
      fullscreenControl: true,
      draggable: true,
      draggableCursor: "default",
      controlSize: 30,
      mapTypeId: "hybrid",
    }),
    []
  );

  // Loading the map
  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  // Set the map Focus on User Location
  if (isLocation) {
    setMapFocusOnUserLocation({
      map,
      setCursorPosition,
      setIsLocation,
    });
    setTimeout(() => {
      setConditionToVerify(true);
    });
    setTimeout(() => {
      setConditionToVerify(false);
    }, 1000);
  }

  //  Set the map Focus on the Selected Place
  if (selectedPlace != null) {
    setMapFocusOnSelectedPlace({
      map,
      setCursorPosition,
      selectedPlace,
      setSelectedPlace,
    });
    setTimeout(() => {
      setConditionToVerify(true);
    });
    setTimeout(() => {
      setConditionToVerify(false);
    }, 1000);
  }
  // Handle Marker on click
  const handleMarkerClick = (marker: IMarkerProps) => {
    handleMarkerClickFunction({ marker, selectedMarker, setSelectedMarker });
  };
  // Handle the Info Window close
  const handleInfoWindowClose = () => {
    handleInfoWindowCloseFunction({ setSelectedMarker });
  };
  const handleMarkerMouseOver = (marker: IMarkerProps) => {
    setIsMarkerHovered(marker);
  };

  const handleMarkerMouseOut = () => {
    setIsMarkerHovered(null);
  };

  return (
    <GoogleMap
      options={mapOptions}
      zoom={18}
      center={cursorPosition}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{
        height: "100%",
        position: "relative",
      }}
      onLoad={(map) => {
        setMap(map);
        setupDragEndListener({
          map,
          setCursorPosition,
          setIsLocation,
          setSelectedMarker,
        });
      }}
    >
      {/* <div style={{ position: "absolute", background: "red", height: "10rem" }}>
        hi
      </div> */}
      {conditionToVerify && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            background: `${theme.palette.customColors.purple[600]}`,
            color: "white",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "18.06rem",
            height: "2.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "6.25rem",
            border: "0.063rem",
            gap: "0.5rem",
            fontFamily: "Omnes",
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "1.5rem",
            textAlign: "center",
          }}
        >
          <IconHolder height={20} width={20} icon={Loader.src}></IconHolder>
          {/* <img
            src={Loader.src}
            alt="LoaderIcon"
            style={{ width: "1.25rem", height: "1.25rem" }}
          /> */}
          Récupération de votre position ...
        </div>
      )}
      {getDisplayedMarkers({ cursorPosition, radiusCircle, markerData }).map(
        (marker: IMarkerProps) => (
          <MarkerF
            key={marker.id}
            position={{
              lat: marker.coordinate.latitude,
              lng: marker.coordinate.longitude,
            }}
            options={{
              icon: {
                url:
                  marker.id === isMarkerHovered?.id ||
                  marker.id === selectedMarker?.id
                    ? iconOnClick.src
                    : icon.src,
                scaledSize:
                  marker.id === isMarkerHovered?.id ||
                  marker.id === selectedMarker?.id
                    ? new window.google.maps.Size(34, 50)
                    : new window.google.maps.Size(24, 40),
              },
            }}
            onClick={() => {
              handleMarkerClick(marker);
            }}
            onMouseOver={() => handleMarkerMouseOver(marker)}
            onMouseOut={handleMarkerMouseOut}
          />
        )
      )}

      {selectedMarker && (
        <InfoWindowF
          position={{
            lat: selectedMarker.coordinate.latitude,
            lng: selectedMarker.coordinate.longitude,
          }}
          onCloseClick={handleInfoWindowClose}
          options={{ pixelOffset: new window.google.maps.Size(130, 10) }}
        >
          <div>
            <PinAddress
              addressTitle={`${selectedMarker.cityName}, ${selectedMarker.street}, ${selectedMarker.building} `}
            />
          </div>
        </InfoWindowF>
      )}

      <CircleF
        options={{
          strokeColor: "#000000",
          strokeOpacity: 0.8,
          strokeWeight: 1,
          fillColor: "#000000",
          fillOpacity: 0.55,
        }}
        center={{
          lat: -1 * cursorPosition.lat,
          lng:
            -Math.sign(cursorPosition.lng) *
            Math.abs((Math.abs(cursorPosition.lng) - 180) % 180),
        }}
        radius={20037508.34 - (radiusCircle + 10)}
        onClick={() => setSelectedMarker(null)}
      />
      <Disclaimer />
    </GoogleMap>
  );
};

export default Map;
