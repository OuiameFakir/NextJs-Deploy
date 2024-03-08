"use client";
import React from "react";
import {
  Subtitle,
  Title,
  TitlesHolder,
  TitlesHolderCentred,
} from "./Titles.style";

interface IPageHeaderProps {
  title: string;
  subtitle: string;
}

export const Titles: React.FC<IPageHeaderProps> = ({ title, subtitle }) => {
  return (
    <TitlesHolder>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitlesHolder>
  );
};

export const TiltlesCentred: React.FC<IPageHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <TitlesHolderCentred>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitlesHolderCentred>
  );
};
