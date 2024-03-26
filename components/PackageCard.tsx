"use client";
import { MoreDetails } from "./Card/MoreDetails/MoreDetails";
import { PackageCardContainer } from "./PackageCard.style";
import PackageCardFooter from "./Card/Footer/PackageCardFooter";
import PackageCardHeader from "./Card/Header/PackageCardHeader";
import PackageCardDetails from "./Card/PackageCardDetails/PackageCardDetails";
import { IOfferMobileData } from "../_assets/variables/types";
interface PackageCardProps {
  offerMobileDataItem: IOfferMobileData;
  lng: string;
}
const PackageCard: React.FC<PackageCardProps> = ({
  offerMobileDataItem,
  lng,
}) => {
  return (
    <PackageCardContainer key={offerMobileDataItem.id}>
      <PackageCardHeader
        headerTitle={offerMobileDataItem.productName}
        headerSub={offerMobileDataItem.subTitle}
        price={offerMobileDataItem.price}
      />
      <PackageCardDetails offerMobileDataItem={offerMobileDataItem} />
      <MoreDetails offerMobileDataItem={offerMobileDataItem} lng={lng} />
      <PackageCardFooter lng={lng} />
    </PackageCardContainer>
  );
};

export default PackageCard;
