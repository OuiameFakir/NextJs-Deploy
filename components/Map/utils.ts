import { Dispatch, SetStateAction } from "react";
import { IMarkerProps, IPlaceType } from "../Map/types";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { DebouncedFunc, throttle } from "lodash";

export const getDisplayedMarkers = ({
  cursorPosition,
  radiusCircle,
  markerData,
}: {
  cursorPosition: {
    lat: number;
    lng: number;
  };
  radiusCircle: number;
  markerData: any;
}) => {
  // try {
  //   const response = await fetch('api_endpoint');
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data from the API');
  //   }

  //   const apiData = await response.json();
  const filteredMarkers = markerData.filter((marker: IMarkerProps) => {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(
        marker.coordinate.latitude,
        marker.coordinate.longitude
      ),
      new google.maps.LatLng(cursorPosition.lat, cursorPosition.lng)
    );
    return distance <= radiusCircle;
  });

  return filteredMarkers;
  //   } catch (error: any) {
  //     console.error('Error fetching data from the API:', error.message);
  //     // Handle error or return a default value as needed
  //     return [];
  //   }
};

export const setupDragEndListener = ({
  map,
  setCursorPosition,
  setIsLocation,
  setSelectedMarker,
}: {
  map: google.maps.Map | undefined;
  setCursorPosition: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  setIsLocation: Dispatch<SetStateAction<boolean>>;
  setSelectedMarker: Dispatch<SetStateAction<IMarkerProps | null | undefined>>;
}) => {
  if (map) {
    google.maps.event.addListener(map, "dragend", function () {
      const newCenter = map.getCenter();
      if (newCenter) {
        setCursorPosition({
          lat: newCenter.lat(),
          lng: newCenter.lng(),
        });
      }
      setIsLocation(false);
      setSelectedMarker(null);
    });
    google.maps.event.addListener(map, "click", function () {
      setSelectedMarker(null);
    });
  }
};

export const setMapFocusOnUserLocation = ({
  map,
  setCursorPosition,
  setIsLocation,
}: {
  map: google.maps.Map | undefined;
  setCursorPosition: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  setIsLocation: Dispatch<SetStateAction<boolean>>;
}) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (map) {
          map.setZoom(18);
          map.setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setCursorPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        }
        setIsLocation(false);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        setIsLocation(false);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    setIsLocation(false);
  }
};

export const setMapFocusOnSelectedPlace = ({
  map,
  setCursorPosition,
  selectedPlace,
  setSelectedPlace,
}: {
  map: google.maps.Map | undefined;
  setCursorPosition: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  selectedPlace: IPlaceType | null;
  setSelectedPlace: Dispatch<SetStateAction<null>>;
}) => {
  if (selectedPlace != null) {
    geocodeByAddress(selectedPlace.description)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        if (map) {
          map.setZoom(18);
          map.setCenter({
            lat: lat,
            lng: lng,
          });
          setCursorPosition({
            lat: lat,
            lng: lng,
          });
        }
        setSelectedPlace(null);
      })
      .catch((error: any) => {
        console.error("Error geocoding:", error);
      });
  }
};

export const handleMarkerClickFunction = ({
  marker,
  selectedMarker,
  setSelectedMarker,
}: {
  marker: IMarkerProps;
  selectedMarker: IMarkerProps | null | undefined;
  setSelectedMarker: Dispatch<SetStateAction<IMarkerProps | null | undefined>>;
}) => {
  // If the clicked marker is already selected, deselect it
  if (selectedMarker === marker) {
    setSelectedMarker(null);
  } else {
    // If a different marker is clicked, select it
    setSelectedMarker(marker);
  }
};

export const handleInfoWindowCloseFunction = ({
  setSelectedMarker,
}: {
  setSelectedMarker: Dispatch<SetStateAction<IMarkerProps | null | undefined>>;
}) => {
  setSelectedMarker(null);
};

//  AutoComplete
export const handleAutocomplete = ({
  inputValue,
  value,
  fetch,
  setOptions,
  autocompleteService,
}: {
  inputValue: string;
  value: IPlaceType | null;
  fetch: DebouncedFunc<
    (request: any, callback: (results?: readonly IPlaceType[]) => void) => void
  >;
  setOptions: (value: React.SetStateAction<readonly IPlaceType[]>) => void;
  autocompleteService: any;
}) => {
  let active = true;

  if (!autocompleteService.current && window.google) {
    autocompleteService.current =
      new window.google.maps.places.AutocompleteService();
  }

  if (!autocompleteService.current) {
    return undefined;
  }

  if (inputValue === "") {
    setOptions(value ? [value] : []);
    return undefined;
  }

  fetch({ input: inputValue }, (results: any) => {
    if (active) {
      let newOptions = value ? [value] : [];

      if (results) {
        newOptions = [...newOptions, ...results];
      }

      setOptions(newOptions);
    }
  });

  return () => {
    active = false;
  };
};

export const fetchPlacesFunction = ({
  autocompleteService,
}: {
  autocompleteService: any;
}) =>
  throttle((request, callback) => {
    request.componentRestrictions = { country: "ma" };
    autocompleteService.current.getPlacePredictions(request, callback);
  }, 200);
