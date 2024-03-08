"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@mui/material";
import { BoxReturn, LinkReturn } from "./Back.style";
import ImgCaretLeft from "../../_assets/images/CaretLeft.png";

import { useTranslation } from "@/app/i18n/client";

const Back = ({ lng }: { lng: string; path?: string }) => {
  const { t } = useTranslation(lng, "common");
  return (
    <BoxReturn>
      <Image src={ImgCaretLeft} alt="CaretLeft" />
      <Link href="./">
        <LinkReturn>{t("ButtonTitle")}</LinkReturn>
      </Link>
    </BoxReturn>
  );
};

export default Back;
