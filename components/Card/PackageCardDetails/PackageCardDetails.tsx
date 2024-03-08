"use client";
import React from "react";
import { DetailWithSupportingText } from "../../Detail/Detail";
import {
  PackageCardDetailsContainer,
  StyledDivider,
} from "./PackageCardDetails.style";
import { IOfferMobileData } from "../../../_assets/variables/types";
interface PackageCardDetailsProps {
  offerMobileDataItem: IOfferMobileData;
}

const PackageCardDetails: React.FC<PackageCardDetailsProps> = ({
  offerMobileDataItem,
}) => {
  return (
    <PackageCardDetailsContainer>
      {offerMobileDataItem.attributes?.map(
        (attr, index) =>
          attr.principal == true && (
            <React.Fragment key={index}>
              <DetailWithSupportingText
                icon={attr.icon}
                title={attr.title}
                titleLeft={attr.value}
                supportingText={attr.description}
              />
              <StyledDivider />
            </React.Fragment>
          )
      )}
    </PackageCardDetailsContainer>
  );
};
export default PackageCardDetails;
