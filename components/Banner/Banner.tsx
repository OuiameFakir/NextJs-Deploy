"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { BannerContainer } from "./Banner.style";

interface IPageHeaderProps {
  bannerImg: StaticImageData;
}

const Banner: React.FC<IPageHeaderProps> = ({ bannerImg }) => {
  return (
    <BannerContainer>
      <Image src={bannerImg} alt="ad banner" priority={false} />
    </BannerContainer>
  );
};

export default Banner;
