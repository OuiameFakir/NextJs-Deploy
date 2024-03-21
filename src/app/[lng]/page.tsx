"use client";
import React from "react";
import ftthImg from "../../../_assets/svgs/FTTH.svg";
import { useTranslation } from "@/app/i18n/client";
import Back from "../../../components/Back/Back";
import Switcher from "@/app/[lng]/components/Swithcher/Switcher";
// import { offerMobileData } from "../../../_assets/Data/DataCatalog";
import { Data } from "../../../_assets/Data/DataCatalog";
import PageHeader from "../../../components/pageHeader";
import BodyContainer from "../../../components/BodyContainer";
import PackageCard from "../../../components/PackageCard";
import { BoxLng, PageContainer } from "../../../components/PageContainer.style";

import Inwi from "../../../_assets/svgs/inwi.svg";
import IconHolder from "../../../components/Icons/icon";

function Ftth({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng, "ftth");
  const offerMobileData = Data({ params: { lng } });
  return (
    <>
      <BoxLng>
        <IconHolder width={93} height={22} icon={Inwi} />
        <span>
          <Switcher path="/" />
        </span>
      </BoxLng>
      <PageContainer>
        {/* <Back lng={lng} /> */}
        <PageHeader
          title={t("Header.Title")}
          subtitle={t("Header.Subtitle")}
          bannerImg={ftthImg}
        />
        <BodyContainer>
          {/* {offerMobileData.map((item) => (
            <PackageCard offerMobileDataItem={item} key={item.id} lng={lng} />
          ))} */}
          {offerMobileData.map((item) => (
            <PackageCard offerMobileDataItem={item} key={item.id} lng={lng} />
          ))}
        </BodyContainer>
      </PageContainer>
    </>
  );
}

export default Ftth;
