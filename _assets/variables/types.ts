import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { LatLng } from "react-google-places-autocomplete/build/types";

export interface IPackageCardHeaderProps {
  headerTitle: string;
  headerSub: string;
  price: number | undefined;
}

export interface ICardOptions {
  title: string;
  description?: string;
  value: string;
  icon: string;
  price: number;
  showPrice: boolean;
  enabled: boolean;
}
export interface ICardAttributes {
  title: string;
  description: string;
  value: string;
  icon: string;
  position: number;
  principal: boolean;
}

export interface IOfferMobileData {
  id: number;
  productName: string;
  subTitle: string;
  subMention?: string;
  familyName: string;
  familyCode?: string;
  fees?: {
    commissioningFees: number;
    provisionFees: number;
    installationFees: number;
    title: string;
    description: string;
    value: string;
    icon: string;
    position: number;
    principal: boolean;
  };
  price?: number;
  options?: ICardOptions[];
  attributes?: ICardAttributes[];
}
