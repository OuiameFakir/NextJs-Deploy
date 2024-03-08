import { Dispatch, SetStateAction } from "react";

export interface IMainTextMatchedSubstrings {
    offset: number;
    length: number;
  }
  export interface IStructuredFormatting {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings?: readonly IMainTextMatchedSubstrings[];
  }
  export interface IPlaceType {
    description: string;
    structured_formatting: IStructuredFormatting;
    place_id: string;
  }
  export interface IMapProps {
    isLocation: boolean;
    setIsLocation: Dispatch<SetStateAction<boolean>>;
    selectedPlace: IPlaceType | null;
    setSelectedPlace: Dispatch<SetStateAction<null>>;
    isLoaded: boolean;
  }
  export interface IMarkerProps {
    id: number;
    street: string;
    building: string;
    cityId: number;
    cityName: string;
    plaqueId: string;
    plaqueName: string;
    providerId: number;
    providerName: string;
    coordinate: {
      latitude: number ;
      longitude: number  ;
    }
    
  }
  