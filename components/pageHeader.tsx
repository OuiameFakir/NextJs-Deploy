"use client";
import React from "react";
import { StaticImageData } from "next/image";
import { Box } from "@mui/material";
import Banner from "./Banner/Banner";
import { Titles } from "./Titles/Titles";
import { BoxHeadPage } from "./pageHeader.style";
interface IPageHeaderProps {
  title: string;
  subtitle: string;
  bannerImg: StaticImageData;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  subtitle,
  bannerImg,
}) => {
  return (
    <BoxHeadPage>
      <Titles title={title} subtitle={subtitle} />
      <Banner bannerImg={bannerImg} />
    </BoxHeadPage>
  );
};

export default PageHeader;
