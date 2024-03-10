import React from "react";

import img from "../../../../../../_assets/images/image 3.png";

import { useTranslation } from "@/app/i18n";

import Back from "../../../../../../components/Back/Back";
import Switcher from "@/app/[lng]/components/Swithcher/Switcher";
import { offerMobileData } from "../../../../../../_assets/Data/DataCatalog";
import PageContainer from "../../../../../../components/PageContainer";
import PageHeader from "../../../../../../components/pageHeader";
import BodyContainer from "../../../../../../components/BodyContainer";
import PackageCard from "../../../../../../components/PackageCard";
import Link from "next/link";

async function Mobile({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "mobile");
  return (
    <PageContainer>
      <span>
        <Switcher path="/mobile" />
      </span>
      <Back lng={lng} />

      <PageHeader
        title={t("HeaderTitle")}
        subtitle={t("HeaderSubtitle")}
        bannerImg={img}
      />

      <BodyContainer>
        {offerMobileData.map(
          (item, index) => (
            // index != 0 && (
            <PackageCard offerMobileDataItem={item} key={item.id} lng={lng} />
          )
          // )
        )}
      </BodyContainer>
      <Link href="/prod/boutique/mobile/elig">Eligibility</Link>
    </PageContainer>
  );
}

export default Mobile;
