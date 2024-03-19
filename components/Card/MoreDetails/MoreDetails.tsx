"use client";
import React from "react";
import { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import imgCaret from "../../../_assets/images/CaretDown.png";
import Image from "next/image";
import {
  AccordionStyled,
  MoreDetailsContainer,
  MoreDetailsTypo,
  DetailsOptions,
  DetailsFees,
  FeesTitles,
  Title1,
  Sub1,
  DetailsDisc,
  AccordDetails,
  CardSecondaryAttributes,
} from "./MoreDetails.style";
import { DetailWithSupportingText } from "../../Detail/Detail";
import { IOfferMobileData } from "../../../_assets/variables/types";
import { useTranslation } from "@/app/i18n/client";

interface MoreDetailsProps {
  offerMobileDataItem: IOfferMobileData;
  lng: string;
}
export const MoreDetails: React.FC<MoreDetailsProps> = ({
  offerMobileDataItem,
  lng,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const { t } = useTranslation(lng, "common");
  return (
    <MoreDetailsContainer>
      <AccordionStyled
        expanded={isExpanded === false}
        onChange={() => setIsExpanded(!isExpanded)}
      >
        <AccordionSummary
          expandIcon={<Image src={imgCaret} alt="imgCaret" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <MoreDetailsTypo>
            {isExpanded === true ? t("MoreDetails") : t("LessDetails")}
          </MoreDetailsTypo>
        </AccordionSummary>
        <AccordDetails>
          {/* SECONDARY ATTRIBUTES !! */}
          <CardSecondaryAttributes>
            {offerMobileDataItem.attributes?.map(
              (attr, index) =>
                attr.principal == false && (
                  <DetailWithSupportingText
                    title={attr.title}
                    titleLeft={attr.value}
                    icon={attr.icon}
                    key={index}
                  />
                )
            )}
          </CardSecondaryAttributes>
          {/* OPTIONS !! */}
          {offerMobileDataItem.options?.map(
            (option, index) =>
              option.enabled == true && (
                <DetailsOptions key={index}>
                  <Title1>Options</Title1>
                  <DetailWithSupportingText
                    title={option.title}
                    titleLeft={option.value}
                    icon={option.icon}
                    key={index}
                  />
                </DetailsOptions>
              )
          )}
          {/* FEES !! */}
          {offerMobileDataItem.fees?.principal == true && (
            <DetailsFees>
              <FeesTitles>
                <Title1>Frais</Title1>
                <Sub1>à partir de</Sub1>
              </FeesTitles>
              <DetailWithSupportingText
                title="Mise en service"
                titleLeft={`${offerMobileDataItem.fees.commissioningFees} dh TTC`}
                icon={offerMobileDataItem.fees.icon}
              />
              <DetailWithSupportingText
                title="Mise à disposition"
                titleLeft={`${offerMobileDataItem.fees.provisionFees} dh TTC`}
                icon={offerMobileDataItem.fees.icon}
              />
              <DetailWithSupportingText
                title="Installation"
                titleLeft={`${offerMobileDataItem.fees.installationFees} dh TTC`}
                icon={offerMobileDataItem.fees.icon}
              />
            </DetailsFees>
          )}
          <DetailsDisc> {t("DetailsDes")}</DetailsDisc>
        </AccordDetails>
      </AccordionStyled>
    </MoreDetailsContainer>
  );
};
